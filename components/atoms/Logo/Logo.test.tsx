import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("links out to the portfolio at aaronblum.co with safe external attrs", () => {
    render(<Logo />);
    const link = screen.getByRole("link", { name: /aaron blum.*code consultant/i });
    expect(link).toHaveAttribute("href", "https://aaronblum.co");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("includes both the identifier and the descriptor", () => {
    render(<Logo />);
    expect(screen.getByText(/aaronblum/i)).toBeInTheDocument();
    expect(screen.getByText(/code consultant/i)).toBeInTheDocument();
  });
});
