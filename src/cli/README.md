# msevents CLI

Lightweight command-line tool for querying Microsoft event session catalogs (Build, Ignite, and more).

## Overview

`msevents` parses a session catalog JSON file, caches it locally, and provides fast keyword search, technology search, and session lookup. It's designed to be used by the `build-companion` skill in GitHub Copilot CLI.

## Usage

```bash
# Search sessions by keyword
npx @microsoft/msevents search "AI agents"

# Find sessions by technology
npx @microsoft/msevents tech "cosmos db"

# Get full details for a session
npx @microsoft/msevents get BRK223

# Search by speaker
npx @microsoft/msevents speakers "Pamela Fox"

# List all sessions (optionally filter by type)
npx @microsoft/msevents list --type LAB

# Force-refresh the local cache
npx @microsoft/msevents refresh
```

## How It Works

1. On first run, fetches the session catalog JSON from the Build website
2. Caches the data locally in `~/.msevents/catalog.json` (4-hour TTL)
3. Subsequent searches are instant (local JSON search)
4. If the network is unavailable, falls back to stale cache

## Data Source

The CLI reads the same session catalog JSON that the Build website publishes. No custom backend or API required.

You can override the catalog URL:

```bash
MSEVENTS_CATALOG_URL=https://example.com/sessions.json npx @microsoft/msevents search "kubernetes"
```

## Development

```bash
cd src/cli
npm install
npm run build
node dist/index.js search "AI agents"
```

## Architecture

This CLI is **event-agnostic** — it works with any Microsoft event catalog that follows the JSON schema. For Build 2026, the `build-companion` skill points it at the Build catalog. For Ignite, a separate `ignite-companion` skill would use the same CLI with a different catalog URL.

**Total footprint:** ~300 lines of TypeScript with zero external runtime dependencies.
