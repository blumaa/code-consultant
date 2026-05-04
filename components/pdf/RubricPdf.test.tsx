import { renderToBuffer } from "@react-pdf/renderer";
import { describe, expect, it } from "vitest";
import { rubrics } from "@/content/rubrics";
import { RubricPdf } from "./RubricPdf";

describe("RubricPdf", () => {
  it.each(rubrics.map((r) => [r.slug, r]))(
    "renders %s as a valid PDF buffer",
    async (_slug, rubric) => {
      const buffer = await renderToBuffer(<RubricPdf rubric={rubric} />);
      expect(buffer.byteLength).toBeGreaterThan(0);
      const header = new TextDecoder().decode(buffer.subarray(0, 5));
      expect(header).toBe("%PDF-");
    },
    30_000,
  );
});
