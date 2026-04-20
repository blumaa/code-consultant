import { describe, expect, it } from "vitest";
import { about } from "../about";
import { audits } from "../audits";
import { services } from "../services";
import { testimonials } from "../testimonials";
import { work } from "../work";

describe("content/audits", () => {
  it("exports a non-empty array", () => {
    expect(audits.length).toBeGreaterThan(0);
  });

  it("describes the six audit domains from the plan", () => {
    expect(audits).toHaveLength(6);
  });

  it("every audit has icon, title, description", () => {
    for (const audit of audits) {
      expect(audit.icon).toBeTruthy();
      expect(audit.title).toBeTruthy();
      expect(audit.description).toBeTruthy();
    }
  });
});

describe("content/services", () => {
  it("exports a non-empty array", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("every service has title, description, bullets", () => {
    for (const service of services) {
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(Array.isArray(service.bullets)).toBe(true);
    }
  });
});

describe("content/testimonials", () => {
  it("exports a non-empty array", () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });

  it("declares isPlaceholder as a boolean on every entry", () => {
    for (const t of testimonials) {
      expect(typeof t.isPlaceholder).toBe("boolean");
    }
  });

  it("every testimonial has quote, name, position", () => {
    for (const t of testimonials) {
      expect(t.quote).toBeTruthy();
      expect(t.name).toBeTruthy();
      expect(t.position).toBeTruthy();
    }
  });
});

describe("content/work", () => {
  it("exports a non-empty array", () => {
    expect(work.length).toBeGreaterThan(0);
  });

  it("includes vibeland.dev as the first case study", () => {
    expect(work[0].href).toContain("vibeland.dev");
  });

  it("every work item has title, description, href, tags", () => {
    for (const w of work) {
      expect(w.title).toBeTruthy();
      expect(w.description).toBeTruthy();
      expect(w.href).toMatch(/^https?:\/\//);
      expect(Array.isArray(w.tags)).toBe(true);
    }
  });
});

describe("content/about", () => {
  it("exports name, location, tagline, bio paragraphs, and social links", () => {
    expect(about.name).toBeTruthy();
    expect(about.location).toBeTruthy();
    expect(about.tagline).toBeTruthy();
    expect(Array.isArray(about.bio)).toBe(true);
    expect(about.bio.length).toBeGreaterThan(0);
    expect(about.email).toContain("@");
    expect(about.github).toMatch(/^https?:\/\//);
    expect(about.linkedin).toMatch(/^https?:\/\//);
  });
});
