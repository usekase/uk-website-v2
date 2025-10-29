import { test } from '@playwright/test';

test('navbar visual states', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Screenshot at top - glass effect
  await page.screenshot({ path: '/tmp/navbar-glass-top.png' });

  // Scroll to solutions section
  await page.evaluate(() => {
    const solutionsSection = document.querySelector('#solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  await page.waitForTimeout(1500);

  // Screenshot when scrolled - white background
  await page.screenshot({ path: '/tmp/navbar-white-scrolled.png' });

  console.log('Screenshots saved to /tmp/navbar-glass-top.png and /tmp/navbar-white-scrolled.png');
});
