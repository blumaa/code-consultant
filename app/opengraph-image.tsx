import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Code Consultant — audits for vibe-coded apps";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#f5f4ed",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "#e85d3c",
          fontSize: 28,
        }}
      >
        <span style={{ fontFamily: "monospace" }}>{"{ }"}</span>
        <span style={{ color: "#141413", fontWeight: 500 }}>Code Consultant</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <p
          style={{
            margin: 0,
            fontSize: 28,
            color: "#e85d3c",
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Audits for vibe-coded apps
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#141413",
            fontWeight: 500,
            maxWidth: 980,
          }}
        >
          I audit vibe-coded apps so they survive production.
        </h1>
      </div>
      <p style={{ margin: 0, fontSize: 24, color: "#5e5d59" }}>
        Bugs · Performance · Security · UX · Design System · DRY/SOLID/SSOT/KISS
      </p>
    </div>,
    size,
  );
}
