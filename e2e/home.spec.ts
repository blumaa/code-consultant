import { expect, test } from "@playwright/test";

const SECTION_IDS = ["top", "audits", "process", "services", "work", "testimonials", "book"];
const NAV_ANCHORS = ["audits", "process", "services", "work", "book"];

test.describe("home page", () => {
  test("renders all nine expected sections (top, 6 content sections, book)", async ({ page }) => {
    await page.goto("/");
    for (const id of SECTION_IDS) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("nav anchors point at the correct section ids", async ({ page }) => {
    await page.goto("/");
    for (const id of NAV_ANCHORS) {
      const link = page.getByRole("navigation", { name: /primary/i }).getByRole("link", {
        name: new RegExp(`^${id}$`, "i"),
      });
      await expect(link).toHaveAttribute("href", `#${id}`);
    }
  });

  test("hero CTAs link to #book and #audits", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /book a call/i }).first()).toHaveAttribute(
      "href",
      "#book",
    );
    await expect(page.getByRole("link", { name: /what i audit/i })).toHaveAttribute(
      "href",
      "#audits",
    );
  });

  test("calendly iframe is present in the book section", async ({ page }) => {
    await page.goto("/");
    const iframe = page.locator("#book iframe");
    await expect(iframe).toBeAttached();
    const src = await iframe.getAttribute("src");
    expect(src).toContain("calendly.com");
  });

  test("footer renders social + copyright", async ({ page }) => {
    await page.goto("/");
    const year = new Date().getFullYear();
    await expect(page.getByText(new RegExp(String(year)))).toBeVisible();
    await expect(page.getByRole("link", { name: /github/i }).last()).toBeVisible();
  });
});
