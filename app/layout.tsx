// Add missing React import to support React.ReactNode type in layout
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Acasting AI | Newsletter Builder",
  description: "Advanced AI-powered newsletter editor for creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-inter antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}