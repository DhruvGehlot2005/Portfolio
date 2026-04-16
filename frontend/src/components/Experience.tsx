import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Experience: React.FC = () => {
    const nodes = [
        {
            role: "Software Engineer",
            company: "ProHance",
            location: "Remote",
            date: "JUN 2025 - JUL 2025",
            description: [
                "Developed and integrated interactive frontend features improving workflow efficiency and usability across internal systems.",
                "Identified and resolved performance bottlenecks, reducing latency and improving system responsiveness.",
                "Contributed to backend API workflows ensuring modular, maintainable, and scalable architecture.",
                "Collaborated in version-controlled environments, participating in code reviews and agile development cycles."
            ],
            tags: ["React", "API Integration", "Performance", "Agile"],
            active: true,
            icon: "developer_board"
        },
        {
            role: "Head of 3D and CAD",
            company: "IEEE RAS MUJ",
            location: "Manipal University Jaipur",
            date: "JUL 2024 - MAY 2025",
            description: [
                "Led UAV design and simulation initiatives using CAD tools for autonomous systems development.",
                "Coordinated cross-functional teams through structured reviews and iterative engineering workflows.",
                "Conducted technical workshops on design principles and applied problem-solving methodologies."
            ],
            tags: ["CAD", "UAV Design", "Leadership", "Workshops"],
            active: true,
            icon: "hub"
        }
    ];

    return (
        <div className="px-4 py-12 max-w-7xl mx-auto">
            <header className="mb-16 flex items-center justify-between border-b border-white/5 pb-4">
               <div>
                  <h2 className="text-5xl font-black italic tracking-tighter uppercase">Expe<span className="text-primary">rience</span></h2>

               </div>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {nodes.map((node, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.1} className="h-full">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className={`metallic-card rounded-xl p-6 relative overflow-hidden group border h-full flex flex-col ${node.active ? "border-primary/20 acid-glow" : "border-white/5 opacity-70"
                                }`}
                        >
                            {node.active && <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-20"></div>}
                            <div className="flex gap-6">
                                {/* Left Side Indicator */}
                                <div className="hidden sm:flex flex-col items-center gap-2 pt-1">
                                    <div className={`size-12 rounded-lg flex items-center justify-center border ${node.active ? "bg-primary/20 border-primary/40 text-primary" : "bg-white/10 border-white/10 text-white/40"
                                        }`}>
                                        <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                                    </div>
                                    <div className="w-1 h-full bg-white/5 rounded-full mt-2"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col justify-between items-start mb-4 gap-2">
                                        <div className="w-full">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-2xl font-black tracking-tight text-white uppercase group-hover:text-primary transition-colors">
                                                    {node.role}
                                                </h3>
                                                <span className="text-xs font-mono font-bold tracking-widest bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/10 uppercase shrink-0">
                                                    {node.date}
                                                </span>
                                            </div>
                                            <p className="text-lg font-bold text-primary tracking-wide mt-1">
                                                {node.company}
                                            </p>
                                            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-0.5">
                                                {node.location}
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {node.description.map((item, i) => (
                                            <li key={i} className="flex gap-4 text-sm leading-relaxed text-chrome-silver/70">
                                                <span className="text-primary mt-1 shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-3">
                                        {node.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-white/50 px-4 py-1.5 rounded-full uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Experience;
