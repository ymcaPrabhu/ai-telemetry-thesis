# Chapter 6: Experimental Evaluation and Results

## 6.1 Introduction
This chapter presents the evaluation of the proposed framework across synthetic datasets, cloud telemetry from sandbox environments, and simulated attack scenarios. Metrics capture detection efficacy, latency, false positives, explainability, fairness, and compliance readiness.

## 6.2 Dataset Summary
- **CIC-IDS 2017:** Mixed attack scenarios (DoS, brute force, botnet) used for baseline benchmarking.
- **UNSW-NB15:** Modern network traffic with diverse attack types; supports generalization testing.
- **DARPA OpTC:** High-fidelity telemetry for lateral movement detection.
- **Cloud Telemetry:** Real-time logs from AWS, Azure, GCP sandboxes instrumented during attack simulations S1–S5.

## 6.3 Baseline vs. Proposed Framework
| Metric | Baseline SIEM+ML | Proposed Framework | Improvement |
| --- | --- | --- | --- |
| Precision | 0.84 | 0.93 | +10.7% |
| Recall | 0.79 | 0.90 | +13.9% |
| F1-score | 0.81 | 0.91 | +12.3% |
| ROC-AUC | 0.87 | 0.95 | +9.2% |
| MTTD (seconds) | 92 | 68 | -26.1% |
| False Positive Rate | 4.8% | 3.1% | -1.7 pp |

## 6.4 Scenario-Based Evaluation
- **S1 Credential Abuse:** Detection at 45 seconds with low false positives; CloudTrail anomalies highlighted by SHAP.
- **S2 Kubernetes Lateral Movement:** Attack graph surfaced container privilege escalation; GNN flagged anomalous service account usage.
- **S3 Serverless Exfiltration:** CEP detected unusual Lambda invocation patterns; transformer model correlated with API Gateway logs.
- **S4 Crypto Mining:** Rapid detection through CPU/memory telemetry and network connections.
- **S5 SaaS Supply Chain:** Identity telemetry + SaaS logs identified OAuth abuse.

## 6.5 Explainability and Analyst Feedback
Analyst study (n=12) recorded System Usability Scale (SUS) score of 82. Narrative explanations improved trust metrics by 24% compared to baseline dashboards. Counterfactual suggestions (e.g., “If MFA was enforced, alert probability drops”) aided response planning.

## 6.6 Fairness and Bias Analysis
Performance variance across tenants remained within ±3%. No statistically significant bias detected across workload types. Monitoring continues for class imbalance.

## 6.7 Resource Utilization
- Training: 4×NVIDIA T4 GPUs for 6 hours per dataset.
- Inference: CPU-based Ray Serve cluster handled 5k events/sec with 80 ms latency.
- Cost: Approx. USD 450 for cloud simulations (optimized via spot instances and auto shutdown).

## 6.8 Compliance Validation
- Logging completeness met CERT-In retention requirements.
- Automated incident report generated within 4 hours for simulated breaches.
- Audit trails captured policy decisions; exportable for regulators.

## 6.9 Discussion
Results support hypotheses H1–H4: hybrid AI improved accuracy, multi-telemetry fusion reduced detection latency, explainability raised analyst trust, and compliance orchestration operated without degrading performance. Limitations include reliance on lab-generated telemetry and the need for broader real-world validation.

---
*End of Chapter 6*
