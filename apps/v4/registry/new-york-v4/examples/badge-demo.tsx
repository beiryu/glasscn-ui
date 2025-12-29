import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  CheckCircle2Icon,
  InfoIcon,
  XIcon,
} from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-start gap-2.5">
      {/* Solid appearance badges (with gradient and shadow) */}
      <div className="flex items-start gap-2.5">
        <Badge intent="info" appearance="solid">
          <BadgeCheckIcon />
          Revenue
        </Badge>
        <Badge intent="success" appearance="solid">
          <BadgeCheckIcon />
          Revenue
        </Badge>
        <Badge intent="warning" appearance="solid">
          <BadgeCheckIcon />
          Revenue
        </Badge>
        <Badge intent="error" appearance="solid">
          <BadgeCheckIcon />
          Revenue
        </Badge>
      </div>
      {/* Outline appearance badges (solid background, no gradient) */}
      <div className="flex items-start gap-2.5">
        <Badge intent="success" appearance="outline">
          <CheckCircle2Icon />
          Green
        </Badge>
        <Badge intent="warning" appearance="outline">
          <AlertTriangleIcon />
          Yellow
        </Badge>
        <Badge intent="info" appearance="outline">
          <InfoIcon />
          Blue
        </Badge>
        <Badge intent="error" appearance="outline">
          <XIcon />
          Red
        </Badge>
      </div>
    </div>
  )
}
