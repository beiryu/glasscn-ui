"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={cn(
        "group relative mt-4 mb-12 flex flex-col gap-2 rounded-lg border",
        className
      )}
      {...props}
    >
      <div data-slot="preview">
        <div
          data-align={align}
          className={cn(
            "preview bg-muted/30 flex w-full items-center justify-center data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
            chromeLessOnMobile ? "sm:p-10" : "h-[600px] min-h-[600px] p-10"
          )}
        >
          <div className="mx-auto">
            {mounted ? (
              <React.Suspense
                fallback={
                  <div className="text-muted-foreground flex h-10 w-20 items-center justify-center text-sm">
                    Loading...
                  </div>
                }
              >
                {component}
              </React.Suspense>
            ) : (
              <div className="h-10 w-20" aria-hidden="true" />
            )}
          </div>
        </div>
        {!hideCode && (
          <div
            data-slot="code"
            className="overflow-hidden [&_[data-rehype-pretty-code-figure]]:!m-0 [&_[data-rehype-pretty-code-figure]]:rounded-t-none [&_[data-rehype-pretty-code-figure]]:border-t [&_pre]:max-h-[400px]"
          >
            {source}
          </div>
        )}
      </div>
    </div>
  )
}
