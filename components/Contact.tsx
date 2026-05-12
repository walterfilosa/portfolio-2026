"use client";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';

export default function Contact() {
    const contatti = [
        {
            nome: "Email",
            valore: "walterfilosa03@gmail.com",
            link: "mailto:walterfilosa03@gmail.com",
            icona: <Mail className="w-8 h-8 text-[#002060]" />,
        },


        {
            nome: "LinkedIn",
            valore: "",
            link: "https://www.linkedin.com/in/walter-filosa",
            icona: <FaLinkedin className="w-8 h-8 text-[#002060]" />,
        },
    ];

    return (
        <section id="contatti" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[#002060] mb-4">
                    Contattami
                </h2>
                <p className="text-gray-500 mb-12">
                    Che si tratti di un'opportunità lavorativa o di una collaborazione, la mia posta è sempre aperta.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contatti.map((contatto, index) => (
                        <a
                            key={index}
                            href={contatto.link}
                            target={contatto.nome !== "Email" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="glass-panel group p-8 flex flex-col items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 cursor-pointer"
                        >
                            <div className="p-4 rounded-full bg-[#002060]/5 group-hover:bg-[#002060]/10 transition-colors">
                                {contatto.icona}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{contatto.nome}</h3>
                                <p className="text-sm text-gray-500 mt-1 group-hover:text-[#002060] transition-colors">
                                    {contatto.valore}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}