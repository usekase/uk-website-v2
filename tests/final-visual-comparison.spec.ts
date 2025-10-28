import { test } from '@playwright/test';

test('Final visual comparison - before and after hover', async ({ page }) => {
  await page.goto('/demos/button-test');
  await page.waitForLoadState('networkidle');

  // Primary button comparison
  const primaryButton = page.getByTestId('btn-primary-default');
  await primaryButton.scrollIntoViewIfNeeded();

  // Before hover - capture with context
  await page.screenshot({
    path: 'test-results/final-primary-before.png',
    clip: { x: 40, y: 180, width: 600, height: 180 }
  });

  // During hover - show corners
  await primaryButton.hover();
  await page.waitForTimeout(250);
  await page.screenshot({
    path: 'test-results/final-primary-hover.png',
    clip: { x: 40, y: 180, width: 600, height: 180 }
  });

  // Secondary button comparison
  const secondaryButton = page.getByTestId('btn-secondary-default');
  await secondaryButton.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0); // Move away
  await page.waitForTimeout(250);

  // Before hover
  await page.screenshot({
    path: 'test-results/final-secondary-before.png',
    clip: { x: 40, y: 580, width: 600, height: 180 }
  });

  // During hover
  await secondaryButton.hover();
  await page.waitForTimeout(250);
  await page.screenshot({
    path: 'test-results/final-secondary-hover.png',
    clip: { x: 40, y: 580, width: 600, height: 180 }
  });

  // Large button closeup to show corners clearly
  const largeButton = page.getByTestId('btn-primary-lg');
  await largeButton.scrollIntoViewIfNeeded();
  await largeButton.hover();
  await page.waitForTimeout(250);

  const box = await largeButton.boundingBox();
  if (box) {
    await page.screenshot({
      path: 'test-results/final-large-button-corners.png',
      clip: {
        x: box.x - 10,
        y: box.y - 10,
        width: box.width + 20,
        height: box.height + 20
      }
    });
  }
});
