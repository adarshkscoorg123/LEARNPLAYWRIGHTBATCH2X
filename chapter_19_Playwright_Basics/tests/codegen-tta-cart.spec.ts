
// // The below tests is used to verify the TTA site if invalid username and invalid password are used

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abc');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('abcbcb');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();
});