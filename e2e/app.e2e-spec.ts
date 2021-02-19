import { MyAppPage } from './app.po';

describe('viz-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display message saying "Welcome to StarterKit"', async () => {
    await page.navigateTo();
    expect(await page.getHeadingText()).toEqual('Welcome to StarterKit');
  });
});
