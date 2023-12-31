// 'use client'

import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheHeader } from "./components/Header";
import { TheFooter } from "./components/Footer";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "learning Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <TheHeader />
          <main>{children}</main>
          <TheFooter />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
