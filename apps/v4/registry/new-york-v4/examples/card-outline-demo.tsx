import * as React from "react"

import { CardOutline } from "@/registry/new-york-v4/ui/card-outline"

export default function CardOutlineDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CardOutline
        title="Active Creators"
        value="07"
        icon="users"
        variant="success"
      />
      <CardOutline
        title="New Signups"
        value="03"
        icon="user-plus"
        variant="warning"
      />
    </div>
  )
}
