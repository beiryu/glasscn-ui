"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Activity,
  TrendingUp,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  "user-plus": UserPlus,
  "trending-up": TrendingUp,
  activity: Activity,
}

const cardOutlineVariants = cva(
  "h-full flex-1 w-full relative rounded-[12.5px] overflow-hidden shrink-0 flex items-center justify-between text-center font-inter transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        success: "text-[#33bc56] border-[#33bc56]",
        warning: "text-[#bc6133] border-[#bc6133]",
        danger:
          "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
      },
      size: {
        default: "p-[15px] gap-5",
        sm: "p-4 gap-3",
        lg: "p-8 gap-6",
      },
      state: {
        default: "",
        hover: "",
        disabled: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

export interface CardOutlineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardOutlineVariants> {
  title: string
  value: string | number
  icon?: keyof typeof iconMap
  trend?: {
    value: string
    label: string
    isPositive?: boolean
  }
  disabled?: boolean
}

const CardOutline = React.forwardRef<HTMLDivElement, CardOutlineProps>(
  (
    {
      className,
      variant,
      size,
      state,
      title,
      value,
      icon,
      trend,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const cardState = disabled
      ? "disabled"
      : isHovered
        ? "hover"
        : state || "default"
    const IconComponent = icon ? iconMap[icon] : undefined

    return (
      <div
        ref={ref}
        data-slot="card-outline"
        data-variant={variant}
        data-layout="outline"
        data-state={cardState}
        className={cn(
          cardOutlineVariants({ variant, size, state: cardState }),
          "border-[1px] bg-transparent backdrop-blur-xs",
          className
        )}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        {...props}
      >
        <div className="flex flex-col items-start gap-0.5">
          <b
            className="relative leading-[120%] tracking-[-0.02em] capitalize"
            style={{
              fontSize: "40px",
              textShadow:
                "0px 0.5957661271095276px 0px rgba(255, 255, 255, 0.25)",
            }}
          >
            {value}
          </b>
          <div
            className="relative leading-[120%] tracking-[-0.02em] capitalize"
            style={{
              fontSize: "16px",
              textShadow:
                "0px 0.5957661271095276px 0px rgba(255, 255, 255, 0.25)",
            }}
          >
            {title}
          </div>
          {trend && (
            <div
              data-slot="card-outline-trend"
              data-variant={variant}
              className="mt-1 box-border flex min-h-[24px] shrink-0 items-center gap-[5px] overflow-hidden rounded-[9999px] border-[1px] px-2 py-[3px] text-xs leading-4 font-semibold tracking-[0.02em] whitespace-nowrap backdrop-blur-xs transition-[color,box-shadow]"
            >
              <span className="shrink-0">
                {trend.value} {trend.label}
              </span>
            </div>
          )}
        </div>
        {IconComponent && (
          <div className="flex-shrink-0">
            <IconComponent className="relative h-[57px] w-[57px]" />
          </div>
        )}
      </div>
    )
  }
)
CardOutline.displayName = "CardOutline"

// Preset card components for common use cases
const ActiveCreatorsCardOutline = React.forwardRef<
  HTMLDivElement,
  Omit<CardOutlineProps, "title" | "icon">
>(({ value = "07", variant = "success", ...props }, ref) => (
  <CardOutline
    ref={ref}
    title="Active Creators"
    value={value}
    icon="users"
    variant={variant}
    {...props}
  />
))
ActiveCreatorsCardOutline.displayName = "ActiveCreatorsCardOutline"

const NewSignupsCardOutline = React.forwardRef<
  HTMLDivElement,
  Omit<CardOutlineProps, "title" | "icon">
>(({ value = "03", variant = "warning", ...props }, ref) => (
  <CardOutline
    ref={ref}
    title="New Signups"
    value={value}
    icon="user-plus"
    variant={variant}
    {...props}
  />
))
NewSignupsCardOutline.displayName = "NewSignupsCardOutline"

export {
  CardOutline,
  ActiveCreatorsCardOutline,
  NewSignupsCardOutline,
  cardOutlineVariants,
}
