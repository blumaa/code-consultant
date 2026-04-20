import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders an anchor with the given href and label", () => {
    render(<NavLink href="#audits">Audits</NavLink>);
    const link = screen.getByRole("link", { name: "Audits" });
    expect(link).toHaveAttribute("href", "#audits");
  });
});
