import { test, expect } from '@playwright/test';
import Env from "../utils/env";

test.describe('TC001 - Validate JS alert text and proceed', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('Test for validating JS alert text and click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Alert');
            await dialog.accept()
        })
        await page.locator('text=Click for JS Alert').click();
        //Assert the result
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    });
});    

test.describe('TC002 - Validate confirm text and proceed', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('Test for validating confirm text and click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm');
            await dialog.accept();
        })
        await page.locator('text=Click for JS Confirm').click();
        //Assert the result
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });

    test('Test for validating confirm text and click Cancel', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm');
            await dialog.dismiss();
        })
        await page.locator('text=Click for JS Confirm').click();
        //Assert result
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    });
});    

test.describe('TC003 - Input text in prompt and proceed', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('Test for input text in prompt, click OK and validate input text', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toEqual('I am a JS prompt');
            await dialog.accept('Testersdock');
        })
        await page.locator('text=Click for JS Prompt').click();
        //Assert the result
        await expect(page.locator('#result')).toHaveText('You entered: Testersdock');
    });
});  
    

    


