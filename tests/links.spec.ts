import { test, expect } from '@playwright/test'

test('github link exists and is valid', async ({ page }) => {
  await page.goto('/')

  const github = page.getByRole('link', { name: /github/i }).first()
  await expect(github).toHaveAttribute('href', /github\.com/)
})

test('external links open in new tab', async ({ page }) => {
  await page.goto('/')

  const github = page.getByRole('link', { name: /github/i }).first()
  await expect(github).toHaveAttribute('target', '_blank')
})
