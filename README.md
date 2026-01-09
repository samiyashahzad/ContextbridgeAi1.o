# ContextBridge AI 🌉

Role-Based Context Intelligence for B2B Customer Handoffs

ContextBridge AI is an AI-powered system designed to eliminate “Context Amnesia” during critical handoffs between Sales → Customer Success → Support teams. It transforms messy, unstructured inputs—meeting transcripts, email threads, and notes—into actionable, role-specific insights, helping teams onboard faster and avoid expectation mismatches that lead to churn.

---

## 🚀 Value Proposition

In B2B SaaS, critical customer context often dies in a CRM graveyard.

Sales reps make verbal commitments, customers share technical anxieties, and implementation teams are forced to rediscover context from scratch. This results in:

- repeated discovery calls
- onboarding delays
- misaligned expectations
- early-stage churn

ContextBridge AI structures important customer context and delivers it to the right role at the right time.

---

## ✨ What ContextBridge AI Does

- Extracts Jobs-to-be-Done  
  Identifies the true customer motivations behind the purchase.

- Surfaces Commitments & Promises  
  Captures explicit and implicit sales commitments before they’re forgotten.

- Flags Risks Early  
  Highlights budget, timeline, or technical concerns before they escalate.

- Generates Role-Based Views  
  Delivers tailored context for each team to reduce noise and improve focus.

---

### 🧠 Key Features (MVP)

- AI-Powered Semantic Extraction  
  Uses Google Gemini (Flash / Pro) to analyze long, complex transcripts with high semantic accuracy.

- Human-in-the-Loop Review  
  AI-generated insights are editable before finalization to ensure accuracy and accountability.

- Role-Specific Context Outputs  
  - Customer Success Brief — Focused on onboarding goals, expectations, and immediate next steps.  
  - Support Technical Brief — Highlights tech stack, integrations, and prior technical discussions.  
  - Sales Risk Audit — Flags potentially risky promises or unresolved objections for managers.

- Source Transparency  
  Each extracted insight links back to a relevant snippet from the original input for traceability and trust.

---

## 🛠️ Tech Stack

- UI / Prototype Layer: Streamlit (Python)  
- AI Model: Google Gemini API (gemini-3-flash-preview, gemini-pro)  
- Prototyping Environment: Google AI Studio (exported for version control)

> ⚠️ This repository focuses on core logic and MVP workflow validation, not production deployment.

---

## ⚙️ Setup & Installation

### Prerequisites
- Python 3.9+
- Google AI Studio API Key

### Installation
Clone the repository and run the prototype:

```bash
git clone <your-repo-url>
cd contextbridge-ai
pip install -r requirements.txt
export API_KEY='your_gemini_api_key_here'
streamlit run main.py
```

(Replace `<your-repo-url>` with your repository URL and set `API_KEY` to your Gemini API key.)

---

### 📂 Project Structure

- `main.py` — Streamlit application logic and workflow  
- `constants.py` — Gemini system prompts & extraction schema  
- `types.py` — Data models for structured output  
- `requirements.txt` — Python dependencies

---

## 📌 Scope & Limitations (Intentional)

Included (MVP)
- Text-based ingestion (transcripts, emails, notes)
- Role-based summarization
- Human review before handoff

Out of Scope (MVP)
- Direct CRM integrations (Salesforce, HubSpot)
- Audio transcription
- Real-time syncing
- Production-grade uptime

---

## 🚧 Status

MVP / Prototype — actively iterating on reliability, evaluation metrics, and UX.

Built to bridge the Sales → Success gap — where context is lost and churn begins.
