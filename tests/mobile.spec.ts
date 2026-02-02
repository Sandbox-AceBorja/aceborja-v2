import { test, expect } from '@playwright/test'

test('mobile layout works', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: /featured projects/i }),
  ).toBeVisible()
})
