
import { GoogleGenAI, Type } from "@google/genai";
import { AspectRatio } from "../types";

// Initialize GoogleGenAI with the API key from environment variables
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates editorial images using the Flash 2.5 model.
 */
export const generateImageFlash = async (prompt: string, aspectRatio: AspectRatio = "16:9") => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: `Professional newsletter editorial illustration. Modern, high-end, high-resolution. Context: ${prompt}` }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("AI Image Generation failed:", error);
    throw error;
  }
};

/**
 * Generates concise and actionable copy using the Flash 3 model.
 */
export const generateNewsletterCopyFast = async (prompt: string, context: string = "") => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as a world-class newsletter copywriter. Generate concise, actionable, and punchy marketing copy. Focus on impact and directness. Prompt: "${prompt}" Current context: ${context}. Avoid filler sentences.`,
    config: { temperature: 0.8 }
  });
  return response.text;
};

/**
 * Generates high-quality, detailed copy using the Pro 3 model with reasoning.
 */
export const generateNewsletterCopyPro = async (prompt: string, context: string = "") => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Act as a senior marketing strategist. Provide high-quality, professional newsletter content. The writing should be actionable, authoritative, yet engaging. Prompt: "${prompt}" Current context: ${context}. Ensure the tone is consistent with high-end digital publications.`,
    config: { 
      temperature: 0.7,
      thinkingConfig: { thinkingBudget: 16384 }
    }
  });
  return response.text;
};

/**
 * Generates high-converting email subjects.
 */
export const generateEmailSubject = async (content: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this content: "${content}". Suggest 5 high-converting email subject lines that are concise and spark curiosity. Return only a JSON array of strings.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } }
    }
  });
  try {
    return JSON.parse(response.text || "[]");
  } catch {
    return [];
  }
};
