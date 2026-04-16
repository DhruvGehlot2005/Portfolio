/**
 * @file Hero.tsx
 * @description Hero section with Alex Chrome identity and marquee
 * @module frontend/components
 */

import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import ScrollReveal from "./ScrollReveal";

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">

            
            {/* Header Info */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-left">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase">Active</span>
                    </div>
                </div>
            </div>

            {/* Main Identity */}
            <ScrollReveal direction="up" delay={0.2}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center justify-center flex-1"
                >
                    <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none mb-6 flex flex-col md:flex-row gap-0 md:gap-4">
                        <ShinyText
                            text="DHRUV"
                            speed={3}
                            color="#b4b4b4"
                            shineColor="#ffffff"
                        />
                        <ShinyText
                            text="GEHLOT"
                            speed={3}
                            color="#b4b4b4"
                            shineColor="#ffffff"
                            delay={0.2}
                        />
                    </h1>
                    
                    <div className="max-w-4xl mx-auto space-y-10">
                        <p className="text-chrome-silver text-xl md:text-3xl leading-tight font-bold tracking-tight">
                            Architecting the bridge between abstract logic and real-world impact. Focused on engineering high-performance systems and creative full-stack solutions.
                        </p>
                        
                        <div className="space-y-12">
                            <p className="text-primary/80 font-mono text-base tracking-[0.6em] uppercase">
                                Software_Engineer
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-lg hover:bg-primary transition-colors flex items-center gap-2"
                                >
                                    View My Work
                                    <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                </motion.button>
                                
                                <motion.a
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-lg hover:border-primary/40 transition-colors flex items-center gap-2"
                                >
                                    Download CV
                                    <span className="material-symbols-outlined text-sm">download</span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </ScrollReveal>
        </section>
    );
};

export default Hero;
