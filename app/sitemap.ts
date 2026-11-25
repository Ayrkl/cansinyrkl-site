import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cansinyrkl.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const simdi = new Date();
  return [
    { url: `${SITE}/`, lastModified: simdi, alternates: { languages: { tr: `${SITE}/`, en: `${SITE}/en`, ja: `${SITE}/ja` } } },
    { url: `${SITE}/ja`, lastModified: simdi, alternates: { languages: { tr: `${SITE}/`, en: `${SITE}/en`, ja: `${SITE}/ja` } } },
    { url: `${SITE}/en`, lastModified: simdi, alternates: { languages: { tr: `${SITE}/`, en: `${SITE}/en`, ja: `${SITE}/ja` } } },
  ];
}
