import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div>
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`

export function CheckboxSection() {
  return (
    <ComponentSection
      slug="checkbox"
      category="Forms"
      label="Checkbox"
      description="4px radius. Amber check on selected state."
      code={CODE}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox id="demo-terms" defaultChecked />
        <Label htmlFor="demo-terms" style={{ color: 'var(--color-text-secondary)' }}>Accept terms</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Checkbox id="demo-newsletter" />
        <Label htmlFor="demo-newsletter" style={{ color: 'var(--color-text-secondary)' }}>Subscribe to newsletter</Label>
      </div>
    </ComponentSection>
  )
}
