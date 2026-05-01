import { useIntersectionReveal } from '@/hooks/useIntersectionReveal'

const TECH_STACK = [
  'Vite + React 19',
  'Tailwind CSS v4',
  'shadcn/ui',
  'React Router v7',
  'Figtree + Dank Mono',
]

export default function AboutPage() {
  const ref = useIntersectionReveal()

  return (
    <section
      aria-label="About"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        width: '100%',
      }}
    >
      <div ref={ref} className="section-reveal">
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            margin: '0 0 1rem',
          }}
        >
          About
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
            margin: '0 0 2rem',
          }}
        >
          The BM Design System
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '17px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            margin: '0 0 1.25rem',
          }}
        >
          A personal design language built around a single idea: precision without coldness.
          Dark-mode native, warm amber accent, no shadows — depth comes from borders and typography.
        </p>

        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '17px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            margin: '0 0 3rem',
          }}
        >
          This showcase is both a living reference for the system and a copy-paste catalog of the
          components I actually use when building real interfaces.
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            margin: '0 0 1rem',
          }}
        >
          Tech stack
        </h2>

        <ul
          role="list"
          style={{
            listStyle: 'none',
            margin: '0 0 3rem',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {TECH_STACK.map(item => (
            <li
              key={item}
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '15px',
                color: 'var(--color-text-primary)',
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            margin: '0 0 1rem',
          }}
        >
          Source
        </h2>

        <a
          href="https://github.com/bmurgic/My-Design-System"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--color-accent-link)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--color-accent-border)',
            paddingBottom: '2px',
          }}
        >
          github.com/bmurgic/My-Design-System
        </a>
      </div>
    </section>
  )
}
