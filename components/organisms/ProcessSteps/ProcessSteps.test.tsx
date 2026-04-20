import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProcessSteps } from "./ProcessSteps";

describe("ProcessSteps", () => {
  it("renders a section with id=process", () => {
    const { container } = render(<ProcessSteps />);
    expect(container.querySelector("#process")).not.toBeNull();
  });

  it("renders three numbered steps", () => {
    render(<ProcessSteps />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });
});
