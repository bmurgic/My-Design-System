import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ComponentSection } from '../components-page/ComponentSection.jsx'

const CODE = `<Tabs defaultValue="notifications">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
    <TabsTrigger value="appearance">Appearance</TabsTrigger>
  </TabsList>
  <TabsContent value="notifications">
    <Switch id="email" /> <Label htmlFor="email">Email</Label>
    <Slider defaultValue={[60]} max={100} />
    <Select>...</Select>
  </TabsContent>
</Tabs>`

const SETTINGS = [
  { id: 'email', label: 'Email notifications', description: 'Receive product updates by email' },
  { id: 'push', label: 'Push notifications', description: 'Browser push for new activity' },
  { id: 'sms', label: 'SMS', description: 'Critical alerts only' },
]

export function SettingsPanelPattern() {
  return (
    <ComponentSection
      slug="settings-panel"
      category="Patterns"
      label="Settings Panel"
      description="Composed example: Tabs, Switch, Slider, Select, Separator. The kind of pattern most apps need somewhere."
      code={CODE}
    >
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <Tabs defaultValue="notifications">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="account" style={{ paddingTop: '1.5rem', color: 'var(--color-text-secondary)' }}>
            <p style={{ margin: 0 }}>Account settings live here.</p>
          </TabsContent>

          <TabsContent value="notifications" style={{ paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {SETTINGS.map(setting => (
                <div
                  key={setting.id}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
                >
                  <div>
                    <Label htmlFor={`settings-${setting.id}`} style={{ color: 'var(--color-text-primary)' }}>
                      {setting.label}
                    </Label>
                    <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-primary)', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                      {setting.description}
                    </p>
                  </div>
                  <Switch id={`settings-${setting.id}`} defaultChecked={setting.id === 'email'} />
                </div>
              ))}

              <Separator />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Label style={{ color: 'var(--color-text-primary)' }}>Notification volume</Label>
                <Slider defaultValue={[60]} max={100} step={1} aria-label="Notification volume" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Label style={{ color: 'var(--color-text-primary)' }}>Default channel</Label>
                <Select defaultValue="email">
                  <SelectTrigger aria-label="Default channel">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="push">Push notification</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" style={{ paddingTop: '1.5rem', color: 'var(--color-text-secondary)' }}>
            <p style={{ margin: 0 }}>Appearance settings live here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </ComponentSection>
  )
}
