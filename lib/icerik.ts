// Site içeriği. Tek gerçek kaynak: E:\is-bulucu\profil.md ile aynı bilgiler; burada olmayan beceri, unvan, rakam yok.
export type Dil = "tr" | "en" | "ja";

export const DILLER: { kod: Dil; kisa: string; ad: string; url: string }[] = [
  { kod: "tr", kisa: "TR", ad: "Türkçe", url: "/" },
  { kod: "en", kisa: "EN", ad: "English", url: "/en" },
  { kod: "ja", kisa: "JA", ad: "日本語", url: "/ja" },
];

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
      "Şu an eğitim ve öğrenci konaklama alanında çalışan bir şirkette konaklama ve kiralama yönetim sistemi (personel paneli ve öğrenci portalı) geliştiriyorum; sistem canlıda kullanılıyor. Aynı ekipte Japonya pazarlama sitesi ve admin CMS'i ile LMS portalı üzerinde çalışıyorum.",
      "Canlı sistemde sıfır kesintili veri göçü (expand ve contract), KVKK uyumu ve güvenlik (IDOR, RLS, rate limit, pentest listesi) konularında uygulama deneyimim var. Tasarım özetlerini CEO'ya sunuyor, ürün yöneticisiyle birlikte çalışıyorum.",
      "Tercihim uçtan uca tip güvenliği (TypeScript, tRPC, Zod, Prisma), testle korunan değişiklik (Vitest, Playwright) ve PR akışıyla yayın. Ürün üç dilde (tr, en, ja) çalışır.",
    ],
    sayilar: [
      { deger: "2,5+", aciklama: "yıl profesyonel deneyim" },
      { deger: "3", aciklama: "canlı ürün hattı" },
      { deger: "3", aciklama: "dil: Türkçe, İngilizce, Japonca" },
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
        sirket: "Eğitim ve öğrenci konaklama şirketi, İstanbul",
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
        sirket: "Yazılım şirketi",
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
      "At a company in education and student housing I build a housing and rental management system (staff panel and student portal) that is in production. On the same team I work on the Japan marketing site with its admin CMS and on an LMS portal.",
      "I have hands-on experience with zero-downtime data migration on a live system (expand and contract), KVKK compliance and security work: IDOR, RLS, rate limiting and a pentest checklist. I present design summaries to the CEO and work with the product manager.",
      "I prefer end-to-end type safety (TypeScript, tRPC, Zod, Prisma), changes protected by tests (Vitest, Playwright) and releases through a PR workflow. The product runs in three languages (tr, en, ja).",
    ],
    sayilar: [
      { deger: "2.5+", aciklama: "years of professional experience" },
      { deger: "3", aciklama: "product lines in production" },
      { deger: "3", aciklama: "languages: Turkish, English, Japanese" },
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
        sirket: "Education and student housing company, Istanbul",
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
        sirket: "Software company",
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

const JA: Icerik = {
  dil: "ja",
  ad: "Ahmet Can Yürekli",
  marka: "a.yürekli",
  rol: "Full Stack Developer",
  nav: { hakkimda: "自己紹介", projeler: "実績", beceriler: "スキル", deneyim: "経歴", iletisim: "連絡" },
  tema: { acik: "ライトテーマに切り替え", koyu: "ダークテーマに切り替え" },
  cv: "履歴書を保存",
  ustYazi: "プロダクトを設計から本番運用まで一貫して担うエンジニア。",
  odaklar: ["Next.js と TypeScript", "PostgreSQL と Supabase", "本番環境での安全な変更"],
  giris:
    "Next.js、TypeScript、PostgreSQL で本番稼働するシステムを開発しています。設計サマリーからデータ移行、セキュリティレビュー、リリースまで、プロダクト全体を担当します。約2.5年の実務経験を活かし、ミドルレベルのポジションを探しています。",
  eylemler: { iletisim: "連絡する", projeler: "実績を見る" },
  stackEtiket: "スタック",
  stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Prisma", "Docker"],
  hakkimda: {
    etiket: "自己紹介",
    baslik: "本番システムを作り、プロダクトを一貫して担うエンジニア",
    paragraflar: [
      "現在、教育・学生住居分野の企業で、住居・賃貸管理システム（スタッフ用管理画面と学生ポータル）を開発しており、本番稼働中です。同じチームで日本市場向けマーケティングサイトと管理CMS、LMSポータルも担当しています。",
      "本番環境での無停止データ移行（expand and contract）、KVKK（トルコ個人情報保護法）対応、セキュリティ（IDOR、RLS、レート制限、ペンテストチェックリスト）の実務経験があります。設計サマリーをCEOに提案し、プロダクトマネージャーと協働しています。",
      "エンドツーエンドの型安全（TypeScript、tRPC、Zod、Prisma）、テストで守られた変更（Vitest、Playwright）、PRフローでのリリースを重視します。プロダクトは3言語（トルコ語、英語、日本語）で動作します。",
    ],
    sayilar: [
      { deger: "2.5+", aciklama: "年の実務経験" },
      { deger: "3", aciklama: "本番稼働中のプロダクトライン" },
      { deger: "3", aciklama: "言語：トルコ語、英語、日本語" },
    ],
    odakBaslik: "注力分野",
    odakListe: ["Webアプリケーション（Next.js、App Router）", "データ層とAPI（PostgreSQL、Prisma、tRPC）", "本番環境でのデータ移行", "セキュリティとKVKK対応", "テストとリリースフロー（Vitest、Playwright、GitHub Actions）", "多言語プロダクト（tr、en、ja）"],
  },
  projeler: {
    etiket: "実績",
    baslik: "主な実績",
    altyazi: "業務で開発したプロダクトのケース概要です。顧客情報や社内情報は含めず、何をどのように作ったかのみ記載しています。",
    liste: [
      {
        kategori: ["プロダクト", "フルスタック"],
        ad: "住居・賃貸管理システム",
        aciklama: "学生向け住居・賃貸業務のためのスタッフ用管理画面と学生ポータル。本番稼働中。設計サマリーをCEOに提案し、プロダクトマネージャーとスコープを管理しました。",
        maddeler: [
          "スタッフ用管理画面と学生ポータル、ロールベースのアクセス制御。",
          "TypeScript、tRPC、Zod、Prisma、PostgreSQL によるエンドツーエンドの型安全なデータフロー。",
          "Vitest と Playwright のテスト、PRフローでのリリース。",
        ],
        etiketler: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Auth.js"],
        durum: "本番稼働中",
      },
      {
        kategori: ["本番システム", "データ"],
        ad: "無停止データ移行",
        aciklama: "稼働中のシステムでスキーマ変更をユーザーに影響を与えずに実施。手法は expand and contract：まず拡張し、データを移行・検証してから縮小します。",
        etiketler: ["PostgreSQL", "Prisma", "Expand and contract", "ロールバック可能な手順"],
        durum: "本番環境で実施",
      },
      {
        kategori: ["セキュリティ", "コンプライアンス"],
        ad: "セキュリティ強化とKVKK対応",
        aciklama: "個人データを扱うプロダクトでのアクセス制御とコンプライアンス対応：IDORレビュー、行レベルアクセス制御（RLS）、レート制限、ペンテストチェックリスト。個人データのKVKK対応。",
        etiketler: ["IDOR", "RLS", "レート制限", "KVKK", "ペンテストチェックリスト"],
        durum: "継続中",
      },
      {
        kategori: ["Webサイト", "CMS"],
        ad: "多言語マーケティングサイトと管理CMS",
        aciklama: "日本市場向けのマーケティングサイトとコンテンツ管理画面。コンテンツは3言語（tr、en、ja）で管理しています。",
        etiketler: ["Next.js", "next-intl", "Vercel", "Supabase"],
        durum: "マーケティングサイト",
      },
      {
        kategori: ["教育", "ポータル"],
        ad: "LMSポータル",
        aciklama: "学生向けの学習管理ポータル。同じデザインシステムとデータ層の上に構築しています。",
        etiketler: ["Next.js", "TypeScript", "SCSSデザインシステム"],
        durum: "プロダクトライン",
      },
    ],
  },
  beceriler: {
    etiket: "スキル",
    baslik: "ツールボックス",
    altyazi: "実際に使っている技術を用途別に整理しています。",
    gruplar: [
      { ad: "言語とフレームワーク", ogeler: ["TypeScript", "JavaScript", "Rust", "Python", "Next.js (App Router)", "React 19", "Node.js"] },
      { ad: "バックエンドとデータ", ogeler: ["Express", "tRPC", "Zod", "Prisma", "PostgreSQL (Supabase)", "SQLite", "Auth.js", "axum", "tokio", "sqlx"] },
      { ad: "フロントエンド", ogeler: ["SCSSデザインシステム", "CSS Modules", "Tailwind", "React Hook Form", "TanStack Query", "next-intl", "three.js", "GSAP"] },
      { ad: "テストとワークフロー", ogeler: ["Vitest", "Playwright", "Maestro", "GitHub Actions", "PRフロー"] },
      { ad: "インフラ", ogeler: ["Docker", "Coolify", "Cloudflare Tunnel", "Vercel", "Render", "Supabase"] },
      { ad: "デスクトップ・モバイル・AI", ogeler: ["Electron", "Expo", "React Native", "Ollama", "Claude Agent SDK"] },
      { ad: "ドメイン知識", ogeler: ["無停止データ移行", "KVKK対応", "IDORレビュー", "RLS", "レート制限", "ペンテストチェックリスト", "多言語プロダクト"], vurgu: true },
    ],
  },
  deneyim: {
    etiket: "経歴",
    baslik: "職務経歴",
    liste: [
      {
        unvan: "Full Stack Developer",
        sirket: "教育・学生住居分野の企業（イスタンブール）",
        donem: "2026年4月 - 現在",
        maddeler: [
          "学生向け住居・賃貸管理システム（スタッフ用管理画面と学生ポータル）を開発、本番稼働中。",
          "日本市場向けマーケティングサイトと管理CMS（Vercel、Supabase）。LMSポータルも担当。",
          "本番環境での無停止データ移行（expand and contract）、KVKK対応、セキュリティ対応：IDOR、RLS、レート制限、ペンテストチェックリスト。",
          "設計サマリーをCEOに提案し、プロダクトマネージャーと協働。",
        ],
        etiketler: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Vercel", "KVKK"],
      },
      {
        unvan: "Full Stack Engineer",
        sirket: "ソフトウェア企業",
        donem: "2022年1月 - 2023年9月",
        maddeler: ["Webアプリケーションを開発。React によるフロントエンド実装。"],
        etiketler: ["React", "Web"],
      },
    ],
    egitimBaslik: "学歴",
    egitim: [
      "アナドル大学 コンピュータプログラミング（短期大学士、2024 - 2026）",
      "42 Istanbul Piscine（2025）",
      "BTK Akademi React、JavaScript、HTML5、CSS 修了証（2023）",
      "アナドル大学 国際関係学（学士、在学中）",
    ],
  },
  iletisim: {
    etiket: "連絡",
    baslik: "お話ししましょう",
    metin:
      "ミドルレベルのフルスタックまたはフロントエンドのポジションを探しています。トルコ国内のオフィス勤務、ハイブリッド、リモート、またはトルコから勤務できる海外のリモート職も歓迎です。本番システム、セキュリティ、プロダクトオーナーシップを重視する環境であれば、ぜひご連絡ください。",
    kartlar: [
      { ad: "LinkedIn", deger: "linkedin.com/in/canyrkl", url: BAGLANTILAR.linkedin, tur: "linkedin" },
      { ad: "GitHub", deger: "github.com/Ayrkl", url: BAGLANTILAR.github, tur: "github" },
    ],
    bilgi: [
      { etiket: "所在地", deger: "イスタンブール、トルコ（UTC+3）" },
      { etiket: "開始時期", deger: "合理的な引き継ぎ期間の後" },
      { etiket: "言語", deger: "トルコ語（母語）、英語（ビジネス文書レベル）、日本語（初級）" },
    ],
  },
  altbilgi: "© 2026 Ahmet Can Yürekli",
};

export const ICERIK: Record<Dil, Icerik> = { tr: TR, en: EN, ja: JA };
