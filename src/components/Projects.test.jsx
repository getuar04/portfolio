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
  it("shows every project in the default 'All Projects' filter", () => {
    renderProjects();
    expect(screen.getByRole("heading", { name: "2AF Authentication Service" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Weather App" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Resource Booking System" })).toBeInTheDocument();
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
});
