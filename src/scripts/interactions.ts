const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle')

function syncThemeButton() {
  const isDay = document.documentElement.dataset.theme === 'day'
  const label = `Switch to ${isDay ? 'night' : 'day'} mode`
  themeButton?.setAttribute('aria-label', label)
  themeButton?.setAttribute('title', label)
  themeButton?.setAttribute('aria-pressed', String(isDay))
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDay ? '#f5efdf' : '#111827')
}

if (themeButton) {
  themeButton.hidden = false
  syncThemeButton()
  themeButton.addEventListener('click', () => {
    const next =
      document.documentElement.dataset.theme === 'day' ? 'night' : 'day'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      /* The theme still works without persistence. */
    }
    syncThemeButton()
  })
}

const experienceToggle = document.querySelector<HTMLButtonElement>(
  '[data-experience-toggle]'
)
const extraExperience = [
  ...document.querySelectorAll<HTMLElement>('[data-experience-extra]')
]

if (experienceToggle && extraExperience.length > 0) {
  const label = experienceToggle.querySelector('[data-experience-toggle-label]')
  extraExperience.forEach((entry) => {
    entry.hidden = true
  })
  experienceToggle.hidden = false
  experienceToggle.addEventListener('click', () => {
    const expanded = experienceToggle.getAttribute('aria-expanded') !== 'true'
    extraExperience.forEach((entry) => {
      entry.hidden = !expanded
    })
    experienceToggle.setAttribute('aria-expanded', String(expanded))
    if (label) {
      label.textContent = expanded
        ? 'Show less'
        : experienceToggle.dataset.showMore || 'Show more'
    }
    highlightNavigation()
    document.dispatchEvent(new CustomEvent('gopla:layout-changed'))
  })
}

const star = document.querySelector<HTMLButtonElement>('.curiosity-star')
const countLabel = document.querySelector('[data-star-count]')
let stars = 0
star?.addEventListener('click', () => {
  stars += 1
  if (countLabel) countLabel.textContent = String(stars)
  star.setAttribute(
    'aria-label',
    `Collect a curiosity star. ${stars} collected`
  )
  star.classList.remove('collected')
  requestAnimationFrame(() => star.classList.add('collected'))
})

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav]')]
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav || ''))
  .filter((section): section is HTMLElement => section !== null)

function highlightNavigation() {
  let current = 'start'
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 180) current = section.id
  }
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4
  )
    current = 'connect'
  for (const link of navLinks) {
    const active = link.dataset.nav === current
    link.classList.toggle('active', active)
    if (active) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
}

let scheduled = false
window.addEventListener(
  'scroll',
  () => {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      highlightNavigation()
      scheduled = false
    })
  },
  { passive: true }
)
window.addEventListener('resize', highlightNavigation)
highlightNavigation()
