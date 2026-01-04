"use client"

import * as React from "react"
import Image from "next/image"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Separator } from "@/registry/new-york-v4/ui/separator"

interface Creator {
  id: string
  name: string
  handle: string
  avatar?: string
}

interface AssignCreatorsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  itemCount?: number
  creators?: Creator[]
  selectedCreatorIds?: string[]
  onAssign?: (creatorIds: string[], note?: string) => void
  onCancel?: () => void
}

export function AssignCreatorsCard({
  className,
  itemCount = 3,
  creators = [
    { id: "1", name: "Echo Designs", handle: "@echodzns" },
    { id: "2", name: "Echo Designs", handle: "@echodzns" },
    { id: "3", name: "Echo Designs", handle: "@echodzns" },
    { id: "4", name: "Echo Designs", handle: "@echodzns" },
  ],
  selectedCreatorIds: initialSelectedIds = ["1", "2", "3"],
  onAssign,
  onCancel,
  ...props
}: AssignCreatorsCardProps) {
  const [selectedCreatorIds, setSelectedCreatorIds] =
    React.useState<string[]>(initialSelectedIds)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [note, setNote] = React.useState("")

  const filteredCreators = creators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleToggleCreator = (creatorId: string) => {
    setSelectedCreatorIds((prev) =>
      prev.includes(creatorId)
        ? prev.filter((id) => id !== creatorId)
        : [...prev, creatorId]
    )
  }

  const handleAssign = () => {
    onAssign?.(selectedCreatorIds, note)
  }

  const handleCancel = () => {
    onCancel?.()
  }

  return (
    <article
      className={cn(
        "flex h-[588px] w-full max-w-4xl flex-row gap-0 rounded-[15px] border border-gray-300 bg-white text-sm text-gray-900 shadow-sm dark:border-gray-200 dark:bg-gradient-to-b dark:from-[#13161b] dark:to-[#141414] dark:text-white",
        className
      )}
      {...props}
    >
      {/* Left Side - Phone Image with Blur Effects */}
      <aside className="grid w-1/2 shrink-0 grid-cols-1 grid-rows-1 items-center justify-center overflow-hidden rounded-tl-[15px] rounded-tr-none rounded-br-none rounded-bl-[15px] bg-gray-50 dark:bg-transparent">
        {/* Blur Effects Background Layers - Dark Mode Only */}
        <div
          className="col-start-1 row-start-1 hidden h-full w-full dark:block"
          style={{
            backgroundImage: `
                radial-gradient(circle 313px at -197.46px 392.97px, rgba(13, 186, 255, 0.31) 0%, transparent 70%),
                radial-gradient(circle 357px at 3.9px -72px, rgba(13, 186, 255, 0.46) 0%, transparent 70%),
                radial-gradient(circle 245.3px at 163.16px 392.97px, rgba(13, 186, 255, 0.36) 0%, transparent 70%)
              `,
            filter: "blur(183.06px)",
          }}
        />
        {/* Phone Image */}
        <div className="col-start-1 row-start-1 flex items-center justify-center">
          <div className="relative h-[447px] w-[363px]">
            {/* Placeholder for phone image - replace with actual image path */}
            <div className="h-full w-full rounded-[20px] border-2 border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-800" />
          </div>
        </div>
      </aside>

      {/* Right Side - Form Content */}
      <main className="flex w-1/2 flex-col items-start justify-between gap-[15px] p-7">
        <div className="flex w-full flex-col items-start gap-[15px]">
          {/* Header */}
          <header className="flex w-full flex-col items-start gap-[5px]">
            <h2 className="w-full text-lg leading-6 font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
              Assign to Creators
            </h2>
            <p className="w-full text-base leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
              {itemCount} Items selected
            </p>
          </header>

          <Separator className="h-px w-full opacity-10" />

          {/* Search Bar */}
          <div className="w-full">
            <InputGroup className="min-h-[36px] rounded-lg border border-gray-200 bg-gray-50 dark:border-0 dark:bg-[rgba(255,255,255,0.1)]">
              <InputGroupAddon>
                <Search className="h-[15px] w-[15px] text-gray-600 dark:text-white dark:opacity-50" />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Search creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm leading-[21px] tracking-[-0.01em] text-gray-900 placeholder:text-gray-500 focus:outline-none dark:text-white dark:opacity-50 dark:placeholder:text-white dark:placeholder:opacity-50"
              />
            </InputGroup>
          </div>

          {/* Creator List */}
          <section className="flex w-full flex-col gap-[5px]">
            {filteredCreators.map((creator) => {
              const isSelected = selectedCreatorIds.includes(creator.id)
              return (
                <div
                  key={creator.id}
                  className={cn(
                    "flex w-full items-center justify-between gap-5 rounded-[10px] p-[10px]",
                    isSelected
                      ? "border border-blue-200 bg-blue-50 dark:border-0 dark:bg-[rgba(255,255,255,0.05)]"
                      : "bg-transparent"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500">
                      <span className="text-sm font-semibold text-white">
                        e
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm leading-[21px] font-medium tracking-[0.01em] text-gray-900 dark:text-white">
                        {creator.name}
                      </span>
                      <span className="text-[13px] leading-[18px] font-medium tracking-[0.01em] text-gray-600 dark:text-white dark:opacity-50">
                        {creator.handle}
                      </span>
                    </div>
                  </div>
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={() => handleToggleCreator(creator.id)}
                    className={cn(
                      isSelected ? "h-5 w-5" : "h-4 w-4",
                      "[&>div]:h-full [&>div]:w-full"
                    )}
                  />
                </div>
              )
            })}
          </section>

          <Separator className="h-px w-full opacity-10" />

          {/* Note Field */}
          <div className="w-full">
            <InputGroup className="min-h-[36px] rounded-lg border border-gray-200 bg-gray-50 dark:border-0 dark:bg-[rgba(255,255,255,0.1)]">
              <InputGroupAddon>
                <span className="text-sm leading-[21px] tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
                  Add a note...
                </span>
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder=""
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="flex-1 bg-transparent text-sm leading-[21px] tracking-[-0.01em] text-gray-900 focus:outline-none dark:text-white dark:opacity-50"
              />
              <InputGroupAddon align="inline-end">
                <span className="text-sm leading-[21px] tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
                  (optional)
                </span>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <Separator className="h-px w-full opacity-10" />
        </div>

        {/* Footer Buttons */}
        <footer className="flex h-[37px] w-full items-center justify-end gap-[15px] text-center text-[14.3px]">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="text-[14.3px] leading-[120%] tracking-[-0.02em] capitalize"
          >
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={handleAssign}
            disabled={selectedCreatorIds.length === 0}
          >
            Assign ({selectedCreatorIds.length})
          </Button>
        </footer>
      </main>
    </article>
  )
}
