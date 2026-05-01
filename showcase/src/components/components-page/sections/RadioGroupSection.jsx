import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

<RadioGroup defaultValue="comfortable">
  <div>
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div>
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`

export function RadioGroupSection() {
  return (
    <ComponentSection
      slug="radio-group"
      category="Forms"
      label="Radio Group"
      description="Mutually exclusive selection. Amber dot when selected."
      code={CODE}
    >
      <RadioGroup defaultValue="comfortable" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1" style={{ color: 'var(--color-text-secondary)' }}>Default</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2" style={{ color: 'var(--color-text-secondary)' }}>Comfortable</Label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3" style={{ color: 'var(--color-text-secondary)' }}>Compact</Label>
        </div>
      </RadioGroup>
    </ComponentSection>
  )
}
