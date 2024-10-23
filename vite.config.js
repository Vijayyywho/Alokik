import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@chakra-ui/icons", "react", "react-dom"], // Exclude these from the bundle
    },
  },
});
