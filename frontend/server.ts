/**
 * @file server.ts
 * @description Simple Bun-native dev server to serve the React application
 * @module frontend
 */

import { watch } from "fs";

const PORT = 3000;

console.log(`Starting dev server on http://localhost:${PORT}...`);

// Simple build function using Bun's native bundler
async function build() {
    console.log("Building application...");

    // Ensure dist structure exists
    if (!await Bun.file("./dist/styles").exists()) {
        await Bun.write("./dist/styles/.keep", "");
    }

    await Bun.build({
        entrypoints: ["./src/index.tsx"],
        outdir: "./dist",
        minify: false,
        sourcemap: "inline",
        external: ["*.css"]
    });

    // Compile Tailwind (Separate process for Tailwind 4 reliability)
    console.log("Compiling CSS...");
    await Bun.spawn(["bunx", "tailwindcss", "-i", "./src/styles/globals.css", "-o", "./dist/styles/globals.css", "--minify"]);

    // Ensure index.html is in dist with correct paths
    const html = await Bun.file("./index.html").text();
    await Bun.write("./dist/index.html", html);

    console.log("Build complete.");
}

// Initial build
await build();

// Watch for changes (simplified)
watch("./src", { recursive: true }, async (event, filename) => {
    if (filename) {
        console.log(`File changed: ${filename}. Rebuilding...`);
        await build();
    }
});

// Serve the dist directory
async function startServer(port: number) {
    try {
        const server = Bun.serve({
            port: port,
            async fetch(req) {
                const path = new URL(req.url).pathname;
                let file = Bun.file(`./dist${path === "/" ? "/index.html" : path}`);

                // Fallback to index.html for SPA routing
                if (!(await file.exists())) {
                    file = Bun.file("./dist/index.html");
                }

                return new Response(file);
            },
        });
        console.log(`Server running on http://localhost:${server.port}`);
    } catch (e: any) {
        if (e.code === "EADDRINUSE") {
            console.log(`Port ${port} in use, trying ${port + 1}...`);
            await startServer(port + 1);
        } else {
            throw e;
        }
    }
}

await startServer(PORT);
