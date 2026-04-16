/**
 * @file App.tsx
 * @description Main application component with dynamic navigation state
 * @module frontend
 */

import React, { useState, useEffect } from "react";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Hackathons from "./components/Hackathons.tsx";
import Contact from "./components/Contact.tsx";
import Hero from "./components/Hero.tsx";
import Navigation from "./components/Navigation.tsx";
import GridBackground from "./components/GridBackground.tsx";

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Triggers when section enters higher part of viewport
            threshold: 0,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Targeted observable sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="relative min-h-screen">
            <GridBackground />

            {/* Main Content */}
            <main className="relative z-10 w-full">
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="hackathons">
                    <Hackathons />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>

            {/* Navigation */}
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

            {/* Corner Decorations */}
            <div className="fixed top-6 left-6 w-8 h-8 border-t border-l border-white/10 pointer-events-none z-50"></div>
            <div className="fixed top-6 right-6 w-8 h-8 border-t border-r border-white/10 pointer-events-none z-50"></div>
            <div className="fixed bottom-6 left-6 w-8 h-8 border-b border-l border-white/10 pointer-events-none z-50"></div>
            <div className="fixed bottom-6 right-6 w-8 h-8 border-b border-r border-white/10 pointer-events-none z-50"></div>
        </div>
    );
};

export default App;
