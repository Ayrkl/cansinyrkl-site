import type { Metadata } from "next";
import { yazi } from "@/lib/yazi";
import "@/app/globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ahmet Can Yürekli, full stack developer",
  description:
    "Full stack developer in Istanbul. Production systems with Next.js, TypeScript and PostgreSQL; Rust for personal projects. Looking for a mid-level role.",
  alternates: { canonical: "/en", languages: { tr: "/", en: "/en" } },
  openGraph: {
    title: "Ahmet Can Yürekli, full stack developer",
    description: "Production systems with Next.js, TypeScript and PostgreSQL; Rust for personal projects.",
    url: "/en",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={yazi.variable}>
      <body>{children}</body>
    </html>
  );
}
