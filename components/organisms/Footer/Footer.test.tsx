import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders a mailto link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );
  });

  it("renders external links to GitHub and LinkedIn", () => {
    render(<Footer />);
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(github).toHaveAttribute("href", expect.stringContaining("github.com"));
    expect(linkedin).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
    expect(github).toHaveAttribute("target", "_blank");
  });

  it("renders a copyright line with the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });

  it("renders a link to the personal portfolio at aaronblum.pro", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /aaronblum\.co|portfolio/i });
    expect(link).toHaveAttribute("href", expect.stringContaining("aaronblum.pro"));
    expect(link).toHaveAttribute("target", "_blank");
  });
});
