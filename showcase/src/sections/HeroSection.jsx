import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'

export function HeroSection() {
  const ref = useIntersectionReveal()

  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
      }}
    >
      <div ref={ref} className="section-reveal" style={{ maxWidth: '680px', width: '100%' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '2rem',
          }}
        >
          BM / Design System
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(42px, 8vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: 'var(--color-text-primary)',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          Every token.<br />Every component.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '16px',
            lineHeight: 1.5,
            color: 'var(--color-text-secondary)',
            margin: '0 0 3rem',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          A living reference for the BM design language — colors, typography,
          spacing, and components in one place.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <PrimaryPillButton href="#colors">Explore tokens</PrimaryPillButton>
          <SecondaryPillButton href="#buttons">See components</SecondaryPillButton>
        </div>
      </div>
    </section>
  )
}

function PrimaryPillButton({ href, children }) {
  const BG_DEFAULT = 'var(--color-accent-deep)'
  const BG_HOVER = 'color-mix(in srgb, var(--color-accent) 50%, transparent)'
  const BORDER_DEFAULT = 'color-mix(in srgb, var(--color-accent) 30%, transparent)'
  const BORDER_HOVER = 'var(--color-accent)'

  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        backgroundColor: BG_DEFAULT,
        border: `1px solid ${BORDER_DEFAULT}`,
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        padding: '0 0.875rem',
        height: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = BG_HOVER
        e.currentTarget.style.borderColor = BORDER_HOVER
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = BG_DEFAULT
        e.currentTarget.style.borderColor = BORDER_DEFAULT
      }}
    >
      {children}
    </a>
  )
}

function SecondaryPillButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--color-border-prominent)',
        padding: '0 0.875rem',
        height: '32px',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'border-color 0.15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-muted)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-prominent)' }}
    >
      {children}
    </a>
  )
}
