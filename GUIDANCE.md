# Welcome Build 2026 Creators!

Thanks for creating content for Build! You can follow this guidance yourself if you want to do it manually. However, we **highly recommend** using GitHub Copilot to work on your behalf. It will both make this process easier for you and improve the outcome.

---

**Microsoft Build 2026 Repository Setup Guide**

**For Content Creators:** This guide walks you through preparing your Build 2026 repository in three phases. You don't need to do everything at once — each phase matches a natural milestone in your session prep. Use GitHub Copilot to work through each phase interactively.

**For Copilot:** When a content creator asks you to help prepare their repository, read this entire file. Determine which phase they want to work on (or detect it based on what's already filled in), then guide them through that phase. **Be proactive** — scan the repo, propose answers based on what you find, and ask the creator to confirm rather than asking questions cold.

---

## 📋 Phase Overview

This repo is set up in **three phases** so you can make progress as your session comes together:

| Phase | When to Run | What You Need | Time |
|-------|-------------|---------------|------|
| **Get Started** | As soon as the repo is created | Session code, title, abstract | ~15 min |
| **Refine Content** | Each time you have new or updated content | Lab instructions, demo code, outlines | ~20 min per pass |
| **Finalize** | When the repo is ready for publication | Everything reviewed and complete | ~15 min |

**You don't have to do all three phases in one sitting.** Run **Get Started** now, then come back for **Refine Content** when you have material — and run it again whenever your content evolves. When everything is ready, run **Finalize** once to clean up for publication.

### How to start a phase

Open GitHub Copilot Chat and say:

- `read GUIDANCE.md and help me get started` — to set up session info
- `read GUIDANCE.md and help me refine my content` — to organize and improve your content (run as many times as you like)
- `read GUIDANCE.md and help me finalize` — to clean up for publication

---

## CRITICAL RULES FOR COPILOT

These rules apply to **all three phases**:

- **Be proactive.** Read the repo, scan existing files, check the repo name — use every signal available to propose answers rather than asking cold questions. Present your best guess and ask the creator to confirm or correct.
- **NEVER fabricate content.** Your proposals must be grounded in something you found (repo name, existing files, abstract text, session code). If you have nothing to go on, say so and ask.
- **NEVER commit changes without confirmation.** Always show the creator what you plan to do and get a "yes" before writing to files.
- **ALWAYS** highlight missing or unclear information. You can make suggestions, but only implement them after they approve.
- If something is missing, point it out and suggest: *"I don't see [X] in your content. Based on [Y], I'd suggest [Z] — does that work, or would you like something different?"*
- When organizing or restructuring existing content, **copy verbatim** — do not paraphrase, embellish, or fill in gaps.

---

# 🟢 Get Started

**When to run:** You have your session code, title, and abstract — but you may not have any actual content yet. A draft abstract, session outline, or even a paragraph describing your talk is enough.

**What to have ready:**
- [ ] Session code and title (e.g., "BRK123: Building Scalable AI Solutions")
- [ ] Session description or abstract (2-3 sentences)
- [ ] General idea of learning outcomes and technologies
- [ ] Names and GitHub handles of content owners

**What this phase does NOT cover:** Documentation structure, getting-started steps, source code, slides, or recordings — you don't need those yet.

**Input flexibility:** You can provide your info by answering questions one at a time, pasting your abstract into chat, pointing the agent at a .md file you've added to the repo, or even describing your session in a few sentences. The agent will use whatever it can find to propose answers — you just confirm or correct.

---

### Get Started, Step 1: Determine Session Type

Copilot: **Try to detect the session type automatically before asking.** Look at:

1. **The repository name** — session codes encode the type:
   - `LAB` → Lab
   - `BRK` → Breakout
   - `DEM` or `DEMO` → Demo
2. **Existing content in the repo** — lab instructions or step-by-step exercises suggest a Lab; demo code with a presentation outline suggests a Demo; slides-only content suggests a Breakout.

If you can determine the type, **confirm** rather than ask: *"Based on the session code [LABxxx], this looks like a Lab. Is that right?"*

If you can't determine it, ask the creator to choose:
- **Demo** — A presentation with demo code that customers can explore afterward
- **Breakout** — A presentation or discussion session, possibly with resource links or supplementary material
- **Lab** — A hands-on guided session where customers follow step-by-step instructions

Remember their answer — it affects later phases:

| Element | Demo | Breakout | Lab |
|---------|------|----------|-----|
| Getting started (guided session) | ❌ Remove | ❌ Remove | ✅ Keep |
| Getting started (own environment) | ✅ Keep | ✅ Keep | ✅ Keep |
| `docs/` folder | Optional | Optional | ✅ Keep |
| `src/` folder | ✅ Likely needed | Optional | Optional |

Based on session type, **remove sections from the README that don't apply** (e.g., remove the "🏫 Getting started in a guided session" section for Demos and Breakouts).

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

*"Get Started is complete! Your README now has the session title, description, learning outcomes, technologies, and content owners filled in. Come back for **Refine Content** when you have session materials to work with (lab instructions, demo code, session outline, etc.). Just open Copilot Chat and say: `read GUIDANCE.md and help me refine my content`."*

**Do NOT proceed to Refine Content in the same session** unless the creator explicitly asks. They likely don't have their content ready yet.

---

# 🔵 Refine Content

**You can run this phase as many times as you want.** Each time, the agent will scan what's in the repo, compare it to what's in the README, and help you organize, restructure, or update. Content evolves — run Refine Content at 50% done, again at 75%, and again at 100%. There's no penalty for iterating.

**When to run:** You have some session content to work with — lab instructions, demo walkthrough, slide deck notes, source code, or a detailed session outline. You don't need everything finished; even a partial draft is enough to start.

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

*"You can run **Refine Content** again anytime — when you add more material, update exercises, or want to reorganize. When you're confident everything is complete and ready for publication, run **Finalize** to clean up. Just say: `read GUIDANCE.md and help me finalize`."*

**It's fine to proceed to Finalize in the same session** if the creator says their content is complete. But don't push them — they may want to come back after reviewing.

---

# 🟣 Finalize

**When to run:** Your content is complete and you're ready to publish. The repo should be publication-ready after this phase.

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
2. Show a final summary of the completed repo
3. Ask: *"Are you satisfied with how the repo looks? If so, I'll delete GUIDANCE.md to mark the repo as publication-ready."*

**Only delete GUIDANCE.md if** the creator explicitly confirms they've reviewed everything and are satisfied with the repo.

After deleting GUIDANCE.md, tell them: *"Your repo is ready for publication! 🎉 Don't forget to double-check the GitHub repository settings (description and tags) if you haven't already."*

---

## Questions?

If you encounter issues or need clarification as a content creator, surface them through your content lead or ping Mike Kinsman on Teams.
