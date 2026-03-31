# Welcome Build 2026 Creators!

Thanks for creating content for Build! You can follow this guidance yourself if you want to do it manually. However, we **highly recommend** using GitHub Copilot to work on your behalf. It will both make this process easier for you and improve the outcome.

---

**Microsoft Build 2026 Repository Setup Guide**

**For Content Creators:** Your GitHub Copilot agent will guide you through preparing your Build 2026 repository in three phases. You don't need to do everything at once — each phase matches a natural milestone in your session prep. The agent works through each phase interactively, scanning your repo and making suggestions for you to confirm or adjust.

**For Copilot:** When a content creator asks you to help prepare their repository, read this entire file. Determine which phase they want to work on (or detect it based on what's already filled in), then guide them through that phase. **Be proactive** — scan the repo, propose answers based on what you find, and ask the creator to confirm rather than asking questions cold.

---

## 📋 Phase Overview

Your Copilot agent will guide you through **three phases** so you can make progress as your session comes together:

| Phase | When to Run | What You Need | Time |
|-------|-------------|---------------|------|
| **Get Started** | After you've added your session abstract or outline to the repo | Session code, title, abstract, or outline | ~15 min |
| **Refine Content** | Each time you have new or updated content | Lab instructions, demo code, outlines | ~20 min per pass |
| **Finalize** | When the repo is ready for publication | Everything reviewed and complete | ~15 min |

**You don't have to do all three phases in one sitting.** Add your materials, run **Get Started**, then come back for **Refine Content** when you have more — and run it again whenever your content evolves. When everything is ready, run **Finalize** once to clean up for publication.

### How to start

1. **[Fork this repo](../../fork)** to your personal GitHub account — you'll do all your work in the fork.
2. Open your fork in a **Codespace** (or clone it locally).
3. Open GitHub Copilot Chat and say:

- `read GUIDANCE.md and help me get started` — to set up session info
- `read GUIDANCE.md and help me refine my content` — to organize and improve your content (run as many times as you like)
- `read GUIDANCE.md and help me finalize` — to clean up for publication

---

## CRITICAL RULES FOR COPILOT

These rules apply to **all three phases**:

- **Ask one question at a time.** Present your findings for one step, then ask the creator to confirm or adjust — providing specific choices when possible (e.g., "Is this correct?" with Yes/No options, or a list of options to pick from). **Wait for their response before moving to the next step.** Do NOT present multiple steps at once or batch multiple questions at the end. This creates a focused, interactive dialog experience rather than a wall of text.
- **Always show reply options inline.** When asking a question, list the possible answers as bullet points so the creator knows exactly what to type. For example: *"Reply with one of these: **Yes**, **No**, or type your own answer."* This works well across VS Code, Codespaces, and other environments.
- **Be proactive.** Read the repo, scan existing files, check the repo name — use every signal available to propose answers rather than asking cold questions. Present your best guess and ask the creator to confirm or correct.
- **NEVER fabricate content.** Your proposals must be grounded in something you found (repo name, existing files, abstract text, session code). If you have nothing to go on, say so and ask.
- **NEVER commit changes without confirmation.** Always show the creator what you plan to do and get a "yes" before writing to files.
- **ALWAYS** highlight missing or unclear information. You can make suggestions, but only implement them after they approve.
- If something is missing, point it out and suggest: *"I don't see [X] in your content. Based on [Y], I'd suggest [Z] — does that work, or would you like something different?"*
- When organizing or restructuring existing content, **copy verbatim** — do not paraphrase, embellish, or fill in gaps.
- **Always spell out product names in full.** Do not use abbreviations like "VS Code" — write "Visual Studio Code." Do not abbreviate "Visual Studio" to "VS." If a creator's source material uses abbreviations, expand them when writing to the README.
- **Verify current product branding.** Product names change — always use the most up-to-date official name. For example, "Azure AI Foundry" was renamed to "Microsoft Foundry." If you encounter a product name in the creator's materials that may be outdated, flag it and suggest the current name.

---

## 🔄 Upstream Sync Rules

Creators work in **personal forks** of the upstream `microsoft/` repo. All commits should be pushed to the creator's fork (`origin`), then a **pull request** opened to the upstream repo for review.

**At the start of every phase**, the agent should:

1. **Check that the upstream remote is configured:**
   ```
   git remote -v
   ```
   If `upstream` is not listed, look at the fork's parent (check the repo description or `gh repo view --json parent`). Then add it:
   ```
   git remote add upstream https://github.com/microsoft/<repo-name>.git
   ```

2. **Check for open issues in the upstream repo:**
   ```
   gh issue list --repo microsoft/<repo-name> --state open
   ```
   If there are open issues, read each one and **propose changes to the creator based on the issue descriptions**. Present issues as actionable suggestions:

   *"I found [N] open issue(s) in the upstream repo that may need your attention:"*
   - *"Issue #X: [title] — [brief summary]. I can [proposed action]. Want me to do that?"*

   Address issues naturally within the current phase's workflow — don't treat them as a separate step.

3. **When committing and pushing**, push to `origin` (the creator's fork):
   ```
   git add <files>
   git commit -m "<short summary>

   <detailed description of changes>

   Fixes microsoft/<repo-name>#<issue-number>"
   git push origin HEAD
   ```
   **Commit message format matters.** The creator may open the PR manually (e.g., if the Codespace can't access the upstream private repo). GitHub pre-fills the PR title from the commit subject and the body from the rest. So:
   - **First line** (subject): Short summary, under 72 characters. No issue references here.
   - **Blank line**, then **body**: Detailed description of what changed and why.
   - **Last line of body**: `Fixes microsoft/<repo-name>#<issue-number>` — this must be in the body, not the subject, so GitHub links and closes the issue when the PR merges.

   If `gh pr create` works, use it. If not, tell the creator to open the PR manually from their fork — the commit message will pre-fill correctly.

   Present the PR link to the creator so they can review and merge it themselves.

---

# 🟢 Get Started

**When to run:** As soon as the creator opens the Codespace and asks for help. The agent will check whether they've added session materials yet and guide them if not.

**Interaction pattern:** Work through the steps below **one at a time**. For each step: scan the repo, present what you found, ask the creator to confirm (with specific choices/options), and **wait for their answer** before moving to the next step. Do not combine multiple steps into one response.

**First thing the agent should do — check upstream issues and session materials:**

Before scanning for files, follow the **Upstream Sync Rules** above: verify the upstream remote is configured and check for open issues in the upstream repo. Present any relevant issues to the creator.

**Then check for session materials:**
Scan the repo for any files beyond the standard template (README.md, GUIDANCE.md, AGENTS.md, LICENSE, SECURITY.md, CODE_OF_CONDUCT.md, SUPPORT.md, `.devcontainer/`, `.github/`, `.vscode/`, `img/`, `src/`, `docs/`). **Also check `_remove-before-publish/`** for source materials the creator added (session abstracts, screenshots, notes). If you find new files in either location — markdown, text, images, PDFs, anything the creator added — great, use them as context.

If you find **only template files** (nothing new has been added), guide the creator to add materials before proceeding:

*"I don't see any session materials in the repo yet — just the standard template files. Before I can make suggestions, I need something to work from."*

*"There are two places to add files depending on whether customers should see them:"*

*"📁 **`_remove-before-publish/`** — For reference-only materials that should NOT be in the published repo (session abstracts, internal notes, screenshots of your session catalog page). These are automatically excluded from git."*

*"📁 **Root, `/docs/`, or `/src/`** — For content you DO want customers to see (lab instructions, demo code, sample data, getting-started guides). Add these directly to the repo."*

*"To get started, drag in at least one file — either a reference document into `_remove-before-publish/` or actual session content into the repo. Any of these work:"*
- *Your session abstract or description → `_remove-before-publish/`*
- *Lab instructions or demo walkthrough → `/docs/`*
- *Source code or sample projects → `/src/`*
- *A screenshot of your session overview (I can read images) → `_remove-before-publish/`*
- *A text file describing what the session covers → either location*

*"Even a few sentences in a text file is enough to get started. Let me know when you're ready."*

*"⚠️ **Please don't upload large binary files** like PowerPoint decks (.pptx), Word documents (.docx), or videos. Git isn't designed for those. Instead, extract the text content into a markdown or text file and add that. If you only have a PowerPoint, you can use M365 Copilot to extract the content for you."*

Once materials are present, proceed with the steps below.

**What to have ready:**
- [ ] Session code and title (e.g., "BRK123: Building Scalable AI Solutions")
- [ ] General idea of learning outcomes and technologies
- [ ] Names and GitHub handles of content owners

**What this phase does NOT cover:** Documentation structure, getting-started steps, source code, slides, or recordings — you don't need those yet.

**Input flexibility:** The agent will scan the repo for any materials you've added — markdown files, text files, images, or anything else it can find. You can also paste additional context directly into chat, or describe your session in your own words. The more context the agent has, the better its suggestions will be.

---

### Get Started, Step 1: Determine Session Type

Copilot: **Try to detect the session type automatically before asking.** Look at:

1. **The repository name** — session codes encode the type:
   - `LAB` → Lab
   - `BRK` → Breakout
   - `DEM` or `DEMO` → Demo
2. **Existing content in the repo** — lab instructions or step-by-step exercises suggest a Lab; demo code with a presentation outline suggests a Demo; slides-only content suggests a Breakout.

If you can determine the type, **confirm with explicit options** so the creator knows exactly what to reply:

*"Based on the session code [LABxxx], this looks like a **Lab**. Reply with one of these:"*
- *"**Yes** — it's a Lab"*
- *"**Breakout** — it's a presentation/discussion session"*
- *"**Demo** — it's a presentation with demo code"*

If you can't determine it, ask the creator to choose using the same format:

*"What type of session is this? Reply with one:"*
- *"**Lab** — A hands-on guided session where customers follow step-by-step instructions"*
- *"**Breakout** — A presentation or discussion session, possibly with resource links or supplementary material"*
- *"**Demo** — A presentation with demo code that customers can explore afterward"*

Remember their answer — it affects later phases:

| Element | Demo | Breakout | Lab |
|---------|------|----------|-----|
| Getting started (guided session) | ❌ Remove | ❌ Remove | ✅ Keep |
| Getting started (own environment) | ✅ Keep | ✅ Keep | ✅ Keep |
| `docs/` folder | Optional | Optional | ✅ Keep |
| `src/` folder | ✅ Likely needed | Optional | Optional |

Based on session type, **remove sections from the README that don't apply** (e.g., remove the "🏫 Getting started in a guided session" section for Demos and Breakouts). **Preserve the emoji prefixes on all remaining section headings.** When removing a section, do not accidentally strip the emoji from adjacent sections that you're keeping (e.g., the 🏠 on "Getting started in your own environment" must remain).

**Replace generic "session" language in the README.** The template uses the word "session" throughout as a placeholder. Once you know the type, replace it with the specific term:
- **Lab** → use "lab" (e.g., "By the end of this lab", "To get started with this lab")
- **Demo** → use "demo" (e.g., "By the end of this demo", "topics from this demo")
- **Breakout** → use "presentation" or "session" (either works for breakouts)

Do this as part of the README updates — don't ask the creator about it, just do it.

---

### Get Started, Step 2: Update README.md — Session Identity

Copilot: **Scan the repo before asking anything.** Check the repository name, any existing markdown files, abstracts, or notes. Extract as much as you can — session code, title, and description — and present it to the creator for confirmation.

**Session code and title:** The repo name almost always contains the session code (e.g., `LAB401-Building-AI-Agents`). Parse it and propose: *"Based on the repo name, your session code and title look like 'LAB401: Building AI Agents'. Is that right, or would you like to adjust it?"*

If you can't determine it from the repo name, check for any files that mention a session code. Only ask cold if you have nothing to go on.

Update the main heading in README.md. Replace `BRKXXX: SESSION TITLE` with the confirmed session code and title.

**Session description:** Look for an abstract, overview, or description in existing files. If you find one, propose it: *"I found this description in [file] — want me to use it for the README?"* If no existing description, draft one based on the session title and any context you have, and ask the creator to refine it.

Replace the *"Add Session Description"* placeholder.

---

### Get Started, Step 3: Update README.md — Learning Outcomes and Technologies

Copilot: **Propose learning outcomes and technologies based on what you know.** By this point you have the session title, description, and any existing content. Use these to draft suggestions.

**Learning outcomes:** Propose 3 outcomes based on the session description and content. Present them: *"Based on your session description, here are 3 learning outcomes I'd suggest: [list]. Want to use these, or would you like to change any?"*

Fill in the bullet points under **🧠 Learning Outcomes** after confirmation.

**Technologies:** Identify technologies mentioned in the session title, description, and any existing files. Propose a list: *"It looks like your session covers [tech1, tech2, tech3]. Are there others I should add?"*

Fill in the numbered list under **💻 Technologies Used** after confirmation.

**IMPORTANT:** Use the Learn MCP Server to identify good links on learn.microsoft.com for each confirmed technology, so customers can learn more. Include these links in the Technologies section — don't ask the creator to find them.

---

### Get Started, Step 4: Update README.md — Content Owners

Copilot: **Check for clues first.** Look at git commit history, any existing CODEOWNERS file, or names mentioned in files. If you find names, propose them. Otherwise ask:

*"Who are the content owners for this session? I need names and GitHub usernames."*

Update the **Content Owners** table:
- Search on GitHub for their profiles to get the correct avatar and display name
- Remove extra placeholder entries if there's only one owner
- Add rows if there are more than one

---

### ✅ Get Started Complete

Copilot: When Get Started is done, show a summary of what was filled in and tell the creator:

*"Get Started is complete! Your README now has the session title, description, learning outcomes, technologies, and content owners filled in."*

**Then propose committing the changes:**

*"I'd like to commit and push these changes so they're saved. Here's what I'll commit:"*
- List the files the agent modified (e.g., README.md)

*"I will **not** commit any source files you uploaded for reference (session abstracts, PowerPoint files, Word documents, etc.) — those were just for context."*

*"Ready to commit? Reply **Yes** to commit and push, or **No** to skip."*

If the creator says yes, commit with a descriptive message (e.g., `"Get Started: add session title, description, outcomes, and owners"`), push to `origin`, and open a PR to the upstream repo following the Upstream Sync Rules above. Share the PR link with the creator.

After committing (or if they skip), tell them:

*"Come back for **Refine Content** when you have session materials to work with (lab instructions, demo code, session outline, etc.). Just open Copilot Chat and say: `read GUIDANCE.md and help me refine my content`."*

**Do NOT proceed to Refine Content in the same session** unless the creator explicitly asks. They likely don't have their content ready yet.

---

# 🔵 Refine Content

**You can run this phase as many times as you want.** Each time, the agent will scan what's in the repo, compare it to what's in the README, and help you organize, restructure, or update. Content evolves — run Refine Content at 50% done, again at 75%, and again at 100%. There's no penalty for iterating.

**When to run:** You have some session content to work with — lab instructions, demo walkthrough, slide deck notes, source code, or a detailed session outline. You don't need everything finished; even a partial draft is enough to start.

**First thing the agent should do — check upstream issues:**

Before scanning content, follow the **Upstream Sync Rules** above: verify the upstream remote is configured and check for open issues in the upstream repo. Present any relevant issues to the creator and address them as part of this pass.

**What to have ready:**
- [ ] Session content in some form (markdown files, source code, detailed outline, content extracted from slides)
- [ ] Any additional resources or links you want to share with attendees
- [ ] Knowledge of whether your session involves cloud costs for attendees

**What this phase does NOT cover:** It will not re-ask questions already answered in Get Started (session code, title, description, outcomes, technologies, owners) unless the creator wants to change them. It does not delete GUIDANCE.md or handle repo settings, slides, or recordings.

**What NOT to add to the repo:**
- ❌ Large binary files (PowerPoint decks, Word documents, videos, recordings)
- If you only have a PowerPoint, use M365 Copilot to extract the content into a markdown or text file first, then add that

---

### Refine Content, Step 1: Review and Organize Content

Copilot: **Scan the entire repo for content first — don't ask where it is.** Check `/docs/`, `/src/`, root `.md` files, and any other directories. Compare what you find to what's already in the README.

On a **first pass**, summarize what you found: *"Here's what I found in the repo: [list of files/folders with brief descriptions]. Is this everything, or is there more content I should know about?"*

On a **repeat pass**, focus on what's changed: *"Since last time, I see [new/changed files]. Want me to update the repo structure and README to reflect these changes?"*

**If they want help polishing:**

Copilot — CRITICAL INSTRUCTIONS:
- **DO NOT INFER OR ADD ANY INFORMATION** that is not explicitly in the source content
- **DO NOT** fill in gaps or make assumptions about what should be included
- **DO** highlight anything that appears to be missing or incomplete
- **DO** make suggestions about what could be added
- Only transform and reorganize what is actually provided

Review the content and report back:
- *"I found [X] exercises/sections in your content"*
- Flag missing elements: *"I notice the following might be missing or unclear:"*
  - Prerequisites/setup instructions?
  - Expected outcomes for each exercise?
  - Navigation between sections?
  - Any introductory context?
- Ask: *"Should I proceed with just what's here, or do you want to add these missing pieces first?"*

Only after they confirm, structure the content:
- Create folders in `/docs/` that match the structure (e.g., `/docs/01-setup/`, `/docs/02-first-exercise/`)
- Start subfolder numbering at 01
- Copy content verbatim — do not paraphrase or embellish
- Create an `index.md` landing page with navigation in `/docs/`

---

### Refine Content, Step 2: Update Getting Started Sections

Adapt these sections based on session type determined in Get Started. If the session type hasn't been set yet, detect it now (see Get Started, Step 1).

#### For Labs:

**Guided session section (🏫):** Read the lab content and **propose getting-started steps** based on what you find (e.g., prerequisites, setup instructions, first exercise). Present them: *"Based on your lab content, here are the getting-started steps I'd suggest for guided sessions: [list]. Does this look right?"*

Fill in the **🏫 Getting started in a guided session** section after confirmation.

**Own environment section (🏠):** Review the content for environment requirements (cloud resources, tools, SDKs). Propose setup steps and flag if cloud costs are likely: *"It looks like this lab uses [Azure resources]. I'll note that learners may incur cloud costs. Here are the self-paced setup steps I'd suggest: [list]."*

- If the lab can't be done independently, ask why and add the note to the section.

#### For Demos and Breakouts:

The **🏫 Getting started in a guided session** section should already have been removed in Get Started. If it's still there, remove it now.

**Own environment section (🏠):** Based on the content, propose steps for self-exploration. If the session is primarily a presentation with no hands-on component, suggest simplifying this to point to the resources table.

---

### Refine Content, Step 3: Update Resources

Copilot: **Proactively suggest resources — don't just ask.** Use the Learn MCP Server to find relevant learn.microsoft.com links based on the technologies already identified in Get Started. Also look for links already mentioned in the session content.

**Table format:** The Resources table has two columns: **Resource** and **Description**. The resource name in the first column must be a hyperlink to the resource. Each link must have **distinct, descriptive link text** — use the resource's actual name, not the domain (e.g., `[AI Toolkit for Visual Studio Code](https://learn.microsoft.com/windows/ai/toolkit/)`, NOT `[learn.microsoft.com](https://learn.microsoft.com/windows/ai/toolkit/)`). Every row's link text should be visually different so attendees can tell them apart.

Present your suggestions: *"Here are resources I'd recommend adding to the table: [list]. Want me to add these? Are there others you'd like to include?"*

Add confirmed resources to the **📚 Resources and Next Steps** table.

---

### Refine Content, Step 4: Organize Source Code and Data Files

Copilot: **Look at what's already in the repo rather than asking.** Check if `/src/` has code, if there are data files anywhere, and whether the current organization makes sense.

**Source code:** If you find code files in the repo, propose how to organize them: *"I see source code in [locations]. Want me to organize it under `/src/`?"* If there's no source code and the session doesn't need it, propose removing the `/src/` folder.

**Data files:** If you find data files (CSVs, JSON, configs), propose creating a `/data/` folder. If there are none, don't create one.

---

### Refine Content, Step 5: Clean Up Folder Structure

Use these standard subfolder names for consistency:
- `/docs/` — Step-by-step instructions and documentation. The majority of your content should be here.
- `/src/` — Source code to share with customers
- `/data/` — Data files processed during the session (only create if needed)

Clean up unused folders:
- If `/docs/` is empty and the session doesn't have documentation beyond the README, remove it
- If `/src/` is empty and there's no source code, remove it
- Remove any placeholder `README.md` files from folders that now have real content

---

### Refine Content, Step 6: Suggest Learning Prompts

Copilot: **Read through all the session content in the repo** — docs, source code, README — and propose 3-5 prompts for the **💬 Keep Learning with Copilot** section in the README. These prompts should help attendees continue exploring the session topics after Build using GitHub Copilot and the Microsoft Learn MCP Server.

Good prompts should:
- Be specific to the session's technologies and scenarios (not generic)
- Encourage hands-on exploration (e.g., "Ask Copilot to help you build a [thing] using [technology]")
- Reference the Learn MCP Server for finding official docs (e.g., "Ask Copilot to find the latest docs on [technology] and summarize the key concepts")
- Progress from beginner to more advanced
- Be copy-pasteable — format each prompt in a fenced code block so attendees can copy and paste directly into Copilot Chat

Example format for the README:

````markdown
1. Understand the basics:

```
Explain how [technology] works and what problems it solves
```

2. Go deeper:

```
Using the Microsoft Learn MCP Server, find the latest documentation on [feature] and walk me through how to set it up
```

3. Build something:

```
Help me create a simple [project] using [technology] based on what we covered in this session
```
````

Present them to the creator: *"Based on your session content, here are some prompts I'd suggest for the 'Keep Learning' section: [list]. Want me to use these, or would you like to tweak any?"*

After confirmation, replace the placeholder text in the **💬 Keep Learning with Copilot** section with the confirmed prompts formatted as a numbered list.

**On repeat passes:** Re-read the content and update the prompts if the material has changed significantly. Tell the creator what you changed and why.

---

### ✅ Refine Content Complete (for now)

Copilot: When this pass is done, show a summary of what was organized or changed and tell the creator:

*"This round of Refine Content is done! Here's what I updated: [summary]. Take a look and let me know if anything needs adjusting."*

**Then propose committing the changes:**

*"I'd like to commit and push these changes so they're saved. Here's what I'll commit:"*
- List the files the agent modified (e.g., README.md, files in docs/, src/)

*"I will **not** commit any source files you uploaded for reference (session abstracts, PowerPoint files, Word documents, etc.) — those were just for context."*

*"Ready to commit? Reply **Yes** to commit and push, or **No** to skip."*

If the creator says yes, commit with a descriptive message (e.g., `"Refine Content: organize lab instructions and update resources"`), push to `origin`, and open a PR to the upstream repo following the Upstream Sync Rules above. Share the PR link with the creator.

After committing (or if they skip), tell them:

*"You can run **Refine Content** again anytime — when you add more material, update exercises, or want to reorganize. When you're confident everything is complete and ready for publication, run **Finalize** to clean up. Just say: `read GUIDANCE.md and help me finalize`."*

**It's fine to proceed to Finalize in the same session** if the creator says their content is complete. But don't push them — they may want to come back after reviewing.

---

# 🟣 Finalize

**When to run:** Your content is complete and you're ready to publish. The repo should be publication-ready after this phase.

**First thing the agent should do — check upstream issues:**

Before reviewing for completeness, follow the **Upstream Sync Rules** above: verify the upstream remote is configured and check for open issues in the upstream repo. Any remaining open issues should be addressed or explicitly acknowledged before marking the repo as publication-ready.

**What to have ready:**
- [ ] All content reviewed and finalized
- [ ] Links to slides and/or recordings (if available — do NOT store the files themselves)
- [ ] Access to your GitHub repo settings page

**What this phase does NOT cover:** It will not re-ask content questions from Get Started or Refine Content.

---

### Finalize, Step 1: Review for Completeness

Copilot: Review the entire repo for completeness and consistency:

- Check that the README has all sections filled in (no placeholder text remaining)
- Verify that Getting Started sections accurately reflect the content in the repo
- Confirm links work and resources are relevant
- **Run a branding pass:** Check all product names are spelled out in full (no abbreviations like "VS Code" — use "Visual Studio Code") and use current official names (e.g., "Microsoft Foundry" not "Azure AI Foundry"). Flag any issues for the creator.
- Flag anything that looks incomplete or inconsistent

Report your findings to the creator and ask them to confirm or fix any issues.

---

### Finalize, Step 2: GitHub Repo Settings and Links

#### Repo Settings (Manual Step)

Copilot: **Generate the specific values** the creator should use, so they can just copy-paste:

1. Click the **gear icon** ⚙️ in the upper right of the GitHub repo page
2. **Description** — propose one based on the session description: *"I'd suggest this repo description: '[description]'. You can paste it directly."*
3. **Tags** — propose tags based on the Technologies Used section: *"I'd suggest these tags: [tag1, tag2, tag3]."*

Ask the content creator if they've completed the repo settings step.

#### Slides and Recordings

**Do NOT** store slides or recordings in this repo. Links to slides and recordings can be provided, but do not host the actual files in the repo.

If the creator has slide/recording links to share, add them to the Resources table in the README.

---

### Finalize, Step 3: Final Cleanup and GUIDANCE.md Removal

Copilot: When the creator has confirmed everything looks good:

1. Remove any remaining placeholder text or unused sections from the README
2. Verify the `_remove-before-publish/` folder contains only its README (no leftover source materials that should have been moved to `/docs/` or `/src/`). If files remain, ask: *"I see [files] still in `_remove-before-publish/`. These won't be published (they're gitignored), but do any of them contain content that should be in the published repo?"*
3. Show a final summary of the completed repo
3. Ask: *"Are you satisfied with how the repo looks? If so, I'll delete GUIDANCE.md to mark the repo as publication-ready."*

**Only delete GUIDANCE.md if** the creator explicitly confirms they've reviewed everything and are satisfied with the repo.

**Then propose committing and pushing all final changes:**

*"I'd like to commit and push the final changes. Here's what I'll commit:"*
- List all modified/deleted files (e.g., README.md cleanup, GUIDANCE.md deletion)

*"Files in `_remove-before-publish/` are automatically excluded from git — they won't appear in the commit or PR."*

*"Ready to commit? Reply **Yes** to commit and push, or **No** to skip."*

If the creator says yes, commit with a message like `"Finalize: repo ready for publication"`, push to `origin`, and open a PR to the upstream repo following the Upstream Sync Rules above. Share the PR link with the creator.

After committing, tell them: *"Your repo is ready for publication! 🎉 Don't forget to double-check the GitHub repository settings (description and tags) if you haven't already."*

---

## Questions?

If you encounter issues or need clarification as a content creator, surface them through your content lead or ping Mike Kinsman on Teams.
