import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders an h1 by default", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it.each([1, 2, 3, 4, 5, 6] as const)("renders level %s", (level) => {
    render(<Heading level={level}>heading</Heading>);
    expect(screen.getByRole("heading", { level, name: "heading" })).toBeInTheDocument();
  });

  it("can visually render at a different size than its level", () => {
    render(
      <Heading level={2} size="xl">
        sub
      </Heading>,
    );
    const el = screen.getByRole("heading", { level: 2, name: "sub" });
    expect(el.className).toMatch(/xl/);
  });
});
