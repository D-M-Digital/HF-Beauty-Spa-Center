import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readFileSync, writeFileSync, copyFileSync } from "fs";

const repoName = process.env.VITE_BASE_PATH || "";

export default defineConfig(({ mode }) => ({
  base: repoName ? `/${repoName}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "copy-404",
      closeBundle() {
        if (repoName) {
          try {
            const indexPath = path.resolve(__dirname, "dist/index.html");
            const notFoundPath = path.resolve(__dirname, "dist/404.html");
            const indexContent = readFileSync(indexPath, "utf-8");
            writeFileSync(notFoundPath, indexContent);
          } catch (error) {
            console.warn("Could not create 404.html:", error);
          }
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
