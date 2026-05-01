import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings</TabsContent>
  <TabsContent value="password">Password settings</TabsContent>
</Tabs>`

export function TabsSection() {
  return (
    <ComponentSection
      slug="tabs"
      category="Layout"
      label="Tabs"
      description="Underline-only active state. Arrow-key navigation built in."
      code={CODE}
    >
      <Tabs defaultValue="account" style={{ width: '100%', maxWidth: '480px' }}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
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
    </ComponentSection>
  )
}
