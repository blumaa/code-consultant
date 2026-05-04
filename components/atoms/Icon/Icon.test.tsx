import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders an SVG with an accessible title", () => {
    const { container } = render(<Icon name="check" title="checked" />);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(container.querySelector("title")?.textContent).toBe("checked");
  });

  it("is aria-hidden when no title is provided (decorative)", () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it.each([
    "check",
    "search",
    "github",
    "linkedin",
    "mail",
    "sun",
    "moon",
    "external",
    "download",
  ] as const)("knows the %s icon", (name) => {
    const { container } = render(<Icon name={name} />);
    expect(container.querySelector("svg")).not.toBeNull();
  });
});
