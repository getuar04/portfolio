import { render, screen, within } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";
import Hero from "./Hero";

const EXPECTED_TECHS = [
  "Node.js", "TypeScript", "Express.js", "REST APIs", "PostgreSQL", "MongoDB",
  "Redis", "Kafka", "NATS", "Docker", "Docker Compose", "Kubernetes",
  "Jenkins CI/CD", "JWT", "RBAC", "Two-Factor Authentication", "Clean Architecture",
  "Python", "FastAPI", "React", "Next.js", "Git/GitHub",
];

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
}

function mockReducedMotion(matches) {
  const original = window.matchMedia;
  window.matchMedia = (query) => ({
    matches: query.includes("prefers-reduced-motion") ? matches : false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  });
  return () => {
    window.matchMedia = original;
  };
}

describe("Hero", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("shows the shortened English introduction", () => {
    renderHero();
    expect(
      screen.getByText(
        "I'm Getuar Jakupi, a Backend Developer building secure and maintainable services with Node.js and TypeScript, with additional experience in full-stack development and recommendation-focused Machine Learning."
      )
    ).toBeInTheDocument();
  });

  it("shows the shortened Albanian introduction", () => {
    window.localStorage.setItem("gj-lang", "sq");
    renderHero();
    expect(
      screen.getByText(
        "Jam Getuar Jakupi, Zhvillues Backend që ndërtoj shërbime të sigurta dhe të mirëmbajtshme me Node.js dhe TypeScript, me përvojë shtesë në full-stack dhe Machine Learning për sisteme rekomanduese."
      )
    ).toBeInTheDocument();
  });

  describe("technology carousel", () => {
    it("renders exactly 22 unique technologies from one source array, with no duplicates, each as its own chip", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      // Raw DOM query so this counts BOTH groups — getAllByRole intentionally
      // excludes the aria-hidden duplicate group, which is itself proof it's
      // correctly hidden from assistive tech (checked separately below).
      const chips = Array.from(list.querySelectorAll('[role="listitem"]'));
      expect(chips).toHaveLength(44);

      const texts = chips.map((chip) => chip.textContent.trim());
      expect(new Set(texts).size).toBe(22);
      texts.forEach((text) => {
        expect(texts.filter((t) => t === text)).toHaveLength(2);
      });
    });

    it("never concatenates technology names — every multi-word name survives intact as one chip", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      const chips = Array.from(list.querySelectorAll('[role="listitem"]'));
      EXPECTED_TECHS.forEach((name) => {
        expect(chips.filter((c) => c.textContent.trim() === name)).toHaveLength(2);
      });
      chips.forEach((chip) => expect(EXPECTED_TECHS).toContain(chip.textContent.trim()));
    });

    it("never places evaluation metrics in the Hero technology carousel", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      ["F1", "AUC", "NDCG@10", "Precision@5", "R²", "MSE"].forEach((metric) => {
        expect(within(list).queryByText(metric)).not.toBeInTheDocument();
      });
    });

    it("renders exactly two technology groups, the second marked aria-hidden for a seamless loop", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      const track = list.querySelector(".hero-tech-track");
      const groups = track.querySelectorAll(".hero-tech-group");
      expect(groups).toHaveLength(2);
      expect(groups[0]).not.toHaveAttribute("aria-hidden");
      expect(groups[1]).toHaveAttribute("aria-hidden", "true");

      const chips = Array.from(list.querySelectorAll('[role="listitem"]'));
      expect(chips.filter((c) => c.getAttribute("aria-hidden") === "true")).toHaveLength(22);
      // getAllByRole is accessibility-tree-aware and correctly sees only the visible group.
      expect(within(list).getAllByRole("listitem")).toHaveLength(22);
    });

    it("keeps the track and both groups on one non-wrapping horizontal line", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      const track = list.querySelector(".hero-tech-track");
      expect(track).toHaveStyle({ flexWrap: "nowrap" });
      track.querySelectorAll(".hero-tech-group").forEach((group) => {
        expect(group).toHaveStyle({ flexWrap: "nowrap" });
      });
    });

    it("keeps every chip on one line via white-space: nowrap", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      const chip = within(list).getAllByText("Two-Factor Authentication")[0];
      expect(chip.closest('[role="listitem"]')).toHaveStyle({ whiteSpace: "nowrap" });
    });

    it("clips the carousel inside an overflow-hidden viewport to prevent page overflow", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      expect(list).toHaveStyle({ overflow: "hidden" });
      expect(list.className).toMatch(/hero-tech-marquee/);
    });

    it("keeps the carousel structure fixed regardless of technology count (Hero card height doesn't grow with the list)", () => {
      renderHero();
      const list = screen.getByRole("list", { name: /core technologies/i });
      // Exactly one marquee viewport and one track — the carousel is a single
      // bounded element, never a per-item block that would grow the card.
      expect(document.querySelectorAll(".hero-tech-marquee")).toHaveLength(1);
      expect(list.querySelectorAll(".hero-tech-track")).toHaveLength(1);
    });

    it("keeps moving under prefers-reduced-motion instead of freezing into a wrapped list", () => {
      const restore = mockReducedMotion(true);
      try {
        renderHero();
        const list = screen.getByRole("list", { name: /core technologies/i });
        // Same two-group, non-wrapped structure — reduced motion must not
        // switch to a different (wrapped/static) layout.
        const chips = Array.from(list.querySelectorAll('[role="listitem"]'));
        expect(chips).toHaveLength(44);
        const track = list.querySelector(".hero-tech-track");
        expect(track).toHaveStyle({ flexWrap: "nowrap" });
        // Slower, but still a real, non-zero, infinitely-looping duration.
        expect(track.style.animationDuration).toBe("20s");
      } finally {
        restore();
      }
    });

    it("uses the faster duration when the user has no reduced-motion preference", () => {
      const restore = mockReducedMotion(false);
      try {
        renderHero();
        const list = screen.getByRole("list", { name: /core technologies/i });
        const track = list.querySelector(".hero-tech-track");
        expect(track.style.animationDuration).toBe("14s");
      } finally {
        restore();
      }
    });
  });
});
