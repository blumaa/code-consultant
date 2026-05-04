import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DownloadLink } from "./DownloadLink";

describe("DownloadLink", () => {
  it("renders an anchor with the download attribute", () => {
    render(<DownloadLink href="/api/rubrics/perf" label="Download PDF" />);
    const link = screen.getByRole("link", { name: /download pdf/i });
    expect(link).toHaveAttribute("download");
  });

  it("points to the correct href", () => {
    render(<DownloadLink href="/api/rubrics/perf" label="Download PDF" />);
    const link = screen.getByRole("link", { name: /download pdf/i });
    expect(link).toHaveAttribute("href", "/api/rubrics/perf");
  });

  it("displays the label text", () => {
    render(<DownloadLink href="/test" label="Get rubric" />);
    expect(screen.getByText("Get rubric")).toBeInTheDocument();
  });

  it("renders the download icon", () => {
    const { container } = render(<DownloadLink href="/test" label="PDF" />);
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("uses a custom filename when provided", () => {
    render(<DownloadLink href="/test" label="PDF" fileName="rubric.pdf" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("download", "rubric.pdf");
  });
});
