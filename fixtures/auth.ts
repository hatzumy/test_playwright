// Modules importation
import type { Page, Locator } from "@playwright/test";

export class AuthPage {
  private readonly inputEmail: Locator;
  private readonly inputPassword: Locator;
  private readonly buttonLogin: Locator;

  constructor(public readonly page: Page) {
    this.inputEmail = this.page.locator('[data-test="email"]');
    this.inputPassword = this.page.locator('[data-test="password"]');
    this.buttonLogin = this.page.locator('[data-test="login-submit"]');
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/auth/login");
  }

  async login() {
    await this.inputEmail.pressSequentially("emailtest2@mail.com", {
      delay: 100,
    });
    await this.inputPassword.pressSequentially("AStrongPassword*69.");
    await this.buttonLogin.click();
  }
}
