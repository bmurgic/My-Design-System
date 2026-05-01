import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

<Label htmlFor="message">Message</Label>
<Textarea id="message" placeholder="Type your message..." />`

export function TextareaSection() {
  return (
    <ComponentSection
      slug="textarea"
      category="Forms"
      label="Textarea"
      description="Multi-line input. Inherits the input visual language."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '420px', maxWidth: '100%' }}>
        <Label htmlFor="demo-message" style={{ color: 'var(--color-text-secondary)' }}>Message</Label>
        <Textarea id="demo-message" placeholder="Type your message..." />
      </div>
    </ComponentSection>
  )
}
