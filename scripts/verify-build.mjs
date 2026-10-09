import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'

const html = await readFile('dist/index.html', 'utf8')
const notFound = await readFile('dist/404.html', 'utf8')
const site = new URL(process.env.SITE_URL || 'https://gopla.github.io')
const meta = (name) =>
  html.match(
    new RegExp(`<meta[^>]+(?:name|property)="${name}"[^>]+content="([^"]+)"`)
  )?.[1]

assert.match(html, /<html[^>]+lang="en"/)
assert.equal(
  (html.match(/<h1\b/g) || []).length,
  1,
  'Home page has one main heading'
)
assert.match(html, /Naufal Yudhistira/)
assert.match(html, /Malang, Indonesia/)
assert.match(html, /Helden Inc/)
assert.match(html, /Get Aplikasi Indonesia/)
assert.match(html, /Agentic development/)
assert.match(html, /href="https:\/\/www.linkedin.com\/in\/gopla\/"/)
assert.equal(meta('robots'), 'index, follow')
assert.ok(meta('description')?.length > 80)
assert.equal(meta('og:url'), new URL('/', site).href)
assert.equal(meta('og:image'), new URL('/social-card.png', site).href)
assert.equal(meta('twitter:card'), 'summary_large_image')
assert.ok(html.includes(`rel="canonical" href="${new URL('/', site).href}"`))

const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
)
for (const anchor of html.matchAll(/href="#([^"]+)"/g))
  assert.ok(ids.has(anchor[1]), `Anchor #${anchor[1]} resolves`)
for (const id of ['main', 'start', 'about', 'experience', 'now', 'connect'])
  assert.ok(ids.has(id), `Section ${id} is rendered at build time`)
assert.equal(
  ids.size,
  [...html.matchAll(/\bid="([^"]+)"/g)].length,
  'IDs are unique'
)

const jsonLd = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
)?.[1]
assert.ok(jsonLd, 'Structured data is rendered without client JavaScript')
const schema = JSON.parse(jsonLd)
assert.equal(schema['@type'], 'ProfilePage')
assert.equal(schema.mainEntity.name, 'Naufal Yudhistira')
assert.deepEqual(schema.mainEntity.sameAs, [
  'https://www.linkedin.com/in/gopla/'
])

assert.ok((await stat('dist/social-card.png')).size > 1000)
assert.ok((await stat('dist/favicon-32.png')).size > 100)
assert.ok((await stat('dist/apple-touch-icon.png')).size > 100)
const robots = await readFile('dist/robots.txt', 'utf8')
assert.ok(
  robots.includes(`Sitemap: ${new URL('/sitemap-index.xml', site).href}`)
)
const sitemapIndex = await readFile('dist/sitemap-index.xml', 'utf8')
assert.ok(sitemapIndex.includes(new URL('/sitemap-0.xml', site).href))
const sitemap = await readFile('dist/sitemap-0.xml', 'utf8')
assert.ok(sitemap.includes(`<loc>${new URL('/', site).href}</loc>`))
assert.ok(!sitemap.includes('/404'), '404 is excluded from the sitemap')
assert.match(notFound, /content="noindex, follow"/)
assert.ok(
  !html.includes('href="tel:') && !html.includes('href="mailto:'),
  'Public contact is LinkedIn'
)
console.log(
  'Static content, section links, metadata, JSON-LD, sitemap, robots, icons, and 404 checks passed.'
)
