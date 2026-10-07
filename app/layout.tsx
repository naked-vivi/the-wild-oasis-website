import type { ReactNode } from "react";
import Navigation from "./_components/navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="text-gray-50 min-h-screen bg-blue-700">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
