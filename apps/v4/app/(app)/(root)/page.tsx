import { redirect } from "next/navigation"

export const dynamic = "force-static"
export const revalidate = false

export default function IndexPage() {
  redirect("/docs/components")
}
