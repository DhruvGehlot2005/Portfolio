/**
 * @file Navigation.tsx
 * @description Status-style navigation toolbar (NODE_ACTIVE aesthetic)
 * @module frontend/components
 */

import React from "react";
import Magnetic from "./Magnetic.tsx";

interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "hackathons", label: "Hackathons" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-8 right-8 z-50">
            <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center space-x-8 px-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Magnetic key={item.id} strength={0.2}>
                                <button
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className={`flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase transition-all duration-300 ${isActive
                                        ? "text-primary font-bold"
                                        : "text-white/20 hover:text-white/50"
                                        }`}
                                >
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(204,255,0,0.4)]"></span>
                                    )}
                                    {item.label}
                                </button>
                            </Magnetic>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
