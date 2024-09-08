import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: { usePolling: true },
  },
  base: "/Final-Project-Paradise-Nursery-Shopping-Application/",
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
});
