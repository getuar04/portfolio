import React, { useMemo, useRef, useState } from "react";

const certs = [
  {
    id: "cert1",
    title: "HTML, CSS, JavaScript & Web-Hosting",
    issuer: "Arra Academy",
    image: "/certificates/cert1.png",
  },
  {
    id: "cert2",
    title: "WordPress & eCommerce",
    issuer: "Arra Academy",
    image: "/certificates/cert2.png",
  },
  {
    id: "cert3",
    title: "Graphic Design: Figma, Photoshop & Illustrator",
    issuer: "Arra Academy",
    image: "/certificates/cert3.png",
  },
  {
    id: "cert4",
    title: "Cyber Security",
    issuer: "Arra Academy",
    image: "/certificates/cert4.png",
  },
  {
    id: "cert5",
    title: "C, C++, C# & SQL Databases",
    issuer: "Arra Academy",
    image: "/certificates/cert5.png",
  },
];

export default function Certificates() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const maxIndex = useMemo(() => certs.length - 1, []);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(maxIndex, i));
    const card = el.querySelector("[data-slide='true']");
    if (!card) return;

    const gap = 18;
    const cardWidth = card.getBoundingClientRect().width;
    el.scrollTo({ left: clamped * (cardWidth + gap), behavior: "smooth" });
    setIndex(clamped);
  };

  const next = () => scrollToIndex(index + 1);
  const prev = () => scrollToIndex(index - 1);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-slide='true']");
    if (!card) return;

    const gap = 18;
    const cardWidth = card.getBoundingClientRect().width;
    const approx = Math.round(el.scrollLeft / (cardWidth + gap));
    const clamped = Math.max(0, Math.min(maxIndex, approx));
    if (clamped !== index) setIndex(clamped);
  };

  return (
    <div className="card" style={{ padding: 18, borderRadius: 22 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {/* <div>
          <div style={{ fontWeight: 900, fontSize: 18 }}>Certificates</div>
          <div style={{ color: "rgba(255,255,255,.65)", marginTop: 6 }}>
             Swipe/drag or use buttons. Certificates are displayed full (no cropping). 
          </div>
        </div> */}

        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="btn"
            onClick={prev}
            disabled={index === 0}
            style={{ opacity: index === 0 ? 0.55 : 1 }}
          >
            Prev
          </button>
          <button
            className="btn primary"
            onClick={next}
            disabled={index === maxIndex}
            style={{ opacity: index === maxIndex ? 0.55 : 1 }}
          >
            Next
          </button>
        </div>
      </div>

      <div style={{ height: 14 }} />
      <div className="sep" />
      <div style={{ height: 14 }} />

      {/* Slider */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        style={{
          display: "flex",
          gap: 18,
          overflowX: "auto",
          paddingBottom: 10,
          scrollSnapType: "x mandatory",
        }}
      >
        {certs.map((c) => (
          <div
            key={c.id}
            data-slide="true"
            className="card"
            style={{
              flex: "0 0 860px", // BIG on desktop
              scrollSnapAlign: "start",
              padding: 16,
              borderRadius: 22,
              background:
                "linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.05))",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div style={{ fontWeight: 900, fontSize: 16 }}>{c.title}</div>
                <div
                  style={{
                    color: "rgba(255,255,255,.65)",
                    marginTop: 6,
                    fontSize: 13,
                  }}
                >
                  {c.issuer}
                </div>
              </div>
              <span className="badge">Certificate</span>
            </div>

            <div style={{ height: 12 }} />

            {/* Full certificate display (NO crop) */}
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(0,0,0,.25)",
                padding: 12,
              }}
            >
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: "100%",
                  height: 520, // BIG + clear
                  objectFit: "contain", // FULL image visible
                  objectPosition: "center",
                  borderRadius: 12,
                }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 12,
          flexWrap: "wrap",
        }}
      >
        {certs.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to certificate ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.25)",
              background:
                i === index ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.18)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <style>{`
        /* nicer scrollbar */
        div[style*="overflow-x: auto"]::-webkit-scrollbar{ height: 10px; }
        div[style*="overflow-x: auto"]::-webkit-scrollbar-thumb{
          background: rgba(255,255,255,.18);
          border-radius: 999px;
        }
        div[style*="overflow-x: auto"]::-webkit-scrollbar-track{
          background: rgba(255,255,255,.06);
          border-radius: 999px;
        }

        /* responsive sizes */
        @media (max-width: 980px){
          div[data-slide="true"]{ flex-basis: 92vw !important; }
          img{ height: 54vw !important; } /* scales with screen */
        }
        @media (max-width: 520px){
          img{ height: 72vw !important; } /* more height on small phones */
        }
      `}</style>
    </div>
  );
}
