import { Page, Locator } from "@playwright/test";

export default class LogoutPage {
  // Creating page and locators
  readonly page: Page;
  readonly getLogoutBtn: Locator;

  // Initializing page instances that are received through test scripts
  constructor(page: Page) {
    this.page = page;
    this.getLogoutBtn = page.locator("a[href='/logout']");
  }

  // Returning page elements
  eleLogoutBtn = async () => await this.getLogoutBtn;

  // Returning page functions

  // Function to logout
  public async clickLogoutBtn() {
    const ele = await this.eleLogoutBtn();
    await ele?.click();
  }
}