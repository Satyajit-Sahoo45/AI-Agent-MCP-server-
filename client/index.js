import { config } from "dotenv";
import readline from "readline/promises";
import { GoogleGenAI } from "@google/genai";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

config();

let tools = [];
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const mcpClient = new Client({
  name: "example-client",
  version: "1.0.0",
});

const chatHistory = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

mcpClient
  .connect(new SSEClientTransport(new URL("http://localhost:3000/sse")))
  .then(async () => {
    console.log("CONNECTED TO MCP SERVER");

    tools = (await mcpClient.listTools()).tools.map((tool) => {
      return {
        name: tool.name,
        description: tool.description,
        parameters: {
          type: tool.inputSchema.type,
          properties: tool.inputSchema.properties,
          required: tool.inputSchema.required,
        },
      };
    });

    userInputLoop();

    // console.log("Available tools :", tools);
  });

async function userInputLoop(toolCall) {
  if (toolCall) {
    console.log("calling tool ", toolCall.name);

    chatHistory.push({
      role: "model",
      parts: [
        {
          text: `calling tool ${toolCall.name}`,
          type: "text",
        },
      ],
    });

    const toolResult = await mcpClient.callTool({
      name: toolCall.name,
      arguments: toolCall.args,
    });

    // console.log(toolResult);
    chatHistory.push({
      role: "user",
      parts: [
        {
          text: "Tool Result : " + toolResult.content[0].text,
          type: "text",
        },
      ],
    });
  } else {
    // ask question
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
  }

  // const question = await rl.question("You: ");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: chatHistory,
    config: {
      tools: [
        {
          functionDeclarations: tools,
        },
      ],
    },
  });

  // console.log(response.candidates[0].content.parts[0].text);

  const functionCall = response.candidates[0].content.parts[0].functionCall;
  const responseText = response.candidates[0].content.parts[0].text;

  if (functionCall) {
    return userInputLoop(functionCall);
  }

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
