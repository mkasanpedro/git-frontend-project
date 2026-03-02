import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This makes the site work on BOTH GitHub and Netlify automatically
export default defineConfig({
  plugins: [react()],
  base: './', 
})