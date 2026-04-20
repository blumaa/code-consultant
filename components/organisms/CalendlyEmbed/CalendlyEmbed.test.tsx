import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CalendlyEmbed } from "./CalendlyEmbed";

describe("CalendlyEmbed", () => {
  it("renders a section with id=book", () => {
    const { container } = render(<CalendlyEmbed />);
    expect(container.querySelector("#book")).not.toBeNull();
  });

  it("renders an iframe pointing at a Calendly URL", () => {
    const { container } = render(<CalendlyEmbed />);
    const iframe = container.querySelector("iframe");
    expect(iframe).not.toBeNull();
    expect(iframe?.src).toContain("calendly.com");
  });

  it("renders a fallback mailto link", () => {
    render(<CalendlyEmbed />);
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );
  });
});
