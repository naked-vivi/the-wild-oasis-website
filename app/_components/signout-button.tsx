"use client";

import { ArrowRightCircleIcon } from "lucide-react";

export default function SignOutButton({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <button
      type="button"
      title={collapsed ? "Sign out" : undefined}
      className={`flex items-center rounded-md text-base text-primary-200 transition-colors hover:bg-primary-900 hover:text-accent-400 focus-visible:outline-2 focus-visible:outline-accent-400 ${
        collapsed ? "size-11 justify-center" : "h-12 w-full gap-3 px-2"
      }`}
    >
      <ArrowRightCircleIcon className="size-5 shrink-0" aria-hidden="true" />
      <span className={collapsed ? "sr-only" : undefined}>Sign out</span>
    </button>
  );
}
