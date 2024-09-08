import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: { usePolling: true },
  },
  base: "/ibm-react-final-proj",
  plugins: [
    react({
      include: "**/*.tsx",
    }),
  ],
});
