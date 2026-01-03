"use client"

import * as React from "react"
import { Cloud, Code, Database, Globe, Monitor, Smartphone } from "lucide-react"

import {
  MultiSelect,
  type MultiSelectOption,
} from "@/registry/new-york-v4/ui/multi-select"

const technologiesList: MultiSelectOption[] = [
  {
    value: "web",
    label: "Web Development",
    icon: Globe,
  },
  {
    value: "database",
    label: "Database",
    icon: Database,
  },
  {
    value: "mobile",
    label: "Mobile Development",
    icon: Smartphone,
  },
  {
    value: "desktop",
    label: "Desktop Applications",
    icon: Monitor,
  },
  {
    value: "cloud",
    label: "Cloud Computing",
    icon: Cloud,
  },
  {
    value: "api",
    label: "API Development",
    icon: Code,
  },
]

export default function MultiSelectWithIcons() {
  const [selectedTechnologies, setSelectedTechnologies] = React.useState<
    string[]
  >([])

  return (
    <div className="w-full max-w-md">
      <MultiSelect
        options={technologiesList}
        onValueChange={setSelectedTechnologies}
        defaultValue={selectedTechnologies}
        placeholder="Select technologies"
        animation={0}
        maxCount={2}
      />
    </div>
  )
}



