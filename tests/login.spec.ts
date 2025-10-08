
import { test, expect } from '@playwright/test';
import { AuthPage } from '../fixtures/auth';


test('url validation', async ({page})=> {
  await page.goto('https://courses.ultimateqa.com/users/sign_in');
  await expect(page).toHaveURL(/ultimateqa/);
});

test('login', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.goto();
  await authPage.login();
  await expect(page.locator('#notice').getByText('Invalid email or password.')).toBeVisible();
});
