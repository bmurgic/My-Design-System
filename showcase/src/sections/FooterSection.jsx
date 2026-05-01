const FOOTER_LINKS = {
  Design: [
    { label: 'Colors', href: '#colors' },
    { label: 'Typography', href: '#typography' },
    { label: 'Buttons', href: '#buttons' },
    { label: 'Cards', href: '#cards' },
  ],
  Stack: [
    { label: 'Figtree', href: 'https://fonts.google.com/specimen/Figtree' },
    { label: 'Dank Mono', href: 'https://philpl.gumroad.com/l/dank-mono' },
    { label: 'Vite', href: 'https://vitejs.dev' },
    { label: 'shadcn/ui', href: 'https://ui.shadcn.com' },
  ],
}

export function FooterSection() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-page)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem 2.5rem',
        }}
      >
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem',
        }}>
          {/* Brand column */}
          <div>
            <p style={{
              margin: '0 0 1rem',
              fontFamily: 'var(--font-primary)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
            }}>
              BM
            </p>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-primary)',
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '200px',
            }}>
              A personal design language. Dark by default, amber by identity.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p style={{
                margin: '0 0 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
              }}>
                {group}
              </p>
              <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: '13px',
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                        minHeight: '44px',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                      onMouseEnter={e => { e.target.style.color = 'var(--color-accent-link)' }}
                      onMouseLeave={e => { e.target.style.color = 'var(--color-text-muted)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-text-muted)',
          }}>
            BM Design System — built with care.
          </p>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--color-text-muted)',
          }}>
            Figtree + Dank Mono
          </p>
        </div>
      </div>
    </footer>
  )
}
