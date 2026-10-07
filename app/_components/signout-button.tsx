"use client";

import { ArrowRightCircleIcon } from "lucide-react";
import { SidebarMenuButton } from "./ui/sidebar";

export default function SignOutButton() {
  return (
    <SidebarMenuButton type="button" size="lg" tooltip="Sign out" className="text-base">
      <ArrowRightCircleIcon aria-hidden="true" />
      <span>Sign out</span>
    </SidebarMenuButton>
  );
}
