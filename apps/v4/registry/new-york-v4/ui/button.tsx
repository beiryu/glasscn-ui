import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "relative rounded-xl text-white border border-transparent overflow-hidden shrink-0 [background:linear-gradient(180deg,rgba(93,113,249,0),rgba(24,127,245,0.8))_padding-box,linear-gradient(#5dcdf9,#5dcdf9)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(8,134,184,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] tracking-[-0.02em] leading-[120%] capitalize hover:shadow-[0px_0px_0px_3px_rgba(93,205,249,0.25)] hover:[background:linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0))_padding-box,linear-gradient(180deg,rgba(93,113,249,0),rgba(24,127,245,0.8))_padding-box,linear-gradient(#5dcdf9,#5dcdf9)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(8,134,184,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] disabled:opacity-100 disabled:hover:shadow-none disabled:hover:[background:linear-gradient(180deg,rgba(93,113,249,0),rgba(24,127,245,0.8))_padding-box,linear-gradient(#5dcdf9,#5dcdf9)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(8,134,184,0.4)_51.83%,rgba(171,171,171,0.4))_border-box]",
        destructive:
          "relative rounded-xl text-white border border-transparent overflow-hidden shrink-0 [background:linear-gradient(180deg,rgba(249,142,93,0),rgba(245,24,28,0.8))_padding-box,linear-gradient(#f95d86,#f95d86)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(184,8,55,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] tracking-[-0.02em] leading-[120%] capitalize hover:shadow-[0px_0px_0px_3px_rgba(249,142,93,0.25)] hover:[background:linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0))_padding-box,linear-gradient(180deg,rgba(249,142,93,0),rgba(245,24,28,0.8))_padding-box,linear-gradient(#f95d86,#f95d86)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(184,8,55,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] disabled:opacity-100 disabled:hover:shadow-none disabled:hover:[background:linear-gradient(180deg,rgba(249,142,93,0),rgba(245,24,28,0.8))_padding-box,linear-gradient(#f95d86,#f95d86)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(184,8,55,0.4)_51.83%,rgba(171,171,171,0.4))_border-box]",
        outline:
          "backdrop-blur-xs relative rounded-[10px] shadow-[0px_1px_6.2px_rgba(58,27,8,0.14)] bg-transparent border-border border-solid border-[1px] overflow-hidden shrink-0 text-foreground dark:text-white dark:bg-gray dark:border-whitesmoke tracking-[-0.01em] leading-5 font-semibold [paint-order:stroke_fill] hover:text-accent-foreground hover:shadow-[0px_0px_0px_2px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.08)] hover:[background:radial-gradient(55.65%_55%_at_55%_-2.5%,rgba(255,255,255,0.4),rgba(255,255,255,0)),linear-gradient(rgba(0,0,0,0.02),rgba(0,0,0,0.02))] dark:hover:shadow-[0px_0px_0px_3px_rgba(255,255,255,0.05),_0px_1px_6.2px_rgba(58,27,8,0.14)] dark:hover:[background:radial-gradient(55.65%_55%_at_55%_-2.5%,rgba(255,255,255,0.25),rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))] disabled:opacity-50 disabled:hover:shadow-[0px_1px_6.2px_rgba(58,27,8,0.14)] disabled:hover:bg-transparent dark:disabled:hover:bg-gray",
        success:
          "relative rounded-xl text-white border border-transparent overflow-hidden shrink-0 [background:linear-gradient(180deg,rgba(93,249,173,0),rgba(24,245,65,0.8))_padding-box,linear-gradient(#67f95d,#67f95d)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(19,184,8,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] tracking-[-0.02em] leading-[120%] capitalize hover:shadow-[0px_0px_0px_3px_rgba(93,249,173,0.25)] hover:[background:linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0))_padding-box,linear-gradient(180deg,rgba(93,249,173,0),rgba(24,245,65,0.8))_padding-box,linear-gradient(#67f95d,#67f95d)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(19,184,8,0.4)_51.83%,rgba(171,171,171,0.4))_border-box] disabled:opacity-100 disabled:hover:shadow-none disabled:hover:[background:linear-gradient(180deg,rgba(93,249,173,0),rgba(24,245,65,0.8))_padding-box,linear-gradient(#67f95d,#67f95d)_padding-box,linear-gradient(180deg,rgba(171,171,171,0.4),rgba(19,184,8,0.4)_51.83%,rgba(171,171,171,0.4))_border-box]",
        secondary:
          "glass relative rounded-[10px] bg-secondary text-secondary-foreground shadow-xs dark:shadow-[0px_-1px_0px_rgba(255,255,255,0.15)_inset,0px_1px_6.2px_rgba(58,27,8,0.14),0px_1px_0.6px_rgba(254,246,241,0.33)_inset] dark:bg-gray dark:text-white tracking-[-0.01em] leading-5 font-semibold [paint-order:stroke_fill] backdrop-blur-sm hover:shadow-[0px_0px_0px_2px_rgba(0,0,0,0.05),0px_2px_8px_rgba(0,0,0,0.08)] hover:[background:radial-gradient(55.65%_55%_at_55%_-2.5%,rgba(255,255,255,0.4),rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1))] dark:hover:shadow-[0px_0px_0px_3px_rgba(255,255,255,0.1),0px_-1px_0px_rgba(255,255,255,0.15)_inset,0px_1px_6.2px_rgba(58,27,8,0.14),0px_1px_0.6px_rgba(254,246,241,0.33)_inset] dark:hover:[background:radial-gradient(55.65%_55%_at_55%_-2.5%,rgba(255,255,255,0.25),rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.05))] disabled:opacity-50 disabled:hover:bg-secondary disabled:hover:shadow-xs dark:disabled:hover:shadow-[0px_-1px_0px_rgba(255,255,255,0.15)_inset,0px_1px_6.2px_rgba(58,27,8,0.14),0px_1px_0.6px_rgba(254,246,241,0.33)_inset] dark:disabled:hover:bg-gray",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 disabled:opacity-50",
        link: "text-primary underline-offset-4 hover:underline disabled:opacity-50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
