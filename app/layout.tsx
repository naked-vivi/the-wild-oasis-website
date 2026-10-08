import type { ReactNode } from "react";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/header";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
})

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of Italian Dolomites."
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} relative isolate text-gray-50 min-h-svh bg-primary-950 flex flex-col`}>
        <Header />
        <div className="flex-1 px-4 py-4 sm:px-8 sm:py-12">
          <main className="mx-auto">
          {children}
        </main>
        </div>
        
      </body>
    </html >
  );
}
