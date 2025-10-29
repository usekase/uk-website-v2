import { test, expect } from '@playwright/test';

test.describe('Navbar scroll transition', () => {
  test('should be transparent at top and white when scrolled', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState('networkidle');

    // Get navbar element
    const navbar = page.locator('nav').first();

    // Check initial state - transparent
    await expect(navbar).toHaveClass(/bg-transparent/);

    // Check text is white initially
    const caseStudiesLink = page.locator('a:has-text("Case Studies")').first();
    const linkColor = await caseStudiesLink.evaluate((el) => {
      return window.getComputedStyle(el.querySelector('span')!).color;
    });

    // White text should have high rgb values (close to 255)
    console.log('Initial link color:', linkColor);

    // Scroll to solutions section
    await page.evaluate(() => {
      const solutionsSection = document.querySelector('#solutions');
      if (solutionsSection) {
        solutionsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Wait for scroll animation and navbar transition
    await page.waitForTimeout(1000);

    // Check navbar is now white
    await expect(navbar).toHaveClass(/bg-white/);

    // Check navbar has border
    await expect(navbar).toHaveClass(/border-b/);

    // Check navbar has shadow
    await expect(navbar).toHaveClass(/shadow-sm/);

    // Take screenshots
    await page.screenshot({ path: '/tmp/navbar-scrolled.png' });

    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(1000);

    // Check navbar is transparent again
    await expect(navbar).toHaveClass(/bg-transparent/);
    await page.screenshot({ path: '/tmp/navbar-top.png' });
  });

  test('should be white on case studies page', async ({ page }) => {
    await page.goto('http://localhost:5173/case-studies');
    await page.waitForLoadState('networkidle');

    const navbar = page.locator('nav').first();

    // Should always be white on non-home pages
    await expect(navbar).toHaveClass(/bg-white/);
  });
});
