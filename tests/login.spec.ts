
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://courses.ultimateqa.com/users/sign_in');
  await page.getByRole('textbox', { name: 'Email' }).pressSequentially('test@yopmail.com', {delay: 100});
  await page.getByRole('textbox', { name: 'Password' }).pressSequentially('1234');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.locator('#notice').getByText('Invalid email or password.')).toBeVisible();
});
