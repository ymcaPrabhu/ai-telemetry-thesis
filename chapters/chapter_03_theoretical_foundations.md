# Chapter 3: Theoretical Foundations and Conceptual Model

## 3.1 Introduction
This chapter establishes the theoretical basis for the proposed AI-driven multi-telemetry framework. It integrates cybersecurity models, telemetry taxonomies, AI paradigms, and compliance considerations into a cohesive conceptual architecture that guides the methodology.

## 3.2 Cyber Kill Chain and MITRE ATT&CK Mapping
The Lockheed Martin Cyber Kill Chain (reconnaissance to exfiltration) and MITRE ATT&CK matrix provide structured representations of adversarial behavior. Aligning telemetry signals with ATT&CK techniques (e.g., `T1078 Valid Accounts`, `T1552 Unsecured Credentials`) enables systematic detection coverage. Attack graphs and kill-chain theory justify multi-stage reasoning across telemetry.

## 3.3 Telemetry Taxonomy
Drawing on observability literature, telemetry is categorized by:
- **Source:** network, host, identity, application, SaaS, platform.
- **Format:** JSON logs, CSV metrics, binary traces.
- **Velocity:** batch vs. streaming.
- **Sensitivity:** public, confidential, restricted.
This taxonomy informs schema normalization and sensitivity-aware storage.

## 3.4 AI and Analytics Foundations
- **Graph Theory:** Entities (users, workloads, resources) modeled as nodes; interactions as edges. Graph neural networks (GNN) learn embeddings that capture entity relationships.
- **Temporal Modeling:** Transformers and sequence models handle variable-length event sequences, capturing temporal dependencies.
- **Probabilistic Reasoning:** Bayesian belief networks fuse heterogeneous evidence to compute compromise likelihood.
- **Complex Event Processing:** CEP engines derive higher-order events from low-level telemetry, applying declarative rules.

## 3.5 Explainability and Human-Centered AI
Explainable AI (XAI) principles from DARPA, EU AI Act, and Google’s Responsible AI guidelines emphasize transparency, interpretability, and trust. Techniques (SHAP, counterfactuals) enable analysts to understand model decisions. User-centered design literature advocates for interactive dashboards, narrative explanations, and feedback loops.

## 3.6 Compliance and Governance
Policy-as-code concepts (Open Policy Agent), audit trail requirements, and risk management frameworks (NIST RMF, ISO 27001) underpin the governance layer. The theoretical model must align detection outputs with compliance obligations, ensuring traceability for auditors and regulators.

## 3.7 Conceptual Architecture
The conceptual model (Figure 3.1) layers telemetry ingestion, data fabric, AI analytics, explainability, and governance. Each layer encapsulates specific theoretical constructs:
- **Layer 1:** Data acquisition (observability theory, distributed systems).
- **Layer 2:** Data fabric (data lakehouse, metadata management).
- **Layer 3:** AI analytics (GNN, transformers, Bayesian inference, CEP).
- **Layer 4:** Explainability (XAI, human-computer interaction).
- **Layer 5:** Governance (policy-as-code, compliance mapping).
Interactions are orchestrated via pipelines, feedback loops, and automation.

## 3.8 Hypotheses Revisited
The conceptual architecture operationalizes hypotheses H1–H4 by linking theoretical constructs to measurable outcomes (accuracy, latency, trust, compliance). The subsequent methodology chapter details how these hypotheses are tested.

---
*End of Chapter 3*
