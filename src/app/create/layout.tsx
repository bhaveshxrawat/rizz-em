import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Create",
    description: "Create a new pickup line.",
};

export default function CreateLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="grid min-h-screen before:bg-[url('/images/main-bg.webp')] bg-[white] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:inset-0 -before:z-1 before:opacity-[0.2] mix-blend-darken      ">
            {children}
        </main>
    );
}
