import React from "react";

export default function Contact() {
  return (
    <div className="card" style={{ padding: 18, borderRadius: 22 }} id="contact">
      <div style={{ fontWeight: 900, fontSize: 18 }}>Contact</div>
      <p className="p" style={{ marginTop: 8 }}>
        You can reach me through the following channels.
      </p>

      <div style={{ height: 16 }} />

      <div className="contact-grid">
        {/* EMAIL */}
        <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>Email</div>
          <div className="contact-value">getuar.j1@gmail.com</div>
          <div style={{ height: 12 }} />
          <a className="btn primary" href="mailto:getuar.j1@gmail.com">
            Send Email
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>LinkedIn</div>
          <div className="contact-value">
            linkedin.com/in/getuar-jakupi
          </div>
          <div style={{ height: 12 }} />
          <a
            className="btn primary"
            href="https://www.linkedin.com/in/getuar-jakupi/"
            target="_blank"
            rel="noreferrer"
          >
            Open LinkedIn
          </a>
        </div>

        {/* GITHUB */}
        <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>GitHub</div>
          <div className="contact-value">github.com/getuar04</div>
          <div style={{ height: 12 }} />
          <a
            className="btn primary"
            href="https://github.com/getuar04"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub
          </a>
        </div>

        {/* WHATSAPP */}
        <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>Phone / WhatsApp</div>
          <div className="contact-value">+383 43 833 571</div>
          <div style={{ height: 12 }} />
          <a
            className="btn primary"
            href="https://wa.me/38343833571"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div style={{ height: 18 }} />

      <div className="note">
        I’m open to internships, junior roles, and collaborations.
      </div>
    </div>
  );
}