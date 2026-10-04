import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL('/')
})

test('page title is correct', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Ace Borja/i)
})

// Skipped while <Projects /> is commented out in app/page.tsx
test.skip('projects section is visible', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', { name: /featured projects/i }),
  ).toBeVisible()
})
