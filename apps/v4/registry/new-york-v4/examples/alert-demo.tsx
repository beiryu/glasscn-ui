import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york-v4/ui/alert"

export default function AlertDemo() {
  return (
    <div className="flex w-full flex-col flex-wrap content-start items-start gap-6">
      <Alert variant="success">
        <CheckCircle2Icon />
        <div className="flex flex-1 flex-col items-start">
          <AlertTitle>Changes have been saved</AlertTitle>
        </div>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <div className="flex flex-1 flex-col items-start gap-px">
          <AlertTitle>Please fill required fields</AlertTitle>
          <AlertDescription>
            Some fields are missing or invalid.
          </AlertDescription>
        </div>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <div className="flex flex-1 flex-col items-start">
          <AlertTitle>Error! Could not connect</AlertTitle>
        </div>
      </Alert>
      <Alert variant="default">
        <CheckCircle2Icon />
        <div className="flex flex-1 flex-col items-start gap-px">
          <AlertTitle>Profile updated</AlertTitle>
          <AlertDescription>
            Your settings have been updated successfully.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  )
}
