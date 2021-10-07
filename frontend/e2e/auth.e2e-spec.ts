import { IntroPage } from './intro.po';
import { MyAppPage } from './app.po';
import { browser } from 'protractor';
import { KeycloakLoginPage } from './keycloak-login.po';
import { waitElementPresent } from './test-util';

describe('Auth flow', () => {
  const page = new IntroPage();
  const keycloakLoginPage = new KeycloakLoginPage();

  it('should be able to login from keycloak external url when navigating to intro page', async () => {
    await page.waitForAngular(false);

    await page.navigateTo();

    await keycloakLoginPage.fillLoginForm();
    await keycloakLoginPage.submitLoginForm();

    page.waitForAngular(true);

    await page.waitForPetsStore();
  });

  it('should be able to add new pet', async () => {
    const petName = 'new pet';
    await page.addNewPet(petName);

    const petDetailHeadingText = await page.petDetailHeading.getText();

    expect(petDetailHeadingText).toEqual(petName);
  });

  it('should be able to add new pet even with invalid access token (by using refresh token)', async () => {
    const petName = 'new pet';

    await browser.executeScript('window.sessionStorage.setItem("access_token", "invalid")');
    await page.addNewPet(petName);

    const petDetailHeadingText = await page.petDetailHeading.getText();

    expect(petDetailHeadingText).toEqual(petName);

  });

  it('should be able to login/logout via overflow menu item', async () => {
    await browser.restart();
    const appPage = new MyAppPage();
    await appPage.navigateTo();

    const pageUrl = await browser.getCurrentUrl();

    await appPage.clickAuthMenuItem();
    await appPage.waitForAngular(false);

    await keycloakLoginPage.fillLoginForm();
    await keycloakLoginPage.submitLoginForm();

    await appPage.waitForAngular(true);
    await browser.sleep(1000);

    await page.clickAuthMenuItem();

    await appPage.waitForAngular(false);

    const currentUrl = await browser.getCurrentUrl();

    expect(currentUrl).toEqual(pageUrl);
  });

  it('should be able to redirect to url with query parameters after login', async () => {
    await browser.restart();
    const appPage = new MyAppPage();
    const queryParams = '/?queryParam=324&queryParam=32456&queryParam2=31516';
    await appPage.navigateTo(queryParams);

    await appPage.clickAuthMenuItem();
    await appPage.waitForAngular(false);


    await keycloakLoginPage.fillLoginForm();
    await keycloakLoginPage.submitLoginForm();

    await appPage.waitForAngular(true);
    await browser.sleep(500);

    const url = await browser.getCurrentUrl();

    expect(url).toContain(queryParams);
  });
});