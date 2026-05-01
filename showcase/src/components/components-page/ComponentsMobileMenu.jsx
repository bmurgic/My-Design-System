import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { COMPONENT_REGISTRY } from './COMPONENT_REGISTRY.js'

/**
 * Supabase-style full-screen menu — fast fade-in, elevated bg, large pill items, CTA at bottom.
 * Triggered from a hamburger in the page header (not the global navbar).
 */
export function ComponentsMobileMenu({ open, onClose, triggerRef }) {
  const closeButtonRef = useRef(null)

  // Focus trap: move focus to close button on open, return to trigger on close
  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      triggerRef?.current?.focus()
    }
  }, [open, onClose, triggerRef])

  if (!open) return null

  function handleLinkClick() {
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Component menu"
      className="components-mobile-menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-mobile-menu)',
        backgroundColor: 'var(--color-bg-elevated)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'componentsMobileMenuFade var(--duration-fade) var(--ease-out)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
          }}
        >
          Components
        </span>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-primary)',
            padding: '0.5rem',
            cursor: 'pointer',
            minHeight: '44px',
            minWidth: '44px',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Body — scrollable */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem 1.5rem 2rem',
        }}
      >
        {COMPONENT_REGISTRY.map(group => (
          <div key={group.id} style={{ marginBottom: '1.5rem' }}>
            <p
              style={{
                margin: '0 0 0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}
            >
              {group.label}
            </p>
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {group.items.map(item => (
                <li key={item.slug}>
                  <a
                    href={`#${item.slug}`}
                    onClick={handleLinkClick}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      minHeight: '56px',
                      padding: '0 1.25rem',
                      backgroundColor: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border-standard)',
                      borderRadius: 'var(--radius-md)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ color: 'var(--color-text-muted)' }}>
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div
        style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--color-border-subtle)',
          backgroundColor: 'var(--color-bg-elevated)',
        }}
      >
        <Link
          to="/"
          onClick={handleLinkClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '48px',
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-bg-page)',
            fontFamily: 'var(--font-primary)',
            fontSize: '15px',
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: 'var(--radius-pill)',
          }}
        >
          View tokens
        </Link>
      </div>

      <style>{`
        @keyframes componentsMobileMenuFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .components-mobile-menu {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
