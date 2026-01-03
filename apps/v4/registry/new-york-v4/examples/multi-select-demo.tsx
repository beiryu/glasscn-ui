"use client"

import * as React from "react"

import {
  MultiSelect,
  type MultiSelectOption,
} from "@/registry/new-york-v4/ui/multi-select"

const frameworksList: MultiSelectOption[] = [
  {
    value: "react",
    label: "React",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "svelte",
    label: "Svelte",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
]

export default function MultiSelectDemo() {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>(
    []
  )

  return (
    <div className="w-full max-w-md">
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select frameworks"
        animation={2}
        maxCount={3}
      />
    </div>
  )
}
