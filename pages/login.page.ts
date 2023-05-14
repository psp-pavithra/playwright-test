import { Page, Locator } from "@playwright/test";

export default class LoginPage {
  // Creating page and locators
  readonly page: Page;
  readonly getUsername: Locator;
  readonly getPassword: Locator;
  readonly getLoginBtn: Locator;

  // Initializing page instances that are received through test scripts
  constructor(page: Page) {
    this.page = page;
    this.getUsername = page.locator("input[name='username']");
    this.getPassword = page.locator("input[name='password']");
    this.getLoginBtn= page.locator("button[type='submit']");
  }

  // Returning page elements
  eleUsernameField = async () => await this.getUsername;

  elePasswordField = async () => await this.getPassword;

  eleLoginBtn = async () => await this.getLoginBtn;

  // Returning page functions

  // Function to fill username field
  public async enterUsername(name: string) {
    const ele = await this.eleUsernameField();
    if (ele != null) await ele.fill(name);
    else throw new Error("No element found");
  }

  // Function to fill password field
  public async enterPassword(pass: string) {
    const ele = await this.elePasswordField();
    await ele?.fill(pass);
  }

  // Fuction to click Login button
  public async clickLoginBtn() {
    const ele = await this.eleLoginBtn();
    await ele?.click();
  }

  // Function to login
  public async login(username: string, pass: string) {
    await this.enterUsername(username);
    await this.enterPassword(pass);
    await this.clickLoginBtn();
  }
}