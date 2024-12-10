import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolve(), // Resolves third-party dependencies for Rollup
  ],
  server: {
    host: "0.0.0.0", // Allow access from other devices on the network
    port: 5173, // Ensure this matches the port you are using
  },
  optimizeDeps: {
    include: ["react-intersection-observer"], // Pre-bundle this dependency to avoid runtime errors
  },
  build: {
    rollupOptions: {
      // Remove "external" to ensure React and ReactDOM are bundled
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Allows CommonJS and ESModules to interoperate smoothly
    },
  },
});
