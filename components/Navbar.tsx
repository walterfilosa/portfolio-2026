"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Percorso", id: "about" },
    { name: "Progetti", id: "projects" },
    { name: "Competenze", id: "skills" },
    { name: "Contatti", id: "contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    useEffect(() => {
        // Configurazione dell'Observer
        const options = {
            root: null,
            // Definiamo una "striscia" centrale: la sezione attiva è quella che occupa il centro
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                // Se la sezione entra nella zona definita, aggiorna lo stato
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        // Cerchiamo le sezioni nel DOM e iniziamo ad osservarle
        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-6 left-0 w-full z-[100] px-6 pointer-events-none">
            <div className="max-w-7xl mx-auto glass-panel px-4 py-1.5 flex items-center justify-between pointer-events-auto">

                <div className="text-[#002060] font-bold text-xl ml-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    WF
                </div>

                <ul className="flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        const isHovered = hoveredSection === link.id;

                        return (
                            <li
                                key={link.id}
                                onMouseEnter={() => setHoveredSection(link.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                className="relative"
                            >
                                <a
                                    href={`#${link.id}`}
                                    className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-500 cursor-pointer block ${
                                        isActive || isHovered ? 'text-[#002060]' : 'text-gray-500'
                                    }`}
                                >
                                    {link.name}
                                </a>

                                {/* Pillola Animata */}
                                {(isActive || isHovered) && (
                                    <motion.div
                                        layoutId="navPill"
                                        initial={false}
                                        animate={{
                                            opacity: 1,
                                            backgroundColor: isActive ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.4)",
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 35,
                                            mass: 1
                                        }}
                                        className="absolute inset-0 rounded-full z-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-[0.5px] border-white/60"
                                        style={{
                                            backdropFilter: "blur(10px)",
                                            WebkitBackdropFilter: "blur(10px)",
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden md:block mr-4 w-8" />
            </div>
        </nav>
    );
};

export default Navbar;