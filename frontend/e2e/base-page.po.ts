import { element, by, $, ElementFinder, browser, protractor } from 'protractor';
import { waitElementPresent, waitElementVisible } from './test-util';

export abstract class BasePage {
  abstract navigateTo(): void;

  constructor() {
    by.addLocator('shadow', (cssSelector: string, parentElement?: any, rootSelector?: any) => {
      const selectors = cssSelector.split('::sr');
      if (selectors.length === 0) return [];

      const shadowDomInUse = ((<any>document.head).createShadowRoot != null || document.head.attachShadow != null);
      const getShadowRoot = (el: any) => (el && shadowDomInUse) ? el.shadowRoot : el;

      const findAllMatches = (selector: string, targets: any[], fistTry: boolean) => {
        let using;
        const matches = [];

        for (let i = 0; i < targets.length; ++i) {
          using = fistTry ? targets[i] : getShadowRoot(targets[i]);
          if (using) {
            if (selector === '') {
              matches.push(using);
            }
            else {
              Array.prototype.push.apply(matches, using.querySelectorAll(selector));
            }
          }
        }
        return matches;
      };

      let matches = findAllMatches(selectors.shift().trim(), [parentElement || document], true);
      while (selectors.length > 0 && matches.length > 0) {
        matches = findAllMatches(selectors.shift().trim(), matches, false);
      }
      return matches;
    });
  }

  get overflowMenuTrigger(): ElementFinder {
    return element(by.id('appBarMenu'));
  }

  get overflowMenuAuthItem(): ElementFinder {
    const authItem = this.overflowMenuTrigger.all(by.shadow('::sr avl-popup avl-overflow-group::sr div avl-overflow-group')).last();
    return authItem.all(by.shadow('::sr div avl-item')).last();
  }

  async clickAuthMenuItem(): Promise<any> {
    await waitElementPresent(this.overflowMenuTrigger);
    await this.overflowMenuTrigger.click();
    return await this.overflowMenuAuthItem.click();
  }

  async waitForAngular(doWait: boolean): Promise<any> {
    if(!doWait) {
      await browser.waitForAngularEnabled(doWait);
    } else {
      await browser.waitForAngular();
    }
  }
}