export type About = {
  name: string;
  location: string;
  tagline: string;
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  website: string;
  calendlyUrl: string;
};

export const about: About = {
  name: "Aaron Blum",
  location: "Berlin, DE",
  tagline: "I audit vibe-coded apps so they survive production.",
  bio: [
    "I'm a senior frontend engineer who sits in the overlap between design and engineering. I specialize in design systems, component libraries, and shipping AI-assisted code that's actually solid, tested, and accessible.",
    "Before code, I was an ESL teacher, musician, and community organizer. That background shapes how I approach audits: with empathy for your codebase, clarity in the report, and a focus on the humans who have to ship on top of what I review.",
    "I work with vibe-coders — solo founders and small teams who used AI to move fast and now want a senior pair of eyes to separate the wins from the landmines.",
  ],
  email: "blumaa@gmail.com",
  github: "https://github.com/blumaa",
  linkedin: "https://www.linkedin.com/in/aaron-blum-0904/",
  website: "https://aaronblum.pro",
  calendlyUrl: "https://calendly.com/blumaa",
};
