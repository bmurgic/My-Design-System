import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Hidden content</CollapsibleContent>
</Collapsible>`

export function CollapsibleSection() {
  const [open, setOpen] = useState(false)
  return (
    <ComponentSection
      slug="collapsible"
      category="Layout"
      label="Collapsible"
      description="Minimal show/hide primitive — useful for filter panels and 'show more' links."
      code={CODE}
    >
      <Collapsible open={open} onOpenChange={setOpen} style={{ width: '100%', maxWidth: '420px' }}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">{open ? 'Hide details' : 'Show details'}</Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          style={{
            marginTop: '0.75rem',
            padding: '1rem',
            backgroundColor: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
          }}
        >
          Hidden content revealed. The Collapsible primitive handles the open/closed state and aria attributes.
        </CollapsibleContent>
      </Collapsible>
    </ComponentSection>
  )
}
