export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        marginBottom: '0.75rem',
        marginTop: 0,
      }}
    >
      {children}
    </p>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 400,
        color: 'var(--color-text-primary)',
        margin: '0 0 1rem',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  )
}
