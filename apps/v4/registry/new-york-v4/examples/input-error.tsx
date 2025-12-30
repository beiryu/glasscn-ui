import { Input } from "@/registry/new-york-v4/ui/input"

export default function InputError() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Username"
        aria-invalid="true"
        defaultValue="user@name"
      />
    </div>
  )
}
