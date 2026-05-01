import { useState } from 'react'
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
import { toast } from 'sonner'
import { ComponentSection } from '../components-page/ComponentSection.jsx'

const CODE = `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This will permanently delete your account.
    </AlertDialogDescription>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`

export function ConfirmationFlowPattern() {
  const [deleted, setDeleted] = useState(false)

  function handleConfirm() {
    setDeleted(true)
    toast('Account deleted', {
      description: 'In a real app, this would actually delete your account.',
    })
  }

  return (
    <ComponentSection
      slug="confirmation-flow"
      category="Patterns"
      label="Confirmation Flow"
      description="Composed example: destructive Button + AlertDialog + Sonner toast. The defensive UX pattern for irreversible actions."
      code={CODE}
    >
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" disabled={deleted}>
            {deleted ? 'Account deleted' : 'Delete account'}
          </Button>
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
            <AlertDialogAction onClick={handleConfirm}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ComponentSection>
  )
}
