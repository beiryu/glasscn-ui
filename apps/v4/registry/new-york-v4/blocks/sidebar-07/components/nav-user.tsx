"use client"

import { ChevronsUpDown, LogOut, Settings, User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/new-york-v4/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <div className="border-t border-dashed border-[rgba(238,238,238,0.1)] p-4 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:p-3 group-data-[collapsible=icon]:px-0">
      <SidebarMenu className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
        <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="h-auto rounded-[10px] border border-[rgba(238,238,238,0.1)] bg-transparent p-3 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.01)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0)),_linear-gradient(rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.05))] group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:h-[45px] group-data-[collapsible=icon]:w-[45px] group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0 hover:bg-transparent data-[state=open]:bg-transparent"
              >
                <div className="relative h-9 w-9 shrink-0">
                  <div className="absolute inset-0 rounded-[8.37px] border [background:linear-gradient(36.29deg,_#8b63ff,_#f92ca8_50%,_#f78b55)]" />
                  <span className="absolute top-[calc(50%_-_13.09px)] left-[calc(50%_-_10.69px)] text-lg leading-none font-bold text-white">
                    if
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 text-left group-data-[collapsible=icon]:hidden">
                  <span className="text-[15px] leading-none font-medium tracking-[-0.01em] text-white">
                    {user.name}
                  </span>
                  <span className="text-[13px] leading-none font-medium tracking-[-0.01em] text-[#727a8e]">
                    {user.email}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto h-5 w-5 shrink-0 text-white group-data-[collapsible=icon]:hidden" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-[10px]"
              align="start"
              side={isMobile ? "bottom" : "top"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-white">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    {user.name}
                  </p>
                  <p className="text-xs leading-none text-[#727a8e]">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-white/10">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                className="hover:bg-transparent"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  )
}
