import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'
import { SectionLabel, SectionTitle } from './shared'

const TYPE_ROLES = [
  {
    role: 'Display',
    sample: 'Every detail matters.',
    size: '48px',
    weight: 400,
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    font: 'var(--font-primary)',
    meta: 'Figtree · 48px · 400 · lh 1.05',
  },
  {
    role: 'H1',
    sample: 'Design systems at scale.',
    size: '36px',
    weight: 400,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    font: 'var(--font-primary)',
    meta: 'Figtree · 36px · 400 · lh 1.10',
  },
  {
    role: 'H2',
    sample: 'Token-driven components.',
    size: '28px',
    weight: 500,
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    font: 'var(--font-primary)',
    meta: 'Figtree · 28px · 500 · lh 1.20',
  },
  {
    role: 'H3',
    sample: 'Consistency by default.',
    size: '22px',
    weight: 600,
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
    font: 'var(--font-primary)',
    meta: 'Figtree · 22px · 600 · lh 1.25',
  },
  {
    role: 'Body Large',
    sample: 'Dark-mode native. Warm amber accent. Precise, personal, no-shadow depth.',
    size: '17px',
    weight: 400,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    font: 'var(--font-primary)',
    meta: 'Figtree · 17px · 400 · lh 1.60',
  },
  {
    role: 'Body',
    sample: 'The base reading size. Comfortable at any density on any device.',
    size: '15px',
    weight: 400,
    lineHeight: '1.55',
    letterSpacing: 'normal',
    font: 'var(--font-primary)',
    meta: 'Figtree · 15px · 400 · lh 1.55',
  },
  {
    role: 'Small / Caption',
    sample: 'Supporting text, timestamps, helper copy.',
    size: '13px',
    weight: 400,
    lineHeight: '1.5',
    letterSpacing: 'normal',
    font: 'var(--font-primary)',
    meta: 'Figtree · 13px · 400 · lh 1.50',
  },
  {
    role: 'Code Label',
    sample: '--color-accent · TYPOGRAPHY · const TOKEN = value',
    size: '12px',
    weight: 400,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    font: 'var(--font-mono)',
    meta: 'Dank Mono · 12px · 400 · lh 1.60',
    isMono: true,
  },
]

function TypeRow({ role, sample, size, weight, letterSpacing, lineHeight, font, meta, isMono }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr 200px',
        gap: '1rem',
        alignItems: 'baseline',
        padding: '1.5rem 0',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <p style={{
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
      }}>
        {role}
      </p>

      <p style={{
        margin: 0,
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        letterSpacing,
        lineHeight,
        color: 'var(--color-text-primary)',
        fontStyle: isMono ? 'italic' : 'normal',
      }}>
        {sample}
      </p>

      <p style={{
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-text-muted)',
        textAlign: 'right',
      }}>
        {meta}
      </p>
    </div>
  )
}

export function TypographySection() {
  const ref = useIntersectionReveal()

  return (
    <section
      id="typography"
      aria-label="Typography"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        width: '100%',
      }}
    >
      <div ref={ref} className="section-reveal">
        <SectionLabel>Typography</SectionLabel>
        <SectionTitle>The type scale</SectionTitle>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          marginBottom: '3rem',
          marginTop: 0,
          maxWidth: '480px',
        }}>
          Figtree for everything human-facing. Dank Mono for everything technical.
          No font mixing within a context.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr 200px',
            gap: '1rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--color-border-standard)',
          }}>
            {['Role', 'Sample', 'Spec'].map(col => (
              <p key={col} style={{
                margin: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                textAlign: col === 'Spec' ? 'right' : 'left',
              }}>
                {col}
              </p>
            ))}
          </div>

          {TYPE_ROLES.map(row => (
            <TypeRow key={row.role} {...row} />
          ))}
        </div>
      </div>
    </section>
  )
}
