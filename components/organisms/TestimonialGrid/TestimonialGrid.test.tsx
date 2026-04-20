import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { testimonials } from "@/content/testimonials";
import { TestimonialGrid } from "./TestimonialGrid";

describe("TestimonialGrid", () => {
  it("renders a section with id=testimonials", () => {
    const { container } = render(<TestimonialGrid />);
    expect(container.querySelector("#testimonials")).not.toBeNull();
  });

  it("renders every testimonial from content", () => {
    render(<TestimonialGrid />);
    for (const t of testimonials) {
      expect(screen.getByText(t.name)).toBeInTheDocument();
    }
  });
});
