import { useCallback, useEffect, useState } from 'react'

/**
 * Adds a global ⌘K (Mac) / Ctrl+K listener.
 * Returns { open, setOpen, toggle } — toggle is stable across renders via useCallback.
 */
export function useCommandPalette() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      const isShortcut =
        event.key === 'k' && (event.metaKey || event.ctrlKey)

      if (isShortcut) {
        event.preventDefault()
        toggle()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return { open, setOpen, toggle }
}
