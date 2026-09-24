import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "APEX DETAIL — Automotive detailing in Almaty";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          color: "#f5f5f0",
          background:
            "radial-gradient(ellipse at 82% 15%, #28251c 0%, #141414 34%, #0a0a0a 75%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 5,
              height: 36,
              background: "#c9a84c",
            }}
          />
          <div
            style={{
              color: "#c9a84c",
              fontSize: 27,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            APEX DETAIL
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#c9a84c",
              fontSize: 18,
              letterSpacing: 6,
            }}
          >
            AUTOMOTIVE DETAILING · ALMATY
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 68,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            CARE FOR EVERY DETAIL
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(245,245,240,0.2)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
