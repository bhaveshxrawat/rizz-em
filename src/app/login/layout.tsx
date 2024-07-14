import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className={`${inter.className} min-h-screen p-[5.5rem] md:px-6 flex`}
        >
            {children}
        </main>
    );
}
