import { Skeleton } from '@/components/ui/skeleton'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Skeleton } from '@/components/ui/skeleton'

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />`

export function SkeletonSection() {
  return (
    <ComponentSection
      slug="skeleton"
      category="Display"
      label="Skeleton"
      description="Static gray placeholders for loading state. No shimmer animation — keeps the BM 'no decorative motion' rule."
      code={CODE}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '320px' }}>
        <Skeleton style={{ height: '12px', width: '60%', borderRadius: '2px' }} />
        <Skeleton style={{ height: '12px', width: '80%', borderRadius: '2px' }} />
        <Skeleton style={{ height: '12px', width: '70%', borderRadius: '2px' }} />
      </div>
    </ComponentSection>
  )
}
