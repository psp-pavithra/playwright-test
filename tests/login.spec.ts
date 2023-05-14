import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

// Importing pages required for test script
import LoginPage from "../pages/login.page";
import Env from "../utils/env";
import * as data from "../data/login.mock.json";

test.describe("TC001 - Form Authentication - Successfully Login", () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test
    await page.goto(Env.test);
    login = new LoginPage(page);
  });

  test("Test login with valid credentials", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await login.enterUsername(data.username);
    await login.enterPassword(data.pass);
    await login.clickLoginBtn();

    await expect(page.locator('div#flash')).toContainText('You logged into a secure area!')
    await page.screenshot({
      path: `./screenshots/screenshot-successful-login${Date.now()}.png`,
    });
  });
});


test.describe("TC002 - Form Authentication - Failed Login with invalid password", () => {
    let login: LoginPage;
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);
      login = new LoginPage(page);
    });
  
    test("Test login with invalid password", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/login");
        await login.enterUsername(data.username);
        await login.enterPassword("invalid password");
        await login.clickLoginBtn();
    
        await expect(page.locator('div#flash')).toContainText(' Your password is invalid!')
        await page.screenshot({
            path: `./screenshots/screenshot-failed-login-invalid-password${Date.now()}.png`,
        });
    });
  });

  test.describe("TC003 - Form Authentication - Failed Login with invalid username", () => {
    let login: LoginPage;
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);
      login = new LoginPage(page);
    });
  
    test("Test login with invalid username", async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/login");
        await login.enterUsername("Invalid username");
        await login.enterPassword(data.pass);
        await login.clickLoginBtn();
  
        await expect(page.locator('div#flash')).toContainText(' Your username is invalid!')
        await page.screenshot({
            path: `./screenshots/screenshot-failed-login-invalid-username${Date.now()}.png`,
        });
        });
  });