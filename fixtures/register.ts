// Modules importation
import type { Page, Locator } from "@playwright/test";

export class RegisterPage {
  private readonly registerButton: Locator;
  private readonly registerName: Locator;
  private readonly registerLastName: Locator;
  private readonly registerDob: Locator;
  private readonly registerStreet: Locator;
  private readonly registerPostalCode: Locator;
  private readonly registerCity: Locator;
  private readonly registerState: Locator;
  private readonly registerCountry: Locator;
  private readonly registerPhone: Locator;
  private readonly registerEmail: Locator;
  private readonly registerPassword: Locator;
  private readonly registerSubmit: Locator;

  constructor(public readonly page: Page) {
    this.registerButton = this.page.locator('[data-test="register-link"]');
    this.registerName = this.page.locator('[data-test="first-name"]');
    this.registerLastName = this.page.locator('[data-test="last-name"]');
    this.registerDob = this.page.locator('[data-test="dob"]');
    this.registerStreet = this.page.locator('[data-test="street"]');
    this.registerPostalCode = this.page.locator('[data-test="postal_code"]');
    this.registerCity = this.page.locator('[data-test="city"]');
    this.registerState = this.page.locator('[data-test="state"]');
    this.registerCountry = this.page.locator('[data-test="country"]');
    this.registerPhone = this.page.locator('[data-test="phone"]');
    this.registerEmail = this.page.locator('[data-test="email"]');
    this.registerPassword = this.page.locator('[data-test="password"]');
    this.registerSubmit = this.page.locator('[data-test="register-submit"]');
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/auth/login");
  }

  async register() {
    await this.registerButton.click();
    await this.registerName.pressSequentially("Carlos");
    await this.registerLastName.pressSequentially("Cleps");
    await this.registerDob.pressSequentially("1999-10-30");
    await this.registerStreet.pressSequentially("Cra");
    await this.registerPostalCode.pressSequentially("2500");
    await this.registerCity.pressSequentially("NYC");
    await this.registerState.pressSequentially("NYC");
    await this.registerCountry.selectOption("AR");
    await this.registerPhone.pressSequentially("3121212");
    await this.registerEmail.pressSequentially("emailtest2@mail.com");
    await this.registerPassword.pressSequentially("AStrongPassword*69.");
    await this.registerSubmit.click();
  }
}
