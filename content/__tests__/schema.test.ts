import { describe, expect, it } from "vitest";
import { about } from "../about";
import { audits } from "../audits";
import { rubrics } from "../rubrics";
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

describe("content/rubrics", () => {
  it("exports exactly 6 rubrics", () => {
    expect(rubrics).toHaveLength(6);
  });

  it("every slug is URL-safe", () => {
    for (const r of rubrics) {
      expect(r.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("no duplicate slugs", () => {
    const slugs = rubrics.map((r) => r.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every auditTitle matches an entry in audits", () => {
    const auditTitles = new Set(audits.map((a) => a.title));
    for (const r of rubrics) {
      expect(auditTitles.has(r.auditTitle)).toBe(true);
    }
  });

  it("every criterion has exactly 5 levels numbered 1–5", () => {
    for (const r of rubrics) {
      for (const c of r.criteria) {
        expect(c.levels).toHaveLength(5);
        expect(c.levels.map((l) => l.level)).toEqual([1, 2, 3, 4, 5]);
      }
    }
  });

  it("all level descriptions are non-empty strings", () => {
    for (const r of rubrics) {
      for (const c of r.criteria) {
        for (const l of c.levels) {
          expect(typeof l.description).toBe("string");
          expect(l.description.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("every rubric has at least 3 criteria", () => {
    for (const r of rubrics) {
      expect(r.criteria.length).toBeGreaterThanOrEqual(3);
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
