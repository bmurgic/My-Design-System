import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`

export function SelectSection() {
  return (
    <ComponentSection
      slug="select"
      category="Forms"
      label="Select"
      description="Native-feeling dropdown built on Radix. Keyboard navigable out of the box."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '240px' }}>
        <Label style={{ color: 'var(--color-text-secondary)' }}>Default channel</Label>
        <Select>
          <SelectTrigger aria-label="Default channel">
            <SelectValue placeholder="Choose..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
            <SelectItem value="push">Push notification</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </ComponentSection>
  )
}
