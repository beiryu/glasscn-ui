import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" disabled />
        <label
          htmlFor="terms2"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2-circular" variant="circular" disabled />
        <label
          htmlFor="terms2-circular"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled circular checkbox
        </label>
      </div>
    </div>
  )
}
