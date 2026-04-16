/**
 * @file Telemetry.tsx
 * @description Side telemetry indicators for immersive futuristic feel
 * @module frontend/components
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Telemetry: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollTotal) * 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Left Sidebar - Status Readouts */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 z-40 pointer-events-none">
        <div className="flex flex-col gap-2">
          <p className="text-[8px] font-mono text-white/20 uppercase vertical-text tracking-[0.5em]">System_Status</p>
          <div className="w-[1px] h-24 bg-white/5 relative">
            <motion.div 
              className="absolute top-0 w-full bg-primary"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[8px] font-mono text-primary uppercase">Core_Load</p>
            <div className="flex gap-0.5">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 h-3 ${i < 6 ? 'bg-primary/40' : 'bg-white/5'}`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] font-mono text-white/40 uppercase">Memory_Buffer</p>
            <p className="text-[10px] font-mono text-white/60">0x{Math.floor(mousePos.x).toString(16).toUpperCase()}</p>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Navigation Markers & Coordinates */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-12 z-40 pointer-events-none">
        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-col gap-1 text-right">
            <p className="text-[8px] font-mono text-white/20 uppercase tracking-widest">NAV_COORD</p>
            <p className="text-[10px] font-mono text-primary">X:{mousePos.x} Y:{mousePos.y}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <div className="w-12 h-[1px] bg-white/10"></div>
          <div className="space-y-2 text-right">
            <p className="text-[7px] font-mono text-white/30 uppercase tracking-[0.3em]">Sector_Analysis</p>
            <div className="flex flex-col gap-1">
              <div className="w-16 h-1 bg-white/5 overflow-hidden">
                <motion.div 
                   animate={{ x: [-64, 64] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="w-1/2 h-full bg-primary/20"
                />
              </div>
              <div className="w-12 h-1 bg-white/5 overflow-hidden">
                <motion.div 
                   animate={{ x: [48, -48] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="w-1/2 h-full bg-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-[1px] h-32 bg-white/5 relative">
            <div className="absolute top-1/4 w-3 h-[1px] -right-1 bg-white/20"></div>
            <div className="absolute top-1/2 w-3 h-[1px] -right-1 bg-primary"></div>
            <div className="absolute top-3/4 w-3 h-[1px] -right-1 bg-white/20"></div>
          </div>
          <p className="text-[8px] font-mono text-white/20 uppercase vertical-text tracking-[0.5em] rotate-180">Alignment_Grid</p>
        </div>
      </div>
    </>
  );
};

export default Telemetry;
