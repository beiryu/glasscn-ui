"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckIcon, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer relative shrink-0 border border-solid outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        square: "rounded",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "square",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

function Checkbox({
  className,
  variant,
  "aria-invalid": ariaInvalid,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        checkboxVariants({ variant }),
        // Default unchecked state
        "border-border bg-background h-4 w-4 dark:border-white/50 dark:bg-white/10",
        // Hover unchecked state - ring shadow
        "hover:shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)] dark:hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,0.25)]",
        // Checked state - gradient background, shadow and size
        "data-[state=checked]:border-primary data-[state=checked]:h-4 data-[state=checked]:w-4 data-[state=checked]:shadow-[0px_1px_6.2px_rgba(58,27,8,0.14)] dark:data-[state=checked]:border-white/50",
        // Hover on checked state - blue ring shadow
        "data-[state=checked]:hover:shadow-[0px_0px_0px_2px_rgba(65,100,241,0.25)]",
        // Error unchecked state - crimson background and border
        "aria-invalid:border-destructive/50 aria-invalid:bg-destructive/10 dark:aria-invalid:border-[rgba(239,68,68,0.5)] dark:aria-invalid:bg-[rgba(239,68,68,0.1)]",
        // Error checked state - crimson gradient, shadow and border
        "aria-invalid:data-[state=checked]:border-destructive aria-invalid:data-[state=checked]:h-4 aria-invalid:data-[state=checked]:w-4 aria-invalid:data-[state=checked]:shadow-[0px_1px_6.2px_rgba(58,27,8,0.14)] dark:aria-invalid:data-[state=checked]:border-white/50",
        // Focus states
        "focus-visible:ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )}
      aria-invalid={ariaInvalid}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="absolute inset-[1px] grid place-content-center text-white transition-none"
      >
        {ariaInvalid ? (
          <XIcon className="size-3" />
        ) : (
          <CheckIcon className="size-3" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
