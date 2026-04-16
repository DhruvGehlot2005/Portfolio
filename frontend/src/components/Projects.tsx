import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Projects: React.FC = () => {
    const projects = [
        {
            title: "FlowKey",
            year: "2025",
            tech: ["AI-Native", "System Architecture", "React"],
            desc: "An AI-centric platform that transforms single-sentence prompts into complex, complete system designs, digitizing the architect's workflow.",
            link: "https://flow-key-iota.vercel.app/",
            icon: "schema"
        },
        {
            title: "PolyPact",
            year: "2025",
            tech: ["Multimodal AI", "LegalTech", "Next.js"],
            desc: "A modular AI paralegal environment using 'Case Containers' to provide isolated, ultra-high-performance context for automated legal intelligence and case management.",
            link: "https://lexis-ai-iota.vercel.app/login",
            icon: "gavel"
        },
        {
            title: "SACH.AI",
            year: "2025",
            tech: ["Computer Vision", "Generative UI", "Streamlit"],
            desc: "Intelligent food analysis engine utilizing vision-AI to deliver real-time nutritional insights and personalized dietary feedback through a generative interface.",
            link: "https://truth-pulse-seven.vercel.app/",
            icon: "restaurant"
        },
        {
            title: "Flagr",
            year: "2024",
            tech: ["NLP", "TypeScript", "Risk Analysis"],
            desc: "Conversational document intelligence platform that bridges the gap between static contracts and actionable risk assessment, instantly flagging risky clauses.",
            link: "https://flagr.vercel.app/",
            icon: "flag"
        },
        {
            title: "RESQ",
            year: "2024",
            tech: ["Supabase", "Leaflet", "Real-time"],
            desc: "Production-ready emergency coordination hub connecting first responders with real-time incident data and citizen resource allocation in critical seconds.",
            link: "https://res-q-f.vercel.app/",
            icon: "emergency_share"
        },
        {
            title: "N.E.W.S",
            year: "2025",
            tech: ["IoT", "Python", "ETL Pipelines"],
            desc: "SIH 2025 Grand Finalist project. A distributed health monitoring mesh processing real-time telemetry from 50+ IoT nodes with 99.9% fault tolerance.",
            icon: "sensors"
        },
        {
            title: "MedSecure",
            year: "2025",
            tech: ["PostgreSQL", "RBAC", "JWT"],
            desc: "Encrypted healthcare data exchange platform implementing strict HIPAA-compliant protocols and optimized relational schemas for secure medical history retrieval.",
            icon: "health_and_safety"
        },
        {
            title: "FinTrack",
            year: "2025",
            tech: ["FinTech", "Analytics", "Gamified UX"],
            desc: "Nebula Nexus Hackathon winner. An AI-powered financial management suite for Gen Z, featuring gamified savings logic and predictive budget analytics.",
            icon: "savings"
        }
    ];

    return (
        <section id="projects" className="px-4 py-20 max-w-7xl mx-auto">
            <header className="mb-16 border-l-4 border-primary pl-8">
                <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-4">Proj<span className="text-primary">ects</span></h2>
                <div className="flex gap-6">

                  <div className="flex-1 h-[1px] bg-white/5 self-center"></div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="metallic-card rounded-2xl p-10 border border-white/5 relative overflow-hidden group min-h-[350px] flex flex-col"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-primary/10 transition-colors"></div>
                            
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-6">
                                    <div className="size-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-primary group-hover:bg-primary/10 transition-all">
                                        <span className="material-symbols-outlined text-4xl">{project.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-widest group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-xs font-mono text-white/40 uppercase tracking-[0.3em]">{project.year} // RELEASE_STABLE</p>
                                    </div>
                                </div>
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-3 rounded bg-white/5 border border-white/10 text-white/30 group-hover:text-primary group-hover:border-primary/20 transition-all cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                                    </a>
                                )}
                            </div>
                            
                            <p className="text-base text-chrome-silver/70 leading-relaxed mb-10 flex-1">
                                {project.desc}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[9px] font-mono bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:border-primary/20 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Projects;
