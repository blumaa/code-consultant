import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders an h1", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the section with id=top", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("#top")).not.toBeNull();
  });

  it("renders two CTAs linking to #book and #audits", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /schedule initial audit/i })).toHaveAttribute(
      "href",
      "#book",
    );
    expect(screen.getByRole("link", { name: /what i audit/i })).toHaveAttribute("href", "#audits");
  });
});
