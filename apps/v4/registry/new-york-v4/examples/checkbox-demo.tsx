"use client"

import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import { Label } from "@/registry/new-york-v4/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="terms-circular" variant="circular" />
        <Label htmlFor="terms-circular">Circular checkbox</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="error-unchecked" aria-invalid />
        <Label htmlFor="error-unchecked">Error state</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="error-checked" aria-invalid defaultChecked />
        <Label htmlFor="error-checked">Error checked state</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="error-circular" variant="circular" aria-invalid />
        <Label htmlFor="error-circular">Error circular checkbox</Label>
      </div>
    </div>
  )
}
