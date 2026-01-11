import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { profile } from "./src/user";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  base: "/portfolio-template/",
  plugins: [react()],
  define: {
    'import.meta.env.VITE_PROFILE_NAME': JSON.stringify(profile.name),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
});
