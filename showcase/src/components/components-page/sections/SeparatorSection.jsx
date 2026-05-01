import { Separator } from '@/components/ui/separator'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Separator } from '@/components/ui/separator'

<Separator />`

export function SeparatorSection() {
  return (
    <ComponentSection
      slug="separator"
      category="Display"
      label="Separator"
      description="Horizontal or vertical divider. Subtle BM border color."
      code={CODE}
    >
      <div style={{ width: '320px', maxWidth: '100%' }}>
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Above the line
        </p>
        <Separator style={{ margin: '0.75rem 0' }} />
        <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          Below the line
        </p>
      </div>
    </ComponentSection>
  )
}
