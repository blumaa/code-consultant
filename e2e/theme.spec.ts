import { expect, test } from "@playwright/test";

test.describe("theme toggle", () => {
  test("flips data-theme between light and dark", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    const initial = await html.getAttribute("data-theme");
    expect(["light", "dark"]).toContain(initial);

    await page.getByRole("button", { name: /toggle theme/i }).click();

    const flipped = initial === "dark" ? "light" : "dark";
    await expect(html).toHaveAttribute("data-theme", flipped);
  });

  test("persists across reload", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");

    await page.getByRole("button", { name: /toggle theme/i }).click();
    const chosen = await html.getAttribute("data-theme");

    await page.reload();
    await expect(html).toHaveAttribute("data-theme", chosen ?? "");
  });
});
