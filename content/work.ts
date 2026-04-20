export type Work = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const work: Work[] = [
  {
    title: "vibeland.dev",
    description:
      "Directory and showcase platform for indie builders publishing AI-built tools. Advised on architecture, performance, and design-system consistency.",
    href: "https://vibeland.dev",
    tags: ["Next.js", "TypeScript", "Design System"],
  },
];
