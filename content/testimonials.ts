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
      "Our Lighthouse score went from the 60s to the 90s after Aaron's audit. The report was specific, actionable, and didn't waste a word.",
    name: "Indie founder",
    position: "Solo operator, Next.js app",
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
