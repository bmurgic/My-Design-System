import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'
import { SectionLabel, SectionTitle } from './shared'

const BUTTON_VARIANTS = [
  {
    label: 'Primary Pill',
    spec: 'radius: 9999px · bg: #fafafa · color: #171717 · px: 24px · h: 44px',
    render: () => (
      <button
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-bg-page)',
          backgroundColor: 'var(--color-text-primary)',
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          padding: '0 1.5rem',
          height: '44px',
          cursor: 'pointer',
          transition: 'opacity 0.15s ease',
          touchAction: 'manipulation',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        type="button"
      >
        Get started
      </button>
    ),
  },
  {
    label: 'Secondary Pill',
    spec: 'radius: 9999px · border: #363636 · color: #fafafa · px: 24px · h: 44px',
    render: () => (
      <button
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          backgroundColor: 'transparent',
          border: '1px solid var(--color-border-prominent)',
          borderRadius: 'var(--radius-pill)',
          padding: '0 1.5rem',
          height: '44px',
          cursor: 'pointer',
          transition: 'border-color 0.15s ease',
          touchAction: 'manipulation',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-muted)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border-prominent)' }}
        type="button"
      >
        Learn more
      </button>
    ),
  },
  {
    label: 'Ghost',
    spec: 'radius: 6px · no border · color: #b4b4b4 → #fafafa · h: 44px',
    render: () => (
      <button
        aria-label="Ghost action button"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          padding: '0 1rem',
          height: '44px',
          cursor: 'pointer',
          transition: 'color 0.15s ease, background-color 0.15s ease',
          touchAction: 'manipulation',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--color-text-primary)'
          e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--color-text-secondary)'
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
        type="button"
      >
        Cancel
      </button>
    ),
  },
  {
    label: 'Accent',
    spec: 'radius: 9999px · bg: #f59e0b · color: #171717 · px: 24px · h: 44px',
    render: () => (
      <button
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-bg-page)',
          backgroundColor: 'var(--color-accent)',
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          padding: '0 1.5rem',
          height: '44px',
          cursor: 'pointer',
          transition: 'opacity 0.15s ease',
          touchAction: 'manipulation',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        type="button"
      >
        Upgrade
      </button>
    ),
  },
  {
    label: 'Disabled',
    spec: 'opacity: 0.4 · cursor: not-allowed · any variant',
    render: () => (
      <button
        disabled
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-bg-page)',
          backgroundColor: 'var(--color-text-primary)',
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          padding: '0 1.5rem',
          height: '44px',
          cursor: 'not-allowed',
          opacity: 0.4,
          touchAction: 'manipulation',
        }}
        type="button"
      >
        Unavailable
      </button>
    ),
  },
]

function ButtonCard({ label, spec, render }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-standard)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
      }}
    >
      <div style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}>
        {render()}
      </div>
      <div>
        <p style={{
          margin: '0 0 0.375rem',
          fontFamily: 'var(--font-primary)',
          fontSize: '13px',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
        }}>
          {label}
        </p>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-text-muted)',
          lineHeight: 1.6,
        }}>
          {spec}
        </p>
      </div>
    </div>
  )
}

export function ButtonsSection() {
  const ref = useIntersectionReveal()

  return (
    <section
      id="buttons"
      aria-label="Buttons"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      <div ref={ref} className="section-reveal">
        <SectionLabel>Buttons</SectionLabel>
        <SectionTitle>Interactive controls</SectionTitle>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: '3rem',
          marginTop: 0,
          maxWidth: '480px',
        }}>
          Pills for primary actions. Ghost for secondary. Amber only when the
          action is identity-level important.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          {BUTTON_VARIANTS.map(variant => (
            <ButtonCard key={variant.label} {...variant} />
          ))}
        </div>
      </div>
    </section>
  )
}
