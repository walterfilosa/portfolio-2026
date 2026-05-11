import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// IMPORTANTE: Aggiungi questa riga qui sotto
import Navbar from "../components/Navbar";

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
        {/* Navbar con z-index massimo per stare "sopra" tutto */}
        <div className="relative z-[100]">
            <Navbar />
        </div>

        {/* Contenuto con z-index inferiore per scorrere "sotto" */}
        <div className="relative z-10">
            {children}
        </div>
        </body>
        </html>
    );
}