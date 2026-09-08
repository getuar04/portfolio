import { render, screen, within } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";
import Hero from "./Hero";

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
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

  it("renders the technology carousel from one central array, including Node.js, TypeScript, Next.js, and NATS exactly once each", () => {
    renderHero();
    const list = screen.getByRole("list", { name: /core technologies/i });
    const nodeMatches = within(list).getAllByText("Node.js");
    // The track is duplicated for a seamless loop, so each real tech appears
    // exactly twice in the DOM (visible copy + aria-hidden duplicate copy).
    expect(nodeMatches).toHaveLength(2);
    expect(within(list).getAllByText("TypeScript")).toHaveLength(2);
    expect(within(list).getAllByText("Next.js")).toHaveLength(2);
    expect(within(list).getAllByText("NATS")).toHaveLength(2);
  });

  it("never places evaluation metrics in the Hero technology carousel", () => {
    renderHero();
    const list = screen.getByRole("list", { name: /core technologies/i });
    ["F1", "AUC", "NDCG@10", "Precision@5", "R²", "MSE"].forEach((metric) => {
      expect(within(list).queryByText(metric)).not.toBeInTheDocument();
    });
  });

  it("renders a readable static (non-animated) technology list under prefers-reduced-motion", () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = (query) => ({
      matches: query.includes("prefers-reduced-motion"),
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
    });

    renderHero();
    const list = screen.getByRole("list", { name: /core technologies/i });
    // Under reduced motion the track is not duplicated — each tech appears once.
    expect(within(list).getAllByText("Node.js")).toHaveLength(1);

    window.matchMedia = originalMatchMedia;
  });
});
