import { test } from '@playwright/test';

test('Verify hover behavior', async ({ page }) => {
  await page.goto('/demos/button-test');
  await page.waitForLoadState('networkidle');

  const button = page.getByTestId('btn-primary-default');

  // Scroll into view
  await button.scrollIntoViewIfNeeded();

  // Take screenshot BEFORE hover
  await page.screenshot({
    path: 'test-results/primary-before-hover.png',
    clip: { x: 50, y: 200, width: 500, height: 200 }
  });

  // Hover
  await button.hover();
  await page.waitForTimeout(300);

  // Take screenshot DURING hover
  await page.screenshot({
    path: 'test-results/primary-during-hover.png',
    clip: { x: 50, y: 200, width: 500, height: 200 }
  });

  // Check computed background color before and after
  const bgColorBefore = await page.evaluate(() => {
    const btn = document.querySelector('[data-testid="btn-primary-default"]');
    return window.getComputedStyle(btn!).backgroundColor;
  });

  await button.hover();
  await page.waitForTimeout(100);

  const bgColorDuring = await page.evaluate(() => {
    const btn = document.querySelector('[data-testid="btn-primary-default"]');
    return window.getComputedStyle(btn!).backgroundColor;
  });

  console.log('Background before hover:', bgColorBefore);
  console.log('Background during hover:', bgColorDuring);
});
