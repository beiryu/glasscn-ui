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
        "flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-[#13161b] to-[#141414] p-8 text-white",
        className
      )}
      {...props}
    >
      {/* Logo */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600">
        <span className="text-xl font-bold text-white">if</span>
      </div>

      {/* Header */}
      <header className="flex w-full flex-col items-center gap-1 text-center">
        <h1 className="text-2xl leading-6 font-semibold">
          Login to your account
        </h1>
        <p className="text-base leading-6 font-medium text-gray-400">
          Enter your details to login
        </p>
      </header>

      {/* Social Login Buttons */}
      <div className="flex w-full gap-3">
        <Button
          variant="outline"
          type="button"
          className="flex-1 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path
              d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
              fill="currentColor"
            />
          </svg>
        </Button>
        <Button
          variant="outline"
          type="button"
          className="flex-1 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path
              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>

      {/* OR Divider */}
      <div className="relative flex w-full items-center">
        <Separator className="flex-1 opacity-10" />
        <span className="px-3 text-sm text-gray-400">OR</span>
        <Separator className="flex-1 opacity-10" />
      </div>

      {/* Form */}
      <form className="flex w-full flex-col gap-4">
        {/* Email Field */}
        <div className="flex w-full flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm leading-5 font-medium text-white"
          >
            Email address
          </label>
          <InputGroup className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)]">
            <InputGroupAddon>
              <Mail className="h-4 w-4 text-gray-400" />
            </InputGroupAddon>
            <InputGroupInput
              id="email"
              type="email"
              placeholder="username@example.com"
              className="bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
            />
          </InputGroup>
        </div>

        {/* Password Field */}
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm leading-5 font-medium text-white"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm leading-5 font-medium text-gray-400 hover:text-white"
            >
              Forgot password?
            </a>
          </div>
          <InputGroup className="rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)]">
            <InputGroupAddon>
              <Key className="h-4 w-4 text-gray-400" />
            </InputGroupAddon>
            <InputGroupInput
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
            />
            <InputGroupAddon align="inline-end">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="mt-2 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-2.5 text-base font-medium text-white hover:from-blue-600 hover:to-blue-700"
        >
          Log In
        </Button>
      </form>

      {/* Sign Up Link */}
      <footer className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-medium text-white hover:underline">
          Sign up
        </a>
      </footer>
    </article>
  )
}
