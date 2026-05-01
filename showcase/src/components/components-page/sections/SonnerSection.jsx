import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { toast } from 'sonner'

<Button onClick={() => toast('Profile saved')}>
  Show toast
</Button>`

export function SonnerSection() {
  return (
    <ComponentSection
      slug="sonner"
      category="Feedback"
      label="Sonner (Toast)"
      description="Polite, non-focus-stealing notifications. Auto-dismiss in 4s."
      code={CODE}
    >
      <Button onClick={() => toast('Profile saved', { description: 'Your changes were saved successfully.' })}>
        Show toast
      </Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong', { description: 'Please try again.' })}>
        Show error
      </Button>
    </ComponentSection>
  )
}
