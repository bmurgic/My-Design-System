import { useEffect, useMemo, useState } from 'react'

/**
 * Watches all section elements with the given slugs (via getElementById).
 * Returns the slug of the section closest to the top of the viewport.
 * Uses a single shared IntersectionObserver — better for battery on mobile than scroll events.
 */
export function useActiveSection(slugs) {
  // Memoize via the joined-string identity so the effect doesn't re-run every render
  // when callers pass a fresh array literal each time.
  const slugsKey = slugs.join('|')
  const stableSlugs = useMemo(() => slugs, [slugsKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const [activeSlug, setActiveSlug] = useState(stableSlugs[0] ?? null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const elements = stableSlugs
      .map(slug => document.getElementById(slug))
      .filter(Boolean)

    if (elements.length === 0) return

    // Track which sections are currently intersecting; pick the topmost one.
    const visible = new Map()

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top)
          } else {
            visible.delete(entry.target.id)
          }
        }

        if (visible.size === 0) return

        // Pick the section nearest to the top of the viewport (smallest |top|)
        let bestId = null
        let bestDistance = Infinity
        for (const [id, top] of visible) {
          const distance = Math.abs(top)
          if (distance < bestDistance) {
            bestDistance = distance
            bestId = id
          }
        }

        if (bestId) setActiveSlug(bestId)
      },
      {
        // Trigger when any portion is in the upper 60% of the viewport
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [stableSlugs])

  return activeSlug
}
