import * as React from "react"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { HugeiconsIcon } from "@hugeicons/react"
import { Checkmark } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

/**
 * RadioGroupCards — wraps RadioGroup.Root with a vertical flex layout suited
 * for card-style items. Pass `className` to override layout if needed.
 */
function RadioGroupCards({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * RadioGroupCardItem — a selectable card with optional icon, title, and subtext.
 * Uses `data-slot="radio-group-card-item"` so index.css can drive the checked /
 * hover / focus states without Tailwind arbitrary-value noise.
 *
 * @param {object} props
 * @param {React.ElementType} [props.icon]   Lucide (or any) icon component
 * @param {string}            props.title     Primary label
 * @param {string}            [props.subtext] Secondary description line
 */
function RadioGroupCardItem({ className, icon: Icon, title, subtext, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-card-item"
      className={cn(
        "group relative flex w-full cursor-pointer items-start gap-3 border p-5 text-left outline-none transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Radix indicator — kept for a11y state but visually hidden */}
      <RadioGroupPrimitive.Indicator className="sr-only" />

      {/* Checkmark badge — top-right corner, visible only when checked */}
      <span data-slot="radio-card-check" aria-hidden="true">
        <HugeiconsIcon icon={Checkmark} size={13} strokeWidth={3} color="currentColor" />
      </span>

      {Icon && (
        <span data-slot="radio-card-icon" aria-hidden="true">
          <Icon size={18} />
        </span>
      )}

      <span className="flex min-w-0 flex-col gap-0.5">
        <span data-slot="radio-card-title">{title}</span>
        {subtext && <span data-slot="radio-card-subtext">{subtext}</span>}
      </span>
    </RadioGroupPrimitive.Item>
  )
}

function RadioGroup({
  className,
  ...props
}) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props} />
  );
}

function RadioGroupItem({
  className,
  ...props
}) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center">
        <CircleIcon
          className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem, RadioGroupCards, RadioGroupCardItem }
