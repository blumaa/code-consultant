export type Service = {
  title: string;
  description: string;
  bullets: string[];
  price?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export const services: Service[] = [
  {
    title: "Code Audit",
    description:
      "I read your codebase carefully and write you a prioritized report: bugs, performance, security, UX, design system, architecture. Every finding ships with a fix recipe.",
    price: "negotiable",
    bullets: [
      "Written report with severity ratings",
      "Fix recipes for every finding",
      "Prioritized issue list mapped to impact",
      "One follow-up call to plan the fixes",
    ],
    ctaHref: "#book",
    ctaLabel: "Schedule an audit",
  },
  {
    title: "Ongoing Retainer",
    description:
      "A monthly engagement for teams who want a steady pair of senior eyes on their codebase without hiring full-time.",
    price: "negotiable",
    bullets: [
      "Recurring audits as new code ships",
      "Async Slack / Discord support",
      "Quarterly architecture reviews",
    ],
    ctaHref: "#book",
    ctaLabel: "Discuss a retainer",
  },
];
