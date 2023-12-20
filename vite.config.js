import svgr from "@svgr/rollup";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/assets/css/fa-solid.min.css";`,
        // additionalData: `@import "@/assets/css/fa-brands.min.css";`,
        // additionalData: `@import "@/assets/css/fa-light.min.css";`,
        // additionalData: `@import "@/assets/css/fa-regular.min.css";`,

        // additionalData: `@use "@/assets/scss/variables.scss" as *;`,
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
});
