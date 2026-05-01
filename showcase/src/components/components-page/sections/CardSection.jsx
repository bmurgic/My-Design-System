import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>`

export function CardSection() {
  return (
    <ComponentSection
      slug="card"
      category="Display"
      label="Card"
      description="Surface for grouped content. Border-only depth, never a shadow."
      code={CODE}
    >
      <Card style={{ width: '320px', maxWidth: '100%', backgroundColor: 'var(--color-bg-elevated)' }}>
        <CardHeader>
          <CardTitle style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
            Project alpha
          </CardTitle>
          <CardDescription style={{ color: 'var(--color-text-muted)' }}>
            Internal tooling for the design team
          </CardDescription>
        </CardHeader>
        <CardContent style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
          Tracks design tokens across products and surfaces.
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Open</Button>
        </CardFooter>
      </Card>
    </ComponentSection>
  )
}
