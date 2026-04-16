import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Hackathons: React.FC = () => {
    const achievements = [
        {
            title: "Smart India Hackathon (SIH) 2025",
            status: "Grand Finalist",
            desc: "Top 5 in India among 890,000 participants with IoT-based healthcare solution.",
            icon: "military_tech"
        },
        {
            title: "Hackerzstreet by IEEE CS",
            status: "Finalist",
            desc: "Created secure medical record exchange platform with end-to-end encryption and compliance features.",
            icon: "security"
        },
        {
            title: "Hacks by ACM MUJ",
            status: "Finalist",
            desc: "Built collaborative platform with WebSocket integration for real-time communication.",
            icon: "groups"
        },
        {
            title: "Trilytics’25",
            status: "Finalist",
            desc: "Ranked Top 10 among 7,772 participants in a national analytics competition.",
            icon: "analytics"
        },
        {
            title: "Winner – Best Tech Category",
            status: "Winner",
            desc: "Recognized for technical excellence at GenZ Vision, Cosmos Club MUJ.",
            icon: "workspace_premium"
        },
        {
            title: "TechnoVision 3.0 (IEEE RAS)",
            status: "2nd Place",
            desc: "Secured 2nd place in engineering design competition with innovative technical solution.",
            icon: "architecture"
        }
    ];

    return (
        <section className="px-4 py-20 max-w-7xl mx-auto">
            <header className="mb-16 border-l-4 border-primary pl-8">
                <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-4">Hacka<span className="text-primary">thons</span></h2>
                <div className="flex gap-6">

                  <div className="flex-1 h-[1px] bg-white/5 self-center"></div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((item, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="metallic-card rounded-2xl p-8 border border-white/5 relative overflow-hidden group min-h-[250px] flex flex-col justify-center"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity">
                                <span className="material-symbols-outlined text-[120px]">{item.icon}</span>
                            </div>
                            
                            <div className="relative z-10 space-y-6">
                               <div className="flex items-start justify-between">
                                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-primary">
                                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                  </div>
                                  <span className="text-xs font-mono bg-white/10 text-white/60 px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2">
                                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                     Verified
                                  </span>
                               </div>
                               
                               <div>
                                   <div className="flex items-center gap-2 mb-2">
                                       <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h3>
                                   </div>
                                   <p className="text-xs font-mono text-primary uppercase font-bold tracking-widest mb-4"># STATUS: {item.status}</p>
                                   <p className="text-sm text-chrome-silver/60 leading-relaxed">
                                       "{item.desc}"
                                   </p>
                               </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Hackathons;
