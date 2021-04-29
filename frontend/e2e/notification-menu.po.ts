import { browser, element, by, $, ElementFinder } from 'protractor';
import { BasePage } from './base-page.po';
import { waitElementPresent } from './test-util';

export class NotificationMenu extends BasePage {
  get newNotificationDialog(): ElementFinder {
    return element(by.css('avl-notification-dialog'));
  }

  get newPopupMenu(): ElementFinder {
    return element(by.css('avl-popup'));
  }

  get newDialog(): ElementFinder {
    return element(by.css('avl-dialog'));
  }

  get outsideOfTheNotificationMenu(): ElementFinder {
    return element(by.css('div.sideNavAndContent'));
  }

  get notificationMenuHeader(): ElementFinder {
    return element(by.css('avl-popup div#headerText'));
  }

  get dialogCloseButton(): ElementFinder {
    return element(by.css('avl-dialog avl-dialog-header .title-and-close avl-icon-button'));
  }

  get addBellButton(): ElementFinder {
    return element(by.id('bellIcon'));
  }

  get detailsButton(): ElementFinder {
      return element(by.css('avl-popup avl-button'));
  }

  async navigateTo() {
    await browser.get('/');
  }

  async bellIconClick() {
    await this.addBellButton.click();
  }

  async openNotificationDialog() {
    await this.detailsButton.click();
  }

  async outsideNotificationMenuClick() {
    await this.outsideOfTheNotificationMenu.click();
  }

  async closeIconClick() {
    await this.dialogCloseButton.click();
  }

  async waitForNotificationMenu(): Promise<void> {
    await waitElementPresent('viz-notifications');
  }
}
