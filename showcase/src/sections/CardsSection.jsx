import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'
import { SectionLabel, SectionTitle } from './shared'

const DEPTH_LEVELS = [
  {
    level: 'Level 0',
    label: 'Default',
    description: 'The base card surface. Sits at bg-card with a subtle border.',
    borderStyle: '1px solid var(--color-border-standard)',
    boxShadow: 'none',
    spec: 'border: #2e2e2e · bg: #1e1e1e',
  },
  {
    level: 'Level 1',
    label: 'Elevated',
    description: 'Slightly elevated. Used for interactive cards, hover states.',
    borderStyle: '1px solid var(--color-border-prominent)',
    boxShadow: 'none',
    spec: 'border: #363636 · bg: #1e1e1e',
  },
  {
    level: 'Level 2',
    label: 'Focus',
    description: 'Active or focused state. The selected item in a list.',
    borderStyle: '1px solid var(--color-border-heavy)',
    boxShadow: 'none',
    spec: 'border: #393939 · bg: #252525',
    bgOverride: 'var(--color-bg-elevated)',
  },
  {
    level: 'Level 3',
    label: 'Accent',
    description: 'Highest prominence. Reserved for the most important card on screen.',
    borderStyle: '1px solid var(--color-accent-border)',
    boxShadow: 'none',
    spec: 'border: rgba(245,158,11,0.3) · bg: #252525',
    bgOverride: 'var(--color-bg-elevated)',
  },
]

function DepthCard({ level, label, description, borderStyle, boxShadow, spec, bgOverride }) {
  return (
    <div
      style={{
        backgroundColor: bgOverride || 'var(--color-bg-card)',
        border: borderStyle,
        boxShadow,
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}>
          {level}
        </span>
        <span style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '12px',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          backgroundColor: 'var(--color-bg-button)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '2px 8px',
        }}>
          {label}
        </span>
      </div>

      {/* Placeholder content block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{
          height: '14px',
          width: '70%',
          backgroundColor: 'var(--color-border-prominent)',
          borderRadius: '4px',
        }} />
        <div style={{
          height: '10px',
          width: '90%',
          backgroundColor: 'var(--color-border-subtle)',
          borderRadius: '4px',
        }} />
        <div style={{
          height: '10px',
          width: '60%',
          backgroundColor: 'var(--color-border-subtle)',
          borderRadius: '4px',
        }} />
      </div>

      <p style={{
        margin: 0,
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.5,
      }}>
        {description}
      </p>

      <p style={{
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-text-muted)',
      }}>
        {spec}
      </p>
    </div>
  )
}

function ComponentCard() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-standard)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h3 style={{
        margin: 0,
        fontFamily: 'var(--font-primary)',
        fontSize: '15px',
        fontWeight: 500,
        color: 'var(--color-text-primary)',
      }}>
        Component card
      </h3>
      <p style={{
        margin: 0,
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.5,
      }}>
        A typical card used to display content with a header, body, and optional action.
        Border at Level 0.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {['Design', 'System', 'Token'].map(tag => (
          <span key={tag} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--color-text-muted)',
            backgroundColor: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '2px 8px',
          }}>
            {tag}
          </span>
        ))}
      </div>
      <button
        type="button"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '13px',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          backgroundColor: 'transparent',
          border: '1px solid var(--color-border-standard)',
          borderRadius: 'var(--radius-md)',
          padding: '0 1rem',
          height: '36px',
          cursor: 'pointer',
          alignSelf: 'flex-start',
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          transition: 'border-color 0.15s',
          touchAction: 'manipulation',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-prominent)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-standard)' }}
      >
        View details
      </button>
    </div>
  )
}

export function CardsSection() {
  const ref = useIntersectionReveal()

  return (
    <section
      id="cards"
      aria-label="Cards and Depth"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      <div ref={ref} className="section-reveal">
        <SectionLabel>Cards & Depth</SectionLabel>
        <SectionTitle>Elevation without shadows</SectionTitle>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: '3rem',
          marginTop: 0,
          maxWidth: '520px',
        }}>
          Four elevation levels defined entirely by border color. No box-shadows,
          no blur — depth through precision.
        </p>

        {/* Depth levels */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
        }}>
          {DEPTH_LEVELS.map(level => (
            <DepthCard key={level.level} {...level} />
          ))}
        </div>

        {/* Component example */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          marginBottom: '1rem',
          marginTop: 0,
        }}>
          Component example
        </p>
        <div style={{ maxWidth: '360px' }}>
          <ComponentCard />
        </div>
      </div>
    </section>
  )
}
