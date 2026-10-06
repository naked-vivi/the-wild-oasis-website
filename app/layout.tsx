import type { ReactNode } from "react";
import Navigation from "./components/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
