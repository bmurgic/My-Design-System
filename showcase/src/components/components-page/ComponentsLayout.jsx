import { useEffect, useRef, useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { COMPONENT_REGISTRY } from './COMPONENT_REGISTRY.js'
import { ComponentsSidebar } from './ComponentsSidebar.jsx'
import { ComponentsMobileMenu } from './ComponentsMobileMenu.jsx'
import { CommandPalette } from './CommandPalette.jsx'
import { useCommandPalette } from '@/hooks/useCommandPalette'

export function ComponentsLayout() {
  const palette = useCommandPalette()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileTriggerRef = useRef(null)

  // Honor #hash on first load — scroll to the targeted section once mounted.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) {
      // Defer until after layout settles
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'instant', block: 'start' })
      })
    }
  }, [])

  return (
    <div className="components-layout" style={{ display: 'flex', minHeight: 'calc(100dvh - 60px)' }}>
      <div className="hidden-below-lg" style={{ display: 'contents' }}>
        <ComponentsSidebar onOpenCommandPalette={palette.toggle} />
      </div>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Mobile header strip with menu trigger + command palette button */}
        <div
          className="show-below-lg"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.5rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-bg-page)',
          }}
        >
          <button
            ref={mobileTriggerRef}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open component menu"
            aria-expanded={mobileMenuOpen}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border-standard)',
              borderRadius: 'var(--radius-md)',
              padding: '0 1rem',
              minHeight: '36px',
              cursor: 'pointer',
            }}
          >
            Browse components
          </button>
          <button
            onClick={palette.toggle}
            aria-label="Open command palette"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--color-text-muted)',
              backgroundColor: 'var(--color-bg-button)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '0 0.5rem',
              minHeight: '36px',
              cursor: 'pointer',
            }}
          >
            ⌘K
          </button>
        </div>

        {/* Hero */}
        <header
          style={{
            padding: '4rem 1.5rem 3rem',
            borderBottom: '1px solid var(--color-border-subtle)',
            maxWidth: '880px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              margin: '0 0 1rem',
            }}
          >
            Components
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              margin: '0 0 1rem',
            }}
          >
            Live, themed components
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '17px',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              margin: 0,
              maxWidth: '560px',
            }}
          >
            Every shadcn primitive, dressed in the BM design language. Click "View code" on any
            component to copy the JSX. Press ⌘K to jump anywhere.
          </p>
        </header>

        {/* Component sections */}
        <div style={{ padding: '4rem 1.5rem 8rem', maxWidth: '880px' }}>
          {COMPONENT_REGISTRY.map(group =>
            group.items.map(item => {
              const Component = item.Component
              return <Component key={item.slug} />
            })
          )}
        </div>
      </div>

      <ComponentsMobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={mobileTriggerRef}
      />

      <CommandPalette open={palette.open} onOpenChange={palette.setOpen} />

      <Toaster position="bottom-right" />

      <style>{`
        @media (max-width: 1023px) {
          .components-layout aside {
            display: none !important;
          }
          .show-below-lg {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  )
}
