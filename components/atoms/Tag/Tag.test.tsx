import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders its children", () => {
    render(<Tag>Performance</Tag>);
    expect(screen.getByText("Performance")).toBeInTheDocument();
  });

  it("applies the default tone by default", () => {
    render(<Tag>Default</Tag>);
    const tag = screen.getByText("Default");
    expect(tag.className).toMatch(/default/i);
  });

  it("applies primary tone when specified", () => {
    render(<Tag tone="primary">Primary</Tag>);
    expect(screen.getByText("Primary").className).toMatch(/primary/i);
  });
});
