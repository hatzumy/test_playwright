// Modules importation
import { test, expect } from "@playwright/test";
// Page Object importation
import { RegisterPage } from "../fixtures/register";

test("registration", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
  await registerPage.register();
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});
