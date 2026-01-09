import { AppSidebar } from "@/registry/new-york-v4/blocks/sidebar-07/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex items-center justify-center min-h-screen p-6 bg-background">
        <div className="w-full max-w-[280px]">
          <AppSidebar />
        </div>
      </div>
      <SidebarInset className="hidden" />
    </SidebarProvider>
  )
}
