"use client"

import * as React from "react"

import {
  MultiSelect,
  type MultiSelectOption,
} from "@/registry/new-york-v4/ui/multi-select"

// Simulate async data loading
const fetchOptions = async (): Promise<MultiSelectOption[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "javascript", label: "JavaScript" },
        { value: "typescript", label: "TypeScript" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
        { value: "csharp", label: "C#" },
        { value: "go", label: "Go" },
        { value: "rust", label: "Rust" },
        { value: "php", label: "PHP" },
      ])
    }, 1000)
  })
}

export default function MultiSelectAsync() {
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([])
  const [options, setOptions] = React.useState<MultiSelectOption[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchOptions().then((data) => {
      setOptions(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="w-full max-w-md">
        <div className="bg-muted flex h-10 w-full animate-pulse rounded-md" />
      </div>
    )
  }

  return (
    <div className="w-full max-w-md">
      <MultiSelect
        options={options}
        onValueChange={setSelectedLanguages}
        defaultValue={selectedLanguages}
        placeholder="Select programming languages"
        animation={1}
        maxCount={4}
      />
    </div>
  )
}
