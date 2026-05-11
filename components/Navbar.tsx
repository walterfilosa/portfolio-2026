"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

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
        const options = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <nav className="fixed top-6 left-0 w-full z-[100] px-4 md:px-6 pointer-events-none">
            <div className="max-w-7xl mx-auto glass-panel px-4 py-1.5 flex items-center justify-between pointer-events-auto">

                <div className="text-[#002060] font-bold text-xl ml-4 mr-4 shrink-0">
                    WF
                </div>

                <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar flex-nowrap pr-4">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        const isHovered = hoveredSection === link.id;

                        return (
                            <li
                                key={link.id}
                                onMouseEnter={() => setHoveredSection(link.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                className="relative shrink-0"
                            >
                                <a
                                    href={`#${link.id}`}
                                    className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-500 cursor-pointer block whitespace-nowrap${
                                        isActive || isHovered ? 'text-[#002060]' : 'text-gray-500'
                                    }`}
                                >
                                    {link.name}
                                </a>

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
                                        className="absolute inset-0 rounded-full z-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-[0.5px] border-white/60 bg-white/70"
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
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#26d0ce] to-[#002060] origin-left"
                    style={{ scaleX }}
                />
            </div>
        </nav>
    );
};

export default Navbar;