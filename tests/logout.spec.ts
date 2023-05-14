import { test, expect } from "@playwright/test";
// Importing pages required for test script.
import LoginPage from "../pages/login.page";
import LogoutPage from "../pages/logout.page";
import Env from "../utils/env";
import * as data from "../data/login.mock.json";

test.describe("TC001 - Form Authentication - Successfully Logout", () => {
  // my pages
  let login: LoginPage;
  let logout: LogoutPage;

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(Env.test);
    login = new LoginPage(page);
    logout = new LogoutPage(page);
    
  });

  test("Test logout after successfully login", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await login.login(data.username, data.pass);
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/secure");
    await logout.clickLogoutBtn();
    await expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
    
    await expect(page.locator('div#flash')).toContainText('You logged out of the secure area!')
    
    await page.screenshot({
      path: `./media/screenshots/screenshot-successful-logout${Date.now()}.png`,
    });
  });
});