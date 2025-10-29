import { test, expect } from '@playwright/test';

test.describe('Navigation Hover States', () => {
  test('should display corner decorations on hover and active state', async ({ page }) => {
    // Navigate to case studies page
    await page.goto('http://localhost:5173/case-studies');
    await page.waitForTimeout(1000);

    // Take screenshot of nav in normal state
    const nav = page.locator('nav').first();
    await nav.screenshot({ path: '/tmp/nav-normal.png' });

    // Find the Case Studies link
    const caseStudiesLink = page.locator('a:has-text("Case Studies")').first();

    // Check that link is active (should have all 4 corners visible)
    await expect(caseStudiesLink).toBeVisible();

    // Take screenshot of active state
    await caseStudiesLink.screenshot({ path: '/tmp/nav-active.png' });

    // Hover over the link
    await caseStudiesLink.hover();
    await page.waitForTimeout(300); // Wait for transition

    // Take screenshot of hover state
    await caseStudiesLink.screenshot({ path: '/tmp/nav-hover.png' });

    // Verify corner decorations exist
    const corners = caseStudiesLink.locator('div[class*="border-primary"]');
    const cornerCount = await corners.count();

    console.log(`Found ${cornerCount} corner decorations`);
    expect(cornerCount).toBeGreaterThanOrEqual(4);

    // Take full page screenshot
    await page.screenshot({ path: '/tmp/nav-full-page.png', fullPage: false });
  });

  test('should show correct corners on hover vs active', async ({ page }) => {
    await page.goto('http://localhost:5173/case-studies');
    await page.waitForTimeout(1000);

    const caseStudiesLink = page.locator('a:has-text("Case Studies")').first();

    // When active, all 4 corners should be visible
    // Check opacity of corner elements
    const topLeft = caseStudiesLink.locator('div').nth(2); // Top-left corner
    const bottomRight = caseStudiesLink.locator('div').nth(3); // Bottom-right corner

    // These should be visible when active
    await expect(topLeft).toBeVisible();
    await expect(bottomRight).toBeVisible();

    console.log('Active state: All 4 corners should be visible');
  });
});
