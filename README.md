# Gopla's little corner of the web

An English personal portfolio for **Naufal Yudhistira**, branded as **Gopla**, a web developer based in Malang, Indonesia. The site uses original retro pixel illustrations and introduces his background, professional experience, and current interests.

## Stack

Astro generates static HTML at build time. TypeScript holds the profile data; CSS and SVG provide the visual design. A small browser script handles the day/night theme, navigation highlighting, collectible curiosity star, and experience disclosure. All content and section links work without JavaScript.

Fonts are self-hosted through Fontsource. `@astrojs/sitemap` generates the sitemap; Sharp creates raster social previews and icons during `prebuild`.

The homepage opens with a roughly 4.4-second pixel game intro. A character travels through one SVG scene and collects three coins in sync with the progress bar, pauses on Player ready, then blends into the hero. Motion is smooth while the artwork stays pixel-shaped. The panel and Skip intro button share a responsive layout, including short screens. It plays on every homepage refresh, including refreshes with a section anchor or restored scroll position. No session-storage replay limit is used. Skip intro, Escape, Tab, or scrolling dismiss it immediately. Reduced motion and back/forward navigation bypass it. Direct section links bypass it on an initial visit, but refreshing that URL still plays it. Without JavaScript, the page appears directly. `src/components/home/GameIntro.astro` owns the shared scene timings and inline controller.

## Local development

The workspace character follows native scrolling through About, the visible Experience companies, Now, and Connect using GSAP ScrollTrigger. Each stop has a mini stage, pixel floor, shadow, and portal. The character exits, relocates while invisible, and enters the next stage; it stays anchored inside that stage while reading. Its size is fixed per breakpoint, with seated, standing, two walk frames, and a wave at Connect. Fast scroll jumps select the destination directly, and scrolling back returns to earlier stages and the desk. Shared artwork is in `src/components/home/PixelCharacter.astro`; `CharacterDock.astro` provides the stages and `src/scripts/scroll-character.ts` selects them. Resize, font loading, and Show more / Show less refresh the stages. On mobile, each Experience stage sits above its company details to preserve text width. Reduced motion or unavailable JavaScript keeps the original static workspace and profile portrait.

Use Node.js 24 LTS (or a supported even-numbered version meeting the package's engine requirement).

```sh
npm ci
npm run dev
```

Open http://localhost:5173. The development server uses a fixed port so the collaborative preview remains stable.

## Validation and production build

```sh
npm run check
npm run lint
npm run format:check
npm run build
npm test
```

The build writes static assets to `dist/`. The build verification checks crawler-visible content, internal section links, metadata, structured data, sitemap, robots, icons, and the noindex 404 page. Use `npm run preview` to serve the production build on port 5173 after stopping the development server.

## Content and design

- [Portfolio brief and action plan](docs/portfolio-brief.md): agreed direction and implementation context.
- [English content draft](docs/portfolio-content.md): editorial copy and section labels.
- [Profile facts](docs/profile-facts.md): facts supplied by the owner and boundaries on interpretation.
- [Domain vocabulary](CONTEXT.md): terms used in this project.
- `src/data/profile.ts`: rendered profile, employment history, and interests. Update this file when changing those facts.
- `src/data/projects.ts`: selected projects in display order: SaifuLog, Polator, Helden Board, and Helden PER CMS. Only add verified descriptions, technologies, and public repository links here.
- `src/components/home/Projects.astro`: project inventory below Education, with a featured SaifuLog panel, pixel illustrations, and a character stop. `src/styles/projects.css` uses the shared day/night palette and pixel styling.
- `src/pages/index.astro`: page structure and interface copy.
- `src/components/PixelStudio.astro`: original illustrative workspace; not a depiction of an actual office.
- `src/styles/global.css`: responsive layout, theme variables, pixel styling, and reduced-motion support.

Projects now has its own navigation link and renders all four owner-selected names as static HTML. SaifuLog and Polator descriptions and stacks come from their local project READMEs/package manifests; Polator has a verified public repository link. SaifuLog and Polator link to their owner-supplied live websites. Helden Board is described from its domain glossary, and Helden PER CMS from its domain glossary and content-management guide. Screenshots and public Helden links have not been supplied. Illustrations are decorative pixel artwork, not product screenshots. Connect links to LinkedIn and GitHub; both profiles are included in the Person structured data. Helden Inc and Exp Inc. share one experience entry from October 2023 onward, following the owner's confirmation that they are the same company. Other overlapping dates remain as supplied.

Experience is a company timeline with three companies shown initially and a Show more / Show less button for the rest. Different titles at one company are nested with their own dates, including McEasy's Odoo Developer and Data Engineer roles. Without JavaScript, the complete timeline remains visible. Education is a separate, always-visible timeline. Both timelines live in `src/components/home/` and read `src/data/profile.ts`.

## SEO

Content is present in the generated HTML, including the earlier experience inside a native disclosure. The site includes a canonical URL, description, Open Graph and Twitter previews, `ProfilePage`/`Person` JSON-LD, sitemap, robots.txt, and semantic sections.

The default canonical site is **https://gopla.github.io**, matching this user-site repository. To use a custom domain, set `SITE_URL` at build time and configure that domain in GitHub Pages. For GitHub Actions, add the repository variable `SITE_URL`; the workflow passes it to the build. Add `public/CNAME` only when the final domain is confirmed.

## GitHub Pages

`.github/workflows/deploy.yml` builds, verifies, and deploys the static site on pushes to `master` or `main`, or a manual workflow run. In repository **Settings → Pages**, select **GitHub Actions** as the source. This local implementation does not change remote Pages settings or push a commit.

The workflow follows [Astro's official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/). Since this repository is `gopla.github.io`, it needs no project base path.

## Fonts

DM Sans and Press Start 2P are distributed under the SIL Open Font License. License texts are included in `public/licenses/`.
