import { BlockDisplay } from "@/components/block-display"
import { getActiveStyle } from "@/registry/_legacy-styles"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = [
  "creator-credentials-01",
  "creator-credentials-02",
  "delete-confirmation-01",
  "delete-confirmation-02",
  "add-creator-01",
  "chat-ai-01",
  "assign-creators-01",
  "login-05",
  "card-solid-01",
  "card-outline-01",
  "sidebar-07",
  "kanban-01",
  "tasks-01",
]

export default async function BlocksPage() {
  const activeStyle = await getActiveStyle()

  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {FEATURED_BLOCKS.map((name) => (
        <BlockDisplay name={name} key={name} styleName={activeStyle.name} />
      ))}
    </div>
  )
}
