import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogTitle>Edit profile</DialogTitle>
    {/* ... */}
  </DialogContent>
</Dialog>`

export function DialogSection() {
  return (
    <ComponentSection
      slug="dialog"
      category="Overlay"
      label="Dialog"
      description="Modal with focus trap, Escape-to-close, and 60% black scrim. Border-only, no shadow."
      code={CODE}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit profile</Button>
        </DialogTrigger>
        <DialogContent style={{ backgroundColor: 'var(--color-bg-card)', maxWidth: '440px' }}>
          <DialogHeader>
            <DialogTitle style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
              Edit profile
            </DialogTitle>
            <DialogDescription style={{ color: 'var(--color-text-muted)' }}>
              Make changes to your profile. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Label htmlFor="dialog-name" style={{ color: 'var(--color-text-secondary)' }}>Name</Label>
              <Input id="dialog-name" defaultValue="Boris" />
            </div>
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentSection>
  )
}
