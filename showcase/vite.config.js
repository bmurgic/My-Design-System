import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * SPA-fallback middleware: when a browser navigation request (Accept: text/html)
 * comes in for a path with no file extension, force the SPA index.html.
 *
 * Without this, Vite resolves `/components` to `components.json` (the shadcn config
 * sitting at the project root) and serves it as a transformed JS module — breaking
 * client-side routing for the /components page.
 */
function spaFallbackPlugin() {
  return {
    name: 'spa-html-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url ?? '/'
        const accept = req.headers.accept ?? ''
        const isHtmlNav = accept.includes('text/html')
        const hasExtension = /\.[a-zA-Z0-9]+(?:[?#]|$)/.test(url)

        if (isHtmlNav && !hasExtension && url !== '/') {
          req.url = '/'
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
