import { test } from '@playwright/test';

test('Capture button hover states', async ({ page }) => {
  await page.goto('/demos/button-test');
  await page.waitForLoadState('networkidle');

  // Capture primary button hover
  const primaryButton = page.getByTestId('btn-primary-default');
  await primaryButton.hover();
  await page.waitForTimeout(250); // Wait for transition
  await primaryButton.screenshot({ path: 'test-results/primary-hover.png' });

  // Capture secondary button hover
  const secondaryButton = page.getByTestId('btn-secondary-default');
  await secondaryButton.hover();
  await page.waitForTimeout(250);
  await secondaryButton.screenshot({ path: 'test-results/secondary-hover.png' });

  // Capture large primary button hover
  const largePrimary = page.getByTestId('btn-primary-lg');
  await largePrimary.hover();
  await page.waitForTimeout(250);
  await largePrimary.screenshot({ path: 'test-results/primary-large-hover.png' });

  // Capture small primary button hover
  const smallPrimary = page.getByTestId('btn-primary-sm');
  await smallPrimary.hover();
  await page.waitForTimeout(250);
  await smallPrimary.screenshot({ path: 'test-results/primary-small-hover.png' });

  // Capture the interactive section with hover
  const interactiveButton = page.getByTestId('btn-test-primary');
  await interactiveButton.scrollIntoViewIfNeeded();
  await interactiveButton.hover();
  await page.waitForTimeout(250);
  await page.screenshot({
    path: 'test-results/interactive-section-hover.png',
    clip: { x: 0, y: 0, width: 1280, height: 600 }
  });
});
