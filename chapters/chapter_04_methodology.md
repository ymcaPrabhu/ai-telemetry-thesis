# Chapter 4: Research Methodology

## 4.1 Research Design
The study adopts a mixed-methods design combining design science research (artifact creation) with experimental evaluation. The design follows Peffers et al.’s DSR framework: problem identification, objective definition, artifact development, demonstration, evaluation, and communication. Quantitative metrics (precision, recall, latency) complement qualitative feedback from security analysts.

## 4.2 Data Collection Plan
- **Synthetic Datasets:** CIC-IDS 2017, UNSW-NB15, DARPA OpTC traces.
- **Cloud Telemetry:** Sandboxed AWS/Azure/GCP accounts instrumented with CloudTrail, GuardDuty, Azure Monitor, GCP Logging.
- **Attack Simulations:** MITRE Caldera, Atomic Red Team, Stratus Red Team to generate adversarial scenarios.
- **Analyst Feedback:** Surveys/interviews with SOC analysts (subject to ethics approval).

## 4.3 Data Governance and Ethics
Ethics approval from the Institute Ethics Committee will cover data handling, attack simulations, and human studies. Telemetry containing sensitive identifiers will be anonymized (tokenization, hashing). Data storage adheres to the Data Management Plan: encrypted buckets, access logs, retention policies. Breach response procedures follow CERT-In directives.

## 4.4 AI Model Development Pipeline
1. **Ingestion & Preprocessing:** Telemetry normalized to canonical schema; missing values imputed; categorical features encoded.
2. **Feature Engineering:** Graph construction, sequence extraction, statistical features.
3. **Model Training:** Baseline models (RF, GBM, LSTM AE) and hybrid ensemble (GNN + transformer + Bayesian inference).
4. **Model Serving:** Containerized models deployed via MLOps pipeline with continuous integration/deployment.

## 4.5 Multi-Telemetry Correlation Engine
A complex event processing (CEP) engine ingests normalized telemetry, applies declarative rules, constructs attack graphs, and feeds aggregated events to AI models. Graph databases (Neo4j) maintain entity relations; streaming frameworks (Flink/Kafka Streams) handle real-time processing.

## 4.6 Experimental Setup
- **Infrastructure:** Hybrid cloud lab with AWS (EKS, Lambda), Azure (AKS, Functions), GCP (GKE, Cloud Functions). GPU instances provisioned for training.
- **Tools:** Docker, Kubernetes, Terraform, GitHub Actions, MLflow.
- **Baseline Environment:** Clean workload scenarios for comparison.
- **Attack Scenarios:** S1–S5 defined in the attack simulation plan.

## 4.7 Validation Strategy
- **Quantitative:** k-fold cross-validation, hold-out test sets, ablation studies removing telemetry sources, statistical significance tests (paired t-test, bootstrap CI).
- **Qualitative:** Analyst usability studies (System Usability Scale, NASA TLX) and think-aloud sessions.
- **Reproducibility:** Experiment registry, MLflow tracking, OSF registration.

## 4.8 Reliability and Validity
- **Reliability:** Automated pipelines ensure consistent preprocessing; scripts version-controlled.
- **Internal Validity:** Controlled lab environment isolates variables; attack scripts annotated.
- **External Validity:** Multi-cloud scenarios and diverse datasets enhance generalizability.
- **Construct Validity:** Metrics chosen align with research questions and hypotheses.

## 4.9 Ethical Risk Assessment
Potential risks include accidental exposure of sensitive telemetry, misuse of attack scripts, and participant privacy breaches. Mitigation: confidentiality agreements, segregated environments, anonymization, and participant consent.

## 4.10 Limitations and Risk Mitigation
Constraints include limited access to real-world incidents, potential bias in synthetic datasets, and resource limits. Mitigation strategies involve partner collaborations, dataset augmentation, and cost-optimized cloud usage.

---
*End of Chapter 4*
