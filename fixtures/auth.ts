
import type { Page, Locator } from '@playwright/test';

export class AuthPage {
    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly buttonLogin: Locator;

    constructor(public readonly page: Page) {
        this.inputEmail = this.page.getByRole('textbox', { name: 'Email' });
        this.inputPassword = this.page.getByRole('textbox', { name: 'Password' });
        this.buttonLogin = this.page.getByRole('button', { name: 'Sign in' });
    
    }

    async goto() {
        await this.page.goto('https://courses.ultimateqa.com/users/sign_in');
    }

    async login() {
        await this.inputEmail.pressSequentially('test@yopmail.com', {delay: 100});
        await this.inputPassword.pressSequentially('1234');
        await this.buttonLogin.click();
    }






}