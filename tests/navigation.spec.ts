import { test, expect } from '@playwright/test'

test('navbar navigation works', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /projects/i }).click()
  await expect(page).toHaveURL(/projects/)
})
