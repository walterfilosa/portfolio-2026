import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Walter Filosa | Portfolio",
    description: "Portfolio di Walter Filosa, Studente di Informatica e aspirante Software Engineer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
        <body className={`${inter.className} antialiased bg-[#F2F2F7]`}>
        <div className="relative z-[100]">
            <Navbar />
        </div>

        <div className="relative z-10">
            {children}
        </div>
        <Script
            src="https://embeds.iubenda.com/widgets/bde6087c-690f-4d30-a838-e55df955e104.js"
            strategy="lazyOnload"
        />
        </body>
        </html>
    );
}

