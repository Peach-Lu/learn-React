import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    server: {
        proxy: {
        '/api': {
            target: 'http://localhost:3000', // 代理到你的后端服务
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
        }
    }
})
