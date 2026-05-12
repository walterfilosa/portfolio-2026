import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Walter Filosa | Front-End Developer",
    description: "Portfolio di Walter Filosa, studente di Informatica e Front-End Developer. Specializzato in interfacce moderne, React e Next.js.",
    keywords: [
        "Walter Filosa",
        "Front-End Developer",
        "Sviluppatore Web",
        "React",
        "Next.js",
        "Portfolio",
        "Informatica",
        "UI/UX Design"
    ],
    authors: [{ name: "Walter Filosa" }],
    creator: "Walter Filosa",
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: "",
        title: "Walter Filosa | Computer Science Student",
        description: "Esplora i miei progetti e il mio percorso nello sviluppo web.",
        siteName: "Walter Filosa Portfolio"
    },
    twitter: {
        card: "summary_large_image",
        title: "Walter Filosa | Computer Science Student",
        description: "Esplora i miei progetti e il mio percorso nello sviluppo web.",
    },
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

