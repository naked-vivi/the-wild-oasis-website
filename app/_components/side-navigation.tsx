"use client";

import { CalendarDaysIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./signout-button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

const navLinks = [
  { name: "Home", href: "/account", icon: HomeIcon },
  { name: "Reservations", href: "/account/reservations", icon: CalendarDaysIcon },
  { name: "Guest profile", href: "/account/profile", icon: UserIcon },
];

export default function SideNavigation() {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="border-sidebar-border md:relative md:inset-auto md:h-full"
    >
      <SidebarHeader className="flex-row items-center justify-between px-4 py-5 group-data-[collapsible=icon]:hidden">
        <span className="font-semibold text-accent-400">Guest area</span>
        <SidebarTrigger className="size-11 md:hidden" aria-label="Close account menu" />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <nav aria-label="Account navigation">
              <SidebarMenu>
                {navLinks.map(({ name, href, icon: Icon }) => {
                  const isActive = pathname === href ||
                    (href !== "/account" && pathname.startsWith(`${href}/`));

                  return (
                    <SidebarMenuItem key={href}>
                      <SidebarMenuButton
                        asChild
                        size="lg"
                        isActive={isActive}
                        tooltip={name}
                        className="text-base"
                      >
                        <Link
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setOpenMobile(false)}
                        >
                          <Icon aria-hidden="true" />
                          <span>{name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SignOutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
