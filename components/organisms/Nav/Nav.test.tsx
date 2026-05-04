import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "light", setTheme: vi.fn() }),
}));

import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders the logo linking to #top", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: /code consultant/i })).toHaveAttribute("href", "#top");
  });

  it("renders anchor links to every section", () => {
    render(<Nav />);
    const opts = { hidden: true } as const;
    expect(screen.getByRole("link", { name: /audits/i, ...opts })).toHaveAttribute(
      "href",
      "#audits",
    );
    expect(screen.getByRole("link", { name: /rubrics/i, ...opts })).toHaveAttribute(
      "href",
      "#rubrics",
    );
    expect(screen.getByRole("link", { name: /services/i, ...opts })).toHaveAttribute(
      "href",
      "#services",
    );
    expect(screen.getByRole("link", { name: /^work$/i, ...opts })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: /testimonials/i, ...opts })).toHaveAttribute(
      "href",
      "#testimonials",
    );
    expect(screen.getByRole("link", { name: /^schedule$/i, ...opts })).toHaveAttribute(
      "href",
      "#book",
    );
  });

  it("renders the theme toggle", () => {
    render(<Nav />);
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });

  it("renders a hamburger button", () => {
    render(<Nav />);
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Nav />);
    const button = screen.getByRole("button", { name: /open menu/i });
    fireEvent.click(button);
    const mobileNavs = screen.getAllByRole("navigation", { name: /mobile/i });
    expect(mobileNavs.length).toBeGreaterThan(0);
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    const mobileNav = screen.getByRole("navigation", { name: /mobile/i });
    const link = mobileNav.querySelector("a");
    fireEvent.click(link!);
    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
  });
});
