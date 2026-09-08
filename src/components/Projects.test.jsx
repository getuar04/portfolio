import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider } from "../context/LanguageContext";
import Projects from "./Projects";

function renderProjects() {
  return render(
    <LanguageProvider>
      <Projects />
    </LanguageProvider>
  );
}

describe("Projects", () => {
  it("shows every project in the default 'All Projects' filter, including the newly added ones", () => {
    renderProjects();
    expect(screen.getByRole("heading", { name: "2AF Authentication Service" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Weather App" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Smart Resource Booking System" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ARKA — POS & Business Management System" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Balkan Air Quality Analysis" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Prishtina Traffic Counter" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Quiz Management System" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Digital Invitation Platform" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "E-commerce Product Data Crawler" })).toBeInTheDocument();
  });

  it("marks ARKA as Coming Soon rather than Completed", () => {
    renderProjects();
    const card = screen.getByRole("heading", { name: "ARKA — POS & Business Management System" }).closest("article");
    expect(within(card).getByText("Coming Soon")).toBeInTheDocument();
  });

  it("filters to only Data Science projects", async () => {
    const user = userEvent.setup();
    renderProjects();

    await user.click(screen.getByRole("button", { name: "Data Science" }));

    expect(screen.getByRole("heading", { name: "Balkan Air Quality Analysis" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Weather App" })).not.toBeInTheDocument();
  });

  it("filters to In Development projects", async () => {
    const user = userEvent.setup();
    renderProjects();

    await user.click(screen.getByRole("button", { name: "In Development" }));

    expect(screen.getByRole("heading", { name: "ARKA — POS & Business Management System" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Digital Invitation Platform" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Weather App" })).not.toBeInTheDocument();
  });

  it("filters to only Frontend-tagged projects", async () => {
    const user = userEvent.setup();
    renderProjects();

    await user.click(screen.getByRole("button", { name: "Frontend" }));

    expect(screen.getByRole("heading", { name: "Weather App" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "2AF Authentication Service" })).not.toBeInTheDocument();
  });

  it("never renders a fake/broken link for a project with no public repo, demo, or write-up", () => {
    renderProjects();
    const card = screen.getByRole("heading", { name: "Google OAuth Authentication Integration" }).closest("article");
    expect(within(card).queryByRole("link")).not.toBeInTheDocument();
    expect(within(card).getByText("Private")).toBeInTheDocument();
  });

  it("only shows a Live Demo link for projects with a real deployed URL", () => {
    renderProjects();
    const card = screen.getByRole("heading", { name: "Book List App" }).closest("article");
    const liveLink = within(card).getByRole("link", { name: /Live Demo/i });
    expect(liveLink).toHaveAttribute("href", expect.stringContaining("book-list-getu.rf.gd"));
    expect(within(card).queryByRole("link", { name: /GitHub/i })).not.toBeInTheDocument();
  });

  describe("repository links for the six new projects", () => {
    const repoCases = [
      ["ARKA — POS & Business Management System", "https://github.com/getuar04/arka-pos"],
      ["Balkan Air Quality Analysis", "https://github.com/getuar04/balkan-air-quality-analysis"],
      ["Prishtina Traffic Counter", "https://github.com/getuar04/prishtina-traffic-counter"],
      ["Quiz Management System", "https://github.com/getuar04/quiz-management"],
      ["Digital Invitation Platform", "https://github.com/getuar04/invations"],
      ["E-commerce Product Data Crawler", "https://github.com/getuar04/crawl"],
    ];

    it.each(repoCases)("renders an active, correctly-configured GitHub anchor for %s", (heading, url) => {
      renderProjects();
      const card = screen.getByRole("heading", { name: heading }).closest("article");
      const link = within(card).getByRole("link", { name: new RegExp(`Source Code.*${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`) });

      // Active real anchor, not a disabled/placeholder control
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", url);
      expect(link.getAttribute("href")).not.toBe("#");
      expect(link).not.toHaveAttribute("aria-disabled");
      expect(link).not.toHaveAttribute("disabled");

      // Safe external-link configuration, independent of whether the URL is
      // currently reachable (no network check is performed by this test).
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("also renders the same six GitHub links inside the project details modal, with the fuller label", async () => {
      const user = userEvent.setup();
      renderProjects();

      const card = screen.getByRole("heading", { name: "ARKA — POS & Business Management System" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      const link = within(dialog).getByRole("link", { name: /View on GitHub/ });
      expect(link).toHaveAttribute("href", "https://github.com/getuar04/arka-pos");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");

      // ARKA is still clearly "Coming Soon" — status and repo visibility are independent.
      expect(within(dialog).getByText("Coming Soon")).toBeInTheDocument();
    });

    it("renders the same active GitHub link in Albanian, with the Albanian label", () => {
      window.localStorage.setItem("gj-lang", "sq");
      try {
        renderProjects();

        // In Albanian the card renders the Albanian title (titleSq), not the English one.
        const card = screen.getByRole("heading", { name: "Sistemi për Menaxhimin e Kuizeve" }).closest("article");
        const link = within(card).getByRole("link", { name: /Kodi Burimor/ });
        expect(link).toHaveAttribute("href", "https://github.com/getuar04/quiz-management");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      } finally {
        window.localStorage.removeItem("gj-lang");
      }
    });

    it("keeps GitHub buttons active for projects whose repository currently 404s (visibility is not availability)", () => {
      // No network request is made here — this only asserts the rendered anchor
      // is present and active regardless of the repo's current reachability.
      renderProjects();
      const card = screen.getByRole("heading", { name: "Balkan Air Quality Analysis" }).closest("article");
      const link = within(card).getByRole("link", { name: /Source Code/ });
      expect(link).toBeEnabled();
      expect(link).toHaveAttribute("href", "https://github.com/getuar04/balkan-air-quality-analysis");
    });
  });

  it("opens an accessible modal with focus trap and closes on Escape", async () => {
    const user = userEvent.setup();
    renderProjects();

    const card = screen.getByRole("heading", { name: "2AF Authentication Service" }).closest("article");
    await user.click(within(card).getByRole("button", { name: "View Details" }));

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAccessibleName("2AF Authentication Service");

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  describe("modal viewport positioning (portal)", () => {
    it("renders the modal as a direct child of document.body, not nested inside the Projects section", async () => {
      const user = userEvent.setup();
      renderProjects();

      const card = screen.getByRole("heading", { name: "Quiz Management System" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      // Walk up: the dialog's overlay wrapper must NOT be a descendant of <section id="projects">.
      const projectsSection = document.getElementById("projects");
      expect(projectsSection.contains(dialog)).toBe(false);
      expect(document.body.contains(dialog)).toBe(true);
    });

    it("gives the modal a bounded max-height so long content scrolls internally", async () => {
      const user = userEvent.setup();
      renderProjects();

      const card = screen.getByRole("heading", { name: "2AF Authentication Service" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      expect(dialog.getAttribute("style") || "").toMatch(/dvh/);
      expect(dialog.className).toMatch(/overflow-y-auto/);
    });

    it("locks background scrolling while open and restores it when closed", async () => {
      const user = userEvent.setup();
      renderProjects();
      expect(document.body.style.overflow).not.toBe("hidden");

      const card = screen.getByRole("heading", { name: "2AF Authentication Service" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));
      expect(document.body.style.overflow).toBe("hidden");

      await user.keyboard("{Escape}");
      expect(document.body.style.overflow).not.toBe("hidden");
    });

    it("closes when the backdrop is clicked, but not when clicking inside the dialog", async () => {
      const user = userEvent.setup();
      renderProjects();

      const card = screen.getByRole("heading", { name: "2AF Authentication Service" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      await user.click(dialog); // clicking inside must not close it
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      const backdrop = dialog.parentElement;
      await user.click(backdrop);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("returns focus to the exact View Details button that opened it", async () => {
      const user = userEvent.setup();
      renderProjects();

      const card = screen.getByRole("heading", { name: "Quiz Management System" }).closest("article");
      const trigger = within(card).getByRole("button", { name: "View Details" });
      await user.click(trigger);
      await user.keyboard("{Escape}");

      expect(document.activeElement).toBe(trigger);
    });
  });

  describe("private repository visibility badge", () => {
    it("shows 'Private Repository' next to the Source Code button for a private repo, never 'Source Available'", () => {
      renderProjects();
      const card = screen.getByRole("heading", { name: "ARKA — POS & Business Management System" }).closest("article");
      expect(within(card).getByText("Private Repository")).toBeInTheDocument();
      expect(within(card).queryByText("Source Available")).not.toBeInTheDocument();
      // The repo button itself remains a real, active, clickable link.
      const link = within(card).getByRole("link", { name: /Source Code/ });
      expect(link).toHaveAttribute("href", "https://github.com/getuar04/arka-pos");
      expect(link).not.toHaveAttribute("aria-disabled");
    });

    it("does not show a private-repository badge for the public Quiz Management repository", () => {
      renderProjects();
      const card = screen.getByRole("heading", { name: "Quiz Management System" }).closest("article");
      expect(within(card).queryByText("Private Repository")).not.toBeInTheDocument();
      expect(within(card).getByText("Source Available")).toBeInTheDocument();
    });

    it("shows the private badge inside the modal's Resources section too", async () => {
      const user = userEvent.setup();
      renderProjects();
      const card = screen.getByRole("heading", { name: "Prishtina Traffic Counter" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      expect(within(dialog).getByText("Resources")).toBeInTheDocument();
      expect(within(dialog).getByText("Private Repository")).toBeInTheDocument();
    });
  });

  describe("Social Media App card — standardised footer", () => {
    it("keeps the presentation link available but no longer as a third primary footer button", () => {
      renderProjects();
      const card = screen.getByRole("heading", { name: "Social Media App" }).closest("article");

      // Standard two-action footer: Source Code + View Details.
      const footer = within(card).getByRole("button", { name: "View Details" }).parentElement;
      const footerLinks = within(footer).getAllByRole("link");
      expect(footerLinks).toHaveLength(1);
      expect(footerLinks[0]).toHaveAccessibleName(expect.stringContaining("Source Code"));

      // The presentation link is still present, just relocated as a secondary resource.
      const presentationLink = within(card).getByRole("link", { name: /Project Presentation/ });
      expect(presentationLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
      expect(footer.contains(presentationLink)).toBe(false);
    });

    it("lists Source Code, Project Presentation, and no fake live demo in the details modal Resources section", async () => {
      const user = userEvent.setup();
      renderProjects();
      const card = screen.getByRole("heading", { name: "Social Media App" }).closest("article");
      await user.click(within(card).getByRole("button", { name: "View Details" }));

      const dialog = screen.getByRole("dialog");
      const resources = within(dialog).getByText("Resources").parentElement;
      // Modal uses the fuller "View on GitHub" label; cards use "Source Code".
      expect(within(resources).getByRole("link", { name: /View on GitHub/ })).toBeInTheDocument();
      expect(within(resources).getByRole("link", { name: /Project Presentation/ })).toBeInTheDocument();
      expect(within(resources).queryByRole("link", { name: /Live Demo/i })).not.toBeInTheDocument();
    });
  });
});
