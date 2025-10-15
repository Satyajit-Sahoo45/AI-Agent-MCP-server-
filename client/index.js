import { config } from "dotenv";
import readline from "readline/promises";
import { GoogleGenAI } from "@google/genai";

config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const chatHistory = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function userInputLoop() {
  const question = await rl.question("You: ");

  chatHistory.push({
    role: "user",
    parts: [
      {
        text: question,
        type: "text",
      },
    ],
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
  });

  // console.log(response.candidates[0].content.parts[0].text);
  const responseText = response.candidates[0].content.parts[0].text;
  chatHistory.push({
    role: "model",
    parts: [
      {
        text: responseText,
        type: "text",
      },
    ],
  });

  console.log(`AI: ${responseText}`);

  userInputLoop();
}

userInputLoop();
