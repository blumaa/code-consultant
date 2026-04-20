import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AuditPill } from "./AuditPill";

describe("AuditPill", () => {
  it("renders title and description", () => {
    render(<AuditPill icon="bug" title="Bugs" description="Logic errors, race conditions" />);
    expect(screen.getByText("Bugs")).toBeInTheDocument();
    expect(screen.getByText("Logic errors, race conditions")).toBeInTheDocument();
  });

  it("renders the icon (svg)", () => {
    const { container } = render(<AuditPill icon="bolt" title="Perf" description="" />);
    expect(container.querySelector("svg")).not.toBeNull();
  });
});
