"use client"

import * as React from "react"
import {
  BarChart3,
  Bell,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  File,
  FileText,
  Folder,
  FolderTree,
  HelpCircle,
  Home,
  Menu,
  Settings,
  Table,
  User,
} from "lucide-react"

import { NavMain } from "@/registry/new-york-v4/blocks/sidebar-07/components/nav-main"
import { NavUser } from "@/registry/new-york-v4/blocks/sidebar-07/components/nav-user"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/registry/new-york-v4/ui/sidebar"

// This is sample data matching the design
const data = {
  user: {
    name: "Echo",
    email: "Creator",
    avatar: "",
  },
  navMain: [
    {
      title: "Option 1",
      url: "#",
      isActive: true,
      icon: Home,
      items: [],
    },
    {
      title: "Option 2",
      url: "#",
      isActive: false,
      icon: FolderTree,
      items: [
        {
          title: "Sub option 1",
          url: "#",
          icon: File,
        },
        {
          title: "Sub option 2",
          url: "#",
          icon: Folder,
        },
        {
          title: "Sub option 3",
          url: "#",
          icon: File,
        },
        {
          title: "Sub option 4",
          url: "#",
          icon: Folder,
        },
      ],
    },
    {
      title: "Option 3",
      url: "#",
      isActive: false,
      icon: FileText,
      items: [],
    },
  ],
  navMenu2: [
    {
      title: "Option 4",
      url: "#",
      isActive: false,
      icon: Settings,
      items: [],
    },
    {
      title: "Option 5",
      url: "#",
      isActive: false,
      icon: User,
      items: [],
    },
  ],
  navMenu3: [
    {
      title: "Option 6",
      url: "#",
      isActive: false,
      icon: BarChart3,
      items: [],
    },
    {
      title: "Option 7",
      url: "#",
      isActive: false,
      icon: Bell,
      items: [],
    },
    {
      title: "Data Table",
      url: "#",
      isActive: false,
      icon: Table,
      items: [],
    },
  ],
  navMenu4: [
    {
      title: "Option 8",
      url: "#",
      isActive: false,
      icon: HelpCircle,
      items: [],
    },
  ],
}

function SidebarHeaderContent() {
  const { toggleSidebar } = useSidebar()

  return (
    <>
      <div className="flex items-center justify-between gap-5 group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center gap-2.5 group-data-[collapsible=icon]:gap-0">
          <div className="relative h-9 w-9 shrink-0">
            <div className="absolute inset-0 rounded-[8.37px] border border-gray-300 [background:linear-gradient(36.29deg,_#8b63ff,_#f92ca8_50%,_#f78b55)]" />
            <span className="absolute top-[calc(50%_-_13.09px)] left-[calc(50%_-_10.69px)] text-lg leading-none font-bold text-white">
              if
            </span>
          </div>
          <span className="text-sidebar-foreground text-[24px] leading-8 font-semibold tracking-[-0.02em] group-data-[collapsible=icon]:hidden">
            Influere
          </span>
        </div>
        <Button
          onClick={toggleSidebar}
          variant="link"
          size="icon"
          className="text-sidebar-foreground mx-0 w-3 shrink-0 cursor-pointer bg-transparent p-0 opacity-75 group-data-[collapsible=icon]:hidden hover:bg-transparent hover:opacity-100"
          aria-label="Toggle Sidebar"
        >
          <ChevronsLeft />
        </Button>
      </div>
    </>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      className="font-inter bg-sidebar relative rounded-[15px] border"
      {...props}
    >
      {/* Expand Button - Absolute positioned */}
      <Button
        onClick={toggleSidebar}
        variant="outline"
        size="icon"
        className="absolute top-4 -right-4 z-10 hidden h-6 w-6 cursor-pointer group-data-[collapsible=icon]:flex"
        aria-label="Expand Sidebar"
      >
        <ChevronsRight />
      </Button>
      <SidebarHeader className="border-border border-b p-4 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
        <SidebarHeaderContent />
      </SidebarHeader>
      <SidebarContent className="text-muted-foreground text-xs">
        <NavMain
          label="OPTION MENU 1"
          items={data.navMain.slice(0, 1)}
          className="border-border border-b border-dashed group-data-[collapsible=icon]:border-0"
        />
        <NavMain
          label="OPTION MENU 2"
          items={data.navMain.slice(1)}
          className="border-border border-b border-dashed group-data-[collapsible=icon]:border-0"
        />
        <NavMain
          label="OPTION MENU 3"
          items={data.navMenu2}
          className="border-border border-b border-dashed group-data-[collapsible=icon]:border-0"
        />
        <NavMain
          label="OPTION MENU 4"
          items={data.navMenu3}
          className="flex-1"
        />
      </SidebarContent>
      <SidebarFooter className="border-border gap-0 border-t border-dashed p-0 group-data-[collapsible=icon]:border-0">
        <div className="border-border border-t border-dashed p-4 group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:p-2">
          <NavMain label="BOTTOM MENU" items={data.navMenu4} className="p-0" />
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
