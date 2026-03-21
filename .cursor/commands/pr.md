---
description: PR description from staged git changes
---

# PR from staged changes

When this command runs, **ignore unrelated working-tree noise** and base everything on **staged** content only.

## What to inspect

1. Run **`git diff --staged`** (and **`git diff --staged --stat`** if helpful). If nothing is staged, say so and stop—do not invent a PR from unstaged or untracked files unless the user explicitly asks.
2. Optionally run **`git diff --staged --name-only`** for a quick file list.
3. Read surrounding context in the repo only when the diff alone is unclear.

## What to write

Produce a **copy-paste-ready** GitHub pull request with:

- **Title**: imperative, concise (e.g. “Add CI workflow for TypeScript build”), under ~72 characters.
- **Summary**: 1–3 short paragraphs: what this does and **why** (motivation / problem). Write it in simple, easy to understand language.
- **Changes**: bullet list grouped by area (e.g. API, DB, config, tooling). Mention notable files with backticks (`src/...`).
- **How to test**: concrete steps (commands, endpoints to hit, env notes) matched to this repo.
- **Risk / follow-ups** (only if relevant): migrations, breaking changes, or known gaps.

Use **complete sentences** and plain language—no filler, no engagement-bait closing. If the diff is mostly mechanical (formatting, lockfile), say that plainly.

## Output format

Use markdown with clear `##` headings: **Title** on its own first line (or under `## Title`), then the sections above. The user should be able to paste the body into the GitHub PR description field.
