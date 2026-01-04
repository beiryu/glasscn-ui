"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Separator } from "@/registry/new-york-v4/ui/separator"

interface ChatAIMessage {
  role: "user" | "ai"
  content: string | (string | string[])[]
}

interface ChatAIInterfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: ChatAIMessage[]
}

export function ChatAIInterface({
  className,
  messages = [
    {
      role: "user",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "ai",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
    },
  ],
  ...props
}: ChatAIInterfaceProps) {
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <article
      className={cn(
        "flex h-[750px] w-full flex-col items-end justify-between rounded-[15px] border border-gray-300 bg-white p-[10px] text-left text-lg text-gray-900 shadow-sm dark:border-gray-200 dark:bg-gradient-to-b dark:from-[#13161b] dark:to-[#141414] dark:text-white",
        "dark:bg-[linear-gradient(180deg,rgba(249,44,168,0.05),rgba(249,44,168,0)),linear-gradient(180deg,#13161b,#141414)]",
        className
      )}
      {...props}
    >
      {/* Header Section */}
      <header className="flex w-full flex-col items-start">
        <div className="flex w-[461px] flex-col items-start gap-0 p-[10px]">
          <h1 className="w-full text-lg leading-6 font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
            Chat with Influere AI
          </h1>
          <p className="w-full text-base leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
            Know more about your creators
          </p>
        </div>
        <Separator className="h-px w-full" />
      </header>

      {/* Messages Section */}
      <main className="flex w-full flex-col items-end gap-[45px] text-sm">
        <section className="flex w-full flex-col items-end gap-[30px]">
          {/* User Message */}
          <div className="flex flex-col items-start py-0 pr-[10px] pl-0">
            <div className="rounded-[10px] border border-gray-200 bg-gray-50 px-3 py-[10px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] dark:border-[rgba(226,232,240,0.1)] dark:bg-[rgba(255,255,255,0.05)]">
              <p className="w-[324px] text-sm leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* AI Message */}
          <div className="flex w-full flex-col items-start gap-2.5 py-0 pr-0 pl-[10px]">
            <span
              className="w-[324px] bg-clip-text text-base leading-6 font-medium tracking-[-0.01em] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90.42deg, #c686ff 8%, #f5b9ea 16%, #ffba71 29%, #aa6eee 32%, #ff6778 41.5%, #bc82f3 57%, #8d99ff 75.5%)",
              }}
            >
              Influere AI
            </span>
            <p className="w-full text-sm leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="w-full text-base leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-full text-sm leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-80">
              <ul className="m-0 list-disc pl-[19px]">
                <li className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </li>
                <li className="mb-0">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </li>
                <li className="mb-0">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.{" "}
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>
            <p className="w-full text-sm leading-5 font-medium tracking-[-0.01em] text-gray-700 dark:text-white dark:opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Input Field */}
        <footer className="grid h-[103px] w-full grid-cols-1 grid-rows-1">
          {/* Blur Effects Background Layer */}
          <div
            className="col-start-1 row-start-1 h-full w-full rounded-[15px] border-[2.3px] border-transparent blur-[10px]"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, #8d99ff -88.2deg, #c686ff 28.8deg, #f5b9ea 57.6deg, #ffba71 104.4deg, #aa6eee 115.2deg, #ff6778 149.4deg, #bc82f3 205.2deg, #8d99ff 271.8deg, #c686ff 388.8deg)",
            }}
          />
        </footer>
      </main>
    </article>
  )
}
