import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

<div>
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane mode</Label>
</div>`

export function SwitchSection() {
  return (
    <ComponentSection
      slug="switch"
      category="Forms"
      label="Switch"
      description="Border-only track, amber thumb when on. Use for instant on/off settings."
      code={CODE}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Switch id="demo-airplane" />
        <Label htmlFor="demo-airplane" style={{ color: 'var(--color-text-secondary)' }}>Airplane mode</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Switch id="demo-notifications" defaultChecked />
        <Label htmlFor="demo-notifications" style={{ color: 'var(--color-text-secondary)' }}>Notifications on</Label>
      </div>
    </ComponentSection>
  )
}
