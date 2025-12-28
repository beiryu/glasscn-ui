import * as React from "react"

import { cn } from "@/lib/utils"
import { Slider } from "@/registry/new-york-v4/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className={cn("flex w-full flex-col items-start gap-3.5", className)}>
      <div className="flex items-center gap-3.5">
        <div className="text-[11px] tracking-[-0.01em] text-white">Default</div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-60"
          {...props}
        />
      </div>
      <div className="flex items-center gap-3.5">
        <div className="text-[11px] tracking-[-0.01em] text-white">
          Range Short
        </div>
        <Slider
          defaultValue={[40, 60]}
          max={100}
          step={1}
          className="w-60"
          {...props}
        />
      </div>
      <div className="flex items-center gap-3.5">
        <div className="text-[11px] tracking-[-0.01em] text-white">
          Range Wide
        </div>
        <Slider
          defaultValue={[20, 80]}
          max={100}
          step={1}
          className="w-60"
          {...props}
        />
      </div>
    </div>
  )
}
