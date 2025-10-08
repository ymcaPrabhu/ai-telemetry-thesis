# Repository Guidelines

## Project Structure & Module Organization
- `chapters/`: Markdown drafts for each thesis chapter; keep filenames lowercase with underscores (e.g., `chapter_09_future_work.md`).
- `docs/`: Governance memos (formatting, ethics, DMP). Add new policy notes here using descriptive names (`docs/security_controls.md`).
- `latex/`: Submission-ready source with front matter, chapter `.tex` files, appendices, and `main.tex`. Build outputs write to this folder.
- `thesis_complete.md`, `thesis_outline.md`: High-level summaries. Update concurrently when major architecture or methodology changes occur.
- `thesis_package.zip`: Rebuild after substantive edits with `python -m shutil make_archive` (see Build section).

## Build, Test, and Development Commands
```bash
# Compile LaTeX manuscript and generate PDF (requires latexmk)
cd latex && latexmk -pdf main.tex

# Clean LaTeX build artifacts
dlatexmk -C main.tex  # or manually remove *.aux *.log etc.

# Refresh distributable ZIP from latest LaTeX sources
cd .. && python - <<'PY'
import shutil
shutil.make_archive('thesis_package','zip','latex')
PY
```
Confirm the PDF renders without warnings before tagging a release.

## Coding Style & Naming Conventions
- Markdown and LaTeX files use two-space indentation for nested lists; avoid tabs.
- Prefer sentence case headings (`## Research Design`).
- Cite sources in LaTeX using IEEE style (`\cite{key}`); keep BibTeX entries alphabetized in `references.bib`.
- Name new documents descriptively with hyphen or underscore separators (`docs/telemetry_schema_notes.md`).

## Testing Guidelines
- Primary verification is LaTeX compilation (`latexmk -pdf`). Treat warnings about missing references as build failures.
- For notebooks or scripts, add lightweight sanity checks (e.g., `python -m doctest script.py`). Document bespoke checks in `docs/evaluation_reporting_template.md`.
- Store experiment outputs under `reports/` (create if absent) and reference them in Chapter 6 summaries.

## Commit & Pull Request Guidelines
- Use present-tense, imperative commit messages (`Add fairness analysis table`). Group related changes: format updates, content additions, and data-refresh commits should be separate.
- Run LaTeX builds and regenerate `thesis_package.zip` before every PR.
- PR descriptions should include: purpose, affected sections/files, validation steps (build logs, rendered PDF), and linked TODO items or issue IDs.
- Attach screenshots of new diagrams or dashboard outputs when relevant to ease reviews.
