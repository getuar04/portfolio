import React, { useMemo, useState } from "react";

const CONTACT_EMAIL = "getuar.j1@gmail.com";

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

    if (!payload.message || !payload.email) {
      setStatus({ state: "error", msg: "Email and message are required." });
      return;
    }

    // 1) If you add a free endpoint (Formspree / Getform / etc.) in .env, we POST there.
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

    // 2) No backend / no endpoint: fallback to mailto.
    window.location.href = buildMailto(payload);
    setStatus({ state: "success", msg: "Email draft opened." });
  };

  return (
    <div className="card p-5">
      <div className="text-[18px] font-black">Contact</div>
      <p className="p mt-2">
        You can reach me through the following channels.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
        {/* EMAIL */}
        <div className="card p-4">
          <div className="font-black">Email</div>
          <div className="contact-value">{CONTACT_EMAIL}</div>
          <div className="mt-3" />
          <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>
            Send email
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="card p-4">
          <div className="font-black">LinkedIn</div>
          <div className="contact-value">linkedin.com/in/getuar-jakupi</div>
          <div className="mt-3" />
          <a
            className="btn primary"
            href="https://www.linkedin.com/in/getuar-jakupi/"
            target="_blank"
            rel="noreferrer"
          >
            Open LinkedIn
          </a>
        </div>

        {/* PHONE / WHATSAPP */}
        <div className="card p-4">
          <div className="font-black">Phone / WhatsApp</div>
          <div className="contact-value">+383 43 833 571</div>
          <div className="mt-3" />
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

      <div className="mt-4" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="card p-4">
          <div className="font-black">Quick message</div>
          <p className="p mt-2">
            No backend needed. If I add an endpoint later, this form will send
            directly; otherwise it opens your email client.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3">
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

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              className={`btn primary ${status.state === "loading" ? "opacity-70" : ""}`}
              type="submit"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending…" : "Send"}
            </button>
            {status.msg ? (
              <span className="text-sm" style={{ color: "rgba(255,255,255,.75)" }}>
                {status.msg}
              </span>
            ) : null}
          </div>
        </form>

        <div className="note">
        I’m open to internships, junior roles, and collaborations. Feel free to
        get in touch anytime.
      </div>
      </div>
    </div>
  );
}
