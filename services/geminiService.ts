
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_NAME } from '../constants'; // SIMULATED_KNOWLEDGE_BASE will be passed as 'context'
import { DocumentSource, AIResponse } from '../types';

const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.error("API_KEY environment variable not found. Gemini API will not be available.");
}

const formatContextForPrompt = (context: DocumentSource[]): string => {
  if (!context || context.length === 0) {
    return "No specific pre-loaded documents provided.";
  }
  return context.map(doc =>
    `Document Title: ${doc.title}\nType: ${doc.type}\n${doc.url ? `URL: ${doc.url}\n` : ''}Content Snippet: ${doc.snippet}`
  ).join('\n\n---\n\n');
};

export const askAI = async (question: string, localContext: DocumentSource[]): Promise<AIResponse> => {
  if (!ai) {
    throw new Error("Gemini API client is not initialized. Please ensure API_KEY is set.");
  }

  const formattedLocalContext = formatContextForPrompt(localContext);

  const systemInstructionText = `You are a specialized AI assistant for Chaitanya Bharathi Institute of Technology (CBIT).
1. Your knowledge is strictly limited to the "Provided Documents Context" listed below. Always answer based ONLY on this information.
2. You CANNOT search the web or access any external information outside of these documents.
3. If the answer cannot be found in the "Provided Documents Context", you MUST explicitly state: "I could not find information about that in the provided documents." or "My knowledge is limited to the provided documents, and I don't have information on that topic." Do not attempt to answer if the information is not present.
4. Be concise, accurate, and directly address the user's question using only the provided context.
5. Do not refer to yourself as a large language model or general AI. You are the CBIT AI Assistant.
6. Do not invent information, URLs, or details not present in the "Provided Documents Context".

Provided Documents Context:
${formattedLocalContext}
---
End of Provided Documents Context. Now answer the user's question based ONLY on this context.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: [{ role: "user", parts: [{ text: question }] }],
      config: {
        systemInstruction: { role: "system", parts: [{ text: systemInstructionText }] },
        temperature: 0.3, // Slightly lower temperature for more factual responses from fixed context
        topP: 0.9,
        topK: 40,
        // No tools (like googleSearch) are provided, to restrict to local context.
      }
    });

    const textResponse = response.text;
    if (!textResponse || textResponse.trim() === "") {
      return { text: "I'm sorry, I couldn't generate a response based on the provided documents. Please try rephrasing your question." };
    }
    
    // Since Google Search is removed, sources will not be from groundingMetadata.
    // The AI might mention internal documents based on instruction, but we won't populate AIResponse.sources here.
    return { text: textResponse, sources: undefined };

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    if (error.message) {
      if (error.message.includes('API_KEY_INVALID')) {
        throw new Error("The Gemini API key is invalid. Please check your configuration.");
      }
      if (error.message.toLowerCase().includes('quota')) {
        throw new Error("You have exceeded your Gemini API quota. Please check your usage limits.");
      }
    }
    throw new Error("An error occurred while communicating with the AI. Please try again later.");
  }
};
