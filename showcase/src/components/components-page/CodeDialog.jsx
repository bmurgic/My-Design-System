import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const COPIED_FEEDBACK_MS = 1500

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for environments without clipboard API
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      return true
    } catch {
      return false
    }
  }
}

export function CodeDialog({ open, onOpenChange, label, code }) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)

  async function handleCopy() {
    const ok = await copyToClipboard(code)
    if (ok) {
      setCopied(true)
      setError(false)
      setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS)
    } else {
      setError(true)
      setTimeout(() => setError(false), COPIED_FEEDBACK_MS)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          maxWidth: '720px',
          width: 'calc(100vw - 2rem)',
          backgroundColor: 'var(--color-bg-card)',
          padding: '1.5rem',
        }}
      >
        <DialogHeader>
          <DialogTitle
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '20px',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {label}
          </DialogTitle>
          <DialogDescription
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              margin: 0,
            }}
          >
            JSX source for the {label} variants
          </DialogDescription>
        </DialogHeader>

        <pre
          tabIndex={0}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'var(--color-text-primary)',
            backgroundColor: 'var(--color-bg-button)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            margin: 0,
            overflowX: 'auto',
            maxHeight: '50vh',
          }}
        >
          <code>{code}</code>
        </pre>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.5rem',
            alignItems: 'center',
          }}
        >
          <span
            aria-live="polite"
            role="status"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              minHeight: '1em',
              color: error
                ? 'var(--color-error)'
                : copied
                  ? 'var(--color-accent)'
                  : 'var(--color-text-muted)',
              transition: 'color var(--duration-instant) var(--ease-out)',
            }}
          >
            {error ? 'Copy failed' : copied ? 'Copied' : ''}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
          >
            Copy code
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CodeDialogTrigger({ children }) {
  return <DialogTrigger asChild>{children}</DialogTrigger>
}
