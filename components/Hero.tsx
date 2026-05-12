"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiCredly } from 'react-icons/si';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center w-full max-w-7xl mx-auto px-6 lg:px-12 mt-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter text-[#002060] drop-shadow-sm">
                    Walter Filosa
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-5 font-light">
                    Computer Science Student @ Unina | Web Developer | Aspiring Software Engineer
                </p>

                <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
                    <MapPin size={18} className="text-[#002060]" />
                    <span className="text-sm font-medium tracking-widest uppercase">Napoli, Italia</span>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="#contatti"
                        className="bg-[#002060] text-white px-10 py-4 rounded-full font-medium shadow-xl hover:bg-[#002060]/90 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                        Contattami
                    </a>
                </div>

                <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center">
                    <a href="https://github.com/walterfilosa" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#002060] transition-colors cursor-pointer">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://linkedin.com/in/walter-filosa" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#002060] transition-colors cursor-pointer">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://www.behance.net/walterfilosa" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#002060] transition-colors cursor-pointer">
                        <FaBehance size={30} />
                    </a>
                    <a href="https://www.credly.com/users/walter-filosa" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-[#FF6B00] transition-colors cursor-pointer">
                        <SiCredly size={28} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;