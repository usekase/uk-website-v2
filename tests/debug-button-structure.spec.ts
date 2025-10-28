import { test } from '@playwright/test';

test('Debug button DOM structure', async ({ page }) => {
  await page.goto('/demos/button-test');
  await page.waitForLoadState('networkidle');

  // Get the button
  const button = page.getByTestId('btn-primary-default');

  // Log the button's HTML
  const buttonHTML = await button.evaluate(el => el.outerHTML);
  console.log('Button HTML:', buttonHTML);

  // Check parent
  const parent = button.locator('..');
  const parentHTML = await parent.evaluate(el => el.outerHTML);
  console.log('Parent HTML (first 500 chars):', parentHTML.substring(0, 500));

  // Count children of parent
  const parentChildren = await parent.locator('> *').count();
  console.log('Parent has', parentChildren, 'direct children');

  // List all children
  for (let i = 0; i < parentChildren; i++) {
    const child = parent.locator('> *').nth(i);
    const tagName = await child.evaluate(el => el.tagName);
    const className = await child.evaluate(el => el.className);
    console.log(`  Child ${i}: <${tagName}> class="${className}"`);
  }
});
