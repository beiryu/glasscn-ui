import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-[15px] border flex items-center py-[10px] px-[15px] gap-3",
  {
    variants: {
      variant: {
        default:
          "border border-border text-foreground dark:border-white/25 dark:text-[#fafafa] [&>svg]:h-5 [&>svg]:w-4 [&>svg]:text-current [&>svg]:shrink-0",
        destructive:
          "border border-destructive/50 text-destructive dark:border-white/40 dark:text-[#dc2626] [&>svg]:h-5 [&>svg]:w-4 [&>svg]:text-current [&>svg]:shrink-0",
        success:
          "border border-success/50 text-success dark:border-white/40 dark:text-[#388e1e] [&>svg]:h-5 [&>svg]:w-4 [&>svg]:text-current [&>svg]:shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant || "default"}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("leading-5 font-semibold tracking-[0.01em]", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("leading-[21px] tracking-[0.01em] opacity-75", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
