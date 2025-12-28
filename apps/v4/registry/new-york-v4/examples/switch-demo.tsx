import { Label } from "@/registry/new-york-v4/ui/label"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="flex items-start gap-3.5">
      <div className="flex items-center gap-[5px]">
        <Switch id="switch-checked" defaultChecked />
        <Label
          htmlFor="switch-checked"
          className="text-[15px] tracking-[-0.01em] text-white"
        >
          Field
        </Label>
      </div>
      <div className="flex items-center gap-[5px]">
        <Switch id="switch-unchecked" />
        <Label
          htmlFor="switch-unchecked"
          className="text-[15px] tracking-[-0.01em] text-white"
        >
          Field
        </Label>
      </div>
    </div>
  )
}
