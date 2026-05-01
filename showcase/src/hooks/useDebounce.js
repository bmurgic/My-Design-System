import { useEffect, useState } from 'react'

const DEFAULT_DELAY_MS = 150

/**
 * Returns a debounced copy of `value`. Updates only after `delayMs` of stillness.
 * Used to throttle search input filtering — under 100ms causes input flicker on slow devices.
 */
export function useDebounce(value, delayMs = DEFAULT_DELAY_MS) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs)
    return () => clearTimeout(id)
  }, [value, delayMs])

  return debounced
}
