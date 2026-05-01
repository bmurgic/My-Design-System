/**
 * Static border-only placeholder shown while a lazy-loaded route's chunk is fetching.
 * No shimmer animation — consistent with the BM "no decorative animation" rule.
 */
export function RouteSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '96px 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          height: '12px',
          width: '120px',
          borderRadius: '2px',
          backgroundColor: 'var(--color-border-subtle)',
        }}
      />
      <div
        style={{
          height: '48px',
          width: '80%',
          borderRadius: '2px',
          backgroundColor: 'var(--color-border-subtle)',
        }}
      />
      <div
        style={{
          height: '120px',
          width: '100%',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-border-subtle)',
        }}
      />
    </div>
  )
}
