"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { HugeiconsIcon } from "@hugeicons/react"
import { Checkmark } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none">
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

/**
 * CheckboxCardItem — a toggleable card with optional icon, title, and subtext.
 * Mirrors RadioGroupCardItem but for independent multi-select checkboxes.
 *
 * @param {object}            props
 * @param {React.ElementType} [props.icon]    Lucide (or any) icon component
 * @param {string}            props.title     Primary label
 * @param {string}            [props.subtext] Secondary description line
 */
function CheckboxCardItem({ className, icon: Icon, title, subtext, ...props }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox-card-item"
      className={cn(
        "group relative flex w-full cursor-pointer items-start gap-3 border p-5 text-left outline-none transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-card-check" aria-hidden="true" asChild>
        <span>
          <HugeiconsIcon icon={Checkmark} size={13} strokeWidth={3} color="currentColor" />
        </span>
      </CheckboxPrimitive.Indicator>

      {Icon && (
        <span data-slot="checkbox-card-icon" aria-hidden="true">
          <Icon size={18} />
        </span>
      )}

      <span className="flex min-w-0 flex-col gap-0.5">
        <span data-slot="checkbox-card-title">{title}</span>
        {subtext && <span data-slot="checkbox-card-subtext">{subtext}</span>}
      </span>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxCardItem }
