"use client"

import * as React from "react"
import {
  ArrowRight,
  Check,
  DollarSign,
  Heart,
  Link as LinkIcon,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface AddCreatorFormProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStep?: number
  onStepChange?: (step: number) => void
}

const steps = [
  {
    number: 1,
    title: "Creator Details",
    subtitle: "Basic information",
    icon: User,
    active: true,
  },
  {
    number: 2,
    title: "Compensation",
    subtitle: "Deal & payment",
    icon: DollarSign,
    active: false,
  },
  {
    number: 3,
    title: "Social Media",
    subtitle: "Social accounts",
    icon: Heart,
    active: false,
  },
  {
    number: 4,
    title: "Review",
    subtitle: "Confirm & create",
    icon: Check,
    active: false,
  },
]

export function AddCreatorForm({
  className,
  currentStep = 1,
  onStepChange,
  ...props
}: AddCreatorFormProps) {
  return (
    <article
      className={cn(
        "flex w-full max-w-4xl items-stretch justify-center rounded-2xl border border-gray-200 bg-gradient-to-b from-[#13161b] to-[#141414] text-left text-lg text-white",
        className
      )}
      {...props}
    >
      {/* Left Sidebar - Navigation with Blue Gradient */}
      <aside
        className="grid min-h-full w-1/3 grid-cols-1 grid-rows-1 overflow-hidden rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 50%, rgba(13,186,255,0.3) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "right center",
        }}
      >
        {/* Blur Effects Background Layer */}
        <div
          className="pointer-events-none col-start-1 row-start-1 h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle 156px at -99px 196px, rgba(13, 186, 255, 0.31) 0%, transparent 70%),
              radial-gradient(circle 178px at 2px -36px, rgba(13, 186, 255, 0.46) 0%, transparent 70%),
              radial-gradient(circle 122px at 81px 196px, rgba(13, 186, 255, 0.36) 0%, transparent 70%)
            `,
            filter: "blur(183px)",
          }}
        />

        {/* Content Container */}
        <div className="col-start-1 row-start-1 flex w-full flex-col gap-5 p-6.5">
          <header className="flex w-full flex-col gap-1">
            <h1 className="w-full text-lg leading-6 font-semibold tracking-[-0.01em]">
              Add Creator
            </h1>
            <p className="w-full text-base leading-6 font-medium tracking-[-0.01em] opacity-50">
              Step-by-step creator setup
            </p>
          </header>

          <Separator />

          <nav className="flex w-full flex-col gap-6 text-left text-sm">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = step.number === currentStep
              return (
                <button
                  key={step.number}
                  onClick={() => onStepChange?.(step.number)}
                  className={cn(
                    "flex w-full items-center justify-between gap-5 text-left",
                    !isActive && "opacity-50"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0DBAFF]",
                        isActive && "text-primary"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-sm leading-5.5 font-medium tracking-[0.01em] whitespace-nowrap">
                        {step.number}. {step.title}
                      </div>
                      <div className="text-sm leading-5.5 font-medium tracking-[0.01em] whitespace-nowrap opacity-50">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                  {isActive && (
                    <Spinner className="text-primary size-4.5 shrink-0" />
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Right Section - Form Content */}
      <main className="flex h-full w-2/3 flex-col items-start justify-between gap-6 p-7">
        <div className="flex w-full flex-col items-start gap-[15px]">
          <header className="flex w-full flex-col items-start gap-1">
            <h2 className="w-full text-lg leading-6 font-semibold tracking-[-0.01em]">
              Creator Details
            </h2>
            <p className="w-full text-base leading-6 font-medium tracking-[-0.01em] opacity-50">
              Enter the basic information for the new creator
            </p>
          </header>

          <Separator />

          <form className="flex w-full flex-col items-start gap-4 text-sm">
            {/* First Row: Creator Name, Screen Name, Profile Picture */}
            <section className="flex w-full items-start gap-4">
              <div className="flex flex-col items-start gap-4">
                {/* Creator Name */}
                <Field orientation="vertical" className="gap-1">
                  <FieldLabel className="flex items-start gap-1">
                    <span className="text-sm leading-5.5 font-medium tracking-[0.01em]">
                      Creator Name
                    </span>
                    <span className="text-crimson text-sm leading-5.5 font-medium tracking-[0.01em]">
                      *
                    </span>
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      defaultValue="John Wick"
                      className="min-h-[36px] rounded-xl bg-gray-200 px-3 py-2 text-sm leading-5.5 tracking-[-0.01em] opacity-25"
                    />
                    <p className="mt-1 text-xs leading-4 font-medium tracking-[0.01em] opacity-75">
                      First and Last Name (upto 100 characters)
                    </p>
                  </FieldContent>
                </Field>

                {/* Screen Name */}
                <Field orientation="vertical" className="gap-1">
                  <FieldLabel className="flex items-start gap-1">
                    <span className="text-sm leading-5.5 font-medium tracking-[0.01em]">
                      Screen Name
                    </span>
                    <span className="text-crimson text-sm leading-5.5 font-medium tracking-[0.01em]">
                      *
                    </span>
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="text"
                      defaultValue="john_wick20"
                      className="min-h-[36px] rounded-xl bg-gray-200 px-3 py-2 text-sm leading-5.5 tracking-[-0.01em] opacity-25"
                    />
                    <p className="mt-1 text-xs leading-4 font-medium tracking-[0.01em] opacity-75">
                      Characters allowed :Letters, numbers, spaces,
                      underscores(_), hyphens (-)
                    </p>
                  </FieldContent>
                </Field>
              </div>

              {/* Profile Picture Upload */}
              <div className="flex flex-1 flex-col items-start gap-[5px]">
                <FieldLabel>Set Profile Picture</FieldLabel>
                <FieldContent>
                  <div className="flex size-38 h-38 items-center justify-center rounded-full border-2 border-dashed border-[rgba(226,232,240,0.25)] bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent">
                    <div className="flex flex-col items-center gap-0.5">
                      <User className="h-11 w-11 opacity-50" />
                      <span className="text-sm leading-5.5 tracking-[-0.01em] opacity-50">
                        Upload
                      </span>
                    </div>
                  </div>
                </FieldContent>
              </div>
            </section>

            {/* Email Address */}
            <Field orientation="vertical" className="gap-1">
              <FieldLabel className="flex items-start gap-1">
                <span className="text-sm leading-[21px] font-medium tracking-[0.01em]">
                  Email address
                </span>
                <span className="text-crimson text-sm leading-5.5 font-medium tracking-[0.01em]">
                  *
                </span>
              </FieldLabel>
              <FieldContent>
                <Input
                  type="email"
                  defaultValue="johnwick@email.com"
                  className="min-h-[36px] rounded-xl bg-gray-200 px-3 py-2 text-sm leading-5.5 tracking-[-0.01em] opacity-25"
                />
              </FieldContent>
            </Field>

            {/* Phone Number and Timezone Row */}
            <section className="flex w-full items-start gap-4">
              {/* Phone Number */}
              <div className="w-1/2">
                <Field orientation="vertical" className="gap-1">
                  <FieldLabel className="flex items-start gap-1">
                    <span className="text-sm leading-5.5 font-medium tracking-[0.01em]">
                      Phone Number
                    </span>
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      type="tel"
                      defaultValue="+1 (555) 000-0000"
                      className="min-h-[36px] rounded-xl bg-gray-200 px-3 py-2 text-sm leading-5.5 tracking-[-0.01em] opacity-25"
                    />
                  </FieldContent>
                </Field>
              </div>

              {/* Timezone */}
              <div className="flex w-1/2 flex-col items-start gap-1">
                <FieldLabel>Timezone</FieldLabel>
                <FieldContent className="w-full">
                  <Select defaultValue="UTC">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectGroup>
                        <SelectLabel className="text-white/70">
                          Timezone
                        </SelectLabel>
                        <SelectItem value="UTC">UTC</SelectItem>
                        <SelectItem value="EST">EST</SelectItem>
                        <SelectItem value="PST">PST</SelectItem>
                        <SelectItem value="GMT">GMT</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FieldContent>
              </div>
            </section>

            {/* Google Drive Link */}
            <Field orientation="vertical" className="gap-1">
              <FieldLabel className="h-5.5 text-sm leading-5.5 font-medium tracking-[0.01em]">
                Google Drive Link
              </FieldLabel>
              <FieldContent>
                <InputGroup className="min-h-[36px] bg-gray-200">
                  <InputGroupAddon>
                    <LinkIcon className="size-4.5" />
                  </InputGroupAddon>
                  <InputGroupInput
                    type="url"
                    placeholder="https://drive.google.com/..."
                    className="text-sm leading-5.5 tracking-[-0.01em] opacity-25"
                  />
                </InputGroup>
              </FieldContent>
            </Field>
          </form>

          {/* Action Buttons */}
          <footer className="flex size-10 w-full items-center justify-between gap-5">
            <Button
              type="button"
              variant="destructive"
              className="h-full w-fit rounded-xl border border-transparent bg-gradient-to-b [background-image:linear-gradient(#f95d60,#f95d60),linear-gradient(180deg,rgba(255,144,147,0.25),rgba(255,228,229,0.25))] from-[rgba(249,93,96,0)] via-[rgba(249,93,96,0.8)] to-transparent bg-clip-padding px-3 py-2 leading-5.5 tracking-[-0.02em] capitalize shadow-[0px_-2px_0px_rgba(255,255,255,0.1)_inset,0px_0px_30px_rgba(249,93,96,0.5)]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="default"
              className="h-full w-fit rounded-xl border border-transparent bg-gradient-to-b [background-image:linear-gradient(#5dcdf9,#5dcdf9),linear-gradient(180deg,rgba(93,113,249,0.25),rgba(93,205,249,0.25))] from-[rgba(93,113,249,0)] via-[rgba(93,113,249,0.8)] to-transparent bg-clip-padding px-3 py-2 leading-5.5 tracking-[-0.02em] capitalize shadow-[0px_-2px_0px_rgba(255,255,255,0.25)_inset,0px_0px_30px_rgba(93,205,249,0.5)]"
            >
              Continue
              <ArrowRight className="size-4.5" />
            </Button>
          </footer>
        </div>
      </main>
    </article>
  )
}
