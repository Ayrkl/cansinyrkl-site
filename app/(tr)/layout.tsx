import type { Metadata } from "next";
import { mono, yazi } from "@/lib/yazi";
import "@/app/globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

// Kayıtlı temayı ilk boyamadan önce uygular (açık tema seçildiyse koyu yanıp sönmesin)
const TEMA_BETIGI = "try{var t=localStorage.getItem('tema');if(t==='acik'||t==='koyu')document.documentElement.dataset.tema=t}catch(e){}";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ahmet Can Yürekli, Full Stack Developer",
  description:
    "İstanbul'da full stack geliştirici. Next.js, TypeScript ve PostgreSQL ile canlı sistemler; kişisel projelerde Rust. Mid-level rol arıyorum.",
  alternates: { canonical: "/", languages: { tr: "/", en: "/en", ja: "/ja" } },
  openGraph: {
    title: "Ahmet Can Yürekli, Full Stack Developer",
    description: "Next.js, TypeScript ve PostgreSQL ile canlı sistemler; kişisel projelerde Rust.",
    url: "/",
    locale: "tr_TR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function KokYerlesim({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-tema="koyu" className={`${yazi.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: TEMA_BETIGI }} />
        {children}
      </body>
    </html>
  );
}
