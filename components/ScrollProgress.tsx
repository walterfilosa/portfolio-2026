"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    // Rendiamo il movimento fluido con uno "spring" (molla) per l'effetto iOS
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-[72px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#26d0ce] to-[#002060] origin-left z-[101]"
            style={{ scaleX }}
        />
    );
};