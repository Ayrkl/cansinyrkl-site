import type { Metadata } from "next";
import { yazi } from "@/lib/yazi";
import "@/app/globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ahmet Can Yürekli, full stack geliştirici",
  description:
    "İstanbul'da full stack geliştirici. Next.js, TypeScript ve PostgreSQL ile canlı sistemler; kişisel projelerde Rust. Mid-level rol arıyorum.",
  alternates: { canonical: "/", languages: { tr: "/", en: "/en" } },
  openGraph: {
    title: "Ahmet Can Yürekli, full stack geliştirici",
    description: "Next.js, TypeScript ve PostgreSQL ile canlı sistemler; kişisel projelerde Rust.",
    url: "/",
    locale: "tr_TR",
    type: "website",
  },
};

export default function KokYerlesim({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={yazi.variable}>
      <body>{children}</body>
    </html>
  );
}
