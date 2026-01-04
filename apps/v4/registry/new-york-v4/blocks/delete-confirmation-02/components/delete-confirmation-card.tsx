"use client"

import * as React from "react"
import { Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"

interface DeleteConfirmationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  itemName?: string
  itemCount?: number
  onCancel?: () => void
  onConfirm?: () => void
}

export function DeleteConfirmationCard({
  className,
  itemName = "Medical Bill - Annual Checkup",
  itemCount = 1,
  onCancel,
  onConfirm,
  ...props
}: DeleteConfirmationCardProps) {
  return (
    <article
      className={cn(
        "flex h-64 w-full max-w-2xl items-start justify-center gap-5 rounded-2xl border border-gray-300 bg-white text-left text-lg text-gray-900 shadow-sm dark:border-gray-200 dark:bg-gradient-to-b dark:from-[#13161b] dark:to-[#141414] dark:text-white",
        className
      )}
      {...props}
    >
      {/* Left Section - Forest Green Theme with Blur Effects */}
      <aside className="grid h-full w-56 shrink-0 grid-cols-1 grid-rows-1 overflow-hidden rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-green-50 dark:bg-transparent">
        {/* Light Mode Background */}
        <div
          className="pointer-events-none col-start-1 row-start-1 block h-full w-full dark:hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 70%),
              linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
              linear-gradient(45deg, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
              linear-gradient(180deg, rgba(34, 197, 94, 0.05) 0%, rgba(34, 197, 94, 0.08) 100%)
            `,
          }}
        />
        {/* Dark Mode Background */}
        <div
          className="pointer-events-none col-start-1 row-start-1 hidden h-full w-full dark:block"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(51, 188, 86, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(51, 188, 86, 0.22) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(51, 188, 86, 0.18) 0%, transparent 70%),
              linear-gradient(135deg, rgba(51, 188, 86, 0.15) 0%, transparent 50%),
              linear-gradient(45deg, rgba(51, 188, 86, 0.12) 0%, transparent 50%),
              linear-gradient(180deg, rgba(51, 188, 86, 0.1) 0%, rgba(51, 188, 86, 0.15) 100%)
            `,
          }}
        />
        {/* Blur Effects Background Layer - Dark Mode Only */}
        <div
          className="pointer-events-none col-start-1 row-start-1 hidden h-full w-full dark:block"
          style={{
            backgroundImage: `
              radial-gradient(circle 85px at 20% 65%, rgba(51, 188, 86, 0.31) 0%, transparent 70%),
              radial-gradient(circle 97px at 50% 0%, rgba(51, 188, 86, 0.46) 0%, transparent 70%),
              radial-gradient(circle 67px at 80% 65%, rgba(51, 188, 86, 0.36) 0%, transparent 70%)
            `,
            filter: "blur(100px)",
          }}
        />

        {/* Content Container - Positioned on top using grid */}
        <div className="col-start-1 row-start-1 flex flex-col items-center justify-center gap-4">
          {/* Icon Button */}
          <Button
            variant="secondary"
            size="icon-lg"
            className="h-[72px] w-[72px] rounded-3xl shadow-[0px_0px_0px_4px_rgba(0,0,0,0.05)] dark:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] [&_svg]:!size-[36px] [&_svg]:!h-[36px] [&_svg]:!w-[36px]"
            aria-label="Move to Trash"
          >
            <Trash2 className="text-green-600 dark:text-green-400" />
          </Button>

          {/* Text Content */}
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-lg leading-6 font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
              Move to Trash
            </h3>
            <p className="text-sm leading-5 font-semibold tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
              {itemCount} {itemCount === 1 ? "Item" : "Items"}
            </p>
          </div>
        </div>
      </aside>

      {/* Right Section - Dark Gray Theme */}
      <main className="flex h-full flex-1 flex-col items-start justify-between gap-[15px] px-4 py-7">
        {/* Header */}
        <header className="flex w-full flex-col items-start gap-[5px]">
          <h2 className="w-full text-lg leading-6 font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
            These items will be moved to the Recycle Bin
          </h2>
          <p className="w-full text-base leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
            You can restore them from the recycle bin at any time.
          </p>
        </header>

        {/* Item Field */}
        <InputGroup className="rounded-xl border border-green-200 bg-gradient-to-b from-green-50 via-green-50/50 to-transparent shadow-none dark:border-[rgba(51,188,86,0.5)] dark:bg-gradient-to-b dark:from-[rgba(51,188,86,0.1)] dark:via-[rgba(255,255,255,0.05)] dark:to-[rgba(51,188,86,0)] [&_.glass]:border-0 [&_.glass]:bg-transparent [&_.glass]:shadow-none [&_.glass]:backdrop-blur-none">
          <InputGroupAddon>
            <Trash2 className="size-4 text-green-600 dark:text-green-400" />
          </InputGroupAddon>
          <InputGroupInput
            type="text"
            value={itemName}
            readOnly
            className="px-3 py-2 text-xs leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-75"
          />
        </InputGroup>

        {/* Action Buttons */}
        <footer className="flex w-full items-center justify-end gap-2 text-center text-sm">
          <Button
            variant="outline"
            onClick={onCancel}
            className="rounded-xl border border-[rgba(238,238,238,0.1)] bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] px-4 py-2.5 shadow-[0px_0px_0px_2px_rgba(255,255,255,0.05)] [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="gap-1.5 rounded-xl border border-transparent bg-gradient-to-b [background-image:linear-gradient(180deg,rgba(171,171,171,0.4),rgba(51,188,86,0.4)_51.83%,rgba(171,171,171,0.4))] from-[rgba(51,188,86,0)] via-[rgba(51,188,86,0.8)] to-transparent bg-clip-padding px-[15px] py-2.5 [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
          >
            <Trash2 className="size-4" />
            Move to Trash
          </Button>
        </footer>
      </main>
    </article>
  )
}
