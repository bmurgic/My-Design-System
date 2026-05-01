import { useState } from 'react'
import { useTypeMode } from '@/contexts/TypeModeContext.jsx'

const NAV_LINKS = [
  { href: '#colors', label: 'Colors' },
  { href: '#typography', label: 'Typography' },
  { href: '#buttons', label: 'Buttons' },
  { href: '#cards', label: 'Cards' },
]

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect width="20" height="20" fill="var(--color-accent)" rx="4" />
      <text
        x="10"
        y="14"
        textAnchor="middle"
        fill="var(--color-bg-page)"
        fontSize="10"
        fontWeight="700"
        fontFamily="var(--font-primary)"
      >
        BM
      </text>
    </svg>
  )
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { mode, toggleMode } = useTypeMode()

  function handleNavToggle() {
    setMenuOpen(prev => !prev)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-bg-page)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <LogoMark />
          <span
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
            }}
          >
            BM
          </span>
        </a>

        {/* Desktop nav links */}
        <ul
          role="list"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => { e.target.style.color = 'var(--color-text-muted)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--color-text-primary)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Type mode toggle */}
        <TypeModeToggle mode={mode} onToggle={toggleMode} />

        {/* CTA */}
        <a
          href="#colors"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            border: '1px solid var(--color-border-prominent)',
            borderRadius: 'var(--radius-pill)',
            padding: '0 1.25rem',
            height: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
            transition: 'border-color 0.15s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-muted)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-prominent)' }}
        >
          View tokens
        </a>

        {/* Mobile menu button */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={handleNavToggle}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text-primary)',
            padding: '0.5rem',
            display: 'none',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            padding: '1rem 1.5rem',
          }}
        >
          <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.75rem 0',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

function TypeModeToggle({ mode, onToggle }) {
  const isProposed = mode === 'proposed'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isProposed ? 'current' : 'proposed'} type mode`}
      aria-pressed={isProposed}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.375rem',
        flexShrink: 0,
        backgroundColor: isProposed ? 'var(--color-accent)' : 'var(--color-bg-elevated)',
        border: `1px solid ${isProposed ? 'var(--color-accent)' : 'var(--color-border-standard)'}`,
        borderRadius: 'var(--radius-pill)',
        padding: '0 0.875rem',
        height: '32px',
        minHeight: '44px',
        cursor: 'pointer',
        transition: 'background-color 150ms ease, border-color 150ms ease',
        touchAction: 'manipulation',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.06em',
        color: isProposed ? 'var(--color-bg-page)' : 'var(--color-text-muted)',
        transition: 'color 150ms ease',
        userSelect: 'none',
      }}>
        {isProposed ? 'proposed' : 'current'}
      </span>
    </button>
  )
}
