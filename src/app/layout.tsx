import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./fonts";

export const metadata: Metadata = {
  title: "Mind the Graph",
  description: "Mind the Graph landing page",
  icons: "/mtgicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
