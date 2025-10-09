# AI Telemetry Thesis Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the AI Telemetry Thesis project, including its structure, content generation strategies, and technical components. It serves as a reference for AI agents working on expanding and refining the thesis.

### Document Scope

This is a comprehensive documentation of the entire system.

### Change Log

| Date       | Version | Description                 | Author  |
|------------|---------|-----------------------------|---------|
| 2025-10-09 | 1.0     | Initial brownfield analysis | Winston |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry**: `latex/main.tex` (The main LaTeX file that assembles the thesis)
- **Core Content Generation**: `prompts/master_prompt.txt` (The master prompt for generating thesis content)
- **Thesis Structure**: `thesis_outline.md` (A detailed outline of the thesis chapters and sections)
- **BMad Configuration**: `.bmad-core/core-config.yaml` (Configuration for the BMad agents)
- **Agent Definitions**: `opencode.jsonc` (Defines the BMad agents and their capabilities)
- **Chapter Content**: `chapters/*.md` and `latex/chapters/*.tex` (The content of the thesis chapters)

## High Level Architecture

### Technical Summary

This project is a research workspace for generating a PhD-level thesis on "AI-Driven Multi-Telemetry Framework for Cyber Attack Detection in Cloud Environments." The primary technologies used are LaTeX for document formatting and the BMad framework for AI-driven content generation and project management.

### Actual Tech Stack

| Category      | Technology | Version | Notes                                       |
|---------------|------------|---------|---------------------------------------------|
| Documentation | LaTeX      | -       | Used for formatting and generating the thesis |
| AI Framework  | BMad       | -       | Used for agent-based assistance             |

### Repository Structure Reality Check

- **Type**: Monorepo
- **Package Manager**: Not applicable
- **Notable**: The project is structured around the thesis content, with separate directories for LaTeX files, markdown chapters, and prompts for AI agents.

## Source Tree and Module Organization

### Project Structure (Actual)

```text
project-root/
├── chapters/         # Markdown versions of the thesis chapters
├── docs/             # Documentation for the project
├── latex/            # LaTeX source files for the thesis
│   ├── appendices/   # Appendices for the thesis
│   ├── chapters/     # LaTeX versions of the thesis chapters
│   └── frontmatter/  # Front matter for the thesis (title page, abstract, etc.)
├── prompts/          # Prompts for AI agents
├── .bmad-core/       # BMad framework core files
├── .claude/          # Claude-specific configuration
├── .gemini/          # Gemini-specific configuration
└── .git/             # Git version control
```

### Key Modules and Their Purpose

- **`latex/`**: Contains all the LaTeX source code for compiling the final thesis document.
- **`chapters/`**: Contains the markdown source for the thesis chapters. These are likely used as a more easily editable format before being converted to LaTeX.
- **`prompts/`**: Contains the master prompt used to generate the content for the thesis chapters. This is a critical component of the content generation workflow.
- **`.bmad-core/`**: The core of the BMad framework, containing agent definitions, tasks, and other configurations.

## Data Models and APIs

### Data Models

The "data models" in this project are the thesis chapters themselves. The primary data is the text content of the thesis.

- **Thesis Outline**: See `thesis_outline.md`
- **Chapter Content (Markdown)**: See `chapters/*.md`
- **Chapter Content (LaTeX)**: See `latex/chapters/*.tex`

### API Specifications

Not applicable to this project.

## Technical Debt and Known Issues

### Critical Technical Debt

- The user has not specified any technical debt.
- There may be inconsistencies between the markdown chapters in `chapters/` and the LaTeX chapters in `latex/chapters/`. A process should be established to keep these in sync.

### Workarounds and Gotchas

- The `prompts/master_prompt.txt` is the single source of truth for generating chapter content. Any changes to the thesis structure or content should be reflected in this file.

## Integration Points and External Dependencies

### External Services

| Service      | Purpose                                 | Integration Type | Key Files                   |
|--------------|-----------------------------------------|------------------|-----------------------------|
| Web Search   | Finding the latest academic documents   | Manual           | `prompts/master_prompt.txt` |
| Plagiarism   | Checking for plagiarism                 | Manual           | -                           |
| Reference    | Managing citations                      | Manual           | `latex/references.bib`      |

## Development and Deployment

### Local Development Setup

1.  A LaTeX distribution (e.g., TeX Live, MiKTeX) is required to compile the thesis.
2.  A text editor or IDE with LaTeX support is recommended for editing the `.tex` files.
3.  The BMad CLI is used to interact with the AI agents.

### Build and Deployment Process

- **Build Command**: The thesis is compiled using a LaTeX compiler (e.g., `pdflatex`). The main file to compile is `latex/main.tex`.
- **Deployment**: The final output is a PDF file of the thesis.

## Testing Reality

### Current Test Coverage

- **Unit Tests**: Not applicable.
- **Integration Tests**: Not applicable.
- **E2E Tests**: Not applicable.
- **Manual Testing**: Proofreading, plagiarism checks, and reference validation are the primary QA methods.

## Appendix - Useful Commands and Scripts

### Frequently Used Commands

To compile the thesis, you can use the following commands in the `latex/` directory:

```bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```
