"use client"

import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function CheckboxHover() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="hover-unchecked" />
        <Label htmlFor="hover-unchecked">Hover over this checkbox</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="hover-checked" defaultChecked />
        <Label htmlFor="hover-checked">Hover over checked checkbox</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="hover-circular" variant="circular" />
        <Label htmlFor="hover-circular">Circular checkbox</Label>
      </div>
    </div>
  )
}
