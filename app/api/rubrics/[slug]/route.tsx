import { renderToBuffer } from "@react-pdf/renderer";
import { RubricPdf } from "@/components/pdf/RubricPdf";
import { rubrics } from "@/content/rubrics";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rubric = rubrics.find((r) => r.slug === slug);

  if (!rubric) {
    return new Response("Rubric not found", { status: 404 });
  }

  const buffer = await renderToBuffer(<RubricPdf rubric={rubric} />);

  return new Response(buffer.buffer as ArrayBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slug}-rubric.pdf"`,
    },
  });
}
