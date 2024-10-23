import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  external: ["@chakra-ui/icons"], // Externalize Chakra UI Icons
  build: {
    rollupOptions: {
      external: ["@chakra-ui/icons"],
    },
  },
};
