import sharp from 'sharp'
import { readFile } from 'node:fs/promises'

// SVG generic fonts can vary between Windows and Linux. Render the text with
// the original OFL TTF files so the share preview matches the site's typography.
const background = (await readFile('public/social-card.svg', 'utf8')).replace(
  /<text[\s\S]*?<\/text>/g,
  ''
)
const pixelFont = 'scripts/assets/PressStart2P-Regular.ttf'
const bodyFont = 'scripts/assets/DMSans.ttf'
const labels = [
  {
    text: 'PLAYER 01 / WEB DEVELOPER',
    font: 'Press Start 2P 16',
    fontfile: pixelFont,
    color: '#a7d8b9',
    left: 96,
    top: 118
  },
  {
    text: "Hi, I'm Naufal Yudhistira.",
    font: 'Press Start 2P 32',
    fontfile: pixelFont,
    color: '#f0ebdf',
    left: 96,
    top: 211
  },
  {
    text: 'Curious about what comes next.',
    font: 'DM Sans 37',
    fontfile: bodyFont,
    color: '#f2bd83',
    left: 96,
    top: 313
  },
  {
    text: 'Gopla · Malang, Indonesia',
    font: 'DM Sans 23',
    fontfile: bodyFont,
    color: '#aab5c4',
    left: 96,
    top: 433
  },
  {
    text: 'WEB APPLICATIONS / COLLABORATIVE EXPERIENCES / ALWAYS CURIOUS',
    font: 'Press Start 2P 12',
    fontfile: pixelFont,
    color: '#aab5c4',
    left: 96,
    top: 532
  }
]
const layers = await Promise.all(
  labels.map(async ({ text, font, fontfile, color, left, top }) => ({
    input: await sharp({
      text: {
        text: `<span foreground="${color}">${text}</span>`,
        font,
        fontfile,
        dpi: 72,
        width: 1008,
        rgba: true
      }
    })
      .png()
      .toBuffer(),
    left,
    top
  }))
)
await sharp(Buffer.from(background))
  .composite(layers)
  .png()
  .toFile('public/social-card.png')
await sharp('public/favicon.svg')
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png')
await sharp('public/favicon.svg')
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png')
console.log('Generated social preview and PNG icons.')
