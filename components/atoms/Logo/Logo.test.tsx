import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders a link to the home anchor with an accessible name", () => {
    render(<Logo />);
    const link = screen.getByRole("link", { name: /aaron blum.*code consultant/i });
    expect(link).toHaveAttribute("href", "#top");
  });

  it("includes both the identifier and the descriptor", () => {
    render(<Logo />);
    expect(screen.getByText(/aaronblum/i)).toBeInTheDocument();
    expect(screen.getByText(/code consultant/i)).toBeInTheDocument();
  });
});
