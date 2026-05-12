"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Percorso", id: "about" },
    { name: "Progetti", id: "projects" },
    { name: "Competenze", id: "skills" },
    { name: "Contatti", id: "contatti" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!activeSection || !scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const activeElement = document.getElementById(`nav-${activeSection}`);

        if (activeElement) {
            const containerCenter = container.clientWidth / 2;
            const elementCenter = activeElement.offsetLeft + (activeElement.clientWidth / 2);

            const scrollPosition = elementCenter - containerCenter;

            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    }, [activeSection]);

    // Effetto 2: Intersection Observer + Sensore Fine Pagina
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

        const handleScroll = () => {
            const isBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

            if (isBottom) {
                setActiveSection(navLinks[navLinks.length - 1].id);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <nav className="fixed top-6 left-0 w-full z-[100] px-4 md:px-6 pointer-events-none">
            <div className="max-w-7xl mx-auto glass-panel px-4 py-1.5 flex items-center justify-between pointer-events-auto overflow-hidden relative">

                <div className="text-[#002060] font-bold text-xl ml-4 shrink-0">
                    WF
                </div>

                <div
                    ref={scrollContainerRef}
                    className="w-full flex overflow-x-auto no-scrollbar z-10"
                >
                    <ul className="flex items-center gap-1 flex-nowrap mx-auto px-16 md:px-4">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            const isHovered = hoveredSection === link.id;

                            return (
                                <li
                                    key={link.id}
                                    id={`nav-${link.id}`}
                                    onMouseEnter={() => setHoveredSection(link.id)}
                                    onMouseLeave={() => setHoveredSection(null)}
                                    className="relative shrink-0"
                                >
                                    <a
                                        href={`#${link.id}`}
                                        className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-500 cursor-pointer block whitespace-nowrap ${
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
                </div>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#26d0ce] to-[#002060] origin-left"
                    style={{ scaleX }}
                />

            </div>
        </nav>
    );
};

export default Navbar;