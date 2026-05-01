import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `<Avatar>
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>BM</AvatarFallback>
</Avatar>`

export function AvatarSection() {
  return (
    <ComponentSection
      slug="avatar"
      category="Display"
      label="Avatar"
      description="User profile circle with image and fallback initials."
      code={CODE}
    >
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--color-bg-elevated)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)', fontWeight: 500 }}>
          BM
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-bg-page)', fontFamily: 'var(--font-primary)', fontWeight: 600 }}>
          JD
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-primary)' }}>
          ?
        </AvatarFallback>
      </Avatar>
    </ComponentSection>
  )
}
