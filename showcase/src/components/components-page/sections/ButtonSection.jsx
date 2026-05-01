import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Button } from '@/components/ui/button'

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button disabled>Disabled</Button>
<Button size="tiny">Upgrade to Pro</Button>`

export function ButtonSection() {
  return (
    <ComponentSection
      slug="button"
      category="Forms"
      label="Button"
      description="Supabase-style: deep amber bg with vibrant alpha border, light text, 8px radius. Tiny size matches Supabase's compact pill."
      code={CODE}
    >
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button disabled>Disabled</Button>
      <Button size="tiny">Upgrade to Pro</Button>
    </ComponentSection>
  )
}
