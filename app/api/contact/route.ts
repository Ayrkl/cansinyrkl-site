// İletişim formu: mesajı Resend ile site sahibine e-posta olarak iletir. Ziyaretçinin adresi reply_to olur,
// sahibin adresi sayfada hiç görünmez. Ortam değişkenleri: RESEND_API_KEY, CONTACT_TO, isteğe bağlı CONTACT_FROM.
import { NextResponse } from "next/server";

const PENCERE_MS = 10 * 60 * 1000;
const EN_COK = 5;
const denemeler = new Map<string, number[]>();

function cokSikMi(anahtar: string): boolean {
  const simdi = Date.now();
  const liste = (denemeler.get(anahtar) ?? []).filter((t) => simdi - t < PENCERE_MS);
  liste.push(simdi);
  denemeler.set(anahtar, liste);
  if (denemeler.size > 5000) {
    denemeler.clear();
  }
  return liste.length > EN_COK;
}

function metin(v: unknown, enCok: number): string {
  return typeof v === "string" ? v.trim().slice(0, enCok) : "";
}

function hata(kod: string, durum: number) {
  return NextResponse.json({ ok: false, kod }, { status: durum });
}

export async function POST(istek: Request) {
  let govde: Record<string, unknown>;
  try {
    govde = (await istek.json()) as Record<string, unknown>;
  } catch {
    return hata("eksik", 400);
  }
  if (metin(govde.site, 10)) {
    // bot tuzağı dolu: sessizce kabul et, gönderme
    return NextResponse.json({ ok: true });
  }
  const ad = metin(govde.ad, 80);
  const eposta = metin(govde.eposta, 120);
  const mesaj = metin(govde.mesaj, 3000);
  if (!ad || !eposta || mesaj.length < 5) {
    return hata("eksik", 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) {
    return hata("gecersiz", 400);
  }
  const ip = istek.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "bilinmiyor";
  if (cokSikMi(ip)) {
    return hata("cok_sik", 429);
  }
  const anahtar = process.env.RESEND_API_KEY;
  const alici = process.env.CONTACT_TO;
  if (!anahtar || !alici) {
    return hata("ayarsiz", 503);
  }
  const gonderen = process.env.CONTACT_FROM ?? "Site <onboarding@resend.dev>";
  const cevap = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${anahtar}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: gonderen,
      to: [alici],
      reply_to: eposta,
      subject: `Site mesajı: ${ad}`,
      text: `Ad: ${ad}\nE-posta: ${eposta}\n\n${mesaj}\n`,
    }),
  }).catch(() => null);
  if (!cevap || !cevap.ok) {
    return hata("gonderilemedi", 502);
  }
  return NextResponse.json({ ok: true });
}
