import { test, expect } from '@playwright/test';
import Env from "../utils/env";

test.describe("TC001 - Verify key press with 'SPACE'", () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test
      await page.goto(Env.test);

    });

    test('Test for press a key and see the input', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/key_presses');

        await page.locator('#target').click();
        await page.locator('#target').press('Space');

        //Assert the result
        await expect(page.locator('#result')).toContainText('You entered: SPACE');

        // Save the screenshot
        await page.screenshot({
            path: `./screenshots/screenshot-press-space${Date.now()}.png`,
        });
    
    });

});

