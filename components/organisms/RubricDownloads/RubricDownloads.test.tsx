import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { rubrics } from "@/content/rubrics";
import { RubricDownloads } from "./RubricDownloads";

describe("RubricDownloads", () => {
  it("renders a section with a heading", () => {
    render(<RubricDownloads />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders 6 download links", () => {
    render(<RubricDownloads />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  it("each link points to the correct API route", () => {
    render(<RubricDownloads />);
    const links = screen.getAllByRole("link");
    for (let i = 0; i < rubrics.length; i++) {
      expect(links[i]).toHaveAttribute("href", `/api/rubrics/${rubrics[i].slug}`);
    }
  });

  it("displays each rubric title", () => {
    render(<RubricDownloads />);
    for (const rubric of rubrics) {
      expect(screen.getByText(rubric.title)).toBeInTheDocument();
    }
  });
});
