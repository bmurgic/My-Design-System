"use client"

import * as React from "react"
import { cva } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className)}
      {...props} />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}) {
  const listRef = React.useRef(null)
  const mountedRef = React.useRef(false)

  React.useEffect(() => {
    if (variant !== "default") return
    const list = listRef.current
    if (!list) return

    const updateIndicator = () => {
      const active = list.querySelector('[data-slot="tabs-trigger"][data-state="active"]')
      if (!active) {
        list.style.setProperty("--tab-indicator-w", "0px")
        list.style.setProperty("--tab-indicator-h", "0px")
        return
      }
      list.style.setProperty("--tab-indicator-x", `${active.offsetLeft}px`)
      list.style.setProperty("--tab-indicator-y", `${active.offsetTop}px`)
      list.style.setProperty("--tab-indicator-w", `${active.offsetWidth}px`)
      list.style.setProperty("--tab-indicator-h", `${active.offsetHeight}px`)
      if (!mountedRef.current) {
        // Two RAFs so the first measurement paints before the transition is enabled.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            list.setAttribute("data-mounted", "true")
            mountedRef.current = true
          })
        })
      }
    }

    updateIndicator()

    const mutationObserver = new MutationObserver(updateIndicator)
    mutationObserver.observe(list, {
      subtree: true,
      attributes: true,
      attributeFilter: ["data-state"],
    })

    const resizeObserver = new ResizeObserver(updateIndicator)
    resizeObserver.observe(list)
    list.querySelectorAll('[data-slot="tabs-trigger"]').forEach((trigger) => {
      resizeObserver.observe(trigger)
    })

    return () => {
      mutationObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [variant])

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}>
      {variant === "default" ? (
        <span data-slot="tabs-indicator" aria-hidden="true" />
      ) : null}
      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  icon,
  children,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}>
      {icon ? <span data-slot="tabs-trigger-icon" aria-hidden="true">{icon}</span> : null}
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
