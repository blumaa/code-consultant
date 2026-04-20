import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServiceCard } from "./ServiceCard";

describe("ServiceCard", () => {
  it("renders title and description", () => {
    render(
      <ServiceCard title="Code Audit" description="One-shot review" bullets={["a", "b", "c"]} />,
    );
    expect(screen.getByRole("heading", { name: "Code Audit" })).toBeInTheDocument();
    expect(screen.getByText("One-shot review")).toBeInTheDocument();
  });

  it("renders every bullet", () => {
    render(<ServiceCard title="x" description="y" bullets={["alpha", "beta", "gamma"]} />);
    expect(screen.getByText("alpha")).toBeInTheDocument();
    expect(screen.getByText("beta")).toBeInTheDocument();
    expect(screen.getByText("gamma")).toBeInTheDocument();
  });

  it("renders a CTA link when ctaHref is given", () => {
    render(
      <ServiceCard title="x" description="y" bullets={[]} ctaHref="#book" ctaLabel="Book now" />,
    );
    expect(screen.getByRole("link", { name: "Book now" })).toHaveAttribute("href", "#book");
  });

  it("omits the CTA when ctaHref is not given", () => {
    render(<ServiceCard title="x" description="y" bullets={[]} />);
    expect(screen.queryByRole("link")).toBeNull();
  });
});
