import { useEffect, useRef } from 'react'

const REVEAL_THRESHOLD = 0.15

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element crosses the threshold, adds 'is-visible' class
 * to trigger the fade-in + translateY(8px → 0) reveal defined in index.css.
 */
export function useIntersectionReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: REVEAL_THRESHOLD }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
