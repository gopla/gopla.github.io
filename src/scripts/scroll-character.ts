import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CharacterStage {
  host: HTMLElement | null
  portal: Element | null
  scroll: number
  name: string
}

export function initializeScrollCharacter() {
  const actor = document.querySelector<HTMLElement>('[data-scroll-character]')
  const source = document.querySelector<SVGSVGElement>('[data-studio-player]')
  const visual = actor?.querySelector<HTMLElement>('[data-character-visual]')
  if (!actor || !source || !visual || !actor.parentElement) return

  const traveler = actor
  const studioPlayer = source
  const sprite = visual
  const homeParent = actor.parentElement
  const homeSibling = actor.nextSibling
  const media = gsap.matchMedia()
  let started = false
  let startTimer = 0

  function begin() {
    if (started) return
    started = true
    window.clearTimeout(startTimer)
    document.removeEventListener('gopla:intro-finished', afterIntro)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      let stages: CharacterStage[] = []
      let current: CharacterStage | null = null
      let destination: CharacterStage | null = null
      let transition: gsap.core.Timeline | null = null
      let maxScroll = 1
      let refreshFrame = 0
      let lastScroll = window.scrollY
      let active = true

      document.body.classList.add('has-scroll-character')
      traveler.hidden = false

      function markStage(stage: CharacterStage, phase: string) {
        stage.host?.setAttribute('data-character-state', phase)
        stage.portal?.setAttribute('data-character-phase', phase)
        stage.host
          ?.closest('.timeline-entry')
          ?.setAttribute('data-character-active', String(phase !== 'inactive'))
      }

      function clearStages() {
        for (const stage of stages) markStage(stage, 'inactive')
        // A collapsed company may no longer be part of the measured stages.
        if (current) markStage(current, 'inactive')
      }

      function measure() {
        maxScroll = Math.max(
          1,
          document.documentElement.scrollHeight - window.innerHeight
        )
        stages = [
          {
            host: null,
            portal: document.querySelector('[data-character-hero-portal]'),
            scroll: 0,
            name: 'start'
          }
        ]
        const stops = document.querySelectorAll<HTMLElement>(
          '[data-character-stop], [data-character-track]'
        )
        for (const host of stops) {
          if (host.getClientRects().length === 0 || host.closest('[hidden]'))
            continue
          const floor = host.querySelector<HTMLElement>(
            '[data-character-floor]'
          )
          if (!floor) continue
          const footY = floor.getBoundingClientRect().top + window.scrollY
          stages.push({
            host,
            portal: host.querySelector('[data-character-portal]'),
            scroll: gsap.utils.clamp(
              0,
              maxScroll,
              footY - window.innerHeight * 0.65
            ),
            name: host.dataset.characterStop || 'experience'
          })
        }
        stages.sort((a, b) => a.scroll - b.scroll)
      }

      function restoreHome() {
        homeParent.insertBefore(
          traveler,
          homeSibling?.parentNode === homeParent ? homeSibling : null
        )
      }

      function mount(stage: CharacterStage) {
        gsap.set(traveler, { clearProps: 'all' })
        traveler.dataset.stage = stage.name
        traveler.dataset.facing = 'left'
        traveler.dataset.motion = 'idle'
        if (stage.host) {
          stage.host.appendChild(traveler)
          traveler.dataset.pose = stage.name === 'connect' ? 'wave' : 'standing'
        } else {
          restoreHome()
          traveler.dataset.pose = 'seated'
          const rect = studioPlayer.getBoundingClientRect()
          const parent = traveler.offsetParent
          const origin =
            parent instanceof HTMLElement
              ? parent.getBoundingClientRect()
              : null
          gsap.set(traveler, {
            width: rect.width,
            height: rect.height,
            x: rect.left - (origin?.left ?? -window.scrollX),
            y: rect.top - (origin?.top ?? -window.scrollY)
          })
        }
        current = stage
      }

      function settle(stage: CharacterStage) {
        gsap.set(sprite, { clearProps: 'transform,opacity' })
        traveler.dataset.pose = stage.host
          ? stage.name === 'connect'
            ? 'wave'
            : 'standing'
          : 'seated'
        traveler.dataset.motion = stage.name === 'connect' ? 'wave' : 'idle'
        traveler.dataset.facing = 'left'
        markStage(stage, 'active')
        transition = null
      }

      function isVisible(stage: CharacterStage) {
        if (stage.host?.closest('[hidden]')) return false
        const rect = (stage.host ?? studioPlayer).getBoundingClientRect()
        return rect.bottom > 0 && rect.top < window.innerHeight
      }

      function moveTo(next: CharacterStage, immediate = false) {
        if (!immediate && destination?.host === next.host) return
        destination = next
        transition?.kill()
        transition = null

        if (!current || immediate) {
          clearStages()
          mount(next)
          settle(next)
          return
        }

        const previous = current
        const showExit = isVisible(previous)
        clearStages()
        traveler.dataset.facing = previous.host ? 'right' : 'left'
        traveler.dataset.motion = 'walk'
        if (previous.host) traveler.dataset.pose = 'walking'
        markStage(previous, 'exiting')

        const sequence = gsap.timeline()
        transition = sequence
        if (showExit) {
          sequence.to(sprite, {
            x: 12,
            scaleX: 0.35,
            opacity: 0,
            duration: 0.24,
            ease: 'power2.in'
          })
        } else {
          gsap.set(sprite, { opacity: 0 })
        }
        sequence.call(() => {
          markStage(previous, 'inactive')
          // Relocate only after the sprite disappears: it never crosses the content.
          mount(next)
          traveler.dataset.motion = 'walk'
          if (next.host) traveler.dataset.pose = 'walking'
          markStage(next, 'entering')
          gsap.set(sprite, { x: 12, scaleX: 0.35, opacity: 0 })
        })
        sequence.to(sprite, {
          x: 0,
          scaleX: 1,
          opacity: 1,
          duration: 0.36,
          ease: 'power2.out'
        })
        sequence.call(() => {
          settle(next)
        })
      }

      function sync(immediate = false) {
        if (!active || stages.length === 0) return
        const scroll = window.scrollY
        let next = stages[0]
        for (const stage of stages) {
          if (stage.scroll <= scroll + 1) next = stage
        }
        // Ensure the final stage is selected even on short viewports.
        if (scroll >= maxScroll - 2) next = stages[stages.length - 1]
        const jump = Math.abs(scroll - lastScroll) > window.innerHeight * 0.65
        const oldIndex = current
          ? stages.findIndex((stage) => stage.host === current?.host)
          : -1
        const newIndex = stages.indexOf(next)
        lastScroll = scroll
        moveTo(
          next,
          immediate || jump || oldIndex < 0 || Math.abs(newIndex - oldIndex) > 1
        )
      }

      function scheduleRefresh() {
        if (refreshFrame || !active) return
        refreshFrame = window.requestAnimationFrame(() => {
          refreshFrame = 0
          if (active) ScrollTrigger.refresh()
        })
      }

      measure()
      sync(true)
      const trigger = ScrollTrigger.create({
        id: 'gopla-character-journey',
        start: 0,
        end: () => maxScroll,
        onRefreshInit: measure,
        onRefresh: () => {
          sync(true)
        },
        onUpdate: () => {
          sync()
        }
      })

      const observer = new ResizeObserver(scheduleRefresh)
      observer.observe(document.body)
      const studio = document.querySelector('.studio-shell')
      if (studio) observer.observe(studio)
      document.addEventListener('gopla:layout-changed', scheduleRefresh)
      window.addEventListener('pageshow', scheduleRefresh)
      document.fonts.ready.then(() => {
        if (active) scheduleRefresh()
      })

      return () => {
        active = false
        observer.disconnect()
        window.cancelAnimationFrame(refreshFrame)
        transition?.kill()
        trigger.kill()
        clearStages()
        document.removeEventListener('gopla:layout-changed', scheduleRefresh)
        window.removeEventListener('pageshow', scheduleRefresh)
        restoreHome()
        gsap.set([traveler, sprite], { clearProps: 'all' })
        traveler.hidden = true
        traveler.dataset.motion = 'idle'
        document.body.classList.remove('has-scroll-character')
      }
    })
  }

  function afterIntro(event: Event) {
    window.clearTimeout(startTimer)
    const reveal = event instanceof CustomEvent && event.detail?.reveal
    // The workspace entrance must settle before matching the seated source.
    if (reveal) startTimer = window.setTimeout(begin, 900)
    else begin()
  }

  if (document.documentElement.dataset.introState === 'playing') {
    document.addEventListener('gopla:intro-finished', afterIntro, {
      once: true
    })
    startTimer = window.setTimeout(begin, 7000)
  } else if (document.documentElement.classList.contains('intro-reveal')) {
    startTimer = window.setTimeout(begin, 900)
  } else begin()
}
