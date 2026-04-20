import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WorkCard } from "./WorkCard";

describe("WorkCard", () => {
  it("renders title, description, and external link to href", () => {
    render(
      <WorkCard
        title="vibeland.dev"
        description="Directory for AI-built tools"
        href="https://vibeland.dev"
        tags={["Next.js"]}
      />,
    );
    expect(screen.getByRole("heading", { name: "vibeland.dev" })).toBeInTheDocument();
    expect(screen.getByText("Directory for AI-built tools")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /visit vibeland/i });
    expect(link).toHaveAttribute("href", "https://vibeland.dev");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders every tag", () => {
    render(
      <WorkCard
        title="x"
        description="y"
        href="https://x.com"
        tags={["React", "TypeScript", "GSAP"]}
      />,
    );
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("GSAP")).toBeInTheDocument();
  });
});
