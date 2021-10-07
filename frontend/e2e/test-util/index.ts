import { $, browser, protractor, ElementFinder } from 'protractor';

const EC = protractor.ExpectedConditions;

export async function waitElementPresent(
  el: string | ElementFinder, timeout: number = 5000, errorMessage: string = undefined): Promise<void> {
  const element: ElementFinder = el instanceof ElementFinder ? el : $(el);
  if (!errorMessage) {
    errorMessage = `Element with selector '${(element.locator().value)}' still not present after ${timeout} ms`;
  }
  await browser.wait(EC.presenceOf(element), timeout, errorMessage);
}

export async function waitElementVisible(
  el: string | ElementFinder, timeout: number = 5000, errorMessage: string = undefined): Promise<void> {
  const element: ElementFinder = el instanceof ElementFinder ? el : $(el);
  if (!errorMessage) {
    errorMessage = `Element with selector '${element.locator().value}' still not visible after ${timeout} ms`;
  }
  await browser.wait(EC.visibilityOf(element), timeout, errorMessage);
}