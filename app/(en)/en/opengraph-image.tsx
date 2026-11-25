import { ImageResponse } from "next/og";

export const alt = "Ahmet Can Yürekli, full stack developer";
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
          background: "#1c2430",
          color: "#f6f7f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ width: 30, height: 30, background: "#f6f7f4", borderRadius: 7 }} />
          <div style={{ width: 30, height: 30, background: "#b7410e", borderRadius: 7 }} />
          <div style={{ width: 30, height: 30, background: "#2f6fb7", borderRadius: 7 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000, letterSpacing: -1 }}>
            Full stack developer who builds the product end to end.
          </div>
          <div style={{ fontSize: 30, color: "#a7b0ba", display: "flex", flexDirection: "column", gap: 4 }}>
            <span>Ahmet Can Yürekli</span>
            <span>Next.js, TypeScript, PostgreSQL and Rust. Istanbul.</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
