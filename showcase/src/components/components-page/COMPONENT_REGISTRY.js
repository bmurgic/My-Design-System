import { ButtonSection } from './sections/ButtonSection.jsx'
import { InputSection } from './sections/InputSection.jsx'
import { TextareaSection } from './sections/TextareaSection.jsx'
import { LabelSection } from './sections/LabelSection.jsx'
import { CheckboxSection } from './sections/CheckboxSection.jsx'
import { RadioGroupSection } from './sections/RadioGroupSection.jsx'
import { SwitchSection } from './sections/SwitchSection.jsx'
import { SliderSection } from './sections/SliderSection.jsx'
import { SelectSection } from './sections/SelectSection.jsx'
import { AccordionSection } from './sections/AccordionSection.jsx'
import { TabsSection } from './sections/TabsSection.jsx'
import { CollapsibleSection } from './sections/CollapsibleSection.jsx'
import { ScrollAreaSection } from './sections/ScrollAreaSection.jsx'
import { DialogSection } from './sections/DialogSection.jsx'
import { SheetSection } from './sections/SheetSection.jsx'
import { PopoverSection } from './sections/PopoverSection.jsx'
import { TooltipSection } from './sections/TooltipSection.jsx'
import { AlertDialogSection } from './sections/AlertDialogSection.jsx'
import { DropdownMenuSection } from './sections/DropdownMenuSection.jsx'
import { BreadcrumbSection } from './sections/BreadcrumbSection.jsx'
import { CommandSection } from './sections/CommandSection.jsx'
import { PaginationSection } from './sections/PaginationSection.jsx'
import { AvatarSection } from './sections/AvatarSection.jsx'
import { BadgeSection } from './sections/BadgeSection.jsx'
import { CardSection } from './sections/CardSection.jsx'
import { ProgressSection } from './sections/ProgressSection.jsx'
import { SkeletonSection } from './sections/SkeletonSection.jsx'
import { TableSection } from './sections/TableSection.jsx'
import { SeparatorSection } from './sections/SeparatorSection.jsx'
import { AlertSection } from './sections/AlertSection.jsx'
import { SonnerSection } from './sections/SonnerSection.jsx'
import { LoginFormPattern } from '../patterns/LoginFormPattern.jsx'
import { SettingsPanelPattern } from '../patterns/SettingsPanelPattern.jsx'
import { ConfirmationFlowPattern } from '../patterns/ConfirmationFlowPattern.jsx'

/**
 * Single source of truth — drives the sidebar, search, and content order.
 * Each item: { slug, label, Component }. Slug doubles as the section id (anchor target).
 */
export const COMPONENT_REGISTRY = [
  {
    id: 'forms',
    label: 'Forms',
    items: [
      { slug: 'button', label: 'Button', Component: ButtonSection },
      { slug: 'input', label: 'Input', Component: InputSection },
      { slug: 'textarea', label: 'Textarea', Component: TextareaSection },
      { slug: 'label', label: 'Label', Component: LabelSection },
      { slug: 'checkbox', label: 'Checkbox', Component: CheckboxSection },
      { slug: 'radio-group', label: 'Radio Group', Component: RadioGroupSection },
      { slug: 'switch', label: 'Switch', Component: SwitchSection },
      { slug: 'slider', label: 'Slider', Component: SliderSection },
      { slug: 'select', label: 'Select', Component: SelectSection },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    items: [
      { slug: 'accordion', label: 'Accordion', Component: AccordionSection },
      { slug: 'tabs', label: 'Tabs', Component: TabsSection },
      { slug: 'collapsible', label: 'Collapsible', Component: CollapsibleSection },
      { slug: 'scroll-area', label: 'Scroll Area', Component: ScrollAreaSection },
    ],
  },
  {
    id: 'overlay',
    label: 'Overlay',
    items: [
      { slug: 'dialog', label: 'Dialog', Component: DialogSection },
      { slug: 'sheet', label: 'Sheet', Component: SheetSection },
      { slug: 'popover', label: 'Popover', Component: PopoverSection },
      { slug: 'tooltip', label: 'Tooltip', Component: TooltipSection },
      { slug: 'alert-dialog', label: 'Alert Dialog', Component: AlertDialogSection },
      { slug: 'dropdown-menu', label: 'Dropdown Menu', Component: DropdownMenuSection },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      { slug: 'breadcrumb', label: 'Breadcrumb', Component: BreadcrumbSection },
      { slug: 'command', label: 'Command', Component: CommandSection },
      { slug: 'pagination', label: 'Pagination', Component: PaginationSection },
    ],
  },
  {
    id: 'display',
    label: 'Display',
    items: [
      { slug: 'avatar', label: 'Avatar', Component: AvatarSection },
      { slug: 'badge', label: 'Badge', Component: BadgeSection },
      { slug: 'card', label: 'Card', Component: CardSection },
      { slug: 'progress', label: 'Progress', Component: ProgressSection },
      { slug: 'skeleton', label: 'Skeleton', Component: SkeletonSection },
      { slug: 'table', label: 'Table', Component: TableSection },
      { slug: 'separator', label: 'Separator', Component: SeparatorSection },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    items: [
      { slug: 'alert', label: 'Alert', Component: AlertSection },
      { slug: 'sonner', label: 'Sonner (Toast)', Component: SonnerSection },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    items: [
      { slug: 'login-form', label: 'Login Form', Component: LoginFormPattern },
      { slug: 'settings-panel', label: 'Settings Panel', Component: SettingsPanelPattern },
      { slug: 'confirmation-flow', label: 'Confirmation Flow', Component: ConfirmationFlowPattern },
    ],
  },
]

/** Flat list for search and active-section detection. */
export const ALL_ITEMS = COMPONENT_REGISTRY.flatMap(group =>
  group.items.map(item => ({ ...item, category: group.label, groupId: group.id }))
)

export const ALL_SLUGS = ALL_ITEMS.map(item => item.slug)
