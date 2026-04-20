import type { IconName } from "@/components/atoms/Icon";

export type Audit = {
  icon: IconName;
  title: string;
  description: string;
};

export const audits: Audit[] = [
  {
    icon: "bug",
    title: "Bugs & correctness",
    description:
      "Logic errors, race conditions, stale state, and the edge cases your happy-path testing missed.",
  },
  {
    icon: "bolt",
    title: "Performance",
    description:
      "Bundle bloat, wasted re-renders, missing caching, slow data fetching, and Core Web Vitals regressions.",
  },
  {
    icon: "shield",
    title: "Security",
    description:
      "XSS, exposed secrets, weak auth, unsafe deps, and OWASP top-10 issues specific to AI-scaffolded code.",
  },
  {
    icon: "eye",
    title: "UX & accessibility",
    description:
      "Confusing flows, keyboard traps, missing labels, contrast failures, and loading states that never resolve.",
  },
  {
    icon: "grid",
    title: "Design system",
    description:
      "Token drift, one-off styles, duplicate components, and inconsistent spacing that makes your app feel off.",
  },
  {
    icon: "sparkle",
    title: "DRY, SOLID, SSOT, KISS",
    description:
      "Duplicated logic, tangled responsibilities, scattered sources of truth, and premature abstractions.",
  },
];
