# HireScope — AI Agent Instructions

**App:** HireScope  
**One-liner:** An AI-powered, fully on-device job research assistant for Indian job seekers.

---

## Start here

Read `docs/INDEX.md` before doing anything else. That file tells you which other docs to read and in what order, based on the task type.

---

## Read order (quick reference)

- **Any new session on an existing task:** `docs/structure/INDEX.md` → relevant module file(s) → relevant top-level doc(s) → quick scan of `docs/decisions.md`.
- **New feature:** `docs/INDEX.md` → every file in `docs/` and `docs/structure/` → propose architecture → wait for approval.
- **Bug/improvement:** `docs/structure/INDEX.md` → relevant module(s) → relevant top-level doc → quick scan of `docs/decisions.md`.

---

## Standing rules (always)

1. Ask, then wait. If you ask a question, stop completely until the human answers.
2. No blind fixing. Before calling a fix done, search the whole project for every other place that uses the changed thing.
3. Label every fix: MINOR or MAJOR, with a brief reason.
4. Test before saying "done." Verify the problem is actually gone.
5. After 2 failed attempts on the same bug, write a handoff prompt, attach `docs/supervisor/project-brief.md`, and escalate.
6. Update docs immediately after any real change. Do not wait to be asked.
7. Never read, quote, log, or forward anything from `docs/cicd/secrets/`.
8. Every doc except `README.md` is gitignored. If you create any new file in `docs/`, add it to `.gitignore` in the same step.
9. Triage first, every thread. Classify the task as bug/improvement, new functionality, or structure redesign before reading anything in depth.
10. Quality over speed, always. There is no deadline.
