import type { Metadata } from "next";
import { japonca, mono, yazi } from "@/lib/yazi";
import "@/app/globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

// 保存されたテーマを最初の描画前に適用する
const TEMA_BETIGI = "try{var t=localStorage.getItem('tema');if(t==='acik'||t==='koyu')document.documentElement.dataset.tema=t}catch(e){}";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ahmet Can Yürekli、フルスタックデベロッパー",
  description:
    "イスタンブール在住のフルスタックデベロッパー。Next.js、TypeScript、PostgreSQL で本番稼働するシステムを開発。ミドルレベルのポジションを探しています。",
  alternates: { canonical: "/ja", languages: { tr: "/", en: "/en", ja: "/ja" } },
  openGraph: {
    title: "Ahmet Can Yürekli、フルスタックデベロッパー",
    description: "Next.js、TypeScript、PostgreSQL で本番稼働するシステムを開発。",
    url: "/ja",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-tema="koyu" className={`${yazi.variable} ${mono.variable} ${japonca.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: TEMA_BETIGI }} />
        {children}
      </body>
    </html>
  );
}
