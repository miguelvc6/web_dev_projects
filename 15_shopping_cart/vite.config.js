import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  plugins: [react()],
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: "src/index.html",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/tests/setup.jsx",
  },
});
