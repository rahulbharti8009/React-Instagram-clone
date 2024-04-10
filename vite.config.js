import {defineConfig} from  "vite"
import react from  "@vitejs/plugin-react"

export default defineConfig({
    plugins:[react()],
    server:{
        port: 3500,
        open: true
    },
     optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})

