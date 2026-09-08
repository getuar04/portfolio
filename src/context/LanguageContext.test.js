import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider, useLang } from "./LanguageContext";

function Consumer() {
  const { lang, toggle, t } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="label">{t.nav.about}</span>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

describe("LanguageContext", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
  });

  it("defaults to English and exposes English translations", () => {
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByTestId("label")).toHaveTextContent("About");
  });

  it("switches language, updates <html lang>, and persists the choice", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );

    await user.click(screen.getByText("toggle"));

    // The switch is intentionally deferred behind a brief fade transition.
    await waitFor(() => expect(screen.getByTestId("lang")).toHaveTextContent("sq"));
    expect(screen.getByTestId("label")).toHaveTextContent("Rreth Meje");
    expect(document.documentElement.lang).toBe("sq");
    expect(window.localStorage.getItem("gj-lang")).toBe("sq");
  });

  it("ignores a repeated click while a transition is already in flight", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );

    const btn = screen.getByText("toggle");
    await user.click(btn);
    await user.click(btn); // should be a no-op while fading

    await waitFor(() => expect(screen.getByTestId("lang")).toHaveTextContent("sq"));
  });

  it("restores the persisted language on next mount", () => {
    window.localStorage.setItem("gj-lang", "sq");
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId("lang")).toHaveTextContent("sq");
  });
});
