import { ScrollArea } from '@/components/ui/scroll-area'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { ScrollArea } from '@/components/ui/scroll-area'

<ScrollArea className="h-72">
  {/* Long content */}
</ScrollArea>`

const ITEMS = Array.from({ length: 24 }, (_, i) => `Item ${i + 1}`)

export function ScrollAreaSection() {
  return (
    <ComponentSection
      slug="scroll-area"
      category="Layout"
      label="Scroll Area"
      description="Custom scrollbar styling with native scroll behavior preserved."
      code={CODE}
    >
      <ScrollArea
        style={{
          height: '180px',
          width: '320px',
          maxWidth: '100%',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '0.5rem 1rem',
        }}
      >
        <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {ITEMS.map(item => (
            <li key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              {item}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </ComponentSection>
  )
}
