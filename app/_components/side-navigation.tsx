"use client";

import { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  PanelLeftIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "./signout-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const navLinks = [
  { name: "Home", href: "/account", icon: HomeIcon },
  { name: "Reservations", href: "/account/reservations", icon: CalendarDaysIcon },
  { name: "Guest profile", href: "/account/profile", icon: UserIcon },
];

function AccountLinks({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="Account navigation" className="min-h-0 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {navLinks.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href ||
              (href !== "/account" && pathname.startsWith(`${href}/`));

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  title={collapsed ? name : undefined}
                  onClick={onNavigate}
                  className={`flex items-center rounded-md text-base transition-colors hover:bg-primary-900 hover:text-accent-400 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent-400 ${
                    collapsed ? "size-11 justify-center" : "h-12 gap-3 px-2"
                  } ${isActive ? "bg-primary-900 font-medium text-accent-400" : "text-primary-200"}`}
                >
                  <Icon className="size-5 shrink-0" aria-hidden="true" />
                  <span className={collapsed ? "sr-only" : "truncate"}>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-6 border-t border-primary-800 pt-2">
        <SignOutButton collapsed={collapsed} />
      </div>
    </>
  );
}

export default function SideNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleLabel = collapsed ? "Expand account menu" : "Collapse account menu";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeMobileOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "b" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        if (desktop.matches) setCollapsed((value) => !value);
        else setMobileOpen((value) => !value);
      }
    };

    desktop.addEventListener("change", closeMobileOnDesktop);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      desktop.removeEventListener("change", closeMobileOnDesktop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <aside
        aria-label="Guest area"
        className={`relative hidden shrink-0 flex-col border-r border-primary-800 pl-2 pb-2 transition-[width,padding] duration-200 motion-reduce:transition-none md:flex ${
          collapsed ? "w-18 pr-4" : "w-56 pr-6"
        }`}
      >
        <button
          type="button"
          className="absolute -right-4 top-2 z-10 flex size-8 items-center justify-center rounded-full border border-primary-800 bg-primary-950 text-primary-300 transition-colors hover:bg-primary-900 hover:text-accent-400 focus-visible:outline-2 focus-visible:outline-accent-400"
          aria-label={toggleLabel}
          aria-expanded={!collapsed}
          title={toggleLabel}
          onClick={() => setCollapsed((value) => !value)}
        >
          {collapsed ? <ChevronRightIcon className="size-4" aria-hidden="true" /> : <ChevronLeftIcon className="size-4" aria-hidden="true" />}
        </button>
        <AccountLinks collapsed={collapsed} />
      </aside>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 self-start rounded-md border border-primary-800 px-3 text-sm text-primary-200 hover:bg-primary-900 hover:text-accent-400 focus-visible:outline-2 focus-visible:outline-accent-400 md:hidden"
            aria-label="Open account menu"
          >
            <PanelLeftIcon className="size-4" aria-hidden="true" />
            Account menu
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="max-w-72 p-2 pt-16" showCloseButton={false}>
          <SheetHeader className="sr-only">
            <SheetTitle>Account menu</SheetTitle>
            <SheetDescription>Navigate your guest account.</SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <button
              type="button"
              className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-md text-primary-200 hover:bg-primary-900 hover:text-accent-400 focus-visible:outline-2 focus-visible:outline-accent-400"
              aria-label="Close account menu"
            >
              <XIcon className="size-4" aria-hidden="true" />
            </button>
          </SheetClose>
          <AccountLinks onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  );
}
