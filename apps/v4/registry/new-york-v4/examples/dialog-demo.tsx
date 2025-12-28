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
                <Button
                  variant="destructive"
                  className="w-[110.5px] gap-1.5 rounded-xl border border-[rgba(171,171,171,0.4)] px-[15px] py-[7.5px] text-[14.3px] leading-[120%] tracking-[-0.02em] capitalize [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="button"
                variant="default"
                className="w-[110.5px] gap-1.5 rounded-xl border border-[rgba(171,171,171,0.4)] px-[15px] py-[7.5px] text-[14.3px] leading-[120%] tracking-[-0.02em] text-[#045d14] capitalize [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
              >
                Approve
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
