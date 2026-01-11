import { AppSidebar } from "@/registry/new-york-v4/blocks/sidebar-07/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="bg-background flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-[280px]">
          <AppSidebar />
        </div>
      </div>
      <SidebarInset className="hidden" />
    </SidebarProvider>
  )
}
