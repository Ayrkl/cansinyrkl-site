"use client";

import { useSyncExternalStore } from "react";
import { AyIkonu, GunesIkonu } from "@/components/Ikonlar";

type Tema = "koyu" | "acik";

// Tema html[data-tema] ile uygulanır; ilk boyamadan önce layout'taki küçük betik localStorage'dan okur.
// Bileşen durumu DOM'daki özniteliktir: MutationObserver ile izlenir, ayrı state tutulmaz.
function abone(bildir: () => void) {
  const g = new MutationObserver(bildir);
  g.observe(document.documentElement, { attributes: true, attributeFilter: ["data-tema"] });
  return () => g.disconnect();
}

function oku(): Tema {
  return document.documentElement.dataset.tema === "acik" ? "acik" : "koyu";
}

export function TemaDugmesi({ etiket }: { etiket: { acik: string; koyu: string } }) {
  const tema = useSyncExternalStore(abone, oku, () => "koyu" as Tema);

  function degistir() {
    const yeni: Tema = tema === "koyu" ? "acik" : "koyu";
    document.documentElement.dataset.tema = yeni;
    try {
      localStorage.setItem("tema", yeni);
    } catch {}
  }

  const hedef = tema === "koyu" ? etiket.acik : etiket.koyu;
  return (
    <button className="tema-dugme" type="button" onClick={degistir} aria-label={hedef} title={hedef}>
      {tema === "koyu" ? <GunesIkonu /> : <AyIkonu />}
    </button>
  );
}
