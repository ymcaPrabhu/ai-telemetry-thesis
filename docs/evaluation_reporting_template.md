# Evaluation & Analysis Reporting Template

## 1. Experiment Metadata
- Experiment ID:
- Date:
- Dataset(s):
- Model Configuration:
- Scenario/Attack Run:
- Analyst Reviewer:

## 2. Metrics Summary
| Metric | Baseline | Proposed Framework | % Improvement |
| --- | --- | --- | --- |
| Precision |  |  |  |
| Recall |  |  |  |
| F1-score |  |  |  |
| ROC-AUC |  |  |  |
| MTTD (sec) |  |  |  |
| False Positive Rate |  |  |  |
| Alert Volume |  |  |  |

## 3. Explainability Insights
- Top contributing features (SHAP values)
- Counterfactual explanations
- Analyst feedback (Likert scores, qualitative notes)

## 4. Fairness & Bias Checks
- Performance across tenants/regions
- Disparity metrics (Δprecision)
- Mitigation actions (if any)

## 5. ATT&CK Coverage
| Tactic | Techniques Detected | Gaps |
| --- | --- | --- |

## 6. Resource Utilization
- Compute time, GPU usage
- Cost estimates (cloud billing)

## 7. Compliance Notes
- Logging completeness
- Data residency adherence
- Incident reporting alignment

## 8. Observations & Lessons Learned
- Strengths
- Limitations
- Next steps

## 9. Attachments
- Plots/Confusion matrices
- Logs
- Notebook references

---
Use this template for each experiment report stored in `reports/experiments/`.
