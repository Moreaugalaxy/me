import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/me/", // ✅ GitHub Pages 경로 맞추기
});
