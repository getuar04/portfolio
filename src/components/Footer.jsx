import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "28px 0 46px" }}>
      <div className="container">
        <div className="sep" />
        <div style={{ height: 14 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <div style={{ color: "rgba(255,255,255,.65)" }}>
            © {new Date().getFullYear()} Getuar Jakupi
          </div>
          <div style={{ color: "rgba(255,255,255,.55)" }}>Portfolio</div>
        </div>
      </div>
    </footer>
  );
}
