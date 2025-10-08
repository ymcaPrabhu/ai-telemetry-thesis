# Data Management Plan (DMP)

## 1. Summary
This plan ensures that all telemetry, experimental datasets, and analysis artifacts comply with FAIR principles (Findable, Accessible, Interoperable, Reusable) and institutional/government regulations.

## 2. Data Types
- **Synthetic datasets:** CIC-IDS 2017, UNSW-NB15, DARPA OpTC traces.
- **Cloud telemetry:** AWS CloudTrail/GuardDuty, Azure Monitor, GCP Cloud Logging.
- **Simulated attack logs:** MITRE Caldera, Atomic Red Team outputs.
- **User studies:** Analyst survey/interview transcripts.

## 3. Collection & Processing
- Automated ingestion pipelines using Kafka/Fluentd.
- Preprocessing: normalization, enrichment, labeling.
- Maintain data provenance records (dataset version, source URL, license).
- Anonymization: remove PII, tokenize account identifiers.

## 4. Storage & Security
- Primary storage on encrypted cloud buckets (AES-256, KMS-managed keys).
- Access control via IAM roles; MFA required.
- Sensitive data mirrored to on-prem secure server (IIT policy).
- Audit logs retained for ≥5 years.

## 5. Documentation & Metadata
- Use schema catalog (Glue/Data Catalog) with JSON schemas.
- Metadata captured in YAML descriptors (fields, units, sensitivity level).
- Publish dataset documentation in `docs/datasets/` plus README.
- Apply Dublin Core for final dataset releases; include ORCID, keywords.

## 6. Sharing & Access
- Open datasets released under CC-BY or MIT license where allowed.
- Sensitive datasets shared under NDA or restricted access (encrypted archives).
- Register DOIs on Zenodo/figshare for public artifacts.
- Provide GitHub repository with code, notebooks, Docker images.

## 7. Preservation
- Archive datasets & code in institutional repository + Shodhganga supplements.
- Maintain redundant backups (cloud + institutional storage).
- Validate checksums annually.

## 8. Responsibilities
- Principal Investigator: data stewardship, compliance oversight.
- Data Engineer: pipeline maintenance, security controls.
- Analyst Lead: labeling quality assurance.
- Ethics Coordinator: consent and privacy compliance.

## 9. Budget & Resources
- Cloud storage/compute credits via AWS/GCP/Azure research programs.
- Encryption key management (KMS) covered in cloud plan.
- Backup storage allocated from IIT HPC resources.

## 10. Risk Management
- Breach response: follow CERT-In 6-hour notification rule; document incidents.
- Data loss mitigation: automated backups, replication.
- Obsolescence: periodic format migration (CSV/Parquet/JSON).

## 11. Review Schedule
- Quarterly review of data inventory & access logs.
- Update DMP after major project milestones or new data types.

---
Prepared by: *Data Governance Team*  
Last Updated: $(date +"%Y-%m-%d")
