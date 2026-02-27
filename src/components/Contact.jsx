import React, { useMemo, useState } from "react";

const CONTACT_EMAIL = "getuar.j1@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/getuar-jakupi/";
const GITHUB_URL = "https://github.com/getuar04";
const WHATSAPP_URL = "https://wa.me/38343833571";

function buildMailto({ name, email, message }) {
  const subject = `Portfolio contact: ${name || ""}`.trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const qs = new URLSearchParams({ subject, body }).toString();
  return `mailto:${CONTACT_EMAIL}?${qs}`;
}

export default function Contact() {
  const endpoint = useMemo(
    () =>
      process.env.REACT_APP_FORMSPREE_ENDPOINT ||
      process.env.REACT_APP_CONTACT_ENDPOINT ||
      "",
    [],
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!payload.email || !payload.message) {
      setStatus({ state: "error", msg: "Email and message are required." });
      return;
    }

    // If endpoint exists, try POST
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Request failed");

        setForm({ name: "", email: "", message: "" });
        setStatus({ state: "success", msg: "Message sent. I'll reply soon." });
        return;
      } catch {
        setStatus({
          state: "error",
          msg: "Couldn't send via endpoint. Opening email instead…",
        });
        window.location.href = buildMailto(payload);
        return;
      }
    }

    // No endpoint: fallback to mailto
    window.location.href = buildMailto(payload);
    setStatus({ state: "success", msg: "Email draft opened." });
  };

  return (
    <div
      className="card"
      style={{ padding: 18, borderRadius: 22 }}
      id="contact"
    >
      <div style={{ fontWeight: 900, fontSize: 18 }}>Contact</div>
      <p className="p" style={{ marginTop: 8 }}>
        You can reach me through the following channels.
      </p>

      <div style={{ height: 14 }} />

      {/* CONTACT CARDS (same vibe as old design) */}
      <div className="contact-grid">
        {/* EMAIL */}
        {/* <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>Email</div>
          <div className="contact-value">{CONTACT_EMAIL}</div>
          <div style={{ height: 12 }} />
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>
            Send email
          </a>
        </div> */}

        {/* LINKEDIN */}
        <div className="card contact-card">
          <div style={{ fontWeight: 900 }}>LinkedIn</div>
          <div className="contact-value">linkedin.com/in/getuar-jakupi</div>
          <div style={{ height: 12 }} />
          <a
            className="btn primary"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open LinkedIn
          </a>
        </div>

        {/* GITHUB (NEW) */}
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div style={{ height: 14 }} />

      {/* FORM (same style: card inside card) */}
      <form
        onSubmit={onSubmit}
        className="card"
        style={{ padding: 16, borderRadius: 18 }}
      >
        <div style={{ fontWeight: 900 }}>Quick message</div>
        <p className="p" style={{ marginTop: 8 }}>
          No backend needed. If I add an endpoint later, it will send directly;
          otherwise it opens your email client.
        </p>

        <div style={{ height: 12 }} />

        <div className="contact-form-grid">
          <input
            className="input"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            autoComplete="name"
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Your email *"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
            required
          />
          <textarea
            className="input"
            name="message"
            placeholder="Message *"
            value={form.message}
            onChange={onChange}
            rows={5}
            required
          />
        </div>

        <div style={{ height: 12 }} />

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            className={`btn primary ${status.state === "loading" ? "opacity-70" : ""}`}
            type="submit"
            disabled={status.state === "loading"}
          >
            {status.state === "loading" ? "Sending…" : "Send"}
          </button>

          {status.msg ? (
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: 13 }}>
              {status.msg}
            </span>
          ) : null}
        </div>
      </form>

      <div style={{ height: 14 }} />

      <div className="note">
        I’m open to internships, junior roles, and collaborations. Feel free to
        get in touch anytime.
      </div>
    </div>
  );
}
