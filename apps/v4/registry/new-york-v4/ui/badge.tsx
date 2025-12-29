import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-[1px] py-[3px] px-[8px] gap-[5px] min-h-[24px] text-xs font-semibold tracking-[0.02em] leading-4 whitespace-nowrap shrink-0 [&>svg]:size-[13px] [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      intent: {
        success: "",
        warning: "",
        error: "",
        info: "",
      },
      appearance: {
        outline: "",
        solid: "",
      },
    },
    compoundVariants: [
      // Success (green)
      {
        intent: "success",
        appearance: "outline",
        class:
          "bg-[rgba(52,199,89,0.15)] border-[rgba(52,199,89,0)] text-[#34c759]",
      },
      {
        intent: "success",
        appearance: "solid",
        class: "border-[rgba(52,199,89,0.3)] text-white",
      },
      // Warning (yellow)
      {
        intent: "warning",
        appearance: "outline",
        class:
          "bg-[rgba(234,208,38,0.15)] border-[rgba(234,208,38,0)] text-[#ead026]",
      },
      {
        intent: "warning",
        appearance: "solid",
        class: "border-[rgba(234,208,38,0.3)] text-white",
      },
      // Error (red)
      {
        intent: "error",
        appearance: "outline",
        class:
          "bg-[rgba(239,68,68,0.15)] border-[rgba(239,68,68,0)] text-[#ef4444]",
      },
      {
        intent: "error",
        appearance: "solid",
        class: "border-[rgba(239,68,68,0.3)] text-white",
      },
      // Info (blue)
      {
        intent: "info",
        appearance: "outline",
        class:
          "bg-[rgba(84,118,255,0.15)] border-[rgba(84,118,255,0)] text-[#5476ff]",
      },
      {
        intent: "info",
        appearance: "solid",
        class: "border-[rgba(52,92,255,0.3)] text-white",
      },
    ],
    defaultVariants: {
      intent: "info",
      appearance: "solid",
    },
  }
)

function Badge({
  className,
  intent,
  appearance,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-intent={intent || "info"}
      data-appearance={appearance || "solid"}
      className={cn(badgeVariants({ intent, appearance }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
