---
description: Short commit message from staged git changes
---

# Commit message from staged changes

Base the message **only on staged** changes. If nothing is staged, say so and stop.

## What to inspect

1. Run **`git diff --staged`** (and **`git diff --staged --stat`** if helpful).
2. Use **`git diff --staged --name-only`** when the diff is large or noisy.

## What to write

Produce a **simple, ready-to-paste** commit message:

- **Subject**: one line, **imperative mood** (“Add…”, “Fix…”, “Remove…”), **~50 characters** (max ~72). No trailing period.
- **Body**: optional. Add only if the subject alone would be misleading (e.g. several unrelated tweaks). Keep it **2–5 short lines**, plain language, no markdown headings.
- Do **not** include `Co-authored-by`, issue tags, or chatter unless the user’s message asks for them.

If the change is purely mechanical (formatting, lockfile), say so in the subject (e.g. “Update dependencies”).

## Output format

Output **only** the commit text: subject line first; if you include a body, one blank line, then the body. Nothing else before or after.
