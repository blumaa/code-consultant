import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { services } from "@/content/services";
import { ServicesGrid } from "./ServicesGrid";

describe("ServicesGrid", () => {
  it("renders a section with id=services", () => {
    const { container } = render(<ServicesGrid />);
    expect(container.querySelector("#services")).not.toBeNull();
  });

  it("renders every service from content/services", () => {
    render(<ServicesGrid />);
    for (const service of services) {
      expect(screen.getByRole("heading", { name: service.title })).toBeInTheDocument();
    }
  });
});
