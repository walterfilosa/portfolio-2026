"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Layout, Lightbulb, Server } from 'lucide-react';

const skillsData = [
    {
        title: "Linguaggi",
        icon: <Code2 size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "Java", highlighted: true },
            { name: "C/C++", highlighted: true },
            { name: "Python", highlighted: true },
            { name: "JavaScript", highlighted: false },
            { name: "SQL", highlighted: false },
            { name: "C#", highlighted: false },
            { name: "HTML & CSS", highlighted: false }
        ]
    },
    {
        title: "Framework & Backend",
        icon: <Server size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "Spring Boot", highlighted: true },
            { name: "Node.js", highlighted: true },
            { name: "REST APIs", highlighted: false },
            { name: "Microservizi", highlighted: false },
            { name: "Maven", highlighted: false }
        ]
    },
    {
        title: "Frontend & Design",
        icon: <Layout size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "React.js", highlighted: true },
            { name: "UI/UX Design", highlighted: true },
            { name: "Human Computer Interaction", highlighted: false },
            { name: "Figma / Adobe Suite", highlighted: false }
        ]
    },
    {
        title: "Ingegneria del Software",
        icon: <Database size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "Object-Oriented Programming", highlighted: true },
            { name: "Design Patterns", highlighted: true },
            { name: "PostgreSQL", highlighted: true },
            { name: "UML", highlighted: false },
            { name: "Git & GitHub", highlighted: false },
            { name: "DevOps Basics", highlighted: false },
            { name: "Gestione Requisiti", highlighted: false }
        ]
    },
    {
        title: "AI, IoT & Sistemi",
        icon: <Cpu size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "Machine Learning", highlighted: true },
            { name: "Generative AI", highlighted: false },
            { name: "Internet of Things (IoT)", highlighted: true },
            { name: "Sistemi Embedded", highlighted: false },
            { name: "Architettura ARM", highlighted: false },
            { name: "Linux OS", highlighted: false }
        ]
    },
    {
        title: "Soft Skills",
        icon: <Lightbulb size={24} className="text-[#002060] mb-4" />,
        skills: [
            { name: "Problem Solving", highlighted: true },
            { name: "Lavoro di Squadra", highlighted: true },
            { name: "Time Management", highlighted: false },
            { name: "Dinamica di Gruppo", highlighted: false }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 w-full max-w-7xl mx-auto px-6 lg:px-12">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                    Le mie <span className="text-[#002060]">Competenze</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Un mix di solide basi teoriche in Ingegneria del Software, tecnologie moderne e competenze trasversali.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.18)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group glass-panel p-8 cursor-default"
                    >
                        {category.icon}
                        <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                                        skill.highlighted
                                            ? 'bg-[#002060] text-white border-[#002060] shadow-sm'
                                            : 'bg-white/50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                                >
                  {skill.name}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Skills;