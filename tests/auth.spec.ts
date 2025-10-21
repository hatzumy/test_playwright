// Modules importation
import { test, expect } from "@playwright/test";
// Page Object importation
import { AuthPage } from "../fixtures/auth";

test("url validation", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/login");
  await expect(page).toHaveURL(/practicesoftwaretesting/);
});

test("login", async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.goto();
  await authPage.login();
  await expect(page.locator('[data-test="page-title"]')).toBeVisible();
});
