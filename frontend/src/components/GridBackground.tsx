/**
 * @file GridBackground.tsx
 * @description Fixed grid background with spotlight effect
 * @module frontend/components
 */

import React, { useEffect, useRef } from "react";

const GridBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
            containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-[#0a0a0a]"
            style={{
                ["--mouse-x" as any]: "50%",
                ["--mouse-y" as any]: "50%",
            }}
        >
            {/* Interactive Spotlight Glow */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(204, 255, 0, 0.06), transparent 80%)`
                }}
            ></div>

            {/* Static Spotlight (Center) for Ambient Light */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.5) 80%, #0a0a0a 100%)'
                }}
            ></div>

            {/* Primary Grid Layout */}
            <div
                className="absolute inset-0 w-full h-full opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Intersection Dots for extra detail */}
            <div
                className="absolute inset-0 w-full h-full opacity-[0.1]"
                style={{
                    backgroundImage: `radial-gradient(white 0.5px, transparent 0.5px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: '-0.5px -0.5px'
                }}
            ></div>

            {/* Subtler secondary grid for depth */}
            <div
                className="absolute inset-0 w-full h-full opacity-[0.01]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, white 1px, transparent 1px),
                        linear-gradient(to bottom, white 1px, transparent 1px)
                    `,
                    backgroundSize: '200px 200px'
                }}
            ></div>

            {/* Noise/Grain for texture */}
            <div className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default GridBackground;
