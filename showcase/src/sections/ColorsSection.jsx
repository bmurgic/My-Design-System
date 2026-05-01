import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'
import { SectionLabel, SectionTitle } from './shared'

const BRAND_SWATCHES = [
  { hex: '#f59e0b', label: 'Accent', role: '--color-accent' },
  { hex: '#fbbf24', label: 'Accent Link', role: '--color-accent-link' },
  { hex: 'rgba(245,158,11,0.3)', label: 'Accent Border', role: '--color-accent-border', textDark: true },
]

const NEUTRAL_SWATCHES = [
  { hex: '#fafafa', label: 'Text Primary', role: '--color-text-primary', textDark: true },
  { hex: '#b4b4b4', label: 'Text Secondary', role: '--color-text-secondary', textDark: true },
  { hex: '#898989', label: 'Text Muted', role: '--color-text-muted', textDark: true },
  { hex: '#393939', label: 'Border Heavy', role: '--color-border-heavy' },
  { hex: '#363636', label: 'Border Prominent', role: '--color-border-prominent' },
  { hex: '#2e2e2e', label: 'Border Standard', role: '--color-border-standard' },
  { hex: '#242424', label: 'Border Subtle', role: '--color-border-subtle' },
  { hex: '#252525', label: 'Bg Elevated', role: '--color-bg-elevated' },
  { hex: '#1e1e1e', label: 'Bg Card', role: '--color-bg-card' },
  { hex: '#171717', label: 'Bg Page', role: '--color-bg-page' },
  { hex: '#0f0f0f', label: 'Bg Button', role: '--color-bg-button' },
]

const SEMANTIC_SWATCHES = [
  { hex: '#f87171', label: 'Error', role: '--color-error', textDark: true },
  { hex: '#fbbf24', label: 'Warning', role: '--color-warning', textDark: true },
  { hex: '#34d399', label: 'Success', role: '--color-success', textDark: true },
  { hex: '#60a5fa', label: 'Info', role: '--color-info', textDark: true },
]

function ColorSwatch({ hex, label, role, textDark }) {
  const textColor = textDark ? '#171717' : '#fafafa'

  return (
    <div
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--color-border-standard)',
      }}
    >
      <div
        style={{
          backgroundColor: hex,
          height: '64px',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0.5rem 0.75rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: textColor,
            opacity: 0.8,
          }}
        >
          {hex}
        </span>
      </div>
      <div
        style={{
          backgroundColor: 'var(--color-bg-card)',
          padding: '0.625rem 0.75rem',
        }}
      >
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
          {label}
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)' }}>
          {role}
        </p>
      </div>
    </div>
  )
}

function SwatchGroup({ title, swatches, columns = 4 }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '13px',
        fontWeight: 500,
        color: 'var(--color-text-muted)',
        marginBottom: '1rem',
        marginTop: 0,
      }}>
        {title}
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))`,
        gap: '0.75rem',
      }}>
        {swatches.map(swatch => (
          <ColorSwatch key={swatch.role} {...swatch} />
        ))}
      </div>
    </div>
  )
}

export function ColorsSection() {
  const ref = useIntersectionReveal()

  return (
    <section
      id="colors"
      aria-label="Colors"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      <div ref={ref} className="section-reveal">
        <SectionLabel>Colors</SectionLabel>
        <SectionTitle>The palette</SectionTitle>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: '3rem',
          marginTop: 0,
          maxWidth: '480px',
        }}>
          Amber on near-black. Identity through restraint — the accent appears only
          where it signals something meaningful.
        </p>

        <SwatchGroup title="Brand" swatches={BRAND_SWATCHES} />
        <SwatchGroup title="Neutrals" swatches={NEUTRAL_SWATCHES} />
        <SwatchGroup title="Semantic states" swatches={SEMANTIC_SWATCHES} />
      </div>
    </section>
  )
}
