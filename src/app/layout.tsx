import type { Metadata } from "next";
import { Grand_Hotel } from "next/font/google";
import "./globals.css";

const grandHotel = Grand_Hotel({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    metadataBase: new URL("https://rizz-em.vercel.app"),
    title: "Rizz'em",
    description: "Generate pickup line using AI.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={grandHotel.className}>{children}</body>
        </html>
    );
}
