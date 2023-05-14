import { test, expect } from '@playwright/test';
import Env from "../utils/env";

test.describe("TC001 - Verify default view of checkboxes", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });

    test('Test that the checkboxes are visible on the webpage', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    //Assert that the checkboxes are visible on the webpage
    await expect(page.locator('#checkboxes')).toBeVisible()

    //Assert checkbox1 is un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    //Assert checkbox2 is checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    // Save the screenshot
    await page.screenshot({
        path: `./screenshots/screenshot-checkboxes-default-view${Date.now()}.png`,
      });
    
    });

});

test.describe("TC002 - Verify checking both checkboxes", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });

    test('Test the status of checkboxes after changes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    //Assert that the checkboxes are visible on the webpage
    await expect(page.locator('#checkboxes')).toBeVisible()

    //Assert checkbox1 is un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    //Assert checkbox2 is checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    //Check checkbox 1
    await page.check('input[type=checkbox]:nth-child(1)')

    //Assert checkbox1 is now checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy()

    // Save the screenshot
    await page.screenshot({
        path: `./screenshots/screenshot-checkboxes-checked${Date.now()}.png`,
      });
    
    });

});

test.describe("TC003 - Verify un-checking both checkboxes", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });

    test('Test the status of checkboxes after changes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    //Assert that the checkboxes are visible on the webpage
    await expect(page.locator('#checkboxes')).toBeVisible()

    //Assert checkbox1 is un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    //Assert checkbox2 is checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()

    //Un-check checkbox 2
    await page.uncheck('input[type=checkbox]:nth-child(3)')

    //Assert checkbox1 is now un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    //Assert checkbox2 is now un-checked
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeFalsy()

    // Save the screenshot
    await page.screenshot({
        path: `./screenshots/screenshot-checkboxes-unchecked${Date.now()}.png`,
      });
    
    });

});
