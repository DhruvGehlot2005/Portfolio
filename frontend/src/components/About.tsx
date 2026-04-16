/**
 * @file About.tsx
 * @description System Overview section with holographic profile
 * @module frontend/components
 */

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const About: React.FC = () => {
    const projectLabels = ["FlowKey", "PolyPact", "SACH.AI", "Flagr", "RESQ", "N.E.W.S", "MedSecure", "FinTrack"];

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="px-4 py-20 max-w-7xl mx-auto">
            <ScrollReveal direction="up">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="holographic-edge rounded-2xl mb-8"
                >
                    <div className="glass-card rounded-[calc(1rem-1px)] p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-[160px]">fingerprint</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight uppercase">Cognitive_Summary</h1>
                                    <p className="text-xs font-mono text-primary/80 tracking-widest uppercase">Biological Data Overview</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                <div className="lg:col-span-7 space-y-12">
                                    <p className="text-2xl text-white/70 leading-relaxed font-light">
                                        Obsessed with translating complex challenges into elegant digital architectures. I combine rigorous engineering principles with creative problem-solving to build scalable, high-impact systems that solve tangible real-world problems.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                            <p className="text-[10px] text-white/40 uppercase font-mono mb-2">Education</p>
                                            <p className="text-sm text-white/90 font-bold">Manipal University Jaipur</p>
                                            <p className="text-xs text-white/50">B.Tech CSE (Data Science) // Exp. May 2027</p>
                                        </div>
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                            <p className="text-[10px] text-white/40 uppercase font-mono mb-2">Status</p>
                                            <p className="text-sm text-primary font-mono tracking-widest uppercase">[OPEN_TO_ROLES]</p>
                                            <p className="text-xs text-white/50 uppercase">Location: Remote / India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 space-y-6">
                                    <h3 className="text-[12px] font-mono text-white/40 uppercase tracking-[0.3em] border-b border-white/5 pb-2">Deployment_Index</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {projectLabels.map((proj) => (
                                            <motion.button
                                                key={proj}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={scrollToProjects}
                                                className="text-[10px] font-mono bg-white/5 p-3 rounded border border-white/5 text-white/60 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all uppercase text-center flex items-center justify-center gap-2"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary"></span>
                                                {proj}
                                            </motion.button>
                                        ))}
                                    </div>
                                    <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest text-right px-1 pt-2 italic">
                                        Click_To_Access_Data_Nodes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </ScrollReveal>
        </div>
    );
};

export default About;
