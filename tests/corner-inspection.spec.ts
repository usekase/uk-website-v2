import { test } from '@playwright/test';

test('Inspect corner decorations', async ({ page }) => {
  await page.goto('/demos/button-test');
  await page.waitForLoadState('networkidle');

  const primaryButton = page.getByTestId('btn-primary-default');

  // Get the parent div that should contain corners
  const buttonParent = primaryButton.locator('..');

  // Hover to trigger corner visibility
  await primaryButton.hover();
  await page.waitForTimeout(300);

  // Take a zoomed screenshot of the button with more context
  const box = await buttonParent.boundingBox();
  if (box) {
    await page.screenshot({
      path: 'test-results/corner-closeup.png',
      clip: {
        x: Math.max(0, box.x - 20),
        y: Math.max(0, box.y - 20),
        width: box.width + 40,
        height: box.height + 40
      }
    });
  }

  // Check computed styles of corners
  const corners = await buttonParent.locator('div.absolute').all();
  console.log(`Found ${corners.length} corner elements`);

  for (let i = 0; i < corners.length; i++) {
    const corner = corners[i];
    const isVisible = await corner.isVisible();
    const opacity = await corner.evaluate(el => window.getComputedStyle(el).opacity);
    const borderColor = await corner.evaluate(el => window.getComputedStyle(el).borderColor);
    console.log(`Corner ${i}: visible=${isVisible}, opacity=${opacity}, borderColor=${borderColor}`);
  }
});
