# 🛠️ FlowFix – AI-powered Ticket Triage & Assignment System

> **FlowFix** automates the elaboration, triage, and assignment of incoming issues using AI agents and intelligent workflows—so your team can focus on solving, not sorting.

---

## 🚀 Overview

**FlowFix** is an intelligent ticketing platform designed to streamline issue management for professional teams. It transforms unstructured user-reported issues into detailed, categorized tickets using **Gemini-powered AI agents**, and assigns them to the most relevant team members through a smart workflow engine.

The system is built on the **MERN stack**, uses **agentic AI pipelines** for modular processing, and integrates **Inngest** for robust background workflows and **Arcject** for rate-limiting and stability.

---

## 🌟 Key Features

- 🔍 **AI Elaboration** – Converts vague issue statements into actionable, context-rich tickets using Gemini  
- 🧠 **Agentic Pipelines** – Modular AI processing for elaboration, classification, and prioritization  
- ⚙️ **Auto Assignment** – Role- and workload-based dynamic assignment of tickets  
- 🔄 **Asynchronous Workflows** – Managed with Inngest for reliability and scale  
- 🛡️ **Rate Limiting** – Arcject integration to control abuse and traffic spikes  
- 🖥️ **Modern Dashboard** – Clean, responsive React UI for managing and tracking issues  

---

## 🧩 Tech Stack

| Tech           | Purpose                                     |
|----------------|---------------------------------------------|
| **MongoDB**     | Persistent storage for users and tickets    |
| **Express.js**  | Backend APIs                                |
| **React.js**    | Frontend dashboard                          |
| **Node.js**     | Server-side logic                           |
| **Gemini**      | AI model for elaboration and classification |
| **Inngest**     | Workflow orchestration                      |
| **Arcject**     | Rate limiting and request control           |

---

## ⚙️ How It Works

1. **Issue Submission**  
   A user submits a simple issue or request via the frontend form.

2. **AI Elaboration Pipeline**  
   Gemini generates:
   - Context-rich elaboration  
   - Suggested category and priority  
   - Structured metadata for routing  

3. **Workflow Execution via Inngest**  
   - Determines the best available team member  
   - Assigns the ticket accordingly  
   - Notifies the assigned moderator

4. **Ticket Management**  
   Tickets are visible in dashboards for tracking, updating, and resolution.
