import { Button } from '@/components/ui/button'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Button } from '@/components/ui/button'

<Button>Tiny</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

<Button pill>Tiny</Button>
<Button pill size="sm">Small</Button>
<Button pill size="lg">Large</Button>`

const VARIANTS = [
  { variant: 'default',     label: 'Default' },
  { variant: 'secondary',   label: 'Secondary' },
  { variant: 'outline',     label: 'Outline' },
  { variant: 'ghost',       label: 'Ghost' },
  { variant: 'destructive', label: 'Destructive' },
  { variant: 'default',     label: 'Disabled', disabled: true },
]

const SIZES = [
  { size: undefined, label: 'Tiny' },
  { size: 'sm',      label: 'Small' },
  { size: 'lg',      label: 'Large' },
]

const monoLabel = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
  margin: 0,
}

// Height of each size's button — must match Button heights (h-6=24, h-8=32, h-10=40)
const SIZE_HEIGHTS = { Tiny: 24, Small: 32, Large: 40 }

export function ButtonSection() {
  return (
    <ComponentSection
      slug="button"
      category="Forms"
      label="Button"
      description="Supabase-style: deep amber bg with vibrant alpha border, light text, 8px radius. Tiny is the default; sm and lg scale up."
      code={CODE}
    >
      {[false, true].map((pill) => (
        <div key={pill ? 'pill' : 'regular'} style={{ display: 'flex', gap: '1.25rem', width: '100%', alignItems: 'flex-start' }}>

          {/* Row labels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ ...monoLabel, color: 'var(--color-text-primary)', fontWeight: 700 }}>
              {pill ? 'Pill' : 'Regular'}
            </p>
            {SIZES.map(({ label }) => (
              <div key={label} style={{ height: SIZE_HEIGHTS[label], display: 'flex', alignItems: 'center' }}>
                <span style={monoLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* Variant columns */}
          {VARIANTS.map(({ variant, label, disabled }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <p style={{ ...monoLabel, textAlign: 'center' }}>{label}</p>
              {SIZES.map(({ size, label: sizeLabel }) => (
                <Button key={sizeLabel} variant={variant} size={size} pill={pill} disabled={disabled}>
                  {pill ? 'Pill' : label}
                </Button>
              ))}
            </div>
          ))}

        </div>
      ))}
    </ComponentSection>
  )
}
