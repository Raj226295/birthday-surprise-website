import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  preview: {
    allowedHosts: ['birthday-surprise-website-1-e87b.onrender.com'],
  },
})
