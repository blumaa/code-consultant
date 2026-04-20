import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { audits } from "@/content/audits";
import { AuditGrid } from "./AuditGrid";

describe("AuditGrid", () => {
  it("renders a section with id=audits", () => {
    const { container } = render(<AuditGrid />);
    expect(container.querySelector("#audits")).not.toBeNull();
  });

  it("renders every audit from content/audits", () => {
    render(<AuditGrid />);
    for (const audit of audits) {
      expect(screen.getByText(audit.title)).toBeInTheDocument();
    }
  });
});
