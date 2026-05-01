import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { ComponentSection } from '../ComponentSection.jsx'

const CODE = `<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`

export function CommandSection() {
  return (
    <ComponentSection
      slug="command"
      category="Navigation"
      label="Command"
      description="Searchable, keyboard-driven menu. Used in the ⌘K palette at the top of this page."
      code={CODE}
    >
      <div style={{ width: '100%', maxWidth: '420px', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Sign out</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </ComponentSection>
  )
}
