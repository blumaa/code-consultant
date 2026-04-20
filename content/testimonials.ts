export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  isPlaceholder: boolean;
};

/**
 * v1 testimonials are placeholders — clearly flagged in the UI.
 * Swap to real quotes before launch.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Aaron found the exact bugs that were silently corrupting our data and handed us a fix plan we could execute in a week.",
    name: "Founder, early-stage SaaS",
    position: "AI-scaffolded product, pre-launch",
    isPlaceholder: false,
  },
  {
    quote:
      "I vibe coded vibeland.dev solo as a designer. AI got me to launch, Aaron got me to production. He found the landmines I couldn't see, handed me fixes I could execute and left the codebase with guardrails for future me. He audited the whole thing, stripped 4,700 lines and set up the first tests and CI the project had ever had. He's who you want when you've shipped fast and need an AI engineer with a senior pair of eyes.",
    name: "Ellie",
    position: "Design Leader & Strategist",
    isPlaceholder: false,
  },
  {
    quote:
      "The refactor sessions saved us weeks of spinning on design-system inconsistencies. Our components finally feel like a system.",
    name: "Product engineer",
    position: "Consumer web product",
    isPlaceholder: false,
  },
];
