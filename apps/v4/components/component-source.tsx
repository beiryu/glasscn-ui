import fs from "node:fs/promises"
import path from "node:path"
import * as React from "react"

import { highlightCode } from "@/lib/highlight-code"
import { getRegistryItem } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper"
import { CopyButton } from "@/components/copy-button"
import { getIconForLanguageExtension } from "@/components/icons"
import { type Style } from "@/registry/_legacy-styles"

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
  styleName = "new-york-v4",
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  styleName?: Style["name"]
}) {
  if (!name && !src) {
    return null
  }

  let code: string | undefined

  if (name) {
    const item = await getRegistryItem(name, styleName)
    code = item?.files?.[0]?.content
  }

  if (src) {
    // Normalize the path - remove leading slash if present
    const normalizedSrc = src.startsWith("/") ? src.slice(1) : src

    // Resolve to absolute path
    const projectRoot = process.cwd()
    const resolvedPath = path.resolve(projectRoot, normalizedSrc)

    // Ensure the resolved path is within the project root to prevent directory traversal
    if (!resolvedPath.startsWith(projectRoot)) {
      console.error(`Invalid src path: ${src} - path outside project root`)
      return null
    }

    // Restrict to apps/v4 directory for security
    const allowedPrefix = path.join(projectRoot, "apps", "v4")
    if (!resolvedPath.startsWith(allowedPrefix)) {
      console.error(`Invalid src path: ${src} - must be within apps/v4`)
      return null
    }

    const file = await fs.readFile(resolvedPath, "utf-8")
    code = file
  }

  if (!code) {
    return null
  }

  // Fix imports.
  // Replace @/registry/${style}/ with @/components/.
  code = code.replaceAll(`@/registry/${styleName}/`, "@/components/")

  // Replace export default with export.
  code = code.replaceAll("export default", "export")
  code = code.replaceAll("/* eslint-disable react/no-children-prop */\n", "")

  const lang = language ?? title?.split(".").pop() ?? "tsx"
  const highlightedCode = await highlightCode(code, lang)

  if (!collapsible) {
    return (
      <div className={cn("relative", className)}>
        <ComponentCode
          code={code}
          highlightedCode={highlightedCode}
          language={lang}
          title={title}
        />
      </div>
    )
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      <ComponentCode
        code={code}
        highlightedCode={highlightedCode}
        language={lang}
        title={title}
      />
    </CodeCollapsibleWrapper>
  )
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string
  highlightedCode: string
  language: string
  title: string | undefined
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  )
}
