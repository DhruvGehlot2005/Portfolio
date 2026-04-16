/**
 * @file tailwind.config.ts
 * @description Tailwind CSS configuration for the Alex Chrome portfolio
 * @module frontend
 */

import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ccff00",
        "chrome-silver": "#e5e7eb",
        "mercury-dark": "#0a0a0a",
        "mercury-light": "#1a1a1a",
        "acid-green": "#ccff00",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
