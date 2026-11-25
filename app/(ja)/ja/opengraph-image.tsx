import { ImageResponse } from "next/og";

// Sosyal önizleme Latin harflerle: görsel oluşturucunun varsayılan yazı tipinde Japonca karakter yok.
export const alt = "Ahmet Can Yürekli, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0c0e12",
          color: "#eef1f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 22, height: 22, background: "#f0894f", borderRadius: 5 }} />
          <div style={{ width: 22, height: 22, background: "#7fb0ea", borderRadius: 5 }} />
          <div style={{ fontSize: 28, fontWeight: 700, marginLeft: 10 }}>a.yürekli</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 24, color: "#f0894f" }}>Builds the product end to end and owns it in production.</div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>Ahmet Can Yürekli</div>
          <div style={{ fontSize: 40, color: "#b3bcc7" }}>Full Stack Developer, Istanbul</div>
          <div style={{ fontSize: 26, color: "#7fb0ea", marginTop: 6 }}>Next.js and TypeScript / PostgreSQL and Supabase / Safe change on live systems</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
