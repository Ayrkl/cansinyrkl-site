"use client";

import { IndirIkonu } from "@/components/Ikonlar";

export function YazdirDugmesi({ metin, sinif = "dugme" }: { metin: string; sinif?: string }) {
  return (
    <button className={sinif} type="button" onClick={() => window.print()}>
      <IndirIkonu />
      {metin}
    </button>
  );
}
