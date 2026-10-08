import type { ReactNode } from "react";
import SideNavigation from "../_components/side-navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100svh-13rem)] flex-col gap-5 md:flex-row md:gap-8 lg:gap-12">
      <SideNavigation />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
