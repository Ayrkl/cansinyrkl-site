"use client";

import { useState, type FormEvent } from "react";
import type { Icerik } from "@/lib/icerik";

type Durum = { tur: "bos" } | { tur: "gonderiliyor" } | { tur: "basarili" } | { tur: "hata"; kod: string };

export function IletisimFormu({ form }: { form: Icerik["form"] }) {
  const [durum, setDurum] = useState<Durum>({ tur: "bos" });

  async function gonder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const veri = new FormData(f);
    setDurum({ tur: "gonderiliyor" });
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ad: veri.get("ad"),
          eposta: veri.get("eposta"),
          mesaj: veri.get("mesaj"),
          site: veri.get("site"),
        }),
      });
      const cevap = (await r.json().catch(() => ({}))) as { ok?: boolean; kod?: string };
      if (r.ok && cevap.ok) {
        f.reset();
        setDurum({ tur: "basarili" });
      } else {
        setDurum({ tur: "hata", kod: cevap.kod ?? "gonderilemedi" });
      }
    } catch {
      setDurum({ tur: "hata", kod: "gonderilemedi" });
    }
  }

  const gonderiliyor = durum.tur === "gonderiliyor";

  return (
    <form className="form" onSubmit={gonder} noValidate>
      <label>
        {form.ad}
        <input name="ad" type="text" autoComplete="name" maxLength={80} required />
      </label>
      <label>
        {form.eposta}
        <input name="eposta" type="email" autoComplete="email" maxLength={120} required />
      </label>
      <label>
        {form.mesaj}
        <textarea name="mesaj" maxLength={3000} required />
      </label>
      {/* bot tuzağı: insanlar görmez, doldurulursa mesaj yok sayılır */}
      <div className="tuzak" aria-hidden="true">
        <label>
          Site
          <input name="site" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {durum.tur === "basarili" && (
        <p className="form-durum" role="status">
          {form.basarili}
        </p>
      )}
      {durum.tur === "hata" && (
        <p className="form-durum hata" role="alert">
          {form.hatalar[durum.kod] ?? form.hatalar.gonderilemedi}
        </p>
      )}
      <div>
        <button className="dugme birincil" type="submit" disabled={gonderiliyor}>
          {gonderiliyor ? form.gonderiliyor : form.gonder}
        </button>
      </div>
    </form>
  );
}
