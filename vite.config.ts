import path from "path"
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  eslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
