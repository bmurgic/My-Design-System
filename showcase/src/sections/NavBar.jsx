import { useState } from 'react'
import { NavLink, Link } from 'react-router'

const NAV_LINKS = [
  { to: '/', label: 'Design System', end: true },
  { to: '/components', label: 'Components' },
  { to: '/about', label: 'About' },
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

function navLinkStyle({ isActive }) {
  return {
    fontFamily: 'var(--font-primary)',
    fontSize: '14px',
    fontWeight: isActive ? 600 : 500,
    color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
    textDecoration: 'none',
    transition: `color var(--duration-instant) var(--ease-out), border-color var(--duration-enter) var(--ease-out)`,
    minHeight: '44px',
    display: 'inline-flex',
    alignItems: 'center',
    borderBottom: isActive
      ? '1px solid var(--color-accent-link)'
      : '1px solid transparent',
    paddingTop: '2px',
  }
}

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavToggle() {
    setMenuOpen(prev => !prev)
  }

  function handleMobileLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-navbar)',
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
        <Link
          to="/"
          aria-label="BM home"
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
        </Link>

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
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} style={navLinkStyle}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/components"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            border: '1px solid var(--color-border-prominent)',
            borderRadius: 'var(--radius-pill)',
            padding: '0 0.875rem',
            height: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
            transition: 'border-color var(--duration-enter) var(--ease-out)',
          }}
          className="hidden-mobile"
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-muted)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-prominent)' }}
        >
          View components
        </Link>

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
          <ul
            role="list"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {NAV_LINKS.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={handleMobileLinkClick}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-primary)',
                    fontSize: '15px',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive
                      ? 'var(--color-accent-link)'
                      : 'var(--color-text-primary)',
                    textDecoration: 'none',
                    display: 'flex',
                    padding: '0.75rem 0',
                    minHeight: '44px',
                    alignItems: 'center',
                  })}
                >
                  {link.label}
                </NavLink>
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
