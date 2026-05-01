import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { COMPONENT_REGISTRY } from './COMPONENT_REGISTRY.js'

export function CommandPalette({ open, onOpenChange }) {
  function handleSelect(slug) {
    onOpenChange(false)
    // Wait for the dialog close transition before scrolling
    setTimeout(() => {
      const el = document.getElementById(slug)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `#${slug}`)
      }
    }, 50)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Component search"
      description="Jump to any component or pattern"
    >
      <CommandInput placeholder="Search components and patterns..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {COMPONENT_REGISTRY.map(group => (
          <CommandGroup key={group.id} heading={group.label}>
            {group.items.map(item => (
              <CommandItem
                key={item.slug}
                value={`${group.label} ${item.label}`}
                onSelect={() => handleSelect(item.slug)}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
