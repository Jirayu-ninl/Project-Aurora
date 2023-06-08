import { test, expect } from '@playwright/test'

// You can override the default Playwright test timeout of 30s
// test.setTimeout(60_000);

test('Checkly Homepage', async ({ page }) => {
  const response = await page.goto('https://beta.theiceji.com')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/TheIceJi/)
  await page.screenshot({ path: 'homepage.jpg' })
})
