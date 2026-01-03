import * as React from "react"

import {
  ActiveCreatorsCardSolid,
  NewSignupsCardSolid,
} from "@/registry/new-york-v4/ui/card-solid"

export default function CardSolidStates() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Regular</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ActiveCreatorsCardSolid value="07" />
          <NewSignupsCardSolid value="03" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Hover/Focused State</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ActiveCreatorsCardSolid value="07" state="hover" />
          <NewSignupsCardSolid value="03" state="hover" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Disabled State</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ActiveCreatorsCardSolid value="07" disabled />
          <NewSignupsCardSolid value="03" disabled />
        </div>
      </div>
    </div>
  )
}
