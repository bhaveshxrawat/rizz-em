"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function pickupLinePromptG(
    detailsInput: string,
    styleInput: string
) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "text/plain" },
        });
        const prompt = `Suggest me one pickup line for my crush. About my crush, ${detailsInput}. The pickup line should have a ${
            styleInput || "funny"
        } vibe.`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        return text;
    } catch (err) {
        throw new Error(`An error occurred: ${err!}`);
    }
}
