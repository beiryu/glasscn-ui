import * as React from "react"
import Image from "next/image"

import { ComponentPreviewTabs } from "@/components/component-preview-tabs"
import { ComponentSource } from "@/components/component-source"
import { Index } from "@/registry/__index__"
import { type Style } from "@/registry/_legacy-styles"

/**
 * Try to load component directly from source in dev mode
 * This allows seeing changes without rebuilding registry
 * 
 * Note: This uses dynamic imports which work with Next.js/Turbopack
 * The component will be loaded on-demand when rendered
 */
function getComponentFromSource(
  name: string,
  styleName: Style["name"]
): React.LazyExoticComponent<React.ComponentType<any>> | null {
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  // Create a lazy component that tries to import from the expected path
  // Turbopack/Next.js will handle the dynamic import and hot reload
  return React.lazy(async () => {
    // Try examples first (most common for new components)
    try {
      const mod = await import(`@/registry/${styleName}/examples/${name}.tsx`)
      const exportName =
        mod.default
          ? "default"
          : Object.keys(mod).find(
              (key) =>
                typeof mod[key] === "function" ||
                typeof mod[key] === "object"
            ) || name
      return { default: mod.default || mod[exportName] }
    } catch {
      // Try without .tsx extension
      try {
        const mod = await import(`@/registry/${styleName}/examples/${name}`)
        const exportName =
          mod.default
            ? "default"
            : Object.keys(mod).find(
                (key) =>
                  typeof mod[key] === "function" ||
                  typeof mod[key] === "object"
              ) || name
        return { default: mod.default || mod[exportName] }
      } catch {
        // Try ui directory
        try {
          const mod = await import(`@/registry/${styleName}/ui/${name}.tsx`)
          const exportName =
            mod.default
              ? "default"
              : Object.keys(mod).find(
                  (key) =>
                    typeof mod[key] === "function" ||
                    typeof mod[key] === "object"
                ) || name
          return { default: mod.default || mod[exportName] }
        } catch {
          // Return placeholder component
          return {
            default: () => (
              <div className="p-4 text-sm text-muted-foreground border rounded">
                <p>
                  Component <code>{name}</code> not found. Check that the file
                  exists at:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>
                    <code>registry/{styleName}/examples/{name}.tsx</code>
                  </li>
                  <li>
                    <code>registry/{styleName}/ui/{name}.tsx</code>
                  </li>
                </ul>
                <p className="mt-2 text-xs">
                  Or run <code>pnpm registry:build</code> to rebuild the
                  registry.
                </p>
              </div>
            ),
          }
        }
      }
    }
  })
}

export function ComponentPreview({
  name,
  styleName = "new-york-v4",
  type,
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  styleName?: Style["name"]
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
  chromeLessOnMobile?: boolean
}) {
  // First try to get from Index (built registry)
  let Component = Index[styleName]?.[name]?.component

  // If not found and in dev mode, try to load directly from source
  if (!Component && process.env.NODE_ENV === "development") {
    Component = getComponentFromSource(name, styleName)
  }

  if (!Component) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
        {process.env.NODE_ENV === "development" && (
          <span className="block mt-2 text-xs">
            💡 Tip: Make sure the file exists at{" "}
            <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs">
              registry/{styleName}/examples/{name}.tsx
            </code>{" "}
            or run <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs">
              pnpm registry:build
            </code>
          </span>
        )}
      </p>
    )
  }

  if (type === "block") {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <Image
          src={`/r/styles/new-york-v4/${name}-light.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 w-[970px] max-w-none sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
        />
        <Image
          src={`/r/styles/new-york-v4/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute top-0 left-0 z-20 hidden w-[970px] max-w-none sm:w-[1280px] md:hidden dark:block md:dark:hidden"
        />
        <div className="bg-background absolute inset-0 hidden w-[1600px] md:block">
          <iframe src={`/view/${styleName}/${name}`} className="size-full" />
        </div>
      </div>
    )
  }

  // Render component - lazy components will be handled by Suspense in ComponentPreviewTabs
  const ComponentElement = Component ? <Component /> : null

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={ComponentElement}
      source={
        <ComponentSource
          name={name}
          collapsible={false}
          styleName={styleName}
        />
      }
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  )
}
