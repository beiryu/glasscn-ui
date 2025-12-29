import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  BookmarkIcon,
  CheckIcon,
  ChevronDownIcon,
  PencilIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Top Row - Action Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="success">
          <CheckIcon />
          Approve
        </Button>
        <Button variant="destructive">
          <TrashIcon />
          Delete
        </Button>
        <Button>
          <PencilIcon />
          Edit
        </Button>
        <Button>
          <SearchIcon />
          Search
        </Button>
        <Button>
          <BookmarkIcon />
          Save
        </Button>
      </div>

      {/* Middle Row - Navigation Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="secondary">
          <ArrowLeftIcon />
          Previous
        </Button>
        <Button variant="secondary">
          <ArrowRightIcon />
          Next
        </Button>
      </div>

      {/* Bottom Row - Control Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline">
          Dropdown
          <ChevronDownIcon />
        </Button>
        <Button variant="outline">
          Option
          <ArrowUpDownIcon />
        </Button>
      </div>
    </div>
  )
}
