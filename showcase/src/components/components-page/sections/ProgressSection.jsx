import { useEffect, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Progress } from '@/components/ui/progress'

<Progress value={66} />`

export function ProgressSection() {
  const [value, setValue] = useState(33)

  useEffect(() => {
    const id = setInterval(() => {
      setValue(prev => (prev >= 100 ? 0 : prev + 10))
    }, 800)
    return () => clearInterval(id)
  }, [])

  return (
    <ComponentSection
      slug="progress"
      category="Display"
      label="Progress"
      description="Linear progress indicator. Amber fill, 4px height."
      code={CODE}
    >
      <div style={{ width: '320px', maxWidth: '100%' }}>
        <Progress value={value} />
      </div>
    </ComponentSection>
  )
}
