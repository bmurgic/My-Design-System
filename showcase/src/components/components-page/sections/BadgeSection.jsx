import { Badge } from '@/components/ui/badge'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Badge } from '@/components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="violet">Violet</Badge>
<Badge variant="green">Green</Badge>`

export function BadgeSection() {
  return (
    <ComponentSection
      slug="badge"
      category="Display"
      label="Badge"
      description="Inline status indicators. Use sparingly — most UI doesn't need them."
      code={CODE}
    >
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="violet">Violet</Badge>
      <Badge variant="green">Green</Badge>
    </ComponentSection>
  )
}
