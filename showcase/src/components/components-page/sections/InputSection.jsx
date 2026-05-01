import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`

export function InputSection() {
  return (
    <ComponentSection
      slug="input"
      category="Forms"
      label="Input"
      description="Elevated background, BM border, amber focus ring. Always paired with a visible label."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '320px', maxWidth: '100%' }}>
        <Label htmlFor="demo-email" style={{ color: 'var(--color-text-secondary)' }}>Email</Label>
        <Input id="demo-email" type="email" placeholder="you@example.com" autoComplete="email" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '320px', maxWidth: '100%' }}>
        <Label htmlFor="demo-disabled" style={{ color: 'var(--color-text-muted)' }}>Disabled</Label>
        <Input id="demo-disabled" disabled placeholder="Read-only" />
      </div>
    </ComponentSection>
  )
}
