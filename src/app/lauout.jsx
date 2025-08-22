"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar"; // adjust path if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
