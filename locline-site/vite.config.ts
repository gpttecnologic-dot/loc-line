import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Plain static Vite + React build (SPA) — no server runtime required, so the
// output in `dist/` can be hosted anywhere that serves static files,
// including GitHub Pages.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
