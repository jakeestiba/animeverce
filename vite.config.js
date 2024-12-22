import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'client',  // Change this to the folder where your index.html and src/ are located
  plugins: [react()],
})
