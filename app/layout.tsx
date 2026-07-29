import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["600"],
});

// Halyard Display is a paid commercial typeface (Process Type Foundry) with
// no free-to-embed distribution — Manrope substitutes as a close, freely
// licensable geometric sans until real Halyard font files are supplied.
const manrope = Manrope({
  variable: "--font-halyard-sub",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gabriel Leo",
  description: "Portfolio of Gabriel Leo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
