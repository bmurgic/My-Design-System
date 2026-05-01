import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'
import { useTypeMode } from '@/contexts/TypeModeContext.jsx'

export function HeroSection() {
  const ref = useIntersectionReveal()
  const { weights } = useTypeMode()

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
        {/* Code label */}
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

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(42px, 8vw, 72px)',
            fontWeight: weights.h1,
            lineHeight: 1.0,
            color: 'var(--color-text-primary)',
            margin: '0 0 1.5rem',
            letterSpacing: '-0.02em',
            transition: 'font-weight 150ms ease',
          }}
        >
          Every token.<br />Every component.
        </h1>

        {/* Subtext */}
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

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <PrimaryPillButton href="#colors">Explore tokens</PrimaryPillButton>
          <SecondaryPillButton href="#buttons">See components</SecondaryPillButton>
        </div>
      </div>
    </section>
  )
}

function PrimaryPillButton({ href, children }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--color-bg-page)',
        backgroundColor: 'var(--color-text-primary)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        padding: '0 1.5rem',
        height: '44px',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'opacity 0.15s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
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
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--color-border-prominent)',
        padding: '0 1.5rem',
        height: '44px',
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
