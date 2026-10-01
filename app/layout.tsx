import type { Metadata, Viewport } from "next";
import { site } from "@/lib/portfolio";
import "./globals.css";
export const metadata: Metadata = {
  ...(site.origin ? { metadataBase: new URL(site.origin), alternates: { canonical: "/" } } : {}),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  keywords: ["Savya Vats", "UCLA", "Computer Science", "Software Engineering", "Machine Learning", "Research"],
  openGraph: { title: site.title, description: site.description, type: "website", locale: "en_US", siteName: site.name, ...(site.origin ? { url: site.origin } : {}) },
  twitter: { card: "summary", title: site.title, description: site.description },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};
export const viewport: Viewport = { themeColor: "#0b0d0c", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
