"use client"

import { ChevronDown, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/registry/new-york-v4/ui/sidebar"

export function NavMain({
  items,
  label,
  className,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
  label?: string
  className?: string
}) {
  return (
    <SidebarGroup
      className={cn("p-4 group-data-[collapsible=icon]:p-2", className)}
    >
      {label && (
        <SidebarGroupLabel className="text-sidebar-foreground mb-3 h-auto px-0 text-xs font-medium tracking-[-0.02em] uppercase group-data-[collapsible=icon]:mb-0">
          <span>{label}</span>
        </SidebarGroupLabel>
      )}
      <SidebarMenu className="gap-3 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-[3px]">
        {items.map((item) => {
          const hasSubItems = item.items && item.items.length > 0

          if (hasSubItems) {
            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-sidebar-foreground hover:bg-sidebar-accent h-auto rounded-[10px] px-3 py-2 text-base leading-[150%] font-medium tracking-[-0.02em] opacity-80 transition-colors group-data-[collapsible=icon]:h-9 group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
                      {item.icon && <item.icon className="h-5 w-5 shrink-0" />}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                      <ChevronDown className="ml-auto h-5 w-5 shrink-0 transition-transform duration-200 group-data-[collapsible=icon]:hidden group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="group-data-[collapsible=icon]:hidden">
                    <SidebarMenuSub className="mt-[3px] pl-6">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className="text-sidebar-foreground hover:bg-sidebar-accent h-auto rounded-[10px] px-3 py-2 text-base leading-[150%] font-medium tracking-[-0.02em] transition-colors"
                          >
                            <a href={subItem.url}>
                              {subItem.icon && (
                                <subItem.icon className="h-5 w-5 shrink-0" />
                              )}
                              <span className="group-data-[collapsible=icon]:hidden">
                                {subItem.title}
                              </span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          }

          return (
            <SidebarMenuItem
              key={item.title}
              className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center"
            >
              <SidebarMenuButton
                asChild
                className={cn(
                  "text-sidebar-foreground h-auto rounded-[10px] px-3 py-2 text-base leading-[150%] font-medium tracking-[-0.02em] transition-colors group-data-[collapsible=icon]:h-9 group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2",
                  item.isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground border"
                    : "hover:bg-sidebar-accent opacity-80"
                )}
              >
                <a
                  href={item.url}
                  className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center"
                >
                  {item.icon && <item.icon className="h-5 w-5 shrink-0" />}
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
