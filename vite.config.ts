import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si publicas en GitHub Pages como https://usuario.github.io/nombre-del-repo/,
// cambia "base" por "/nombre-del-repo/" (con las barras).
// Si el repo se llama "usuario.github.io" (user/org page) o usas dominio propio, deja "/".
export default defineConfig({
  //base: '/',
  base: '/portafolio/',
  plugins: [react()],
})
