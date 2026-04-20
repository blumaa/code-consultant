import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { work } from "@/content/work";
import { WorkList } from "./WorkList";

describe("WorkList", () => {
  it("renders a section with id=work", () => {
    const { container } = render(<WorkList />);
    expect(container.querySelector("#work")).not.toBeNull();
  });

  it("renders every work item from content/work", () => {
    render(<WorkList />);
    for (const w of work) {
      expect(screen.getByRole("heading", { name: w.title })).toBeInTheDocument();
    }
  });
});
