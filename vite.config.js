import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolve(), // Ensure this is included to resolve third-party dependencies
  ],
  server: {
    host: "0.0.0.0", // Allow access from other devices on the network
    port: 5173, // Ensure this matches the port you are using
  },
  optimizeDeps: {
    include: ["react-intersection-observer"], // Explicitly include the package for pre-bundling
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"], // Exclude React from the build to avoid conflicts
    },
  },
});
