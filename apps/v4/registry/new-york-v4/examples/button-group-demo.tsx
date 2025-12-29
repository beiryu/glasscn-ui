import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonGroupDemo() {
  return (
    <div className="flex gap-2">
      <Button variant="secondary" size="icon" aria-label="Previous">
        <ArrowLeftIcon />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Next">
        <ArrowRightIcon />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Page 1">
        1
      </Button>
      <Button variant="secondary" size="icon" aria-label="Page 2">
        2
      </Button>
    </div>
  )
}
