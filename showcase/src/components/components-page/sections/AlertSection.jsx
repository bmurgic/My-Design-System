import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>You can use BM components in any project.</AlertDescription>
</Alert>`

export function AlertSection() {
  return (
    <ComponentSection
      slug="alert"
      category="Feedback"
      label="Alert"
      description="In-page message. Border-left bar in amber (default) or error red."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '480px', maxWidth: '100%' }}>
        <Alert>
          <AlertTitle style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
            Heads up
          </AlertTitle>
          <AlertDescription style={{ color: 'var(--color-text-secondary)' }}>
            You can use BM components in any project.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive" data-variant="destructive">
          <AlertTitle style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
            Something went wrong
          </AlertTitle>
          <AlertDescription style={{ color: 'var(--color-text-secondary)' }}>
            Could not connect to the server. Check your network.
          </AlertDescription>
        </Alert>
      </div>
    </ComponentSection>
  )
}
