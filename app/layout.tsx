import type { ReactNode } from "react";
import Navigation from "./_components/navigation";
import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
})

console.log(josefin)

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of Italian Dolomites."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={`${josefin.className} text-gray-50 min-h-screen bg-blue-700`}>
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
    </html >
  );
}
