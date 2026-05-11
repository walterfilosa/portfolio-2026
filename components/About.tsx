"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const timelineData = [
    {
        id: 1,
        title: "Laurea Triennale in Informatica",
        organization: "Università degli Studi di Napoli Federico II",
        period: "IN CORSO",
        description: "Esami in rilievo: Ingegneria del Software, Algoritmi, Basi di Dati e Sistemi Operativi. DIETI",
        icon: <GraduationCap size={20} className="text-[#002060]" />
    },
    {
        id: 2,
        title: "Diploma di Maturità",
        organization: "Liceo Scientifico - Classico 'E. Torricelli'",
        period: "Settembre 2016 – Giugno 2021",
        description: "",
        icon: <BookOpen size={20} className="text-[#002060]" />
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 w-full max-w-7xl mx-auto px-6 lg:px-12">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                    Il Mio <span className="text-[#002060]">Percorso</span>
                </h2>
                <p className="text-gray-500 text-lg">La mia formazione accademica.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-[2px] bg-gray-200/50 rounded-full z-0"></div>

                <div className="flex flex-col gap-10 relative z-10">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex gap-4 md:gap-8"
                        >
                            <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/50 border border-white/20 shadow-sm flex items-center justify-center relative mt-1 backdrop-blur-sm">
                                {item.icon}
                            </div>

                            <div className="glass-panel p-8 flex-grow rounded-[2rem]">
                <span className="text-sm font-bold text-[#002060] mb-2 block uppercase tracking-wider">
                  {item.period}
                </span>
                                <h4 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h4>
                                <h5 className="text-lg font-medium text-gray-600 mb-4">{item.organization}</h5>
                                <p className="text-gray-500 text-base leading-relaxed italic">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;