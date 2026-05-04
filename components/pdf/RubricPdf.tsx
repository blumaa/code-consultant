import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { Rubric } from "@/content/rubrics";
import { LEVEL_COLORS, PDF_THEME } from "@/lib/pdfColors";

const LABEL_WIDTH = 100;

const s = StyleSheet.create({
  page: {
    backgroundColor: PDF_THEME.pageBg,
    padding: 32,
    fontFamily: "Helvetica",
  },
  card: {
    backgroundColor: PDF_THEME.cardBg,
    border: `1px solid ${PDF_THEME.border}`,
    borderRadius: 12,
    padding: 28,
  },
  title: {
    textAlign: "center",
    color: PDF_THEME.textPrimary,
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: PDF_THEME.headerBg,
    borderRadius: 6,
    marginBottom: 2,
  },
  headerLabel: {
    width: LABEL_WIDTH,
    padding: "8px 10px",
    fontSize: 9,
    fontWeight: 700,
    color: PDF_THEME.textMuted,
    textTransform: "uppercase",
  },
  headerCell: {
    flex: 1,
    padding: "8px 6px",
    alignItems: "center",
  },
  pill: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 10,
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    borderBottom: `1px solid ${PDF_THEME.border}`,
  },
  labelCell: {
    width: LABEL_WIDTH,
    padding: "12px 10px",
    fontSize: 11,
    fontWeight: 700,
    color: PDF_THEME.textPrimary,
  },
  cell: {
    flex: 1,
    padding: "12px 8px",
    fontSize: 8,
    color: PDF_THEME.textMuted,
    lineHeight: 1.5,
    borderLeftWidth: 3,
  },
  watermark: {
    textAlign: "right",
    color: PDF_THEME.watermark,
    fontSize: 11,
    fontWeight: 700,
    marginTop: 16,
  },
});

type Props = {
  rubric: Rubric;
};

export function RubricPdf({ rubric }: Props) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={s.page}>
        <View style={s.card}>
          <Text style={s.title}>{rubric.title}</Text>

          <View style={s.headerRow}>
            <Text style={s.headerLabel}>Criterion</Text>
            {([1, 2, 3, 4, 5] as const).map((level) => (
              <View key={level} style={s.headerCell}>
                <Text
                  style={[
                    s.pill,
                    {
                      backgroundColor: LEVEL_COLORS[level].pill,
                      color: LEVEL_COLORS[level].text,
                    },
                  ]}
                >
                  {level}
                </Text>
              </View>
            ))}
          </View>

          {rubric.criteria.map((criterion) => (
            <View key={criterion.label} style={s.row}>
              <Text style={s.labelCell}>{criterion.label}</Text>
              {criterion.levels.map((lvl) => (
                <Text
                  key={lvl.level}
                  style={[
                    s.cell,
                    {
                      borderLeftColor: LEVEL_COLORS[lvl.level].border,
                      backgroundColor: LEVEL_COLORS[lvl.level].bg,
                    },
                  ]}
                >
                  {lvl.description}
                </Text>
              ))}
            </View>
          ))}

          <Text style={s.watermark}>Code Consultant</Text>
        </View>
      </Page>
    </Document>
  );
}
