import { browser, element, by } from 'protractor';
import { BasePage } from './base-page.po';

export class MyAppPage extends BasePage {
  async navigateTo(url: string = '/') {
    await browser.get(url);
  }

  async getHeadingText(): Promise<string> {
    return element(by.css('h1.avl-container-start')).getText();
  }
}
