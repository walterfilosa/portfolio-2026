"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectsData = [
    {
        title: "BugBoard26",
        endDate: "Gennaio 2026", // Solo data di fine
        description: "Piattaforma collaborativa per la gestione di issue in progetti software. Permette di segnalare problemi, monitorare lo stato e assegnare task al team.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
        githubUrl: "https://github.com/walterfilosa/BugBoard26"
    },
    {
        title: "Unina Delivery",
        endDate: "Febbraio 2024", // Solo data di fine
        description: "Sistema per la gestione della logistica e delle spedizioni merci. Pianificazione delle spedizioni basata su disponibilità, peso e veicoli.",
        tech: ["Java", "Swing", "PostgreSQL", "OOP"],
        githubUrl: "https://github.com/walterfilosa/UninaDelivery"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                    I Miei <span className="text-[#002060]">Progetti</span>
                </h2>
                <p className="text-gray-500 text-lg">Seleziona un progetto per visualizzarne il codice sorgente su GitHub.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projectsData.map((project, index) => (
                    <a
                        key={index}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full group cursor-pointer" // Cursore mano
                    >
                        <motion.div
                            whileHover={{
                                y: -10, // Si alza verso l'alto
                                scale: 1.02, // Si ingrandisce leggermente
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }} // Molla reattiva
                            className="glass-panel p-8 flex flex-col h-full relative"
                        >
                            <div className="absolute top-6 right-6 text-gray-300 group-hover:text-[#002060] transition-colors">
                                <ExternalLink size={20} />
                            </div>

                            <div className="text-sm font-semibold text-[#002060] mb-2 uppercase tracking-widest">
                                {project.endDate}
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-8 flex-grow text-base leading-relaxed">
                                {project.description}
                            </p>

                            {/* Badge a pillola */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium bg-[#002060]/5 text-[#002060] border border-[#002060]/10 px-4 py-1.5 rounded-full"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;