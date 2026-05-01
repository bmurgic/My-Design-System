import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

<Popover>
  <PopoverTrigger asChild><Button>Open</Button></PopoverTrigger>
  <PopoverContent>Place content here.</PopoverContent>
</Popover>`

export function PopoverSection() {
  return (
    <ComponentSection
      slug="popover"
      category="Overlay"
      label="Popover"
      description="Lightweight floating container — useful for small forms or context menus."
      code={CODE}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent style={{ backgroundColor: 'var(--color-bg-elevated)' }}>
          <p style={{ margin: 0, fontFamily: 'var(--font-primary)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Floating content. Click outside or press Escape to close.
          </p>
        </PopoverContent>
      </Popover>
    </ComponentSection>
  )
}
