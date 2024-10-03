import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TransitionEffect from "@/components/TransitionEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: "Austin-William Lo",
  description: "Welcome to my personal website !",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <TransitionEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
