# Welcome Build 2026 Creators!

Thanks for creating content for Build! You can follow this guidance yourself if you want to do it manually. However, we **highly recommend** using GitHub Copilot to work on your behalf. It will both make this process easier for you and improve the outcome.

## ⚠️ Before You Start

**Add your session content to the repo first.** The agent works best when it can read your existing materials and use them to fill out the README — instead of asking you a dozen questions from scratch.

What to add:
- **Markdown files** — session abstracts, lab instructions, documentation, notes
- **Source code** — demo code, sample applications, starter projects
- **Data files** — datasets or configuration files used in your session

What **not** to add:
- ❌ Large binary files (PowerPoint decks, Word documents, videos, recordings)
- If you only have a PowerPoint, use M365 Copilot to extract the content into a markdown or text file first, then add that

Once your content is in the repo, proceed with the setup below.

## 🚀 Get Started with GitHub Copilot

1. Open up this repo in a GitHub Codespace (or your favorite dev environment).
    1. Click the green **Code** button and then choose **Create a Codespace**
    2. Let it load.
2. Open a chat window with Copilot. Ask it:

```
read GUIDANCE.md and help me get this repo ready to publish
```

---

**Microsoft Build 2026 Repository Setup Guide**

**For Content Creators:** This guide is designed to help you work with GitHub Copilot to prepare your Build 2026 repository for publication. Copilot will ask you questions and help implement the necessary changes to meet all repository requirements.

**For Copilot:** When a content creator asks you to help prepare their repository, read this entire file and guide them through each step interactively. Ask questions to gather the information you need, then implement the changes. Work through the tasks in order.

---

## CRITICAL RULES FOR COPILOT

- **NEVER** infer, assume, or add information that the content creator hasn't explicitly provided
- **DO NOT** fill in gaps with what you think should be there
- **ALWAYS** highlight missing or unclear information and ask the creator about it. You can make suggestions, but only implement them after they approve.
- **Only** work with what is explicitly given to you
- If something is missing, point it out and ask: *"I don't see [X] in your content. Do you want to add it, or should I proceed without it?"*

## How This Works

1. The content creator will ask you to "help me prepare my repo for publication" or similar
2. You'll read this GUIDANCE.md file to understand what needs to be done
3. You'll look at what content already exists in the repo and use it to pre-populate the README
4. You'll work through each step, confirming with the creator as you go
5. At the end, you'll recommend they keep GUIDANCE.md and come back to delete it in a separate session

---

## Step 1: Determine Session Type

Copilot: Ask the content creator:

### "What type of session is this?"

Offer these three options:
- **Demo** — A presentation with demo code that customers can explore afterward
- **Breakout** — A presentation or discussion session, possibly with resource links or supplementary material
- **Lab** — A hands-on guided session where customers follow step-by-step instructions

Remember their answer — it affects the rest of the setup:

| Element | Demo | Breakout | Lab |
|---------|------|----------|-----|
| Getting started (guided session) | ❌ Remove | ❌ Remove | ✅ Keep |
| Getting started (own environment) | ✅ Keep | ✅ Keep | ✅ Keep |
| `docs/` folder | Optional | Optional | ✅ Keep |
| `src/` folder | ✅ Likely needed | Optional | Optional |

---

## Step 2: Update README.md — Session Identity

Copilot: Before asking the content creator questions, **look at what's already in the repo.** The creator should have added their session content (markdown files, source code, abstracts) before starting this process. Read through any existing files to find the session code, title, description, technologies, and learning outcomes. Use what you find to pre-populate answers and confirm with the creator rather than asking from scratch.

If the repo has existing content, say: *"I found [files] in the repo. Let me use these to fill out your README — I'll confirm each section with you as I go."*

If the repo is empty (no content added yet), say: *"I don't see any session content in the repo yet. This process works best if you add your materials first (markdown files, source code, session abstract). Would you like to add your content now, or proceed by answering questions manually?"*

You may be able to determine the session code and session title from the name of the repository or from existing files. If you can, ask the content creator to confirm. If you can't, just ask them:

### "What is your session code and title?"
(e.g., "BRK123: Building Scalable AI Solutions" or "LAB456: Hands-On with AI Agents")

Update the main heading in README.md. Replace `BRKXXX: SESSION TITLE` with their actual session code and title.

### "What is your session description? Would you like me to suggest one?"
(2-3 sentences about what the session covers)

Replace the *"Add Session Description"* placeholder.

---

## Step 3: Update README.md — Learning Content

### "What are the 3 main learning outcomes? Would you like me to suggest some?"
(What will learners be able to do after completing this session?)

Come up with suggestions if asked. Fill in the bullet points under **🧠 Learning Outcomes**.

### "What technologies are featured in this session? Would you like me to suggest some?"
(List the main technologies)

Come up with suggestions if asked. Fill in the numbered list under **💻 Technologies Used**.

**IMPORTANT:** Use the Learn MCP Server to identify good links on learn.microsoft.com for each technology, so customers can learn more. Include these links in the Technologies section.

---

## Step 4: Update README.md — Getting Started Sections

Adapt these sections based on session type determined in Step 1.

### For Labs:

**Guided session section (🏫):** Ask the content creator: *"For customers taking this as part of a guided session, what steps do they need to take to get started?"*

If you think you know the answer from reading their content, suggest possible steps for the user.

Fill in the **🏫 Getting started in a guided session** section.

**Own environment section (🏠):** Ask: *"Are customers in their own environment able to take this lab?"*

- If yes: Fill in the setup steps for the **🏠 Getting started in your own environment** section. Make sure customers know they will be using their own environments and may incur cloud costs.
- If no: Ask why not. Add: *"Note: you may be unable to follow all of these steps in your own environment because [reasons the creator provided]"* to the section.

### For Demos and Breakouts:

**Remove** the **🏫 Getting started in a guided session** section entirely from the README.

**Own environment section (🏠):** Ask: *"What steps should customers follow to explore this content on their own?"*

Fill in the **🏠 Getting started in your own environment** section. If the session is primarily a presentation with no hands-on component, simplify this to point to the resources table.

---

## Step 5: Update README.md — Resources and Content Owners

### "What additional resources should we send customers to from your repo?"

Add any resources the creator provides to the **📚 Resources and Next Steps** table. Use the Learn MCP Server to find relevant learn.microsoft.com links for the technologies discussed in the session.

### "Who are the content owners besides you?"
(Names and GitHub usernames)

Update the **Content Owners** table:
- Search on GitHub for their profiles if it would be helpful
- Remove extra placeholder entries if there's only one owner
- Add rows if there are more than one

---

## Step 6: Documentation and Content

Copilot: Ask the content creator about their session content.

### "Do you have your session content ready?"

- **If NO:** *"Let me know when it's ready and I can help you structure it. We should keep GUIDANCE.md until then."*
- **If YES:** Continue with the questions below.

### "Where is your content located?"

Check common locations: `/docs/`, root directory `.md` files, or ask them to point you to it.

Show the creator what you found: *"I found content in [location]. Is it good to go, or would you like to see what I can do polishing it up? You can always revert what I create without any risk."*

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

## Step 7: Clean Up Folder Structure

Use these standard subfolder names for consistency:
- `/docs/` — Step-by-step instructions and documentation. The majority of your content should be here.
- `/src/` — Source code to share with customers
- `/data/` — Data files processed during the session (only create if needed)

Copilot: Based on the session type and content, ask about folders:

### "Are you going to be sharing source code with customers in your session?"
If yes, ask if they'd like you to organize it in the `/src/` folder. If they don't have source code, remove the `/src/` folder.

### "Does your session use any data files that customers will need?"
If yes, create a `/data/` folder. If no, don't create one.

### Clean up unused folders
- If `/docs/` is empty and the session doesn't have documentation beyond the README, remove it
- If `/src/` is empty and there's no source code, remove it
- Remove any placeholder `README.md` files from folders that now have real content

---

## Step 8: Update GitHub Repo Settings (Manual Step)

Remind the creator that they'll need to complete this step manually:

1. Click the **gear icon** ⚙️ in the upper right of the GitHub repo page
2. Set a good description (suggest one based on the session description from earlier)
3. Add technology tags (suggest the same items from the Technologies Used section)

Ask the content creator if they've completed the repo settings step.

---

## Step 9: Slides and Recordings

**Do NOT** store slides or recordings in this repo. Links to slides and recordings can be provided, but do not host the actual files in the repo.

If the creator has slide/recording links to share, add them to the Resources table in the README.

---

## Step 10: Final Step — GUIDANCE.md Cleanup

**⚠️ Do NOT delete GUIDANCE.md in this session.** 

Copilot: When the creator has finished going through the steps above:

1. Show a summary of everything that was completed
2. Tell them: *"Everything looks good! I recommend you **do not** delete GUIDANCE.md right now. Come back to it in a separate session after you've reviewed all the changes, tested links, and are confident the repo is ready. When you're sure, you can ask me to delete GUIDANCE.md at that point."*
3. Remind them: *"Don't forget to update the GitHub repository settings (description and tags) if you haven't already."*

**Only delete GUIDANCE.md if:** The creator comes back in a **separate session**, explicitly asks to delete it, and confirms they've reviewed everything and are satisfied with the repo.

---

## Questions?

If you encounter issues or need clarification as a content creator, surface them through your content lead or ping Mike Kinsman on Teams.
