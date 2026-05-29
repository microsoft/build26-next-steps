# AI Agent Guidelines

This file contains instructions and guidelines for AI agents working on this repository.

## 🔒 Security Best Practices

**Never commit sensitive information to this repository:**
- API keys, tokens, or credentials
- Personal access tokens (PATs)
- Database connection strings with passwords
- Environment-specific configuration values

**For MCP configuration files (`mcp.json`):**
- Use placeholder values like `"YOUR_API_KEY_HERE"` or `"${API_KEY}"`
- Reference environment variables for sensitive data
- Include documentation about required environment variables

## 📋 Repository Guidelines

### Purpose
This repository is a Microsoft Build 2026 session content repository and should:
- Provide clear, actionable content for session attendees
- Support self-guided learning for remote/at-home learners
- Follow the structure established by GUIDANCE.md

### What NOT to modify without permission:
- License files (`LICENSE`, `LICENSE-DOCS`, `CODE_OF_CONDUCT.md`)
- Security files (`SECURITY.md`)
- GitHub workflow files in `.github/` directory

### Content Rules
- No large binary files (PowerPoint decks, videos, recordings) in the repo
- Links to slides and recordings are fine — just don't host the actual files
- All README files should be kept up to date
- Unused folders (containing only a placeholder README) should be removed before release

### Getting Started
If this repo still has a `GUIDANCE.md` file, that means setup isn't complete yet. Read it and follow the instructions to prepare the repo for publication.
