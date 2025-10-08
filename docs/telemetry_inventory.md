# Telemetry Source Inventory & Access Strategy

## 1. Telemetry Categories
| Category | Examples | Primary Use | Access Method | Sensitivity |
| --- | --- | --- | --- | --- |
| Network | VPC Flow Logs, AWS GuardDuty findings, Azure NSG flow logs | Traffic analysis, anomaly detection | Cloud APIs (AWS CLI, Azure Monitor REST) | Medium |
| Host/OS | CloudWatch Agent logs, OSQuery, Sysmon | Process/file monitoring | Agents, CloudWatch Logs, Azure Diagnostics | High |
| Identity & Access | AWS CloudTrail, Azure AD sign-in logs, GCP Cloud Audit | Credential abuse detection | API access via assumed roles/service accounts | High |
| Application | Kubernetes audit logs, container runtime events, serverless invocation logs | Lateral movement, privilege escalation | Fluentd/Fluent Bit collectors, Cloud Logging exports | High |
| Platform Services | AWS Config, Azure Security Center alerts, Google SCC | Configuration drift, compliance | API/SDK ingestion | Medium |
| Third-Party SaaS | Okta, O365, GitHub audit logs | Supply chain monitoring | REST APIs, webhooks | High |
| Security Tools | IDS/IPS alerts (Snort/Suricata), EDR logs | Baseline comparison | SIEM connectors | Medium |

## 2. Access Strategy
- **Cloud Providers:**
  - AWS: configure IAM role with `logs:DescribeLogStreams` and `logs:GetLogEvents`; use Kinesis Firehose for streaming.
  - Azure: Azure Monitor Diagnostic settings pushing to Event Hub; service principal with least privileges.
  - GCP: export to Pub/Sub; service account with Stackdriver Viewer.
- **Container/Kubernetes:** Deploy Fluent Bit DaemonSet; collect to Kafka topic per namespace.
- **Serverless Telemetry:** Wrap functions with logging middleware; use CloudWatch Logs Insights/Azure Log Analytics.
- **Identity Providers:** Use APIs (Okta System Log, Azure Graph) with token rotation.

## 3. Data Acquisition Milestones
1. Configure sandbox accounts with telemetry exports (Week 1).
2. Secure agreements for enterprise datasets (Week 3–4).
3. Automate ETL pipelines (Week 5).
4. Validate data quality (Week 6).

## 4. Security & Compliance
- Apply encryption at rest & transit (TLS 1.2+, AES-256).
- Mask tenant identifiers before storing in research environment.
- Maintain access logs; review monthly.

## 5. Documentation
- For each source, create YAML spec in `data/schemas/` containing fields, data types, retention.
- Provide sample datasets in `data/samples/` with README.

---
Prepared by: *Telemetry Acquisition Team*  
Last Updated: $(date +"%Y-%m-%d")
