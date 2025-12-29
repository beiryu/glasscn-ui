import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <div className="flex flex-col items-start gap-4">
          <DialogHeader>
            <DialogTitle>Erase draft?</DialogTitle>
            <DialogDescription>
              This will permanently delete the current draft.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-full">
            <div className="flex flex-1 items-start justify-end gap-2">
              <DialogClose asChild>
                <Button variant="destructive">Cancel</Button>
              </DialogClose>
              <Button type="button" variant="success">
                Approve
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
