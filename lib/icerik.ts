// Site içeriği. Tek gerçek kaynak: E:\is-bulucu\profil.md ile aynı bilgiler; burada olmayan beceri, unvan, rakam yok.
export type Dil = "tr" | "en";

export interface Baglanti {
  metin: string;
  url: string;
}

export interface Proje {
  ad: string;
  aciklama: string;
  yigin: string;
  /** sağ sütundaki tür sözcüğü: Canlı, Eklenti, Mobil… */
  tur: string;
  /** işaret rengi = ana dil */
  renk: "rust" | "ts" | "diger";
  baglanti?: Baglanti;
}

export interface Deneyim {
  sirket: string;
  unvan: string;
  donem: string;
  maddeler: string[];
}

export interface Icerik {
  dil: Dil;
  digerDil: Baglanti;
  ad: string;
  rol: string;
  nav: { projeler: string; deneyim: string; iletisim: string };
  baslik: string;
  giris: string;
  simdi: string;
  eylemler: { projeler: string; iletisim: string };
  projelerAciklama: string;
  projeler: Proje[];
  deneyim: Deneyim[];
  yiginBaslik: string;
  yigin: { grup: string; ogeler: string }[];
  egitimBaslik: string;
  egitim: string[];
  dillerBaslik: string;
  diller: string[];
  iletisimMetin: string;
  baglantilar: Baglanti[];
  altbilgi: string;
}

export const BAGLANTILAR = {
  github: "https://github.com/Ayrkl",
  linkedin: "https://www.linkedin.com/in/canyrkl",
};

const TR: Icerik = {
  dil: "tr",
  digerDil: { metin: "English", url: "/en" },
  ad: "Ahmet Can Yürekli",
  rol: "Full stack geliştirici",
  nav: { projeler: "Projeler", deneyim: "Deneyim", iletisim: "İletişim" },
  baslik: "Ürünü uçtan uca kuran full stack geliştirici.",
  giris:
    "İstanbul'da yaşıyorum. Next.js, TypeScript ve PostgreSQL ile canlıda kullanılan sistemler geliştiriyorum; kişisel projelerde Rust kullanıyorum. Yaklaşık 2,5 yıllık profesyonel deneyimle mid-level bir rol arıyorum: Türkiye'de ofis, hibrit ya da uzaktan; Türkiye'den çalışılabilen yurt dışı uzaktan roller de olur.",
  simdi: "Şu an açık API'lerden iş ilanı toplayıp CV'ye göre puanlayan yerel bir aracı Rust ile yazıyorum.",
  eylemler: { projeler: "Projelere bak", iletisim: "Bana ulaş" },
  projelerAciklama:
    "Kendi zamanımda yaptığım işler. Renk, ana dili gösterir: turuncu Rust, mavi TypeScript ve React, gri diğerleri.",
  projeler: [
    {
      ad: "İş Bulucu",
      aciklama: "İş ilanlarını açık API ve RSS kaynaklarından toplayıp CV'ye göre puanlayan, başvuruları takip eden yerel araç.",
      yigin: "Rust (axum, tokio), SQLite, Ollama",
      tur: "Kişisel araç",
      renk: "rust",
    },
    {
      ad: "BDO Market",
      aciklama: "Oyun pazarı için kârlı üretim planını bulan servis ve web arayüzü.",
      yigin: "Rust (axum), SQLite, Docker, Coolify",
      tur: "Canlı",
      renk: "rust",
    },
    {
      ad: "Claude Fleet",
      aciklama: "Yerel AI kodlama oturumlarını tek pencereden izleyen masaüstü uygulaması.",
      yigin: "Electron, React, zustand, Claude Agent SDK",
      tur: "Masaüstü",
      renk: "ts",
    },
    {
      ad: "Silence Cutter",
      aciklama: "Premiere Pro için sessizlik kesme, altyazı ve transkript eklentisi.",
      yigin: "Adobe CEP, whisper",
      tur: "Eklenti",
      renk: "diger",
    },
    {
      ad: "Tanuki",
      aciklama: "3B maskotlu Japonca öğrenme oyunu; tarayıcıda çalışan PWA.",
      yigin: "Vite, three.js, GSAP",
      tur: "Web oyunu",
      renk: "ts",
    },
    {
      ad: "Nihongo App",
      aciklama: "Japonca öğrenme mobil uygulaması.",
      yigin: "Expo, React Native",
      tur: "Mobil",
      renk: "ts",
    },
    {
      ad: "Stok Takip",
      aciklama: "Küçük işletme için rol tabanlı stok sistemi.",
      yigin: "React, Express, SQLite, JWT",
      tur: "Web uygulaması",
      renk: "ts",
    },
  ],
  deneyim: [
    {
      sirket: "Edusama",
      unvan: "Full stack developer",
      donem: "Nisan 2026'dan beri",
      maddeler: [
        "Edusama Rental: öğrenci konaklama ve kiralama yönetim sistemi (personel paneli ve öğrenci portalı), canlıda kullanılıyor.",
        "Edusama Japan Web: Japonya pazarlama sitesi ve admin CMS (Vercel, Supabase). Ayrıca LMS portalı.",
        "Canlı sistemde sıfır kesintili veri göçü (expand ve contract), KVKK uyumu, güvenlik: IDOR, RLS, rate limit, pentest listesi.",
        "Tasarım özetlerini CEO'ya sunuyorum, ürün yöneticisiyle birlikte çalışıyorum.",
      ],
    },
    {
      sirket: "Yukatech",
      unvan: "Full stack engineer",
      donem: "Ocak 2022 ile Eylül 2023 arası",
      maddeler: ["Web uygulamaları, React."],
    },
  ],
  yiginBaslik: "Araç kutusu",
  yigin: [
    {
      grup: "Web",
      ogeler:
        "Next.js (App Router), React 19, TypeScript, tRPC, Zod, React Hook Form, TanStack Query, Prisma ve PostgreSQL (Supabase), Auth.js, next-intl, SCSS tasarım sistemi, Tailwind, Node.js, Express",
    },
    { grup: "Test", ogeler: "Vitest, Playwright" },
    { grup: "Altyapı", ogeler: "Docker, Coolify, Cloudflare Tunnel, Vercel, Render, Supabase, GitHub Actions ve PR akışı" },
    { grup: "Masaüstü ve mobil", ogeler: "Electron, Expo ve React Native (Android emülatör, Maestro)" },
    { grup: "Diğer", ogeler: "Rust (axum, tokio, sqlx, rusqlite), Python (Pillow, OpenCV), three.js ve GSAP, yerel LLM (Ollama) ve Claude Agent SDK ile araç geliştirme" },
  ],
  egitimBaslik: "Eğitim",
  egitim: [
    "Anadolu Üniversitesi, Bilgisayar Programcılığı (ön lisans, 2024 ile 2026)",
    "42 İstanbul Piscine (2025)",
    "BTK Akademi React, JavaScript, HTML5 ve CSS sertifikaları (2023)",
    "Anadolu Üniversitesi, Uluslararası İlişkiler (lisans, devam ediyor)",
  ],
  dillerBaslik: "Diller",
  diller: ["Türkçe: ana dil", "İngilizce: yazılı iş seviyesi", "Japonca: başlangıç, öğreniyorum"],
  iletisimMetin:
    "Bir rol, bir proje ya da sadece bir soru için yazabilirsiniz. GitHub ya da LinkedIn üzerinden ulaşın; mesajlara kendim dönüyorum.",
  baglantilar: [
    { metin: "GitHub", url: BAGLANTILAR.github },
    { metin: "LinkedIn", url: BAGLANTILAR.linkedin },
  ],
  altbilgi: "Next.js ile yapıldı, Vercel'de yayında.",
};

const EN: Icerik = {
  dil: "en",
  digerDil: { metin: "Türkçe", url: "/" },
  ad: "Ahmet Can Yürekli",
  rol: "Full stack developer",
  nav: { projeler: "Projects", deneyim: "Experience", iletisim: "Contact" },
  baslik: "Full stack developer who builds the product end to end.",
  giris:
    "I live in Istanbul. I build systems that are in production with Next.js, TypeScript and PostgreSQL, and I use Rust for personal projects. With about 2.5 years of professional experience I am looking for a mid-level role: on-site, hybrid or remote in Turkey, or a remote role abroad that can be done from Turkey.",
  simdi: "Right now I am writing a local tool in Rust that collects job posts from open APIs and scores them against my CV.",
  eylemler: { projeler: "See the projects", iletisim: "Get in touch" },
  projelerAciklama:
    "Things I built on my own time. The colour marks the main language: orange is Rust, blue is TypeScript and React, grey is everything else.",
  projeler: [
    {
      ad: "İş Bulucu (Job Finder)",
      aciklama: "Local tool that collects job posts from open APIs and RSS feeds, scores them against a CV and tracks applications.",
      yigin: "Rust (axum, tokio), SQLite, Ollama",
      tur: "Personal tool",
      renk: "rust",
    },
    {
      ad: "BDO Market",
      aciklama: "Service and web UI that finds the most profitable crafting plan for a game marketplace.",
      yigin: "Rust (axum), SQLite, Docker, Coolify",
      tur: "Live",
      renk: "rust",
    },
    {
      ad: "Claude Fleet",
      aciklama: "Desktop app that watches local AI coding sessions from a single window.",
      yigin: "Electron, React, zustand, Claude Agent SDK",
      tur: "Desktop",
      renk: "ts",
    },
    {
      ad: "Silence Cutter",
      aciklama: "Premiere Pro extension for silence cutting, subtitles and transcripts.",
      yigin: "Adobe CEP, whisper",
      tur: "Extension",
      renk: "diger",
    },
    {
      ad: "Tanuki",
      aciklama: "Japanese learning game with a 3D mascot; a PWA that runs in the browser.",
      yigin: "Vite, three.js, GSAP",
      tur: "Web game",
      renk: "ts",
    },
    {
      ad: "Nihongo App",
      aciklama: "Mobile app for learning Japanese.",
      yigin: "Expo, React Native",
      tur: "Mobile",
      renk: "ts",
    },
    {
      ad: "Stok Takip (Inventory)",
      aciklama: "Role-based inventory system for a small business.",
      yigin: "React, Express, SQLite, JWT",
      tur: "Web app",
      renk: "ts",
    },
  ],
  deneyim: [
    {
      sirket: "Edusama",
      unvan: "Full stack developer",
      donem: "Since April 2026",
      maddeler: [
        "Edusama Rental: student housing and rental management system (staff panel and student portal), in production.",
        "Edusama Japan Web: marketing site for Japan with an admin CMS (Vercel, Supabase). Also an LMS portal.",
        "Zero-downtime data migration on a live system (expand and contract), KVKK compliance, security work: IDOR, RLS, rate limiting, pentest checklist.",
        "I present design summaries to the CEO and work with the product manager.",
      ],
    },
    {
      sirket: "Yukatech",
      unvan: "Full stack engineer",
      donem: "January 2022 to September 2023",
      maddeler: ["Web applications, React."],
    },
  ],
  yiginBaslik: "Toolbox",
  yigin: [
    {
      grup: "Web",
      ogeler:
        "Next.js (App Router), React 19, TypeScript, tRPC, Zod, React Hook Form, TanStack Query, Prisma and PostgreSQL (Supabase), Auth.js, next-intl, SCSS design system, Tailwind, Node.js, Express",
    },
    { grup: "Testing", ogeler: "Vitest, Playwright" },
    { grup: "Infrastructure", ogeler: "Docker, Coolify, Cloudflare Tunnel, Vercel, Render, Supabase, GitHub Actions and a PR workflow" },
    { grup: "Desktop and mobile", ogeler: "Electron, Expo and React Native (Android emulator, Maestro)" },
    { grup: "Other", ogeler: "Rust (axum, tokio, sqlx, rusqlite), Python (Pillow, OpenCV), three.js and GSAP, tooling with local LLMs (Ollama) and the Claude Agent SDK" },
  ],
  egitimBaslik: "Education",
  egitim: [
    "Anadolu University, Computer Programming (associate degree, 2024 to 2026)",
    "42 Istanbul Piscine (2025)",
    "BTK Academy certificates in React, JavaScript, HTML5 and CSS (2023)",
    "Anadolu University, International Relations (bachelor's, in progress)",
  ],
  dillerBaslik: "Languages",
  diller: ["Turkish: native", "English: professional in writing", "Japanese: beginner, learning"],
  iletisimMetin:
    "Write about a role, a project or just a question. Reach me on GitHub or LinkedIn; I answer messages myself.",
  baglantilar: [
    { metin: "GitHub", url: BAGLANTILAR.github },
    { metin: "LinkedIn", url: BAGLANTILAR.linkedin },
  ],
  altbilgi: "Built with Next.js, hosted on Vercel.",
};

export const ICERIK: Record<Dil, Icerik> = { tr: TR, en: EN };
