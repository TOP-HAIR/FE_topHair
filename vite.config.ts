import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://54.83.30.173",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
