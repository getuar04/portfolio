import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} style={{ padding: "28px 0" }}>
      <div className="container">
        <div style={{ marginBottom: 14 }}>
          <h2 className="h2">{title}</h2>
          {subtitle ? (
            <p className="p" style={{ marginTop: 6 }}>
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
