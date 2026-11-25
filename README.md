# cansinyrkl.vercel.app

Ahmet Can Yürekli'nin kişisel sitesi: projeler, deneyim, araç kutusu ve iletişim formu. Türkçe `/`, İngilizce `/en`.

- Next.js (App Router) + TypeScript, el yazımı CSS (tasarım belirteçleri `app/globals.css`), tek yazı ailesi (Bricolage Grotesque).
- İçerik tek dosyada: `lib/icerik.ts`. Burada olmayan beceri ya da deneyim siteye yazılmaz.
- İletişim formu `app/api/contact/route.ts`: mesajı Resend ile e-posta olarak iletir; bot tuzağı ve basit hız sınırı var. Ayarlar için `.env.example`.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
```

## Yayın

Vercel'de projeyi GitHub deposuna bağla; her `main` push'u yayınlanır. Ortam değişkenleri: `RESEND_API_KEY`, `CONTACT_TO`.
