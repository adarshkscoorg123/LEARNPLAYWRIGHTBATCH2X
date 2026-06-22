import { test, expect } from '@playwright/test';

// page - Inbuilt fixture is automatically given to you, 
// which are the functions you can directly use in Playwright. 

test("Verify that the title will be TTA Cart", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");
  await page.waitForTimeout(2000);
});

// Note: Run button is used to run the tests in headless mode(without UI)
// Note_2: to run the tests in headed mode in "Terminal" : npx playwright test tests/example.spec.ts --headed
