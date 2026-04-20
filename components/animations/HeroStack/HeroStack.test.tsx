import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HeroStack } from "./HeroStack";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
}

describe("HeroStack", () => {
  afterEach(() => vi.restoreAllMocks());

  it("renders an accessible SVG", () => {
    mockMatchMedia(false);
    const { container } = render(<HeroStack />);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg?.querySelector("title")?.textContent).toMatch(/stack|align/i);
  });

  it("renders the expected number of blocks", () => {
    mockMatchMedia(false);
    const { container } = render(<HeroStack />);
    expect(container.querySelectorAll("[data-block]").length).toBe(6);
  });

  it("renders cleanly with prefers-reduced-motion", () => {
    mockMatchMedia(true);
    const { container } = render(<HeroStack />);
    expect(container.querySelector("svg")).not.toBeNull();
  });
});
