import * as React from "react"

import { CardSolid } from "@/registry/new-york-v4/ui/card-solid"

export default function CardSolidDemo() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <CardSolid
        title="Active Creators"
        value="07"
        icon="users"
        variant="success"
      />
      <CardSolid
        title="New Signups"
        value="03"
        icon="user-plus"
        variant="warning"
      />
    </div>
  )
}
