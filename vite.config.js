import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv form 'dotenv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: '/',
  define:{
    //env variable
    // 'process.env.VITE_KEY': JSON.stringify(process.env.VITE_KEY)
  }
})
