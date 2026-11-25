import { Bricolage_Grotesque } from "next/font/google";

// Tek aile: başlıkta geniş optik boy, gövdede normal. Türkçe karakterler için latin-ext.
export const yazi = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
  variable: "--yazi",
});
