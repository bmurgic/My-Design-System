import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HugeiconsIcon } from '@hugeicons/react'
import { UserAccountIcon, LockPasswordIcon, Notification03Icon } from '@hugeicons/core-free-icons'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { HugeiconsIcon } from '@hugeicons/react'
import { UserAccountIcon, LockPasswordIcon, Notification03Icon } from '@hugeicons/core-free-icons'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account" icon={<HugeiconsIcon icon={UserAccountIcon} />}>
      Account
    </TabsTrigger>
    <TabsTrigger value="password" icon={<HugeiconsIcon icon={LockPasswordIcon} />}>
      Password
    </TabsTrigger>
    <TabsTrigger value="notifications" icon={<HugeiconsIcon icon={Notification03Icon} />}>
      Notifications
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings</TabsContent>
  <TabsContent value="password">Password settings</TabsContent>
  <TabsContent value="notifications">Notification preferences</TabsContent>
</Tabs>

// Large size:
<TabsList size="lg">
  <TabsTrigger value="account" icon={<HugeiconsIcon icon={UserAccountIcon} />}>
    Account
  </TabsTrigger>
  ...
</TabsList>`

export function TabsSection() {
  return (
    <ComponentSection
      slug="tabs"
      category="Layout"
      label="Tabs"
      description="Sliding shiny pill marks the active tab. Icons sit to the left of the label. Supports default and large sizes."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '520px' }}>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account" icon={<HugeiconsIcon icon={UserAccountIcon} />}>
              Account
            </TabsTrigger>
            <TabsTrigger value="password" icon={<HugeiconsIcon icon={LockPasswordIcon} />}>
              Password
            </TabsTrigger>
            <TabsTrigger value="notifications" icon={<HugeiconsIcon icon={Notification03Icon} />}>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" style={{ padding: '1rem 0', color: 'var(--color-text-secondary)' }}>
            Account settings panel.
          </TabsContent>
          <TabsContent value="password" style={{ padding: '1rem 0', color: 'var(--color-text-secondary)' }}>
            Change your password.
          </TabsContent>
          <TabsContent value="notifications" style={{ padding: '1rem 0', color: 'var(--color-text-secondary)' }}>
            Notification preferences.
          </TabsContent>
        </Tabs>

        <Tabs defaultValue="account">
          <TabsList size="lg">
            <TabsTrigger value="account" icon={<HugeiconsIcon icon={UserAccountIcon} />}>
              Account
            </TabsTrigger>
            <TabsTrigger value="password" icon={<HugeiconsIcon icon={LockPasswordIcon} />}>
              Password
            </TabsTrigger>
            <TabsTrigger value="notifications" icon={<HugeiconsIcon icon={Notification03Icon} />}>
              Notifications
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </ComponentSection>
  )
}
