// Site içeriği. Tek gerçek kaynak: E:\is-bulucu\profil.md ile aynı bilgiler; burada olmayan beceri, unvan, rakam yok.
export type Dil = "tr" | "en";

export interface Baglanti {
  metin: string;
  url: string;
}

export interface Proje {
  kategori: string[];
  ad: string;
  aciklama: string;
  maddeler?: string[];
  etiketler: string[];
  durum: string;
}

export interface Deneyim {
  unvan: string;
  sirket: string;
  donem: string;
  maddeler: string[];
  etiketler: string[];
}

export interface Icerik {
  dil: Dil;
  digerDil: Baglanti;
  ad: string;
  marka: string;
  rol: string;
  nav: { hakkimda: string; projeler: string; beceriler: string; deneyim: string; iletisim: string };
  tema: { acik: string; koyu: string };
  cv: string;
  ustYazi: string;
  odaklar: string[];
  giris: string;
  eylemler: { iletisim: string; projeler: string };
  stackEtiket: string;
  stack: string[];
  hakkimda: {
    etiket: string;
    baslik: string;
    paragraflar: string[];
    sayilar: { deger: string; aciklama: string }[];
    odakBaslik: string;
    odakListe: string[];
  };
  projeler: { etiket: string; baslik: string; altyazi: string; liste: Proje[] };
  beceriler: { etiket: string; baslik: string; altyazi: string; gruplar: { ad: string; ogeler: string[]; vurgu?: boolean }[] };
  deneyim: { etiket: string; baslik: string; liste: Deneyim[]; egitimBaslik: string; egitim: string[] };
  iletisim: {
    etiket: string;
    baslik: string;
    metin: string;
    kartlar: { ad: string; deger: string; url: string; tur: "github" | "linkedin" }[];
    bilgi: { etiket: string; deger: string }[];
  };
  altbilgi: string;
}

export const BAGLANTILAR = {
  github: "https://github.com/Ayrkl",
  linkedin: "https://www.linkedin.com/in/canyrkl",
};

const TR: Icerik = {
  dil: "tr",
  digerDil: { metin: "EN", url: "/en" },
  ad: "Ahmet Can Yürekli",
  marka: "a.yürekli",
  rol: "Full Stack Developer",
  nav: { hakkimda: "Hakkımda", projeler: "Projeler", beceriler: "Beceriler", deneyim: "Deneyim", iletisim: "İletişim" },
  tema: { acik: "Açık temaya geç", koyu: "Koyu temaya geç" },
  cv: "CV indir",
  ustYazi: "Ürünü uçtan uca kuran, canlı sistemi sahiplenen geliştirici.",
  odaklar: ["Next.js ve TypeScript", "Rust ile araçlar", "Canlı sistemlerde güvenli değişiklik"],
  giris:
    "Next.js, TypeScript ve PostgreSQL ile canlıda kullanılan sistemler geliştiriyorum; kişisel projelerde Rust kullanıyorum. İşim tasarım özetinden veri göçüne, güvenlik denetiminden yayına kadar ürünün tamamını kapsıyor. Yaklaşık 2,5 yıllık profesyonel deneyimle mid-level bir rol arıyorum.",
  eylemler: { iletisim: "İletişime geç", projeler: "Projelere bak" },
  stackEtiket: "Stack",
  stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Rust", "React Native", "Docker"],
  hakkimda: {
    etiket: "Hakkımda",
    baslik: "Canlı sistem kuran, ürünü uçtan uca sahiplenen geliştirici",
    paragraflar: [
      "Edusama'da öğrenci konaklama ve kiralama yönetim sistemi Edusama Rental'ı (personel paneli ve öğrenci portalı) geliştiriyorum; sistem canlıda kullanılıyor. Aynı ekipte Japonya pazarlama sitesi ve admin CMS'i ile LMS portalı üzerinde çalışıyorum.",
      "Canlı sistemde sıfır kesintili veri göçü (expand ve contract), KVKK uyumu ve güvenlik (IDOR, RLS, rate limit, pentest listesi) konularında uygulama deneyimim var. Tasarım özetlerini CEO'ya sunuyor, ürün yöneticisiyle birlikte çalışıyorum.",
      "Kendi zamanımda Rust ile araçlar, Electron ile masaüstü uygulamaları ve Japonca öğrenme uygulamaları yapıyorum.",
    ],
    sayilar: [
      { deger: "2,5+", aciklama: "yıl profesyonel deneyim" },
      { deger: "7", aciklama: "kişisel proje" },
      { deger: "2", aciklama: "canlıda çalışan sistem" },
      { deger: "3", aciklama: "dil: Türkçe, İngilizce, Japonca" },
    ],
    odakBaslik: "Odak alanları",
    odakListe: ["Web uygulamaları (Next.js, App Router)", "Rust ile araçlar ve servisler", "Veri göçü ve güvenlik", "Masaüstü ve mobil (Electron, Expo)", "Yerel LLM ve Claude Agent SDK ile araçlar", "Çok dilli ürün (tr, en, ja)"],
  },
  projeler: {
    etiket: "Projeler",
    baslik: "Seçili işler",
    altyazi: "Kendi zamanımda yaptığım projeler. Edusama işleri şirkete ait olduğu için burada yalnız kişisel olanlar var.",
    liste: [
      {
        kategori: ["Araç", "Rust"],
        ad: "İş Bulucu",
        aciklama: "İş ilanlarını herkese açık API ve RSS kaynaklarından toplayıp CV'ye göre puanlayan, başvuruları takip eden yerel araç. Şu an üzerinde çalıştığım proje.",
        maddeler: [
          "25 herkese açık kaynağı tarar; hiçbir siteyi kazımaz, başvuruyu her zaman kullanıcı gönderir.",
          "İlanı kural tabanlı puanlar; dil şartı, maaş ve beceri uyumunu ayrı ayrı çıkarır.",
          "Yerel LLM (Ollama) ya da Claude ile ön yazı, değerlendirme ve mülakat hazırlığı üretir.",
        ],
        etiketler: ["Rust", "axum", "tokio", "SQLite", "Ollama", "Claude"],
        durum: "Geliştirme sürüyor",
      },
      {
        kategori: ["Servis", "Rust"],
        ad: "BDO Market",
        aciklama: "Oyun pazarı için kârlı üretim planını bulan servis ve web arayüzü. Docker ile paketlenip Coolify üzerinde canlıda çalışıyor.",
        etiketler: ["Rust", "axum", "SQLite", "Docker", "Coolify"],
        durum: "Canlı",
      },
      {
        kategori: ["Masaüstü", "TypeScript"],
        ad: "Claude Fleet",
        aciklama: "Yerel AI kodlama oturumlarını tek pencereden izleyen masaüstü uygulaması.",
        etiketler: ["Electron", "React", "zustand", "Claude Agent SDK"],
        durum: "Masaüstü uygulaması",
      },
      {
        kategori: ["Eklenti", "Video"],
        ad: "Silence Cutter",
        aciklama: "Premiere Pro için sessizlik kesme, altyazı ve transkript eklentisi.",
        etiketler: ["Adobe CEP", "whisper"],
        durum: "Premiere Pro eklentisi",
      },
      {
        kategori: ["Web oyunu", "3B"],
        ad: "Tanuki",
        aciklama: "3B maskotlu Japonca öğrenme oyunu; tarayıcıda çalışan PWA.",
        etiketler: ["Vite", "three.js", "GSAP", "PWA"],
        durum: "Web oyunu",
      },
      {
        kategori: ["Mobil"],
        ad: "Nihongo App",
        aciklama: "Japonca öğrenme mobil uygulaması.",
        etiketler: ["Expo", "React Native"],
        durum: "Mobil uygulama",
      },
      {
        kategori: ["Web uygulaması"],
        ad: "Stok Takip",
        aciklama: "Küçük işletme için rol tabanlı stok sistemi.",
        etiketler: ["React", "Express", "SQLite", "JWT"],
        durum: "Web uygulaması",
      },
    ],
  },
  beceriler: {
    etiket: "Beceriler",
    baslik: "Araç kutusu",
    altyazi: "Gerçekten kullandıklarım, işleve göre gruplu.",
    gruplar: [
      { ad: "Diller ve çatılar", ogeler: ["TypeScript", "JavaScript", "Rust", "Python", "Next.js (App Router)", "React 19", "Node.js"] },
      { ad: "Backend ve veri", ogeler: ["Express", "tRPC", "Zod", "Prisma", "PostgreSQL (Supabase)", "SQLite", "Auth.js", "axum", "tokio", "sqlx"] },
      { ad: "Arayüz", ogeler: ["SCSS tasarım sistemi", "CSS Modules", "Tailwind", "React Hook Form", "TanStack Query", "next-intl", "three.js", "GSAP"] },
      { ad: "Test ve akış", ogeler: ["Vitest", "Playwright", "Maestro", "GitHub Actions", "PR akışı"] },
      { ad: "Altyapı", ogeler: ["Docker", "Coolify", "Cloudflare Tunnel", "Vercel", "Render", "Supabase"] },
      { ad: "Masaüstü, mobil ve AI", ogeler: ["Electron", "Expo", "React Native", "Ollama", "Claude Agent SDK", "whisper", "OpenCV", "Pillow"] },
      { ad: "Alan bilgisi", ogeler: ["Sıfır kesintili veri göçü", "KVKK uyumu", "IDOR denetimi", "RLS", "Rate limit", "Pentest listesi", "Çok dilli ürün"], vurgu: true },
    ],
  },
  deneyim: {
    etiket: "Deneyim",
    baslik: "İş geçmişi",
    liste: [
      {
        unvan: "Full Stack Developer",
        sirket: "Edusama",
        donem: "Nis 2026 - Şu an",
        maddeler: [
          "Edusama Rental: öğrenci konaklama ve kiralama yönetim sistemi (personel paneli ve öğrenci portalı), canlıda kullanılıyor.",
          "Edusama Japan Web: Japonya pazarlama sitesi ve admin CMS (Vercel, Supabase). Ayrıca LMS portalı.",
          "Canlı sistemde sıfır kesintili veri göçü (expand ve contract), KVKK uyumu, güvenlik: IDOR, RLS, rate limit, pentest listesi.",
          "Tasarım özetlerini CEO'ya sunuyorum, ürün yöneticisiyle birlikte çalışıyorum.",
        ],
        etiketler: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "KVKK"],
      },
      {
        unvan: "Full Stack Engineer",
        sirket: "Yukatech",
        donem: "Oca 2022 - Eyl 2023",
        maddeler: ["Web uygulamaları geliştirdim; React ile arayüz çalışmaları."],
        etiketler: ["React", "Web"],
      },
    ],
    egitimBaslik: "Eğitim",
    egitim: [
      "Anadolu Üniversitesi, Bilgisayar Programcılığı (ön lisans, 2024 - 2026)",
      "42 İstanbul Piscine (2025)",
      "BTK Akademi React, JavaScript, HTML5 ve CSS sertifikaları (2023)",
      "Anadolu Üniversitesi, Uluslararası İlişkiler (lisans, devam ediyor)",
    ],
  },
  iletisim: {
    etiket: "İletişim",
    baslik: "Konuşalım",
    metin:
      "Mid-level full stack ya da frontend rolleri için açığım: Türkiye'de ofis, hibrit ya da uzaktan; Türkiye'den çalışılabilen yurt dışı uzaktan roller de olur. Canlı sistem, güvenlik ve ürün sahipliği önemliyse konuşalım.",
    kartlar: [
      { ad: "LinkedIn", deger: "linkedin.com/in/canyrkl", url: BAGLANTILAR.linkedin, tur: "linkedin" },
      { ad: "GitHub", deger: "github.com/Ayrkl", url: BAGLANTILAR.github, tur: "github" },
    ],
    bilgi: [
      { etiket: "Konum", deger: "İstanbul, Türkiye (UTC+3)" },
      { etiket: "Başlangıç", deger: "Makul bir geçiş süresiyle" },
      { etiket: "Diller", deger: "Türkçe, İngilizce (yazılı iş seviyesi), Japonca (başlangıç)" },
    ],
  },
  altbilgi: "© 2026 Ahmet Can Yürekli",
};

const EN: Icerik = {
  dil: "en",
  digerDil: { metin: "TR", url: "/" },
  ad: "Ahmet Can Yürekli",
  marka: "a.yürekli",
  rol: "Full Stack Developer",
  nav: { hakkimda: "About", projeler: "Work", beceriler: "Skills", deneyim: "Experience", iletisim: "Contact" },
  tema: { acik: "Switch to light theme", koyu: "Switch to dark theme" },
  cv: "Download CV",
  ustYazi: "Builds the product end to end and owns it in production.",
  odaklar: ["Next.js and TypeScript", "Tools in Rust", "Safe change on live systems"],
  giris:
    "I build systems that are in production with Next.js, TypeScript and PostgreSQL, and I use Rust for personal projects. My work covers the whole product, from the design summary to data migration, security review and release. With about 2.5 years of professional experience I am looking for a mid-level role.",
  eylemler: { iletisim: "Get in touch", projeler: "View work" },
  stackEtiket: "Stack",
  stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Rust", "React Native", "Docker"],
  hakkimda: {
    etiket: "About",
    baslik: "A developer who ships live systems and owns the product end to end",
    paragraflar: [
      "At Edusama I build Edusama Rental, a student housing and rental management system (staff panel and student portal) that is in production. On the same team I work on the Japan marketing site with its admin CMS and on an LMS portal.",
      "I have hands-on experience with zero-downtime data migration on a live system (expand and contract), KVKK compliance and security work: IDOR, RLS, rate limiting and a pentest checklist. I present design summaries to the CEO and work with the product manager.",
      "On my own time I build tools in Rust, desktop apps with Electron and apps for learning Japanese.",
    ],
    sayilar: [
      { deger: "2.5+", aciklama: "years of professional experience" },
      { deger: "7", aciklama: "personal projects" },
      { deger: "2", aciklama: "systems running in production" },
      { deger: "3", aciklama: "languages: Turkish, English, Japanese" },
    ],
    odakBaslik: "Focus areas",
    odakListe: ["Web applications (Next.js, App Router)", "Tools and services in Rust", "Data migration and security", "Desktop and mobile (Electron, Expo)", "Tooling with local LLMs and the Claude Agent SDK", "Multilingual products (tr, en, ja)"],
  },
  projeler: {
    etiket: "Work",
    baslik: "Selected work",
    altyazi: "Projects built on my own time. Edusama work belongs to the company, so only personal projects are listed here.",
    liste: [
      {
        kategori: ["Tool", "Rust"],
        ad: "İş Bulucu (Job Finder)",
        aciklama: "Local tool that collects job posts from public APIs and RSS feeds, scores them against a CV and tracks applications. The project I am working on right now.",
        maddeler: [
          "Scans 25 public sources; scrapes no site, and the user always sends the application.",
          "Scores each post with rules; extracts language requirements, salary and skill match separately.",
          "Drafts cover letters, evaluations and interview prep with a local LLM (Ollama) or Claude.",
        ],
        etiketler: ["Rust", "axum", "tokio", "SQLite", "Ollama", "Claude"],
        durum: "In progress",
      },
      {
        kategori: ["Service", "Rust"],
        ad: "BDO Market",
        aciklama: "Service and web UI that finds the most profitable crafting plan for a game marketplace. Packaged with Docker and running in production on Coolify.",
        etiketler: ["Rust", "axum", "SQLite", "Docker", "Coolify"],
        durum: "Live",
      },
      {
        kategori: ["Desktop", "TypeScript"],
        ad: "Claude Fleet",
        aciklama: "Desktop app that watches local AI coding sessions from a single window.",
        etiketler: ["Electron", "React", "zustand", "Claude Agent SDK"],
        durum: "Desktop app",
      },
      {
        kategori: ["Extension", "Video"],
        ad: "Silence Cutter",
        aciklama: "Premiere Pro extension for silence cutting, subtitles and transcripts.",
        etiketler: ["Adobe CEP", "whisper"],
        durum: "Premiere Pro extension",
      },
      {
        kategori: ["Web game", "3D"],
        ad: "Tanuki",
        aciklama: "Japanese learning game with a 3D mascot; a PWA that runs in the browser.",
        etiketler: ["Vite", "three.js", "GSAP", "PWA"],
        durum: "Web game",
      },
      {
        kategori: ["Mobile"],
        ad: "Nihongo App",
        aciklama: "Mobile app for learning Japanese.",
        etiketler: ["Expo", "React Native"],
        durum: "Mobile app",
      },
      {
        kategori: ["Web app"],
        ad: "Stok Takip (Inventory)",
        aciklama: "Role-based inventory system for a small business.",
        etiketler: ["React", "Express", "SQLite", "JWT"],
        durum: "Web app",
      },
    ],
  },
  beceriler: {
    etiket: "Skills",
    baslik: "Toolbox",
    altyazi: "What I actually use, grouped by function.",
    gruplar: [
      { ad: "Languages and frameworks", ogeler: ["TypeScript", "JavaScript", "Rust", "Python", "Next.js (App Router)", "React 19", "Node.js"] },
      { ad: "Backend and data", ogeler: ["Express", "tRPC", "Zod", "Prisma", "PostgreSQL (Supabase)", "SQLite", "Auth.js", "axum", "tokio", "sqlx"] },
      { ad: "Frontend", ogeler: ["SCSS design system", "CSS Modules", "Tailwind", "React Hook Form", "TanStack Query", "next-intl", "three.js", "GSAP"] },
      { ad: "Testing and workflow", ogeler: ["Vitest", "Playwright", "Maestro", "GitHub Actions", "PR workflow"] },
      { ad: "Infrastructure", ogeler: ["Docker", "Coolify", "Cloudflare Tunnel", "Vercel", "Render", "Supabase"] },
      { ad: "Desktop, mobile and AI", ogeler: ["Electron", "Expo", "React Native", "Ollama", "Claude Agent SDK", "whisper", "OpenCV", "Pillow"] },
      { ad: "Domain knowledge", ogeler: ["Zero-downtime migration", "KVKK compliance", "IDOR review", "RLS", "Rate limiting", "Pentest checklist", "Multilingual products"], vurgu: true },
    ],
  },
  deneyim: {
    etiket: "Experience",
    baslik: "Work history",
    liste: [
      {
        unvan: "Full Stack Developer",
        sirket: "Edusama",
        donem: "Apr 2026 - Present",
        maddeler: [
          "Edusama Rental: student housing and rental management system (staff panel and student portal), in production.",
          "Edusama Japan Web: marketing site for Japan with an admin CMS (Vercel, Supabase). Also an LMS portal.",
          "Zero-downtime data migration on a live system (expand and contract), KVKK compliance, security work: IDOR, RLS, rate limiting, pentest checklist.",
          "I present design summaries to the CEO and work with the product manager.",
        ],
        etiketler: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "KVKK"],
      },
      {
        unvan: "Full Stack Engineer",
        sirket: "Yukatech",
        donem: "Jan 2022 - Sep 2023",
        maddeler: ["Built web applications; frontend work with React."],
        etiketler: ["React", "Web"],
      },
    ],
    egitimBaslik: "Education",
    egitim: [
      "Anadolu University, Computer Programming (associate degree, 2024 - 2026)",
      "42 Istanbul Piscine (2025)",
      "BTK Academy certificates in React, JavaScript, HTML5 and CSS (2023)",
      "Anadolu University, International Relations (bachelor's, in progress)",
    ],
  },
  iletisim: {
    etiket: "Contact",
    baslik: "Let's talk",
    metin:
      "I am open to mid-level full stack or frontend roles: on-site, hybrid or remote in Turkey, or a remote role abroad that can be done from Turkey. If live systems, security and product ownership matter to you, let's talk.",
    kartlar: [
      { ad: "LinkedIn", deger: "linkedin.com/in/canyrkl", url: BAGLANTILAR.linkedin, tur: "linkedin" },
      { ad: "GitHub", deger: "github.com/Ayrkl", url: BAGLANTILAR.github, tur: "github" },
    ],
    bilgi: [
      { etiket: "Location", deger: "Istanbul, Turkey (UTC+3)" },
      { etiket: "Start", deger: "With a reasonable notice period" },
      { etiket: "Languages", deger: "Turkish, English (professional in writing), Japanese (beginner)" },
    ],
  },
  altbilgi: "© 2026 Ahmet Can Yürekli",
};

export const ICERIK: Record<Dil, Icerik> = { tr: TR, en: EN };
