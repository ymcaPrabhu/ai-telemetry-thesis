# Ethics & Data Approval Framework

This document summarizes the approvals, clearances, and governance checkpoints required before collecting telemetry or human feedback for the thesis.

## 1. Institutional Ethics / IRB Process
- **Responsible Office:** Institute Ethics Committee (IEC) or Institutional Review Board (IRB) equivalent.
- **Application Package:**
  - Research proposal summary (≤5 pages)
  - Risk assessment (data sensitivity, attack simulation implications)
  - Participant consent forms (for analyst surveys/interviews)
  - Data handling plan (encryption, retention, disposal)
  - CV of researcher and supervisor endorsements
- **Reference Models:**
  - IIT Bombay IEC application template (2024)
  - Oxford Cybersecurity CDT ethical evaluation checklist
  - NUS SoC ethical risk matrix
- **Timeline:** Submit ≥6 weeks before data collection; include conditional approvals for external collaborations.

## 2. Data Access Permissions
- **Cloud Providers:** AWS, Azure, Google Cloud – secure research program agreements; abide by terms of service and data residency.
- **Enterprise Partners:** Non-disclosure agreements; anonymization commitments; data controller approvals.
- **Public Datasets:** Ensure license compliance (Creative Commons, UNB, AWS Open Data). Maintain dataset provenance log.

## 3. Security & Privacy Controls
- Align with MeitY master direction on cloud security and CERT-In 2022 directives.
- Store sensitive telemetry in encrypted vaults (AES-256, KMS-managed keys).
- Implement access control matrix (role-based) and audit logging.
- Conduct privacy impact assessment referencing NIST Privacy Framework and MIT CSAIL privacy guidelines.

## 4. Human Subjects (Analyst Studies)
- Consent forms based on Stanford Human Subjects template, localized for IIT.
- Provide participants with study info sheets, withdrawal rights, compensation details.
- Record and anonymize responses; store transcripts securely.

## 5. Third-Party Tools & Simulations
- MITRE Caldera, Atomic Red Team: verify licensing; note safe operation guidance.
- DARPA OpTC, Stratosphere IPS: follow usage terms, cite data origin.

## 6. Compliance Checklist
- [ ] IEC/IRB approval ID recorded in thesis front matter.
- [ ] Data sharing agreements archived in `compliance/contracts/`.
- [ ] Consent templates version-controlled.
- [ ] Access logs reviewed quarterly.
- [ ] Breach response plan documented (align with CERT-In 6-hour notification rule).

## 7. Deliverables
- Ethics submission dossier (PDF + annexures).
- Data governance policy (uploaded to docs/).
- Summary report of approvals appended to thesis (Appendix B).

---
Prepared by: *Thesis Ethics Lead*  
Last Updated: $(date +"%Y-%m-%d")
