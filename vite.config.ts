import fs from 'node:fs'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// GitHub Pages serves 404.html for any path it has no file for. Shipping a
// copy of index.html under that name lets the SPA boot and route the URL
// itself, so deep links and refreshes resolve instead of hitting a 404.
function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    enforce: 'post',
    writeBundle(options) {
      const outDir = options.dir ?? path.resolve(__dirname, 'dist')
      fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'))
    },
  }
}

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
  // Dev serves from the root, but a built bundle always expects the GitHub
  // Pages subdirectory. `command` is 'serve' for preview too, so previewing a
  // build needs the deploy base or its asset URLs resolve one level too high.
  base: command === 'serve' && !isPreview ? '/' : '/Modernhouse/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
  },
}))
