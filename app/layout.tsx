import "./globals.css";
import type { Metadata } from "next";
import { body_font } from "@/utils/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${body_font.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
