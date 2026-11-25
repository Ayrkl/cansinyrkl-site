import type { Metadata } from "next";
import { mono, yazi } from "@/lib/yazi";
import "@/app/globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

// Applies the saved theme before first paint (no dark flash when light was chosen)
const TEMA_BETIGI = "try{var t=localStorage.getItem('tema');if(t==='acik'||t==='koyu')document.documentElement.dataset.tema=t}catch(e){}";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ahmet Can Yürekli, Full Stack Developer",
  description:
    "Full stack developer in Istanbul. Production systems with Next.js, TypeScript and PostgreSQL; Rust for personal projects. Looking for a mid-level role.",
  alternates: { canonical: "/en", languages: { tr: "/", en: "/en" } },
  openGraph: {
    title: "Ahmet Can Yürekli, Full Stack Developer",
    description: "Production systems with Next.js, TypeScript and PostgreSQL; Rust for personal projects.",
    url: "/en",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-tema="koyu" className={`${yazi.variable} ${mono.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: TEMA_BETIGI }} />
        {children}
      </body>
    </html>
  );
}
