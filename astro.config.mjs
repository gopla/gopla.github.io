import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// This user-site repository is served at the root, without a project base path.
// Override SITE_URL when the final custom domain is configured.
export default defineConfig({
  site: process.env.SITE_URL || 'https://gopla.github.io',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  server: { host: true, port: 5173 },
  vite: { server: { strictPort: true } }
})
