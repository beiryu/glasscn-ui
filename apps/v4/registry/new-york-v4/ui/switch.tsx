"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-4.5 w-10.25 shrink-0 items-center overflow-hidden rounded-full p-0.25 transition-all outline-none focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
        // Unchecked state:
        "",
        // Unchecked hover:
        "data-[state=unchecked]:hover:shadow-[0px_0px_0px_2px_rgba(255,255,255,0.25)]",
        // Checked state:
        "",
        // Checked disabled:
        "",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block self-center rounded-full bg-white transition-transform",
          "h-4 w-6",
          // Unchecked: left position with padding offset (1px), shadow
          "data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]",
          // Checked: right position
          "data-[state=checked]:translate-x-[15px] data-[state=checked]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]",
          // Checked hover: lighter shadow
          "data-[state=checked]:hover:shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
