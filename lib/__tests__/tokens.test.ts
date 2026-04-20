import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const tokensCss = readFileSync(resolve(__dirname, "../../styles/tokens.css"), "utf-8");

const REQUIRED_VARS = [
  "--color-bg",
  "--color-surface",
  "--color-surface-hover",
  "--color-text",
  "--color-muted",
  "--color-subtle",
  "--color-primary",
  "--color-primary-hover",
  "--color-primary-light",
  "--color-border",
  "--color-focus",
  "--font-sans",
  "--font-mono",
  "--text-xs",
  "--text-sm",
  "--text-base",
  "--text-lg",
  "--text-xl",
  "--text-2xl",
  "--text-3xl",
  "--text-4xl",
  "--text-5xl",
  "--weight-heading",
  "--weight-body",
  "--lh-heading",
  "--lh-body",
  "--space-1",
  "--space-2",
  "--space-4",
  "--space-8",
  "--space-16",
  "--space-32",
  "--radius-xs",
  "--radius-sm",
  "--radius-md",
  "--radius-pill",
  "--shadow-sm",
  "--shadow-md",
  "--shadow-lg",
  "--shadow-primary-sm",
  "--shadow-primary-glow",
  "--ease-out",
  "--dur-fast",
  "--dur-base",
  "--dur-slow",
];

describe("tokens.css", () => {
  it.each(REQUIRED_VARS)("declares %s", (variable) => {
    expect(tokensCss).toContain(`${variable}:`);
  });

  it("defines a :root (light) block", () => {
    expect(tokensCss).toMatch(/:root\s*\{/);
  });

  it("defines a [data-theme='dark'] block", () => {
    expect(tokensCss).toMatch(/\[data-theme=["']dark["']\]\s*\{/);
  });

  it("redeclares color tokens in the dark block", () => {
    const darkBlockMatch = tokensCss.match(/\[data-theme=["']dark["']\]\s*\{([\s\S]*?)\}/);
    expect(darkBlockMatch).not.toBeNull();
    const darkBlock = darkBlockMatch?.[1] ?? "";
    expect(darkBlock).toContain("--color-bg:");
    expect(darkBlock).toContain("--color-text:");
    expect(darkBlock).toContain("--color-primary:");
  });

  it("uses the electric copper light primary #e85d3c", () => {
    expect(tokensCss).toContain("#e85d3c");
  });

  it("uses the electric copper dark primary #ff7752", () => {
    expect(tokensCss).toContain("#ff7752");
  });

  it("exposes --color-primary-rgb for rgba() compositions", () => {
    expect(tokensCss).toContain("--color-primary-rgb:");
  });
});
