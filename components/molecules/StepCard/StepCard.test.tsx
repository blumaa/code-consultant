import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StepCard } from "./StepCard";

describe("StepCard", () => {
  it("renders number, title, and description", () => {
    render(<StepCard number={2} title="Audit" description="I read your code carefully." />);
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Audit" })).toBeInTheDocument();
    expect(screen.getByText("I read your code carefully.")).toBeInTheDocument();
  });
});
