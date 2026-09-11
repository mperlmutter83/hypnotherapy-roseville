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
  return <html lang="en">
      <head>
        {/* RFM site data - pushed before GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  rfm: {
    schema_version: "1.0",
    site_id: "hypnotherapy_roseville",
    provider_id: "4d383d92-81a8-49c4-92a9-3971edca82d2",
    provider_name: "Hypnotherapy Roseville",
    service_category: "hypnotherapy",
    market: "roseville"
  }
});`,
          }}
        />
      </head><body className={`${inter.variable} font-sans antialiased`}><Header /><main>{children}</main><Footer /></body></html>;
}
