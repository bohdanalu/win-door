import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Вікна та двері",
  description: "Металопластикові вікна та двері за найнижчими цінами",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
