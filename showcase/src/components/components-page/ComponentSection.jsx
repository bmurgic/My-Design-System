import { useState } from 'react'
import { CodeDialog } from './CodeDialog.jsx'

/**
 * Wrapper for a single component (or pattern) showcase entry on the /components page.
 * Children are the live, interactive variants. `code` is a string of JSX shown in the dialog.
 */
export function ComponentSection({
  slug,
  category,
  label,
  description,
  code,
  children,
}) {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section
      id={slug}
      aria-label={label}
      style={{
        scrollMarginTop: '80px',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--color-border-subtle)',
        marginBottom: '4rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          margin: '0 0 0.5rem',
        }}
      >
        {category}
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '28px',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--color-text-primary)',
          margin: '0 0 1rem',
        }}
      >
        {label}
      </h2>

      {description && (
        <p
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '15px',
            color: 'var(--color-text-secondary)',
            margin: '0 0 2rem',
            maxWidth: '560px',
          }}
        >
          {description}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: 'var(--color-bg-card)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '0.75rem',
          minHeight: '120px',
        }}
      >
        {children}
      </div>

      <button
        onClick={() => setDialogOpen(true)}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--color-text-muted)',
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0.5rem 0',
          cursor: 'pointer',
          minHeight: '44px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          transition: 'color var(--duration-instant) var(--ease-out)',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)' }}
      >
        View code →
      </button>

      <CodeDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        label={label}
        code={code}
      />
    </section>
  )
}
