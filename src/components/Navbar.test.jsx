import { render, screen, waitFor } from "@testing-library/react";
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

  it("shows a clean EN/SQ segmented control with no flags or duplicated labels", () => {
    renderNavbar();
    const sqButtons = screen.getAllByRole("button", { name: "Shqip" });
    const enButtons = screen.getAllByRole("button", { name: "English" });
    expect(sqButtons.length).toBeGreaterThan(0);
    expect(enButtons.length).toBeGreaterThan(0);
    sqButtons.forEach((btn) => expect(btn).toHaveTextContent("SQ"));
    enButtons.forEach((btn) => expect(btn).toHaveTextContent("EN"));
    expect(screen.queryByText("🇦🇱")).not.toBeInTheDocument();
    expect(screen.queryByText("AL")).not.toBeInTheDocument();
  });

  it("switches the whole nav to Albanian via the language switch, after the transition settles", async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getAllByRole("button", { name: "Shqip" })[0]);

    const nav = await screen.findByRole("navigation", { name: "Primary" });
    await waitFor(() => expect(nav).toHaveTextContent("Kontakti"));
  });
});
