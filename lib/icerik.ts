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
  odaklar: ["Next.js ve TypeScript", "PostgreSQL ve Supabase", "Canlı sistemlerde güvenli değişiklik"],
  giris:
    "Next.js, TypeScript ve PostgreSQL ile canlıda kullanılan sistemler geliştiriyorum. İşim tasarım özetinden veri göçüne, güvenlik denetiminden yayına kadar ürünün tamamını kapsıyor. Yaklaşık 2,5 yıllık profesyonel deneyimle mid-level bir rol arıyorum.",
  eylemler: { iletisim: "İletişime geç", projeler: "Projelere bak" },
  stackEtiket: "Stack",
  stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Prisma", "Docker"],
  hakkimda: {
    etiket: "Hakkımda",
    baslik: "Canlı sistem kuran, ürünü uçtan uca sahiplenen geliştirici",
    paragraflar: [
      "Edusama'da öğrenci konaklama ve kiralama yönetim sistemi (personel paneli ve öğrenci portalı) geliştiriyorum; sistem canlıda kullanılıyor. Aynı ekipte Japonya pazarlama sitesi ve admin CMS'i ile LMS portalı üzerinde çalışıyorum.",
      "Canlı sistemde sıfır kesintili veri göçü (expand ve contract), KVKK uyumu ve güvenlik (IDOR, RLS, rate limit, pentest listesi) konularında uygulama deneyimim var. Tasarım özetlerini CEO'ya sunuyor, ürün yöneticisiyle birlikte çalışıyorum.",
      "Tercihim uçtan uca tip güvenliği (TypeScript, tRPC, Zod, Prisma), testle korunan değişiklik (Vitest, Playwright) ve PR akışıyla yayın. Ürün üç dilde (tr, en, ja) çalışır.",
    ],
    sayilar: [
      { deger: "2,5+", aciklama: "yıl profesyonel deneyim" },
      { deger: "3", aciklama: "ürün: kiralama yönetimi, pazarlama sitesi ve CMS, LMS portalı" },
      { deger: "0", aciklama: "kesinti: canlı sistemde veri göçü" },
      { deger: "3", aciklama: "ürün dili: Türkçe, İngilizce, Japonca" },
    ],
    odakBaslik: "Odak alanları",
    odakListe: ["Web uygulamaları (Next.js, App Router)", "Veri katmanı ve API (PostgreSQL, Prisma, tRPC)", "Canlı sistemde veri göçü", "Güvenlik ve KVKK uyumu", "Test ve yayın akışı (Vitest, Playwright, GitHub Actions)", "Çok dilli ürün (tr, en, ja)"],
  },
  projeler: {
    etiket: "Projeler",
    baslik: "Seçili işler",
    altyazi: "İş yerinde geliştirdiğim ürünlerden vaka özetleri. Müşteri ve iç bilgi paylaşılmaz; yalnız ne yapıldığı ve nasıl yapıldığı.",
    liste: [
      {
        kategori: ["Ürün", "Full stack"],
        ad: "Konaklama ve kiralama yönetim sistemi",
        aciklama: "Öğrenci konaklama ve kiralama süreçleri için personel paneli ve öğrenci portalı. Canlıda kullanılıyor; tasarım özetlerini CEO'ya sunup ürün yöneticisiyle birlikte kapsamı yönettim.",
        maddeler: [
          "Personel için yönetim paneli, öğrenciler için portal; rol tabanlı erişim.",
          "Uçtan uca tip güvenli veri akışı: TypeScript, tRPC, Zod, Prisma ve PostgreSQL.",
          "Vitest ve Playwright testleri, PR akışıyla yayın.",
        ],
        etiketler: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Auth.js"],
        durum: "Canlı",
      },
      {
        kategori: ["Canlı sistem", "Veri"],
        ad: "Sıfır kesintili veri göçü",
        aciklama: "Canlı kullanımdaki sistemde şema değişikliği, kullanıcıya kesinti yaşatmadan yapıldı. Yöntem expand ve contract: önce genişlet, veriyi taşı ve doğrula, sonra daralt.",
        etiketler: ["PostgreSQL", "Prisma", "Expand ve contract", "Geri alınabilir adımlar"],
        durum: "Canlı sistemde uygulandı",
      },
      {
        kategori: ["Güvenlik", "Uyum"],
        ad: "Güvenlik sertleştirme ve KVKK uyumu",
        aciklama: "Kişisel veri işleyen bir üründe erişim denetimi ve uyum çalışması: IDOR denetimi, satır düzeyi erişim (RLS), rate limit ve pentest listesi; kişisel verilerde KVKK uyumu.",
        etiketler: ["IDOR", "RLS", "Rate limit", "KVKK", "Pentest listesi"],
        durum: "Sürekli",
      },
      {
        kategori: ["Web sitesi", "CMS"],
        ad: "Çok dilli pazarlama sitesi ve admin CMS",
        aciklama: "Japonya pazarı için pazarlama sitesi ve içerik yönetim paneli; içerik üç dilde (tr, en, ja) yönetiliyor.",
        etiketler: ["Next.js", "next-intl", "Vercel", "Supabase"],
        durum: "Pazarlama sitesi",
      },
      {
        kategori: ["Eğitim", "Portal"],
        ad: "LMS portalı",
        aciklama: "Öğrenciler için öğrenme yönetim portalı; aynı tasarım sistemi ve veri katmanı üzerinde.",
        etiketler: ["Next.js", "TypeScript", "SCSS tasarım sistemi"],
        durum: "Ürün hattı",
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
      { ad: "Masaüstü, mobil ve AI", ogeler: ["Electron", "Expo", "React Native", "Ollama", "Claude Agent SDK"] },
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
          "Öğrenci konaklama ve kiralama yönetim sistemi (personel paneli ve öğrenci portalı), canlıda kullanılıyor.",
          "Japonya pazarı için pazarlama sitesi ve admin CMS (Vercel, Supabase). Ayrıca LMS portalı.",
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
  odaklar: ["Next.js and TypeScript", "PostgreSQL and Supabase", "Safe change on live systems"],
  giris:
    "I build systems that are in production with Next.js, TypeScript and PostgreSQL. My work covers the whole product, from the design summary to data migration, security review and release. With about 2.5 years of professional experience I am looking for a mid-level role.",
  eylemler: { iletisim: "Get in touch", projeler: "View work" },
  stackEtiket: "Stack",
  stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Prisma", "Docker"],
  hakkimda: {
    etiket: "About",
    baslik: "A developer who ships live systems and owns the product end to end",
    paragraflar: [
      "At Edusama I build a student housing and rental management system (staff panel and student portal) that is in production. On the same team I work on the Japan marketing site with its admin CMS and on an LMS portal.",
      "I have hands-on experience with zero-downtime data migration on a live system (expand and contract), KVKK compliance and security work: IDOR, RLS, rate limiting and a pentest checklist. I present design summaries to the CEO and work with the product manager.",
      "I prefer end-to-end type safety (TypeScript, tRPC, Zod, Prisma), changes protected by tests (Vitest, Playwright) and releases through a PR workflow. The product runs in three languages (tr, en, ja).",
    ],
    sayilar: [
      { deger: "2.5+", aciklama: "years of professional experience" },
      { deger: "3", aciklama: "products: rental management, marketing site and CMS, LMS portal" },
      { deger: "0", aciklama: "downtime: data migration on a live system" },
      { deger: "3", aciklama: "product languages: Turkish, English, Japanese" },
    ],
    odakBaslik: "Focus areas",
    odakListe: ["Web applications (Next.js, App Router)", "Data layer and API (PostgreSQL, Prisma, tRPC)", "Data migration on live systems", "Security and KVKK compliance", "Testing and release flow (Vitest, Playwright, GitHub Actions)", "Multilingual products (tr, en, ja)"],
  },
  projeler: {
    etiket: "Work",
    baslik: "Selected work",
    altyazi: "Case summaries from products I built at work. No customer or internal data is shared; only what was built and how.",
    liste: [
      {
        kategori: ["Product", "Full stack"],
        ad: "Housing and rental management system",
        aciklama: "Staff panel and student portal for student housing and rental operations. In production; I presented the design summaries to the CEO and managed scope with the product manager.",
        maddeler: [
          "An admin panel for staff and a portal for students, with role-based access.",
          "End-to-end type-safe data flow: TypeScript, tRPC, Zod, Prisma and PostgreSQL.",
          "Vitest and Playwright tests, releases through a PR workflow.",
        ],
        etiketler: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Auth.js"],
        durum: "Live",
      },
      {
        kategori: ["Live system", "Data"],
        ad: "Zero-downtime data migration",
        aciklama: "A schema change on a system in live use, done without interrupting users. The method was expand and contract: expand first, move and verify the data, then contract.",
        etiketler: ["PostgreSQL", "Prisma", "Expand and contract", "Reversible steps"],
        durum: "Applied on a live system",
      },
      {
        kategori: ["Security", "Compliance"],
        ad: "Security hardening and KVKK compliance",
        aciklama: "Access control and compliance work on a product that handles personal data: IDOR review, row-level access (RLS), rate limiting and a pentest checklist; KVKK compliance for personal data.",
        etiketler: ["IDOR", "RLS", "Rate limiting", "KVKK", "Pentest checklist"],
        durum: "Ongoing",
      },
      {
        kategori: ["Website", "CMS"],
        ad: "Multilingual marketing site and admin CMS",
        aciklama: "Marketing site for the Japanese market with a content management panel; content is managed in three languages (tr, en, ja).",
        etiketler: ["Next.js", "next-intl", "Vercel", "Supabase"],
        durum: "Marketing site",
      },
      {
        kategori: ["Education", "Portal"],
        ad: "LMS portal",
        aciklama: "A learning management portal for students, built on the same design system and data layer.",
        etiketler: ["Next.js", "TypeScript", "SCSS design system"],
        durum: "Product line",
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
      { ad: "Desktop, mobile and AI", ogeler: ["Electron", "Expo", "React Native", "Ollama", "Claude Agent SDK"] },
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
          "Student housing and rental management system (staff panel and student portal), in production.",
          "Marketing site for the Japanese market with an admin CMS (Vercel, Supabase). Also an LMS portal.",
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
