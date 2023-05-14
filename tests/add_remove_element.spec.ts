import { test, expect } from '@playwright/test';
import Env from "../utils/env";

test.describe("TC001 - Add an element", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });


    test('Test for adding an element and verify', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        expect(page.url()).toBe("https://the-internet.herokuapp.com/add_remove_elements/");

        //click on button 'Add Element'
        await page.getByRole('button', { name: 'Add Element' }).click();
        //verify whether the button element 'Delete' is added
        await expect(page.locator('div#elements')).toContainText('Delete');

        await page.screenshot({
            path: `./screenshots/screenshot-element_added${Date.now()}.png`,
          });

    });
});

test.describe("TC002 - Remove added element", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });


    test('Test for adding an element, remove it and verify', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        expect(page.url()).toBe("https://the-internet.herokuapp.com/add_remove_elements/");

        //click on button 'Add Element'
        await page.getByRole('button', { name: 'Add Element' }).click();
        //verify whether the button element 'Delete' is added
        await expect(page.locator('div#elements')).toContainText('Delete');
        //click on button 'Delete'
        await page.locator('div#elements').click();
        //verify whether the button element 'Delete' is removed
        const locator = await page.locator('div#elements').isVisible();
        expect(locator).toBeTruthy();

        await page.screenshot({
            path: `./screenshots/screenshot-element_removed${Date.now()}.png`,
          });

    });
});