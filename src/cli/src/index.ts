#!/usr/bin/env node

/**
 * msevents CLI — Lightweight session catalog tool for Microsoft events.
 *
 * Usage:
 *   msevents search <query>       Search sessions by keyword
 *   msevents tech <technology>    Find sessions by technology/framework
 *   msevents get <sessionId>      Get full details for a session
 *   msevents speakers <name>      Search speakers by name
 *   msevents list [--type BRK]    List all sessions, optionally filtered by type
 *   msevents refresh              Force-refresh the local cache
 *
 * The CLI fetches the session catalog JSON from the Build website,
 * caches it locally, and provides fast offline search.
 */

import { resolve, join } from "node:path";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { get as httpsGet } from "node:https";
import { get as httpGet } from "node:http";

// ── Types ──

interface Session {
  sessionId: string;
  title: string;
  description: string;
  speakers: string[];
  track: string;
  level: string;
  type: string; // BRK, DEM, LAB
  technologies: string[];
  time?: string;
  url?: string;
}

interface CatalogData {
  sessions: Session[];
  fetchedAt: string;
}

// ── Configuration ──

const CATALOG_URL =
  process.env.MSEVENTS_CATALOG_URL ??
  "https://build.microsoft.com/api/sessions";

const CACHE_DIR = join(homedir(), ".msevents");
const CACHE_FILE = join(CACHE_DIR, "catalog.json");
const CACHE_MAX_AGE_MS = 4 * 60 * 60 * 1000; // 4 hours

// ── Cache ──

function ensureCacheDir(): void {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function isCacheFresh(): boolean {
  if (!existsSync(CACHE_FILE)) return false;
  const stat = statSync(CACHE_FILE);
  return Date.now() - stat.mtimeMs < CACHE_MAX_AGE_MS;
}

function readCache(): CatalogData | null {
  if (!existsSync(CACHE_FILE)) return null;
  try {
    const raw = readFileSync(CACHE_FILE, "utf-8");
    return JSON.parse(raw) as CatalogData;
  } catch {
    return null;
  }
}

function writeCache(data: CatalogData): void {
  ensureCacheDir();
  writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// ── HTTP Fetch ──

function fetchJSON(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const getter = url.startsWith("https") ? httpsGet : httpGet;
    getter(url, (res) => {
      // Follow redirects
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchJSON(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
        return;
      }
      let body = "";
      res.on("data", (chunk: string) => (body += chunk));
      res.on("end", () => resolve(body));
      res.on("error", reject);
    }).on("error", reject);
  });
}

// ── Data Loading ──

function normalizeSessions(raw: unknown): Session[] {
  // Handle various JSON shapes the Build API might return
  const arr = Array.isArray(raw) ? raw : (raw as Record<string, unknown>)?.sessions;
  if (!Array.isArray(arr)) return [];

  return arr.map((s: Record<string, unknown>) => ({
    sessionId: String(s.sessionId ?? s.sessionCode ?? s.id ?? ""),
    title: String(s.title ?? s.name ?? ""),
    description: String(s.description ?? s.abstract ?? s.summary ?? ""),
    speakers: Array.isArray(s.speakers)
      ? s.speakers.map((sp: unknown) =>
          typeof sp === "string" ? sp : String((sp as Record<string, unknown>)?.name ?? sp))
      : [],
    track: String(s.track ?? s.category ?? s.topic ?? ""),
    level: String(s.level ?? s.skillLevel ?? ""),
    type: String(s.type ?? s.sessionType ?? inferType(String(s.sessionId ?? s.sessionCode ?? ""))),
    technologies: Array.isArray(s.technologies)
      ? s.technologies.map(String)
      : extractTechnologies(String(s.description ?? "")),
    time: s.time ? String(s.time) : s.startTime ? String(s.startTime) : undefined,
    url: s.url ? String(s.url) : undefined,
  }));
}

function inferType(id: string): string {
  if (id.startsWith("BRK")) return "Breakout";
  if (id.startsWith("DEM")) return "Demo";
  if (id.startsWith("LAB")) return "Lab";
  return "Session";
}

const KNOWN_TECH = [
  "azure", "kubernetes", "aks", "docker", "container", "cosmos", "sql",
  "postgres", "openai", "gpt", "copilot", "github", ".net", "aspire",
  "python", "typescript", "javascript", "node", "react", "next.js",
  "java", "spring", "rust", "go", "terraform", "bicep", "fabric",
  "semantic kernel", "langchain", "foundry", "mcp", "agent", "wsl",
  "windows", "linux", "functions", "app service", "container apps",
  "redis", "event hubs", "service bus", "signalr", "onnx",
];

function extractTechnologies(text: string): string[] {
  const lower = text.toLowerCase();
  return KNOWN_TECH.filter((t) => lower.includes(t));
}

async function loadCatalog(forceRefresh = false): Promise<Session[]> {
  // 1. Try cache first
  if (!forceRefresh && isCacheFresh()) {
    const cached = readCache();
    if (cached && cached.sessions.length > 0) {
      return cached.sessions;
    }
  }

  // 2. Try local file (for dev/testing)
  const localFile = resolve(process.cwd(), "sessions.json");
  if (existsSync(localFile)) {
    try {
      const raw = JSON.parse(readFileSync(localFile, "utf-8"));
      const sessions = normalizeSessions(raw);
      if (sessions.length > 0) {
        writeCache({ sessions, fetchedAt: new Date().toISOString() });
        return sessions;
      }
    } catch {
      // fall through to HTTP
    }
  }

  // 3. Fetch from HTTP
  try {
    const body = await fetchJSON(CATALOG_URL);
    const raw = JSON.parse(body);
    const sessions = normalizeSessions(raw);
    if (sessions.length > 0) {
      writeCache({ sessions, fetchedAt: new Date().toISOString() });
    }
    return sessions;
  } catch (err) {
    // 4. Fall back to stale cache
    const stale = readCache();
    if (stale && stale.sessions.length > 0) {
      console.error("⚠ Using cached data (fetch failed):", (err as Error).message);
      return stale.sessions;
    }
    throw new Error(`Failed to load session catalog: ${(err as Error).message}`);
  }
}

// ── Search Functions ──

function searchSessions(sessions: Session[], query: string): Session[] {
  const terms = query.toLowerCase().split(/\s+/);
  return sessions
    .map((s) => {
      const text = `${s.sessionId} ${s.title} ${s.description} ${s.track} ${s.speakers.join(" ")} ${s.technologies.join(" ")}`.toLowerCase();
      const score = terms.reduce((acc, term) => acc + (text.includes(term) ? 1 : 0), 0);
      return { session: s, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.session);
}

function searchByTech(sessions: Session[], tech: string): Session[] {
  const lower = tech.toLowerCase();
  return sessions.filter((s) => {
    const text = `${s.title} ${s.description} ${s.technologies.join(" ")}`.toLowerCase();
    return text.includes(lower);
  });
}

function getSession(sessions: Session[], id: string): Session | undefined {
  const upper = id.toUpperCase();
  return sessions.find((s) => s.sessionId.toUpperCase() === upper);
}

function searchSpeakers(sessions: Session[], name: string): Session[] {
  const lower = name.toLowerCase();
  return sessions.filter((s) =>
    s.speakers.some((sp) => sp.toLowerCase().includes(lower))
  );
}

function filterByType(sessions: Session[], type: string): Session[] {
  const upper = type.toUpperCase();
  return sessions.filter((s) =>
    s.sessionId.toUpperCase().startsWith(upper) || s.type.toUpperCase().includes(upper)
  );
}

// ── Output Formatting ──

function formatSession(s: Session, verbose = false): string {
  const lines: string[] = [];
  lines.push(`**${s.sessionId}** — ${s.title}`);
  if (s.speakers.length > 0) lines.push(`  Speakers: ${s.speakers.join(", ")}`);
  if (s.track) lines.push(`  Track: ${s.track}`);
  if (s.type) lines.push(`  Type: ${s.type}`);
  if (s.time) lines.push(`  Time: ${s.time}`);
  if (verbose) {
    if (s.description) lines.push(`  ${s.description}`);
    if (s.technologies.length > 0) lines.push(`  Technologies: ${s.technologies.join(", ")}`);
    if (s.url) lines.push(`  URL: ${s.url}`);
  }
  return lines.join("\n");
}

function formatList(sessions: Session[], limit = 20): string {
  if (sessions.length === 0) return "No sessions found.";
  const shown = sessions.slice(0, limit);
  const result = shown.map((s) => formatSession(s)).join("\n\n");
  if (sessions.length > limit) {
    return `${result}\n\n... and ${sessions.length - limit} more. Use a more specific query to narrow results.`;
  }
  return result;
}

// ── CLI Entry Point ──

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0]?.toLowerCase();

  if (!command || command === "help" || command === "--help" || command === "-h") {
    console.log(`
msevents — Microsoft Event Session Catalog CLI

Usage:
  msevents search <query>        Search sessions by keyword
  msevents tech <technology>     Find sessions by technology/framework
  msevents get <sessionId>       Get full details for a session (e.g., BRK223)
  msevents speakers <name>       Search sessions by speaker name
  msevents list [--type BRK]     List sessions, optionally by type (BRK/DEM/LAB)
  msevents refresh               Force-refresh the local cache
  msevents help                  Show this help

Environment:
  MSEVENTS_CATALOG_URL    Override the session catalog URL

Cache: ${CACHE_FILE}
`);
    return;
  }

  const query = args.slice(1).join(" ");

  try {
    if (command === "refresh") {
      const sessions = await loadCatalog(true);
      console.log(`✓ Refreshed cache: ${sessions.length} sessions loaded.`);
      return;
    }

    const sessions = await loadCatalog();

    switch (command) {
      case "search": {
        if (!query) {
          console.error("Usage: msevents search <query>");
          process.exit(1);
        }
        const results = searchSessions(sessions, query);
        console.log(formatList(results));
        break;
      }
      case "tech": {
        if (!query) {
          console.error("Usage: msevents tech <technology>");
          process.exit(1);
        }
        const results = searchByTech(sessions, query);
        console.log(formatList(results));
        break;
      }
      case "get": {
        if (!query) {
          console.error("Usage: msevents get <sessionId>");
          process.exit(1);
        }
        const session = getSession(sessions, query);
        if (!session) {
          console.error(`Session "${query}" not found.`);
          process.exit(1);
        }
        console.log(formatSession(session, true));
        break;
      }
      case "speakers": {
        if (!query) {
          console.error("Usage: msevents speakers <name>");
          process.exit(1);
        }
        const results = searchSpeakers(sessions, query);
        console.log(formatList(results));
        break;
      }
      case "list": {
        const typeFlag = args.indexOf("--type");
        if (typeFlag !== -1 && args[typeFlag + 1]) {
          const filtered = filterByType(sessions, args[typeFlag + 1]);
          console.log(formatList(filtered, 50));
        } else {
          console.log(formatList(sessions, 50));
        }
        break;
      }
      default:
        console.error(`Unknown command: ${command}. Run "msevents help" for usage.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
    process.exit(1);
  }
}

main();
