import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { themeScript } from "@/lib/themeScript";
import "@/styles/globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeconsultant.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Code Consultant — audits for vibe-coded apps",
    template: "%s · Code Consultant",
  },
  description:
    "Senior frontend engineer auditing vibe-coded projects for bugs, performance, security, UX, and design-system drift. Book a call.",
  keywords: [
    "code audit",
    "vibe coding",
    "AI-assisted development",
    "code review",
    "frontend consulting",
    "design systems",
    "performance",
    "security audit",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Aaron Blum" }],
  creator: "Aaron Blum",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Code Consultant — audits for vibe-coded apps",
    description:
      "Senior frontend engineer auditing vibe-coded projects for bugs, performance, security, UX, and design-system drift.",
    siteName: "Code Consultant",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Consultant — audits for vibe-coded apps",
    description:
      "Senior frontend engineer auditing vibe-coded projects for bugs, performance, security, UX, and design-system drift.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: no-flash theme bootstrap */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
