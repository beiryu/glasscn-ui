"use client"

import * as React from "react"
import { Copy, ExternalLink, User, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

interface CreatorCredentialsCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  creatorName?: string
  creatorHandle?: string
  creatorCode?: string
  loginReference?: string
  status?: "pending" | "active" | "inactive"
}

export function CreatorCredentialsCard({
  className,
  creatorName = "Echo's Designs",
  creatorHandle = "@echodzns",
  creatorCode = "123465",
  loginReference = "creator-influere-123465@influere",
  status = "active",
  ...props
}: CreatorCredentialsCardProps) {
  const [copiedCode, setCopiedCode] = React.useState(false)
  const [copiedReference, setCopiedReference] = React.useState(false)

  const copyToClipboard = async (text: string, type: "code" | "reference") => {
    await navigator.clipboard.writeText(text)
    if (type === "code") {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } else {
      setCopiedReference(true)
      setTimeout(() => setCopiedReference(false), 2000)
    }
  }

  const steps = [
    "Go to creator login page",
    `Enter their 6 digit code : ${creatorCode}`,
    "Enter their temporary password",
    "Change password on first login",
  ]

  return (
    <article
      className={cn(
        "box-border flex w-full max-w-xs flex-col items-center gap-5 rounded-2xl border border-gray-200 bg-gradient-to-b from-[#13161b] to-[#141414] px-0 pt-0 pb-4 text-left text-[10.5px] text-white",
        className
      )}
      {...props}
    >
      {/* Header Section with Green Gradient */}
      <header className="flex items-center justify-between gap-5 self-stretch rounded-t-2xl rounded-b-none bg-gradient-to-b from-[rgba(129,255,129,0.5)] to-[rgba(129,255,129,0)] p-4">
        <div className="flex items-center gap-2.5">
          {/* Logo with Gradient */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gradient-to-br from-[#8b63ff] via-[#f92ca8] to-[#f78b55]">
            <span className="text-lg font-bold">if</span>
          </div>
          <div className="flex flex-col items-start gap-0">
            <p className="leading-4 opacity-50">Creator Login Credentials</p>
            <h2 className="text-lg leading-5 font-semibold">{creatorName}</h2>
            <p className="text-xs leading-4.5 font-medium opacity-75">
              {creatorHandle}
            </p>
          </div>
        </div>
        <Badge intent="success" appearance="outline">
          Active
        </Badge>
      </header>

      {/* Main Content Section */}
      <main className="flex w-full flex-col items-start gap-4 px-4 text-xs text-white">
        {/* Creator Code Section */}
        <section className="flex flex-col items-center self-stretch rounded-xl border border-[rgba(24,127,245,0.5)] bg-gradient-to-b from-[rgba(24,127,245,0.2)] via-[rgba(24,127,245,0.1)] to-[rgba(24,127,245,0)] p-3 text-[rgba(24,127,245,0.8)]">
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex items-center gap-1">
              <User className="size-4" />
              <span className="leading-4 font-medium tracking-[-0.01em]">
                CREATOR CODE
              </span>
            </div>
            <div className="flex items-center gap-1 text-2xl">
              <b className="leading-6 tracking-[0.01em]">{creatorCode}</b>
              <button
                onClick={() => copyToClipboard(creatorCode, "code")}
                className="size-4 opacity-80 transition-opacity hover:opacity-100"
                aria-label="Copy creator code"
              >
                <Copy
                  className={cn("size-4", copiedCode && "text-green-300")}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Login Reference Section */}
        <section className="flex flex-col items-start gap-1 self-stretch">
          <label className="leading-4.5 font-medium tracking-[-0.01em] opacity-75">
            LOGIN REFERENCE
          </label>
          <div className="box-border flex items-center self-stretch overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] px-3 py-2 text-xs">
            <div className="flex flex-1 items-center justify-between gap-2">
              <span className="leading-5 tracking-[-0.01em] opacity-75">
                {loginReference}
              </span>
              <button
                onClick={() => copyToClipboard(loginReference, "reference")}
                className="size-4 shrink-0 opacity-80 transition-opacity hover:opacity-100"
                aria-label="Copy login reference"
              >
                <Copy
                  className={cn("size-4", copiedReference && "text-green-400")}
                />
              </button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="flex flex-col items-start gap-1 self-stretch">
          <label className="leading-4.5 font-medium tracking-[-0.01em] opacity-75">
            STEPS TO GUIDE
          </label>
          <div className="flex items-center self-stretch overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0)] px-3 py-2 text-xs">
            <ol className="m-0 list-decimal pl-4 text-[length:inherit] leading-5 tracking-[-0.01em] opacity-75">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={index < steps.length - 1 ? "mb-0" : ""}
                >
                  <span>
                    {step.includes(creatorCode) ? (
                      <>
                        Enter their 6 digit code :{" "}
                        <b className="font-inter text-[#87ceeb]">
                          {creatorCode}
                        </b>
                      </>
                    ) : (
                      <span className="font-inter text-white">{step}</span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Action Buttons */}
        <footer className="flex flex-col items-start gap-2 self-stretch text-center text-sm">
          {/* Go to Creator Login Button */}
          <Button
            onClick={() => window.open("#", "_blank")}
            variant="default"
            className="w-full gap-1.5 [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
          >
            <ExternalLink className="size-4" />
            Go to Creator Login
          </Button>
          {/* Cancel Button */}
          <Button
            onClick={() => {
              // Handle cancel action
            }}
            variant="destructive"
            className="w-full gap-1.5 [text-shadow:0px_0.5957661271095276px_0px_rgba(171,171,171,0.25)]"
          >
            <X className="size-4" />
            Cancel
          </Button>
        </footer>
      </main>
    </article>
  )
}
