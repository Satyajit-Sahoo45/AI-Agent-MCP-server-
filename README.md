# 🤖 MCP-X-Agent

**MCP-X-Agent** is an AI-powered automation tool that uses the **Model Context Protocol (MCP)** to intelligently create and publish posts on **X (formerly Twitter)**.  
It leverages **Gemini AI** for generating creative content and integrates with **X’s API** for automated posting.

---

## 🚀 Features

- 🧠 **AI Content Generation** — Automatically generates engaging post content using Gemini AI based on specific topics or prompts.  
- 🌐 **MCP Server Integration** — Built using the Model Context Protocol for modular AI agent architecture.  
- 🕒 **Automated Posting** — Publishes posts to X using the `twitter-api-v2` package.  

---

## 🧩 Tech Stack

- **Server:** Node.js (MCP Server)  
- **AI Model:** Gemini AI  
- **API:** X (Twitter) API using `twitter-api-v2`  

---

## ⚙️ Setup & Installation

### 🧠 1. Clone the Repository
```bash
git clone https://github.com/Satyajit-Sahoo45/Agent-X.git
cd Agent-X
```

### 🧠 2. Client Setup(Gemini AI)
```bash
  cd client
  (a) Create a .env file and add your Gemini API key: GEMINI_API_KEY=YOUR_GEMINI_API_KEY
  (b) Install dependencies: npm install
  (c) Run the client: node index.js
```

### 🧠 3. Server Setup
```bash
  (a) Navigate to the server directory: cd ../server
  (b) Create a .env file and add your X (Twitter) credentials:
      TWITTER_API_KEY=YOUR_TWITTER_API_KEY
      TWITTER_API_SECRET=YOUR_TWITTER_API_SECRET
      TWITTER_ACCESS_TOKEN=YOUR_TWITTER_ACCESS_TOKEN
      TWITTER_ACCESS_TOKEN_SECRET=YOUR_TWITTER_ACCESS_TOKEN_SECRET
  (c) Install dependencies: npm install
  (d) Run the server: npx nodemon index.js
```

## Project Structure
Agent-X/
├── client/
│   ├── index.js
│   ├── package.json
│   └── .env
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
├── README.md
