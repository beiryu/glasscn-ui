"use client"

import * as React from "react"
import { Eye, EyeOff, Key, Mail } from "lucide-react"

import { cn } from "@/registry/new-york-v4/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <article
      className={cn(
        "relative flex h-full w-full flex-col items-start justify-center gap-[15px] overflow-hidden rounded-2xl border border-gray-300 bg-white p-7 text-sm text-gray-900 shadow-sm dark:border-gray-200 dark:bg-gradient-to-b dark:from-[#13161b] dark:to-[#141414] dark:text-white",
        className
      )}
      {...props}
    >
      {/* Gradient Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-20 dark:block"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 99, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(249, 44, 168, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(247, 139, 85, 0.2) 0%, transparent 60%)
          `,
        }}
      />
      {/* Light Mode Gradient Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 block opacity-10 dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 99, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(249, 44, 168, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(247, 139, 85, 0.1) 0%, transparent 60%)
          `,
        }}
      />
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-[15px]">
        {/* Logo */}
        <div className="relative h-[54px] w-[54px]">
          <div className="absolute inset-0 rounded-[12.56px] border-[2.5px] border-gray-200 bg-gradient-to-br from-[#8b63ff] via-[#f92ca8] to-[#f78b55]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">if</span>
          </div>
        </div>

        {/* Header */}
        <header className="flex w-full flex-col items-center justify-center gap-0 text-lg">
          <h1 className="text-lg leading-6 font-semibold tracking-[-0.01em] text-gray-900 dark:text-white">
            Login to your account
          </h1>
          <p className="text-base leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
            Enter your details to login
          </p>
        </header>

        {/* Social Login Buttons */}
        <div className="flex w-full items-start gap-[15px]">
          <Button
            variant="secondary"
            type="button"
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 hover:bg-gray-100 dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 hover:bg-gray-100 dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.05)] dark:hover:bg-[rgba(255,255,255,0.1)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>

        {/* OR Divider */}
        <div className="flex w-full items-center justify-center gap-[15px] text-xs">
          <Separator className="flex-1" />
          <span className="text-xs leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
            OR
          </span>
          <Separator className="flex-1" />
        </div>

        {/* Email Field */}
        <div className="flex w-full flex-col items-start gap-[5px]">
          <label className="text-sm leading-[21px] font-medium tracking-[0.01em] text-gray-900 dark:text-white">
            Email address
          </label>
          <InputGroup className="min-h-[36px] rounded-lg border border-gray-200 bg-gray-50 dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.1)]">
            <InputGroupAddon>
              <Mail className="h-[18px] w-[18px] text-gray-600 dark:text-white dark:opacity-50" />
            </InputGroupAddon>
            <InputGroupInput
              id="email"
              type="email"
              placeholder="username@example.com"
              className="flex-1 bg-transparent text-sm leading-[21px] tracking-[-0.01em] text-gray-900 placeholder:text-gray-500 focus:outline-none dark:text-white dark:opacity-50 dark:placeholder:text-white dark:placeholder:opacity-50"
            />
          </InputGroup>
        </div>

        {/* Password Field */}
        <div className="flex w-full flex-col items-start gap-[5px]">
          <div className="flex w-full items-start justify-between gap-5">
            <label className="text-sm leading-[21px] font-medium tracking-[0.01em] text-gray-900 dark:text-white">
              Password
            </label>
            <a
              href="#"
              className="text-sm leading-[21px] font-medium tracking-[0.01em] text-gray-600 hover:text-gray-900 dark:text-white dark:opacity-50 dark:hover:opacity-75"
            >
              Forgot password?
            </a>
          </div>
          <InputGroup className="min-h-[36px] rounded-lg border border-gray-200 bg-gray-50 dark:border-[rgba(255,255,255,0.1)] dark:bg-[rgba(255,255,255,0.1)]">
            <InputGroupAddon>
              <Key className="h-[18px] w-[18px] text-gray-600 dark:text-white dark:opacity-50" />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••••••••"
              className="flex-1 bg-transparent text-sm leading-[21px] tracking-[-0.01em] text-gray-900 placeholder:text-gray-500 focus:outline-none dark:text-white dark:opacity-50 dark:placeholder:text-white dark:placeholder:opacity-50"
            />
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-600 hover:text-gray-900 dark:text-white dark:opacity-50 dark:hover:opacity-75"
              >
                {showPassword ? (
                  <EyeOff className="h-[18px] w-[18px]" />
                ) : (
                  <Eye className="h-[18px] w-[18px]" />
                )}
              </button>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full rounded-lg border border-transparent bg-gradient-to-b [background-image:linear-gradient(180deg,rgba(93,113,249,0),rgba(93,113,249,0.8))_padding-box,linear-gradient(#5dcdf9,#5dcdf9)_padding-box,linear-gradient(180deg,rgba(93,113,249,0.25),rgba(93,205,249,0.25))] p-[15px] text-center text-[14.3px] leading-[120%] tracking-[-0.02em] capitalize shadow-[0px_-2px_0px_rgba(255,255,255,0.25)_inset,0px_0px_30px_rgba(93,205,249,0.5)]"
        >
          Log In
        </Button>

        {/* Sign Up Link */}
        <footer className="flex w-full items-center justify-center gap-[5px] text-base">
          <span className="text-base leading-6 font-medium tracking-[-0.01em] text-gray-600 dark:text-white dark:opacity-50">
            Don&apos;t have an account?
          </span>
          <a
            href="#"
            className="text-base leading-6 font-semibold tracking-[-0.01em] text-gray-900 hover:underline dark:text-white"
          >
            Sign up
          </a>
        </footer>
      </div>
    </article>
  )
}
