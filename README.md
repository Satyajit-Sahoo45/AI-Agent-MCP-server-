# 🤖 MCP-X-Agent

**MCP-X-Agent** is an AI-powered automation tool that uses the **Model Context Protocol (MCP)** to intelligently create and publish posts on **X**.  

---

## 🚀 Features

- 🧠 **AI Content Generation** — Automatically generates post content using AI models with a specific topic.
- 🌐 **MCP Server Integration** — Built using the Model Context Protocol for modular AI agent architecture.
- 🕒 **Automated Posting** — Publishes posts to X via its API.
  
---

## 🧩 Tech Stack

- **Server:** Node.js (MCP Server)
- **AI Model:** Gemini AI 
- **API:** X (package: twitter-api-v2) API

---

## ⚙️ Setup & Installation
**IN CLIENT DIR**
-**1.** Add the .env file and add your GEMINI_API_KEY to it
        GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'
        
-**2.** npm install
-**3.** RUN USING "node index.js"

**IN SERVER DIR**
-**1.** Add the .env file and add your KEYS to it
        TWITTER_API_KEY="YOUR_TWITTER_API_KEY"
        TWITTER_API_SECRET="YOUR_TWITTER_API_SECRET"
        TWITTER_ACCESS_TOKEN="YOUR_TWITTER_ACCESS_TOKEN"
        TWITTER_ACCESS_TOKEN_SECRET="YOUR_TWITTER_ACCESS_TOKEN_SECRET"        
-**2.** npm install
-**3.** RUN USING "npx nodemon index.js"


### 1. Clone the Repository
```bash
https://github.com/Satyajit-Sahoo45/Agent-X.git
cd mcp-x-agent
