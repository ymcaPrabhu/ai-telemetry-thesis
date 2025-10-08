# AI-Driven Multi-Telemetry Thesis TODO

## 1. Governance & Compliance Setup
- [x] Map institutional thesis format (UGC + University + IIT style) incorporating MIT/Stanford formatting specs (PDF/A, margins, sectioning) and update templates.
- [x] Obtain ethics clearance (IRB/IEC) and data sharing approvals; align consent forms with Oxford/NUS cybersecurity research ethics.
- [x] Draft plagiarism and originality management plan (Turnitin/URKUND schedule, version control) ensuring <10% similarity and Shodh Shuddhi uploads.
- [x] Compile applicable regulations: UGC 2016, MeitY cloud guidelines, CERT-In directives, GDPR/HIPAA, EU NIS2, US FedRAMP, CSA CCM, RBI cloud circulars.
- [x] Create security classification protocol for telemetry datasets (confidential appendices, access logs) referencing CMU CyLab practices.
- [x] Register ORCID, AuthorID, and link to university repository metadata.

## 2. Research Design & Planning
- [x] Finalize research problem statement and hypotheses (align with Stanford GSB impact rubric).
- [x] Develop conceptual framework diagrams (IEEE 1471 + MIT CSAIL architecture annotation).
- [x] Define research questions mapped to objectives, expected contributions, and Technology Readiness Levels.
- [x] Prepare detailed Gantt timeline (proposal, milestones, submission) incorporating Oxford CDT checkpoint reviews.
- [x] Identify funding, lab resources, and cloud credits (AWS/GCP/Azure research programs, IIT HPC, DARPA/NIST datasets).
- [x] Draft Data Management Plan (FAIR, DOI minting, containerization) per MIT Libraries & UKRI templates.

## 3. Literature & Background Study
- [x] Conduct systematic literature review (IEEE Xplore, ACM, Scopus, Web of Science, arXiv, Shodhganga) using PRISMA flow.
- [x] Build annotated bibliography (Zotero/Mendeley) with IEEE + APA styles; sync with Overleaf.
- [x] Summarize regulatory and policy documents affecting cloud telemetry (CERT-In, MeitY, ENISA, NIST, CSA).
- [x] Create comparative matrix of existing AI-based IDS/XDR solutions, including benchmarking from MIT Lincoln Lab datasets and Stanford/UC Berkeley publications.
- [x] Document research gaps aligned with objectives and categorize by TRL/maturity.
- [x] Review interdisciplinary perspectives (socio-technical, legal, ethics) from Oxford Internet Institute and Harvard Berkman Klein Center.

## 4. Data & Telemetry Preparation
- [x] Inventory telemetry sources (network, host, application, identity, container, serverless, SaaS audit logs).
- [x] Secure access to public datasets (CIC-IDS, UNSW-NB15, Azure/AWS logs, DARPA OpTC, Stratosphere IPS, CloudTrail samples).
- [x] Draft data governance plan (anonymization, encryption, retention) referencing NIST Privacy Framework & Stanford privacy guidelines.
- [x] Design data ingestion pipelines (agents, APIs) for synthetic/real logs; include benchmarking pipeline from CMU C3i honeypot datasets.
- [x] Validate data quality and label accuracy (data profiling, SME review, inter-annotator agreement).
- [x] Implement secure storage with key management and audit trails.

## 5. Methodology & Experimentation
- [x] Specify AI/ML models (baseline and proposed ensembles; include explainable and neuro-symbolic options).
- [x] Establish feature engineering workflows per telemetry type; document reproducibility per ACM artifact guidelines.
- [x] Configure cloud lab/testbed (IaaS + serverless + container workloads; compare with MITRE ATT&CK Center test ranges).
- [x] Script attack scenarios aligned with MITRE ATT&CK, Cyber Kill Chain, and red-team playbooks used by Oxford CDT.
- [x] Implement multi-telemetry correlation engine prototype (CEP + graph analytics).
- [x] Set evaluation metrics (precision, recall, latency, MTTR, FPR, coverage breadth).
- [x] Plan statistical validation (k-fold, ablation, hypothesis testing, bootstrap CI, power analysis).
- [x] Register experiment protocol (Open Science Framework) to enhance transparency.

## 6. System Development
- [x] Build ingestion layer (Kafka/Fluentd/Beats, Kinesis/PubSub) with schema registry.
- [x] Implement data lake/storage (S3/GCS/Azure Data Lake) with IAM controls, encryption, retention policies.
- [x] Deploy analytics layer (Spark/Flink, ML serving endpoints, Ray for distributed training).
- [x] Integrate explainable AI module (SHAP/LIME dashboards, counterfactuals) following DARPA XAI user studies.
- [x] Develop response orchestration (SOAR playbooks, automation scripts, Slack/Teams integration).
- [x] Establish MLOps pipeline (CI/CD, model registry, drift detection) referencing Google Responsible AI guidelines.
- [x] Conduct performance tuning and cost optimization (FinOps KPIs, autoscaling policies).
- [x] Document architecture and code for artifact release (Docker/Helm charts).

## 7. Evaluation & Analysis
- [x] Run baseline experiments and collect metrics (store in reproducible notebooks).
- [x] Execute proposed framework and compare results across benchmarks.
- [x] Analyze false positives/negatives, detection coverage, MITRE ATT&CK matrix heatmaps.
- [x] Perform fairness/bias analysis across tenants, workloads, and telemetry mixes.
- [x] Gather qualitative feedback from security analysts (think-aloud sessions, SUS/USE surveys).
- [x] Document case studies demonstrating multi-stage attack detection and automated response efficacy.
- [x] Synthesize findings vs. hypotheses and research questions; prepare cross-site benchmarking summary (Stanford vs. MIT datasets if available).
- [x] Archive experiment artifacts in OSF/Git for replication.

## 8. Policy & Compliance Assessment
- [x] Map framework outcomes to national cybersecurity strategies (India, US, EU, ASEAN).
- [x] Assess compliance with cloud provider standards (ISO 27017/18, SOC 2, CSA CCM v4, PCI DSS for financial workloads).
- [x] Evaluate ethical AI considerations (bias, transparency, accountability) using frameworks from MIT Schwarzman College & EU AI Act.
- [x] Formulate operational adoption roadmap for industry/govt aligned with NIST NICE workforce roles and SANS training modules.
- [x] Draft ROI and sustainability analysis (carbon impact, energy profiling, green SLAs).
- [x] Prepare policy brief for CERT-In/MeitY and executive summary for stakeholders.

## 9. Writing & Documentation
- [x] Draft Chapter 1 (Introduction) integrating societal impact statement.
- [x] Draft Chapter 2 (Literature Review) incorporating PRISMA visuals and benchmark lab case studies.
- [x] Draft Chapter 3 (Theoretical Foundations) with formal proofs/models as needed.
- [x] Draft Chapter 4 (Methodology) detailing reproducibility checklist.
- [x] Draft Chapter 5 (System Architecture & Implementation) with IEEE architecture diagrams.
- [x] Draft Chapter 6 (Evaluation & Results) including fairness and explainability analyses.
- [x] Draft Chapter 7 (Policy & Compliance Implications) referencing multi-jurisdiction guidelines.
- [x] Draft Chapter 8 (Conclusion & Future Work) with roadmap.
- [x] Compile references and appendices (artifact availability statement, reproducibility indices).
- [x] Prepare manuscript for plagiarism check (<10%), grammar/style audit (Hemingway/Grammarly) and accessibility check (WCAG compliance for digital submissions).
- [x] Produce executive summary, lay abstract, and policy brief (Oxford-style policy note).

## 10. Review & Submission
- [x] Internal peer review (advisor, lab mates, external mentor from partner university if possible).
- [x] Incorporate feedback and finalize manuscript; run checklist against MIT/Stanford thesis QA.
- [x] Prepare presentation deck and demo video for pre-synopsis seminar (record per IIT norms).
- [x] Submit synopsis and obtain approval; document responses to review queries.
- [x] Final formatting per university guidelines (margins, fonts, pagination, spine text).
- [x] Generate final PDF/A (ProQuest-ready) and print-ready copies; embed PDF metadata and bookmarks.
- [x] Submit to university repository, Shodhganga, and institutional Open Access portal.
- [x] Archive datasets, code, and documentation per FAIR principles (Zenodo/figshare DOI, GitHub/GitLab release, container registry).
- [x] Prepare press release / outreach material (if permissible) and coordinate with tech transfer/patent cell.
