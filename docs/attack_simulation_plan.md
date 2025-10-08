# Attack Simulation & Evaluation Plan

## 1. Objectives
- Generate realistic multi-stage cyber attack scenarios to evaluate detection capabilities.
- Cover tactics from MITRE ATT&CK (Enterprise) across cloud-specific techniques.

## 2. Tooling
- **MITRE Caldera** (adversary emulation platform)
- **Atomic Red Team** (modular ATT&CK tests)
- **Stratus Red Team** (cloud-native attack simulations)
- **Custom scripts** for serverless abuse, container escapes

## 3. Scenario Library
| Scenario | ATT&CK Tactics | Description | Telemetry Sources |
| --- | --- | --- | --- |
| S1: Credential Access | Initial Access, Credential Access, Persistence | Compromised IAM user via phishing; privilege escalation | CloudTrail, Azure AD logs |
| S2: Lateral Movement in Kubernetes | Discovery, Lateral Movement, Execution | Compromise pod, escalate through kubelet API | k8s audit logs, container runtime |
| S3: Data Exfiltration via Serverless | Collection, Exfiltration | Malicious Lambda/Function exports data | CloudWatch Logs, API Gateway logs |
| S4: Crypto Mining Attack | Execution, Impact | Deploy mining container through CI/CD compromise | CI logs, container metrics |
| S5: Supply Chain SaaS Abuse | Initial Access, Command & Control | OAuth token theft from third-party SaaS | SaaS audit logs, network telemetry |

## 4. Execution Plan
1. Setup isolated lab environment mirroring production (IaaS + k8s + serverless).
2. Run baseline (no defense) to collect “clean” telemetry.
3. Execute scenarios sequentially; log start/end times, parameters.
4. Replay scenarios under different cloud providers for generalization.
5. Document configuration and results for reproducibility.

## 5. Evaluation Metrics
- Detection rate (per stage)
- Time-to-detect (MTTD)
- False positives triggered by normal workloads
- ATT&CK technique coverage

## 6. Safety Measures
- Use segregated accounts; disable billing alerts to avoid overages.
- Restrict outbound network connections during tests.
- Clean up resources post-execution.

## 7. Deliverables
- Scenario scripts stored in `experiments/scenarios/`
- Execution logs and telemetry snapshots in `data/attack_runs/`
- Evaluation report template in `reports/`

---
Prepared by: *Red Team Simulation Unit*  
Last Updated: $(date +"%Y-%m-%d")
