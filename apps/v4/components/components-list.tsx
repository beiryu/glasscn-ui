import Link from "next/link"

import { PAGES_NEW } from "@/lib/docs"
import { source } from "@/lib/source"

export function ComponentsList() {
  const components = source.pageTree.children.find(
    (page) => page.$id === "components"
  )

  if (components?.type !== "folder") {
    return
  }

  const allowedComponents = [
    "accordion",
    "alert",
    "typography",
    "checkbox",
    "slider",
    "switch",
    "dialog",
    "badge",
    "breadcrumb",
    "button-group",
    "button",
    "card",
    "dropdown-menu",
    "input",
    "input-group",
    "tab",
    "tooltip",
    "select",
    "table",
  ]
  const excludedComponents = [
    "alert-dialog",
    "card-outline",
    "card-solid",
    "input-otp",
    "data-table",
  ]

  const list = components.children.filter((component) => {
    if (component.type !== "page") return false

    const url = component.url?.toLowerCase() || ""
    const name = component.name?.toLowerCase() || ""

    // Exclude components explicitly
    const isExcluded = excludedComponents.some((excluded) => {
      const urlMatch =
        url.includes(`/${excluded}`) || url.endsWith(`/${excluded}`)
      const nameMatch =
        name === excluded ||
        name === "alert dialog" ||
        name === "card outline" ||
        name === "card solid" ||
        name === "input otp" ||
        name === "data table"
      return urlMatch || nameMatch
    })

    if (isExcluded) return false

    return allowedComponents.some((allowed) => {
      const urlMatch =
        url.includes(`/${allowed}`) || url.endsWith(`/${allowed}`)
      const nameMatch = name === allowed
      return urlMatch || nameMatch
    })
  })

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
      {list.map((component) => (
        <Link
          key={component.$id}
          href={component.url}
          className="inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {component.name}
          {PAGES_NEW.includes(component.url) && (
            <span
              className="flex size-2 rounded-full bg-blue-500"
              title="New"
            />
          )}
        </Link>
      ))}
    </div>
  )
}
