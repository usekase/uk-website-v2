import { test } from '@playwright/test';

test('case studies page screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173/case-studies');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Wait for animations
  await page.waitForTimeout(2000);

  // Scroll to trigger animations
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(1500);

  // Take full page screenshot
  await page.screenshot({ path: '/tmp/case-studies-complete.png', fullPage: true });
});
