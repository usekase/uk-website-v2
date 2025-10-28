import { test, expect } from '@playwright/test';

/**
 * Example test for visual UI checking
 * This demonstrates how to use Playwright for component visual testing
 */

test.describe('Usekase Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Take a screenshot
    await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });

    // Basic assertions
    await expect(page).toHaveTitle(/Usekase/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check if hero section is visible
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Take a screenshot of the hero section
    await hero.screenshot({ path: 'screenshots/hero-section.png' });
  });
});

test.describe('Component Visual Tests', () => {
  test('button component variations', async ({ page }) => {
    // Navigate to examples page if you have one, or create a test page
    await page.goto('/shadcn-examples');
    await page.waitForLoadState('networkidle');

    // Take screenshots of different button states
    await page.screenshot({ path: 'screenshots/components-page.png', fullPage: true });
  });
});
