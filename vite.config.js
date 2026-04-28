import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8888, // Usamos el puerto nuevo
    watch: {
      usePolling: true, // ESTO ES CLAVE para Android/Termux
    },
  },
})