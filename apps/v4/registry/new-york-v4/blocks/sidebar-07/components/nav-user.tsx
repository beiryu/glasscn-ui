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
    <div className="border-border border-t border-dashed p-4 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:p-3 group-data-[collapsible=icon]:px-0">
      <SidebarMenu className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
        <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="hover:bg-sidebar-accent data-[state=open]:bg-sidebar-accent h-auto rounded-[10px] border bg-transparent p-3 shadow-sm group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:h-[45px] group-data-[collapsible=icon]:w-[45px] group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0"
              >
                <div className="relative h-9 w-9 shrink-0">
                  <div className="absolute inset-0 rounded-[8.37px] border [background:linear-gradient(36.29deg,_#8b63ff,_#f92ca8_50%,_#f78b55)]" />
                  <span className="absolute top-[calc(50%_-_13.09px)] left-[calc(50%_-_10.69px)] text-lg leading-none font-bold text-white">
                    if
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 text-left group-data-[collapsible=icon]:hidden">
                  <span className="text-sidebar-foreground text-[15px] leading-none font-medium tracking-[-0.01em]">
                    {user.name}
                  </span>
                  <span className="text-muted-foreground text-[13px] leading-none font-medium tracking-[-0.01em]">
                    {user.email}
                  </span>
                </div>
                <ChevronsUpDown className="text-sidebar-foreground ml-auto h-5 w-5 shrink-0 group-data-[collapsible=icon]:hidden" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-[10px]"
              align="start"
              side={isMobile ? "bottom" : "top"}
              sideOffset={4}
            >
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    {user.name}
                  </p>
                  <p className="text-muted-foreground text-xs leading-none">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
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
