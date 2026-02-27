import React from "react";

export default function About() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: 14,
      }}
    >
      {/* Quick facts */}
      <div
        className="card"
        style={{ gridColumn: "span 5", padding: 18, borderRadius: 22 }}
      >
        <div style={{ fontWeight: 900, fontSize: 18 }}>Quick facts</div>
        <div style={{ height: 10 }} />
        <div className="p" style={{ lineHeight: 1.9 }}>
          🎓 BSc in Computer Science and Engineering – present <br />
          🌍 Based in Kosovo <br />
          💻 Passionate about web development <br />
          📚 Learning React, Node.js, and SQL in depth
        </div>
      </div>

      {/* About me */}
      <div
        className="card"
        style={{ gridColumn: "span 7", padding: 18, borderRadius: 22 }}
      >
        <div style={{ fontWeight: 900, fontSize: 18 }}>About me</div>
        <p className="p" style={{ marginTop: 10 }}>
          I'm Getuar Jakupi, a Computer Science and Engineering student at UBT
          (University for Business and Technology). I enjoy building practical
          web applications, understanding how systems work end-to-end, and
          improving my coding skills through real projects.
        </p>
        <p className="p" style={{ marginTop: 10 }}>
          My main focus right now is on JavaScript / React on the frontend and
          PHP / Node.js with MySQL on the backend. I also work with databases,
          SQL, and basic DevOps tasks like hosting applications on free hosting
          platforms.
        </p>
        <p className="p" style={{ marginTop: 10 }}>
          I'm always open to internships, junior roles, or any opportunity where
          I can learn fast, contribute to a team, and work on real products.
        </p>
      </div>

      <style>{`
        @media (max-width: 920px){
          div[style*="grid-column: span 5"]{ grid-column: span 12 !important; }
          div[style*="grid-column: span 7"]{ grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  );
}
