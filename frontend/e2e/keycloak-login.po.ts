import { element, by, ElementFinder } from 'protractor';
import { waitElementPresent, waitElementVisible } from './test-util';

export class KeycloakLoginPage {
  get loginForm(): ElementFinder {
    return element(by.css('form'));
  }

  get usernameInput(): ElementFinder {
    return element(by.css('input[type="text"]'));
  }

  get passwordInput(): ElementFinder {
    return element(by.css('input[type="password"]'));
  }

  get loginButton(): ElementFinder {
    return element(by.css('input[type="submit"]'));
  }

  async fillLoginForm(): Promise<void> {
    await waitElementPresent(this.loginForm);
    await waitElementVisible(this.usernameInput);
    await waitElementVisible(this.passwordInput);
    await this.usernameInput.sendKeys('vizbox');
    await this.passwordInput.sendKeys('vizbox');
  }

  async submitLoginForm(): Promise<void> {
    await this.loginButton.click();
  }

}