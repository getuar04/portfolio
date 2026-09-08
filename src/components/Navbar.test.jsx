import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "./Navbar";

function renderNavbar() {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </ThemeProvider>
  );
}

describe("Navbar", () => {
  it("renders the primary navigation links", () => {
    renderNavbar();
    const nav = screen.getByRole("navigation", { name: "Primary" });
    ["About", "Experience", "Projects", "Skills", "Education", "Certificates", "Contact"].forEach((label) => {
      expect(nav).toHaveTextContent(label);
    });
  });

  it("opens the mobile menu and closes it again on Escape", async () => {
    const user = userEvent.setup();
    renderNavbar();

    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });

  it("switches the whole nav to Albanian when the language toggle is used", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole("button", { name: "Switch to Albanian" }));

    const nav = screen.getByRole("navigation", { name: "Primary" });
    expect(nav).toHaveTextContent("Kontakti");
  });
});
