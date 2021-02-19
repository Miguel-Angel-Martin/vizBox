import { browser, element, by, $, ElementFinder } from 'protractor';
import { BasePage } from './base-page.po';
import { waitElementPresent } from './test-util';

export class IntroPage extends BasePage {
  get addPetButton(): ElementFinder {
    return element(by.id('add-button'));
  }

  get newPetDialog(): ElementFinder {
    return element(by.css('avl-dialog.petDialog'));
  }

  get newPetNameInput(): ElementFinder {
    return this.newPetDialog.element(by.css('avl-dialog-content form avl-textfield[name="name"]'));
  }

  get newPetUploadControl(): ElementFinder {
    return this.newPetDialog.element(by.css('avl-dialog-content form avl-upload'));
  }

  get petNativeUploadInput(): ElementFinder {
    return this.newPetUploadControl.element(by.shadow('::sr #fileInput'));
  }

  get newPetSaveButton(): ElementFinder {
    return this.newPetDialog.element(by.css('avl-dialog-footer #save-button'));
  }

  get petDetail(): ElementFinder {
    return element(by.css('viz-pet-detail'));
  }

  get petDetailHeading(): ElementFinder {
    return this.petDetail.element(by.css('avl-card h1'));
  }

  get petDetailPhotoFirst(): ElementFinder {
    return this.petDetail.all(by.css('avl-card img')).first();
  }

  async navigateTo() {
    await browser.get('/intro');
  }

  async addNewPet(petName: string) {
    await this.addPetButton.click();
    await this.newPetNameInput.sendKeys(petName);
    await this.newPetSaveButton.click();
  }

  async waitForPetsStore(): Promise<void> {
    await waitElementPresent('viz-pets');
  }
}
