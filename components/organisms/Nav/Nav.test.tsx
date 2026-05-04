import { render, screen } from "@testing-library/react";
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
    // links may be hidden below the tablet breakpoint via CSS; include hidden so the structural
    // assertion runs independent of viewport
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
});
