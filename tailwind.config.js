/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,.15), 0 20px 60px rgba(79,70,229,.25)",
        soft: "0 10px 30px rgba(0,0,0,.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glowPulse: "glowPulse 3s ease-in-out infinite",
        scrollDown: "scrollDown 1.8s infinite",
        marquee: "marquee 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.2" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
