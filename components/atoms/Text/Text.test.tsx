import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders as <p> by default", () => {
    render(<Text>hello</Text>);
    expect(screen.getByText("hello").tagName).toBe("P");
  });

  it("renders as <span> when as='span'", () => {
    render(<Text as="span">hello</Text>);
    expect(screen.getByText("hello").tagName).toBe("SPAN");
  });

  it("applies the given size class", () => {
    render(<Text size="lg">big</Text>);
    expect(screen.getByText("big").className).toMatch(/lg/);
  });

  it("applies the given tone class", () => {
    render(<Text tone="muted">quiet</Text>);
    expect(screen.getByText("quiet").className).toMatch(/muted/);
  });
});
