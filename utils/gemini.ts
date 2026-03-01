import { GoogleGenAI } from "@google/genai";

export const getGeminiApiKey = (): string => {
  // Check for Vercel/Vite environment variable first
  if (import.meta.env.VITE_GEMINI_API_KEY) {
    return import.meta.env.VITE_GEMINI_API_KEY;
  }
  
  // Check for AI Studio environment variable
  // @ts-ignore - process.env is replaced by Vite define plugin
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    // @ts-ignore
    return process.env.API_KEY;
  }

  // Fallback for local dev if configured differently
  // @ts-ignore
  if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
    // @ts-ignore
    return process.env.GEMINI_API_KEY;
  }

  console.warn("Gemini API Key not found. Chat features will not work.");
  return "";
};

export const createGeminiInstance = () => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("Missing Gemini API Key");
  }
  return new GoogleGenAI({ apiKey });
};
