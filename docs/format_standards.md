# Thesis Formatting Standards Mapping

This memo consolidates formatting and submission requirements from key governing bodies and benchmark universities to guide template preparation for the thesis **"AI-Driven Multi-Telemetry Framework for Cyber Attack Detection in Cloud Environments."**

## 1. Core References
- **UGC (2016) Minimum Standards and Procedure** for MPhil/PhD: governs structure, plagiarism limits (<10%), submission timelines, viva prerequisites.
- **IIT Generic Guidelines** (e.g., IIT Bombay, IIT Madras, IIT Delhi): define page size, typography, margin sizes, preliminary pages, binding colors.
- **MIT Libraries Thesis Specifications (2024)**: enforce PDF/A, metadata completeness, page numbering, electronic signature placement.
- **Stanford University Libraries (SUL) & GSB Research Quality Rubric**: emphasize contribution clarity, data availability statements, line spacing (1.5), figure accessibility.
- **Shodhganga/Shodh Shuddhi**: national repository requirements, plagiarism certification, PDF upload standards.
- **INFLIBNET Metadata Schema**: Dublin Core + UDC keywords, ORCID capture.

## 2. Page Layout & Typography
| Requirement Source | Page Size | Margins | Font & Size | Line Spacing | Notes |
| --- | --- | --- | --- | --- | --- |
| UGC & IIT | A4 (210×297 mm) | Top 30 mm, Bottom 25 mm, Left 35 mm, Right 20 mm | Times New Roman 12 pt (text), 14 pt (headings) | 1.5 lines (text); single for footnotes | Page numbers centered bottom or top-right |
| MIT Libraries | Letter/A4 accepted; prefer PDF/A | 1 inch (25.4 mm) all sides | 11–12 pt serif; consistent italic/bold usage | 1.5 or double | PDF/A-1b compliance mandatory |
| Stanford SUL | US Letter preferred; A4 acceptable for int’l | 1 inch (min) | 12 pt | 1.5 line (body), single for block quotes | Provide accessible figures (alt text) |

**Adopted Standard:** Use A4 with IIT margin scheme (compatible with UGC), font TNR 12pt, line spacing 1.5. Ensure PDF/A output meets MIT/Stanford expectations.

## 3. Preliminary Pages Order
1. Title Page (UGC wording + IIT layout; include ORCID & copyright notice).
2. Certificate of Originality (Supervisor & HoD signatures; digital signature placeholders per MIT requirements).
3. Declaration by Scholar (UGC format, mention plagiarism compliance & ethics approval ID).
4. Approval Sheet (Departmental Research Committee).
5. Abstract (≤500 words; add Hindi abstract as per UGC; include keywords section formatted in APA style).
6. Acknowledgements (optional per IIT; maintain <2 pages).
7. Dedication (optional).
8. Table of Contents (auto-generated, multi-level, dot leaders).
9. List of Figures, Tables, Algorithms.
10. List of Abbreviations/Symbols (aligned to ISO 31; include AI/ML glossary).
11. Glossary (cloud & telemetry terms; align with Stanford’s clarity rubric).
12. Preface/Executive Summary (optional; recommended for policy distribution per NUS/MIT).

## 4. Chapters & Numbering
- Use decimal numbering (e.g., Chapter 4, Section 4.3, Subsection 4.3.1).
- Figures/Tables numbered per chapter (Figure 5.2). Captions below figures, above tables (IEEE style).
- Equations centered with numbering (4.1). Reference via \eqref{}.
- Acronyms defined on first use and included in glossary.

## 5. Referencing & Citation Style
- Primary style: **IEEE** for engineering; alternate APA available for cross-disciplinary publications.
- Use citation manager (Zotero/Mendeley) with BibLaTeX; ensure DOI/URL presence per MIT spec.
- Include `References` chapter; adopt alphabetic ordering for APA or numeric order for IEEE.
- Provide ORCID and Author Contribution Statement in back matter (Stanford/MIT best practice).

## 6. Digital Submission Requirements
- Generate **PDF/A-1b** with embedded fonts (Ghostscript or Adobe PDF/A converter).
- Embed metadata: title, author, ORCID, keywords, abstract (for MIT, UGC, Shodhganga).
- Add bookmarks for chapters/sections (Stanford requirement).
- Accessibility: alt-text for figures, tagged PDF structure (WCAG 2.1 AA suggestion).

## 7. Printing & Binding (if required)
- Hardbound copy: IIT standard (black cover, gold lettering). Spine: title, author, year.
- Copies for library, supervisor, department. Use 100 GSM paper.

## 8. Templates & Tooling Plan
- Maintain LaTeX template (`templates/thesis.tex`) and Word template (`templates/thesis.docx`) aligned with above standards.
- Provide Overleaf project with IIT formatting plus MIT/Stanford metadata macros.
- Include front matter placeholders for digital signatures.

## 9. Action Items
1. Scaffold `templates/` directory with LaTeX & Word skeletons.
2. Draft metadata checklist (title, ORCID, keywords, classification).
3. Configure build pipeline (Makefile/GitHub Actions) to validate PDF/A and line spacing.

---
Prepared by: *Thesis Automation Taskforce*  
Last Updated: $(date +"%Y-%m-%d")
