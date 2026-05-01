import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger asChild><Button>Open sheet</Button></SheetTrigger>
  <SheetContent>
    <SheetTitle>Settings</SheetTitle>
  </SheetContent>
</Sheet>`

export function SheetSection() {
  return (
    <ComponentSection
      slug="sheet"
      category="Overlay"
      label="Sheet"
      description="Slide-in panel from the edge of the viewport. Useful for filters, settings, or details."
      code={CODE}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open settings</Button>
        </SheetTrigger>
        <SheetContent style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <SheetHeader>
            <SheetTitle style={{ color: 'var(--color-text-primary)' }}>Settings</SheetTitle>
            <SheetDescription style={{ color: 'var(--color-text-muted)' }}>
              Configure preferences for this workspace.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </ComponentSection>
  )
}
