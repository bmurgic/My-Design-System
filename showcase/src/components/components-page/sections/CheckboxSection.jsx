import { Bell, GitBranch, ShieldCheck } from 'lucide-react'
import { Checkbox, CheckboxCardItem } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE_DEFAULT = `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms</Label>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <Checkbox id="newsletter" />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>`

const CODE_CARDS = `import { Bell, GitBranch, ShieldCheck } from 'lucide-react'
import { CheckboxCardItem } from '@/components/ui/checkbox'

<CheckboxCardItem
  icon={Bell}
  title="Push Notifications"
  subtext="Receive alerts for mentions and replies."
/>
<CheckboxCardItem
  icon={GitBranch}
  title="Branch Deployments"
  subtext="Auto-deploy on every branch push."
  defaultChecked
/>
<CheckboxCardItem
  icon={ShieldCheck}
  title="Security Alerts"
  subtext="Get notified about vulnerabilities."
  defaultChecked
/>`

export function CheckboxSection() {
  return (
    <ComponentSection
      slug="checkbox"
      category="Forms"
      label="Checkbox"
      description="4px radius. Amber check on selected state."
      code={CODE_DEFAULT}
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

export function CheckboxCardsSection() {
  return (
    <ComponentSection
      slug="checkbox-cards"
      category="Forms"
      label="Checkbox — Cards"
      description="Card-style checkboxes with icon, title, and subtext. Supports independent multi-select."
      code={CODE_CARDS}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '360px' }}>
        <CheckboxCardItem
          icon={Bell}
          title="Push Notifications"
          subtext="Receive alerts for mentions and replies."
        />
        <CheckboxCardItem
          icon={GitBranch}
          title="Branch Deployments"
          subtext="Auto-deploy on every branch push."
          defaultChecked
        />
        <CheckboxCardItem
          icon={ShieldCheck}
          title="Security Alerts"
          subtext="Get notified about vulnerabilities."
          defaultChecked
        />
      </div>
    </ComponentSection>
  )
}
