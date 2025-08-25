import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/ChatLink/',   // 👈 IMPORTANT for GitHub Pages repo name
  plugins: [react(), tailwindcss()],
})
