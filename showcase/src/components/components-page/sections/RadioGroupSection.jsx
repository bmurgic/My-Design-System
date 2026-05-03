import { Zap, Server, Globe } from 'lucide-react'
import { RadioGroup, RadioGroupItem, RadioGroupCards, RadioGroupCardItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE_DEFAULT = `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

<RadioGroup defaultValue="comfortable">
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`

const CODE_CARDS = `import { Zap, Server, Globe } from 'lucide-react'
import { RadioGroupCards, RadioGroupCardItem } from '@/components/ui/radio-group'

<RadioGroupCards defaultValue="edge">
  <RadioGroupCardItem
    value="edge"
    icon={Zap}
    title="Edge"
    subtext="Deploy globally at the network edge. Lowest latency."
  />
  <RadioGroupCardItem
    value="serverless"
    icon={Server}
    title="Serverless"
    subtext="Auto-scaling functions. Pay only for what you use."
  />
  <RadioGroupCardItem
    value="region"
    icon={Globe}
    title="Single Region"
    subtext="Deploy to one data center. Predictable performance."
  />
</RadioGroupCards>`

export function RadioGroupSection() {
  return (
    <ComponentSection
      slug="radio-group"
      category="Forms"
      label="Radio Group"
      description="Mutually exclusive selection. Amber dot when selected."
      code={CODE_DEFAULT}
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

export function RadioGroupCardsSection() {
  return (
    <ComponentSection
      slug="radio-group-cards"
      category="Forms"
      label="Radio Group — Cards"
      description="Card-style radio group with icon, title, and subtext. Amber border and tinted background on selection."
      code={CODE_CARDS}
    >
      <RadioGroupCards defaultValue="edge" style={{ width: '100%', maxWidth: '360px' }}>
        <RadioGroupCardItem
          value="edge"
          icon={Zap}
          title="Edge"
          subtext="Deploy globally at the network edge. Lowest latency."
        />
        <RadioGroupCardItem
          value="serverless"
          icon={Server}
          title="Serverless"
          subtext="Auto-scaling functions. Pay only for what you use."
        />
        <RadioGroupCardItem
          value="region"
          icon={Globe}
          title="Single Region"
          subtext="Deploy to one data center. Predictable performance."
        />
      </RadioGroupCards>
    </ComponentSection>
  )
}
