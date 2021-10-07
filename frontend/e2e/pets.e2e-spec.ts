import { browser, by, ElementFinder } from 'protractor';
import { IntroPage } from './intro.po';
import { KeycloakLoginPage } from './keycloak-login.po';
import * as path from 'path';
import { protractor } from 'protractor/built/ptor';
import { waitElementPresent, waitElementVisible } from './test-util';

describe('Pets', () => {
  const page = new IntroPage;
  const keycloakLoginPage = new KeycloakLoginPage;

  async function addNewPetWithPhoto(name: string) {
    const filePath: string = path.resolve(__dirname, './files/turtle1.jpg');

    await page.addPetButton.click();
    await page.newPetNameInput.sendKeys(name);

    await page.petNativeUploadInput.sendKeys(filePath);

    await page.newPetSaveButton.click();
  }

  it('should be able to add new pet with photo', async () => {
    await browser.restart();
    await page.waitForAngular(false);

    await page.navigateTo();

    await keycloakLoginPage.fillLoginForm();
    await keycloakLoginPage.submitLoginForm();

    await page.waitForAngular(true);

    await page.waitForPetsStore();

    const petName = 'new pet';
    await addNewPetWithPhoto(petName);

    await waitElementVisible(page.petDetailHeading);
    const petDetailHeadingText = await page.petDetailHeading.getText();
    await waitElementVisible(page.petDetailPhotoFirst);
    const petDetailPhotoSrc = await page.petDetailPhotoFirst.getAttribute('src');

    expect(petDetailPhotoSrc).toBeDefined();
    expect(petDetailPhotoSrc).toContain('blob:');
    expect(petDetailHeadingText).toEqual(petName);
  });
});