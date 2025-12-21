import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      providerImportSource: "@mdx-js/react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
});
