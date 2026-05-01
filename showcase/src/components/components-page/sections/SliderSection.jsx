import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[50]} max={100} step={1} />`

export function SliderSection() {
  return (
    <ComponentSection
      slug="slider"
      category="Forms"
      label="Slider"
      description="Range input. Amber fill, prominent border track."
      code={CODE}
    >
      <div style={{ width: '320px', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Label style={{ color: 'var(--color-text-secondary)' }}>Volume</Label>
        <Slider defaultValue={[50]} max={100} step={1} aria-label="Volume" />
      </div>
    </ComponentSection>
  )
}
