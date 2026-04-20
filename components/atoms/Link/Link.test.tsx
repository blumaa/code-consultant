import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  it("renders an anchor with the given href", () => {
    render(<Link href="/about">about</Link>);
    const a = screen.getByRole("link", { name: "about" });
    expect(a).toHaveAttribute("href", "/about");
  });

  it("does not add target by default for internal hrefs", () => {
    render(<Link href="#top">top</Link>);
    expect(screen.getByRole("link", { name: "top" })).not.toHaveAttribute("target");
  });

  it("auto-detects external URLs and sets target + rel", () => {
    render(<Link href="https://example.com">ex</Link>);
    const a = screen.getByRole("link", { name: "ex" });
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("forces external behavior when external prop is true", () => {
    render(
      <Link href="/anything" external>
        x
      </Link>,
    );
    expect(screen.getByRole("link", { name: "x" })).toHaveAttribute("target", "_blank");
  });
});
