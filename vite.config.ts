import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: { usePolling: true },
  },
  base: "/nursery",
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
});
