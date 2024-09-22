import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@http', replacement: path.resolve(__dirname, 'src/http') },
    ],
  },
})
