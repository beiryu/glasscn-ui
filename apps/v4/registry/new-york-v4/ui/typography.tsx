import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("font-inter tracking-num--0_01", {
  variants: {
    variant: {
      title: "text-2xl leading-7 font-semibold",
      subheading: "text-lg leading-6.5 font-medium",
      body: "text-base leading-6 font-medium",
      "body-small": "text-sm leading-5 font-normal",
    },
    textColor: {
      default: "text-foreground",
      ghostwhite: "text-ghostwhite",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
    textColor: "default",
  },
})

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, textColor, asChild = false, as, ...props }, ref) => {
    const Comp = asChild ? Slot : as || "p"

    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, textColor, className }))}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

// Convenience components for each variant
const Title = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant"> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }
>(({ className, as, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      variant="title"
      as={as || "h2"}
      className={className}
      {...props}
    />
  )
})
Title.displayName = "Title"

const Subheading = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant"> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }
>(({ className, as, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      variant="subheading"
      as={as || "h3"}
      className={className}
      {...props}
    />
  )
})
Subheading.displayName = "Subheading"

const Body = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant">
>(({ className, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      variant="body"
      as="p"
      className={className}
      {...props}
    />
  )
})
Body.displayName = "Body"

const BodySmall = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant">
>(({ className, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      variant="body-small"
      as="p"
      className={className}
      {...props}
    />
  )
})
BodySmall.displayName = "BodySmall"

export { Typography, Title, Subheading, Body, BodySmall, typographyVariants }
