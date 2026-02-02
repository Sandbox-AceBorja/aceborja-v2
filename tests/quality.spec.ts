import { test, expect } from '@playwright/test'

test('no console errors on load', async ({ page }) => {
  const errors: string[] = []

  page.on('pageerror', (error) => {
    errors.push(error.message)
  })

  await page.goto('/')
  expect(errors).toHaveLength(0)
})
