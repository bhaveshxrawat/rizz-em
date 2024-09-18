"use server";

// import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: `${process.env.OPENROUTER}`,
    defaultHeaders: {
        "HTTP-Referer": "https://rizz-em.vercel.app", // Optional, for including your app on openrouter.ai rankings.
        "X-Title": "Rizz-em", // Optional. Shows in rankings on openrouter.ai.
    },
});

export default async function pickupLinePrompt(
    detailsInput: string,
    styleInput: string
) {
    try {
        const completion = await openai.chat.completions.create({
            model: "openai/gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `You are smooth talker, verbal casanova, flirtation virtuoso tasked to create a short, clever conversation starter for my crush using the following attributes: ${detailsInput}. Refrain from using the "Are you a" template and cheesy lines. It should have a ${
                        styleInput || "funny"
                    } vibe. It is important that you keep it under 80 characters.`,
                },
            ],
        });
        return completion.choices[0].message.content;
    } catch (err) {
        throw new Error(`An error occurred: ${err!}`);
    }
}
