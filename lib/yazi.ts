import { Bricolage_Grotesque, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";

// Gövde ve başlıklar: Bricolage Grotesque (Türkçe karakterler için latin-ext). Etiket ve küçük kodlar: JetBrains Mono.
export const yazi = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
  variable: "--yazi",
});

export const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--mono",
});

// Japonca sayfa: Latin kısımlar Bricolage, Japonca karakterler Noto Sans JP
export const japonca = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--yazi-ja",
  preload: false,
});
