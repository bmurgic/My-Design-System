import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`

export function AlertDialogSection() {
  return (
    <ComponentSection
      slug="alert-dialog"
      category="Overlay"
      label="Alert Dialog"
      description="Confirmation modal for destructive actions. Cannot be dismissed by clicking outside."
      code={CODE}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent style={{ backgroundColor: 'var(--color-bg-card)' }}>
          <AlertDialogHeader>
            <AlertDialogTitle style={{ color: 'var(--color-text-primary)' }}>
              Delete this account?
            </AlertDialogTitle>
            <AlertDialogDescription style={{ color: 'var(--color-text-secondary)' }}>
              This action cannot be undone. All workspace data will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ComponentSection>
  )
}
