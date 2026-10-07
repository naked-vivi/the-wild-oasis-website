import type { ReactNode } from "react";
import SideNavigation from "../_components/side-navigation";
import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider className="mx-auto min-h-[calc(100svh-13rem)] max-w-7xl gap-4 md:gap-8 [&_[data-slot=sidebar-gap]]:hidden">
      <SideNavigation />
      <div className="min-w-0 flex-1">
        <div className="mb-6 flex items-center gap-2 border-b border-primary-800 pb-3">
          <SidebarTrigger className="size-11" aria-label="Toggle account menu" />
          <span className="text-sm text-primary-200">Your account</span>
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
}
