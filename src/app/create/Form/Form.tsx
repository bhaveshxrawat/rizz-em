"use client";
import { FormEvent, useState } from "react";
import Label from "./Label";
import pickupLinePrompt from "@/utils/prompt";

export default function Form({
    cn,
    setErrorOccurred,
}: {
    cn: string;
    setErrorOccurred: any;
}) {
    const [detailsInput, setDetailsInput] = useState("");
    const [styleInput, setStyleInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState<string>("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (detailsInput.trim() === "") return;
        try {
            setIsGenerating(true);
            const result = await pickupLinePrompt(detailsInput, styleInput);
            if (result) setGeneratedContent(result);
        } catch (err) {
            setErrorOccurred(true);
        } finally {
            setIsGenerating(false);
            setTimeout(() => {
                setErrorOccurred(false);
            }, 1500);
        }
    }
    return (
        <form onSubmit={handleSubmit} className={`${cn} mt-8`}>
            <div className="flex flex-col">
                <Label
                    forAtt="Crush Details"
                    labelText="Tell us about your crush"
                />
                <textarea
                    name="Crush Details"
                    className="inputarea h-[124px] resize-none"
                    placeholder="She is a 10"
                    value={detailsInput}
                    onChange={(e) => setDetailsInput(e.target.value)}
                    required={true}
                ></textarea>
            </div>
            <div className="flex flex-col mt-4">
                <Label forAtt="Style" labelText="Style" />
                <input
                    type="text"
                    name="Style"
                    className="inputarea"
                    placeholder="eg: Funny"
                    value={styleInput}
                    onChange={(e) => setStyleInput(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full justify-center bg-b-pink flex items-center text-[2rem] md:text-2xl px-6 py-[0.625rem] rounded-[2rem] heart gap-2 mt-8"
            >
                {isGenerating ? "Generating..." : "Generate for me"}
            </button>
            {generatedContent && (
                <div className="mt-12 h-min p-4 bg-[rgba(255,_255,_255,_0.7)] rounded-lg backdrop-blur-sm">
                    <h2 className="text-b-pink font-medium text-2xl">
                        Your pickup line
                    </h2>
                    <p className="text-[#AAB5C0] font-medium text-xl mt-2">
                        {generatedContent}
                    </p>
                </div>
            )}
        </form>
    );
}
