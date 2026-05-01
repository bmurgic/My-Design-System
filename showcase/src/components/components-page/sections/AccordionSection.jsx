import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. Built on Radix.</AccordionContent>
  </AccordionItem>
</Accordion>`

export function AccordionSection() {
  return (
    <ComponentSection
      slug="accordion"
      category="Layout"
      label="Accordion"
      description="Stacked, collapsible sections. Each trigger announces expanded/collapsed state."
      code={CODE}
    >
      <Accordion type="single" collapsible style={{ width: '100%', maxWidth: '480px' }}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. Built on Radix — full keyboard support and aria-expanded.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it themed?</AccordionTrigger>
          <AccordionContent>Strict BM aesthetic — border-only depth, amber accents.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentSection>
  )
}
