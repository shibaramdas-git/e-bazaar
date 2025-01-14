import type { Metadata } from "next";
import { font } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Bazaar",
  description: "E-Bazaar marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
