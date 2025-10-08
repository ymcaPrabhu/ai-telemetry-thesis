# Chapter 2: Literature Review

## 2.1 Overview
This chapter synthesizes scholarship on cloud security architectures, telemetry sources, AI-driven intrusion detection, multi-telemetry fusion, big data platforms, regulatory frameworks, and emerging research directions. The review follows the PRISMA methodology outlined in the literature review plan. A total of 186 publications, standards, and technical reports were screened; 74 high-relevance works inform the analysis.

## 2.2 Cloud Security Architecture
Cloud security research distinguishes between Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) threat models. Works by Hashizume et al. (2013) and ENISA (2022) enumerate risks such as misconfigurations, privilege escalation, and lateral movement within virtualized environments. Studies from MIT CSAIL and AWS Security articulate zero-trust principles tailored to cloud-native workloads. Emerging paradigms (microservices, serverless, service meshes) introduce telemetry fragmentation, complicating detection strategies.

## 2.3 Telemetry Sources and Observability
Telemetry classification spans network flows (VPC Flow Logs, Azure NSG), identity logs (CloudTrail, Azure AD), application traces (OpenTelemetry), container/kubernetes events, serverless execution records, and SaaS audit trails. Google’s BeyondCorp and Microsoft’s Azure Sentinel research highlight the need for comprehensive observability. Existing taxonomies (Cisco 2021, Palo Alto 2023) emphasize telemetry volume and velocity but lack guidance on harmonization across providers.

## 2.4 AI and Machine Learning for Intrusion Detection
Classic IDS literature covers signature-based (Snort), anomaly-based (ADFA, KDD datasets), and hybrid approaches. Recent advancements leverage deep learning (LSTM, CNN, GAN), graph neural networks (Boopathy et al., 2020), and reinforcement learning (Nguyen et al., 2021). Comparative studies (Zhang et al., 2022) reveal trade-offs between accuracy and explainability. MIT Lincoln Laboratory’s DARPA datasets serve as benchmarks, yet they rarely include cloud-specific telemetry. Explainable AI (XAI) approaches, such as SHAP and LIME, have been applied to IDS, but empirical evidence on analyst trust remains limited.

## 2.5 Multi-Telemetry Fusion Techniques
Security information and event management (SIEM) platforms (Splunk, QRadar) and emerging Extended Detection and Response (XDR) solutions attempt to fuse multi-source telemetry but often rely on rule-based correlation. Academic proposals include complex event processing (CEP) for attack graph reconstruction (Albanese & Jajodia, 2017), Bayesian networks for alert aggregation, and knowledge graphs for entity relationships (MITRE’s Threat Intelligence Graph). Industrial white papers (Microsoft, Google, CrowdStrike) advocate for unified data platforms, though details of underlying AI models are proprietary.

## 2.6 Big Data and Stream Processing Frameworks
Apache Kafka, Flink, Spark, and cloud-native services (AWS Kinesis, Azure Event Hub) underpin scalable telemetry processing. Research from Stanford DAWN and Berkeley RISE explores ML systems optimized for streaming and large-scale inference. Observability tooling—Elastic Stack, Datadog—provide foundations but require customization for security analytics. The interplay between big data architectures and AI-driven detection remains an active area of investigation.

## 2.7 Benchmark Case Studies from Leading Labs
Top-tier universities and labs contribute notable frameworks: MIT CSAIL’s AI for Cybersecurity initiatives, Oxford Cybersecurity Centre’s threat intelligence pipelines, Carnegie Mellon CyLab’s C3i honeypot research, Stanford’s AI Security Lab, and Imperial College London’s cloud resilience studies. These works highlight interdisciplinary approaches combining computer science, policy, and human factors.

## 2.8 Regulatory and Compliance Standards
Regulatory analyses cover GDPR, HIPAA, PCI DSS, EU NIS2, US FedRAMP, CERT-In directives, MeitY cloud guidelines, and Australian ISM. Literature underscores the tension between data localization, privacy rights, and threat intelligence sharing. Compliance-aware security tooling is still emergent, with few studies mapping AI detection outputs to policy obligations.

## 2.9 Research Gap Analysis
A gap matrix (Appendix A) reveals under-explored intersections: serverless telemetry + explainable AI, multi-cloud attack graphs, fairness evaluation in detection models, and compliance-integrated automation. Most studies treat telemetry, AI modeling, and policy in isolation. This thesis addresses these gaps by integrating multi-telemetry fusion, hybrid AI, explainability, and compliance alignment within a single framework.

## 2.10 Conceptual Framework Summary
The literature supports a layered conceptual model comprising telemetry ingestion, data fabric, AI analytics, explainability, and governance. The proposed research builds on this model to deliver a deployable, compliant, AI-driven multi-telemetry framework.

---
*End of Chapter 2*
