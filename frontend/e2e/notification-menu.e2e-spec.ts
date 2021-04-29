import { NotificationMenu } from './notification-menu.po';
import { browser } from 'protractor';

describe('Notification menu', () => {
  const page = new NotificationMenu();

  it('should open and close notification menu on bell button click', async () => {
    await page.navigateTo();
    await page.waitForAngular(false);

    await page.bellIconClick();

    await page.waitForNotificationMenu();
    page.waitForAngular(true);

    const notificationMenuHeader = await page.notificationMenuHeader.getText();
    expect(notificationMenuHeader).toEqual('Notifications');

    const openProperty = await page.newPopupMenu.getAttribute('class');
    expect(openProperty).toEqual('open');

    await page.bellIconClick();

    const openPropertyAfterBellClick = await page.newPopupMenu.getAttribute('class');
    expect(openPropertyAfterBellClick).toEqual('close');
  });

  it('should close notification menu on click outside of it', async () => {
    await page.navigateTo();
    await page.waitForAngular(false);

    await page.bellIconClick();

    await page.waitForNotificationMenu();
    page.waitForAngular(true);

    const openProperty = await page.newPopupMenu.getAttribute('class');
    expect(openProperty).toEqual('open');

    await page.outsideNotificationMenuClick();

    const openPropertyAfterOutsideClick = await page.newPopupMenu.getAttribute('class');
    expect(openPropertyAfterOutsideClick).toEqual('close');
  });

  it('should open and close notification dialog', async () => {
    await page.navigateTo();

    await page.waitForAngular(false);

    await page.waitForNotificationMenu();
    await page.bellIconClick();

    await page.waitForAngular(true);
    await browser.sleep(100);

    await page.openNotificationDialog();

    const dialogOpen = await page.newDialog.getAttribute('class');
    expect(dialogOpen).toContain('opened');
    await browser.sleep(100);

    await page.closeIconClick();

    const dialogClosed = await page.newDialog.getAttribute('class');
    expect(dialogClosed).not.toContain('opened');
  });
});
