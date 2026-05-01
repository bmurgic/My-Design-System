import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Label } from '@/components/ui/label'

<Label htmlFor="username">Username</Label>
<Input id="username" />`

export function LabelSection() {
  return (
    <ComponentSection
      slug="label"
      category="Forms"
      label="Label"
      description="Always visible. Always linked to its input via htmlFor."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label htmlFor="demo-username" style={{ color: 'var(--color-text-secondary)' }}>Username</Label>
        <Input id="demo-username" placeholder="bmurgic" autoComplete="username" />
      </div>
    </ComponentSection>
  )
}
