import { test, expect } from "@playwright/test";

test("it loads", async ({ page }) => {
  const res = await page.goto(process.env.ENVIRONMENT_URL || "/");
  expect(res?.status()).toBeLessThan(400);
});

test("intro is showing", async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL || "/");
  // await page.screenshot({ path: "test-results/screenshot.jpg" });
  const hero = page.getByTestId("hero-intro");
  await expect(hero).toBeVisible();

  const last = page.getByText("Welcome");
  await expect(last).toBeHidden();

  // const first = page.getByText("rm -rf");
  // await expect(first).toBeVisible({ timeout: 10_000 });
});

test("skills section is loaded", async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL || "/");

  await page.getByTestId("sect-2").scrollIntoViewIfNeeded();

  const title = page.getByText("skills");
  await expect(title).toHaveCSS("opacity", "0");

  // Should appear after 1 second
  await expect(title).not.toHaveCSS("opacity", "0");
});

test("education section is loaded", async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL || "/");

  await page.getByTestId("sect-3").scrollIntoViewIfNeeded();

  // await page.screenshot({ path: "test-results/screenshot.jpg" });
  const title = page.getByText("education");
  await expect(title).toHaveCSS("opacity", "0");

  await expect(title).not.toHaveCSS("opacity", "0");
});

test("projects section is loaded", async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL || "/");

  await page.getByTestId("sect-4").scrollIntoViewIfNeeded();

  // await page.screenshot({ path: "test-results/screenshot.jpg" });
  const title = page.getByText("projects");
  await expect(title).toHaveCSS("opacity", "0");

  // Should appear after 1 second
  await expect(title).not.toHaveCSS("opacity", "0");

  await expect(
    page.locator(".grid > div").filter({ hasText: /\w+/ }),
  ).toHaveCount(11);
});
