"use client"

import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function CheckboxError() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="error-unchecked" aria-invalid />
        <Label htmlFor="error-unchecked">Error unchecked state</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="error-checked" aria-invalid defaultChecked />
        <Label htmlFor="error-checked">Error checked state</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          id="error-circular-unchecked"
          variant="circular"
          aria-invalid
        />
        <Label htmlFor="error-circular-unchecked">
          Error circular unchecked
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          id="error-circular-checked"
          variant="circular"
          aria-invalid
          defaultChecked
        />
        <Label htmlFor="error-circular-checked">Error circular checked</Label>
      </div>
    </div>
  )
}
