/**
 * @file Contact.tsx
 * @description Contact section with professional links
 * @module frontend/components
 */

import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="px-4 py-20 max-w-7xl mx-auto overflow-hidden">
            <ScrollReveal direction="up">
                <header className="mb-20 border-l-4 border-primary pl-10">
                    <h2 className="text-7xl font-black italic tracking-tighter uppercase mb-6">Con<span className="text-primary">tact</span></h2>
                    <div className="flex gap-8 items-center">
                      <div className="flex-1 h-[1px] bg-white/10"></div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    {/* Left Column: Contact Nodes */}
                    <div className="lg:col-span-5 space-y-6">
                        {[
                            { 
                                icon: "mail", 
                                value: "dhruvsandeepgehlot@gmail.com", 
                                link: "mailto:dhruvsandeepgehlot@gmail.com" 
                            },
                            { 
                                icon: "terminal", 
                                value: "github.com/DhruvGehlot2005", 
                                link: "https://github.com/DhruvGehlot2005" 
                            },
                            { 
                                icon: "share", 
                                value: "linkedin.com/in/dhruv-gehlot", 
                                link: "https://www.linkedin.com/in/dhruv-gehlot-89420b322/" 
                            }
                        ].map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }}
                                className="metallic-card p-6 rounded-2xl border border-white/5 flex items-center gap-8 group hover:border-primary/30 transition-all block"
                            >
                                <div className="size-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                                    <span className="material-symbols-outlined text-3xl text-primary group-hover:text-black">{item.icon}</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-lg font-bold text-white/80 group-hover:text-white transition-colors truncate">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-7 pt-2">
                        <div className="space-y-10">
                            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white/90 leading-tight">
                                Always down to <span className="text-primary">explore</span> and build.
                            </h3>
                            <div className="space-y-6 text-xl text-chrome-silver/60 leading-relaxed max-w-2xl">
                                <p>
                                    I build full-stack applications with a focus on making things work well in real-world conditions.
                                </p>
                                <p>
                                    Open to internships, research, and collaborations focused on building systems that solve real problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Contact;
