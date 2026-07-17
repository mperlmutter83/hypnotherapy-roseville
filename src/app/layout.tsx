import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Hypnotherapy Roseville | Professional Hypnotherapy Services", template: "%s | Hypnotherapy Roseville" },
  description: "Professional hypnotherapy services in Roseville, CA. Helping you overcome anxiety, quit smoking, lose weight, and more. Call (415) 322-0298.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} font-sans antialiased`}><Header /><main>{children}</main><Footer /></body></html>;
}
