import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { COMPONENT_REGISTRY, ALL_SLUGS } from './COMPONENT_REGISTRY.js'
import { useDebounce } from '@/hooks/useDebounce'
import { useActiveSection } from '@/hooks/useActiveSection'

const SCROLL_DEBOUNCE_MS = 150

function filterRegistry(query) {
  if (!query.trim()) return COMPONENT_REGISTRY

  const needle = query.toLowerCase()
  return COMPONENT_REGISTRY
    .map(group => ({
      ...group,
      items: group.items.filter(item => item.label.toLowerCase().includes(needle)),
    }))
    .filter(group => group.items.length > 0)
}

export function ComponentsSidebar({ onOpenCommandPalette }) {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, SCROLL_DEBOUNCE_MS)

  const filteredGroups = useMemo(() => filterRegistry(debouncedQuery), [debouncedQuery])
  const activeSlug = useActiveSection(ALL_SLUGS)

  return (
    <aside
      aria-label="Component navigation"
      style={{
        position: 'sticky',
        top: '60px',
        alignSelf: 'flex-start',
        width: 'var(--sidebar-width)',
        flexShrink: 0,
        height: 'calc(100vh - 60px)',
        overflowY: 'auto',
        backgroundColor: 'var(--color-bg-page)',
        borderRight: '1px solid var(--color-border-subtle)',
        zIndex: 'var(--z-sidebar)',
      }}
    >
      {/* Search input */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'var(--color-bg-page)',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      >
        <label htmlFor="sidebar-search" className="sr-only" style={srOnly}>
          Search components
        </label>
        <div style={{ position: 'relative' }}>
          <Input
            id="sidebar-search"
            type="search"
            placeholder="Search…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ paddingRight: '3rem', minHeight: '36px' }}
          />
          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            style={{
              position: 'absolute',
              right: '6px',
              top: '50%',
              transform: 'translateY(-50%)',
              minHeight: '24px',
              height: '24px',
              padding: '0 0.4rem',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-text-muted)',
              backgroundColor: 'var(--color-bg-button)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
          >
            ⌘K
          </button>
        </div>
      </div>

      {/* Groups */}
      <nav style={{ padding: '1rem 0' }}>
        {filteredGroups.length === 0 ? (
          <p
            style={{
              padding: '1rem 1.25rem',
              fontFamily: 'var(--font-primary)',
              fontSize: '13px',
              color: 'var(--color-text-muted)',
              margin: 0,
            }}
          >
            No results
          </p>
        ) : (
          filteredGroups.map(group => (
            <SidebarGroup
              key={group.id}
              group={group}
              activeSlug={activeSlug}
            />
          ))
        )}
      </nav>
    </aside>
  )
}

function SidebarGroup({ group, activeSlug }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <p
        style={{
          padding: '0 1.25rem',
          margin: '0 0 0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        {group.label}
      </p>
      <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {group.items.map(item => {
          const isActive = item.slug === activeSlug
          return (
            <li key={item.slug} style={{ position: 'relative' }}>
              {isActive && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '6px',
                    bottom: '6px',
                    width: '2px',
                    backgroundColor: 'var(--color-accent)',
                  }}
                />
              )}
              <a
                href={`#${item.slug}`}
                aria-current={isActive ? 'location' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '36px',
                  padding: '0.375rem 1.25rem',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '14px',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--duration-instant) var(--ease-out)',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)'
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)'
                }}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const srOnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}
