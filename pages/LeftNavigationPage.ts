import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage {
  readonly page: Page;
  readonly pimLink: Locator;
  readonly orangeHrmLogo: Locator;
  readonly leftNavigationPanel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimLink = page.getByRole("link", { name: "PIM" });
    this.orangeHrmLogo = page.getByRole("link", { name: "client brand banner" });
    this.leftNavigationPanel = page.locator(".oxd-sidepanel-body");
  }
  /* To Open Pim Module */
  async openPimModule() {
    await this.pimLink.click();
  }
}
