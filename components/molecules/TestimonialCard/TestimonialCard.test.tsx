import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestimonialCard } from "./TestimonialCard";

describe("TestimonialCard", () => {
  it("renders quote, name, and position", () => {
    render(
      <TestimonialCard
        quote="Aaron found 30 bugs in a day."
        name="Jane Founder"
        position="CEO, Example"
      />,
    );
    expect(screen.getByText(/aaron found 30 bugs/i)).toBeInTheDocument();
    expect(screen.getByText("Jane Founder")).toBeInTheDocument();
    expect(screen.getByText("CEO, Example")).toBeInTheDocument();
  });

  it("shows a placeholder badge when isPlaceholder", () => {
    render(<TestimonialCard quote="TBD" name="TBD" position="TBD" isPlaceholder />);
    expect(screen.getByText(/placeholder/i)).toBeInTheDocument();
  });

  it("does not show the placeholder badge when real", () => {
    render(<TestimonialCard quote="x" name="y" position="z" />);
    expect(screen.queryByText(/placeholder/i)).toBeNull();
  });
});
