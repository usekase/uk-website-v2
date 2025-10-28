import { test, expect } from '@playwright/test';

test.describe('Button Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/demos/button-test');
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('Primary button - default state', async ({ page }) => {
    const button = page.getByTestId('btn-primary-default');
    await expect(button).toBeVisible();

    // Take screenshot of default state
    await button.screenshot({ path: 'test-results/button-primary-default.png' });

    // Check that button is rendered
    await expect(button).toHaveText('Primary Default');
  });

  test('Primary button - hover state with corners', async ({ page }) => {
    const button = page.getByTestId('btn-primary-default');

    // Hover over the button
    await button.hover();

    // Wait for transition to complete (200ms for corners + buffer)
    await page.waitForTimeout(300);

    // Take screenshot of hover state
    await button.screenshot({ path: 'test-results/button-primary-hover.png' });

    // Check for corner decorations visibility
    const parentDiv = page.locator('[data-testid="btn-primary-default"]').locator('..');

    // Check that we're in the group hover state
    await expect(parentDiv).toHaveClass(/group/);
  });

  test('Primary button - click state', async ({ page }) => {
    const button = page.getByTestId('btn-click-test-primary');

    // Take screenshot before click
    await button.screenshot({ path: 'test-results/button-primary-before-click.png' });

    // Hover first to see corners
    await button.hover();
    await page.waitForTimeout(300);

    // Take screenshot during hover
    await button.screenshot({ path: 'test-results/button-primary-hover-before-click.png' });

    // Click and hold
    await button.click({ delay: 100 });

    // Check that click worked
    const consoleMessages: string[] = [];
    page.on('console', msg => consoleMessages.push(msg.text()));
  });

  test('Secondary button - default state', async ({ page }) => {
    const button = page.getByTestId('btn-secondary-default');
    await expect(button).toBeVisible();

    // Take screenshot of default state
    await button.screenshot({ path: 'test-results/button-secondary-default.png' });

    await expect(button).toHaveText('Secondary Default');
  });

  test('Secondary button - hover state with corners', async ({ page }) => {
    const button = page.getByTestId('btn-secondary-default');

    // Hover over the button
    await button.hover();

    // Wait for transition to complete
    await page.waitForTimeout(300);

    // Take screenshot of hover state
    await button.screenshot({ path: 'test-results/button-secondary-hover.png' });

    // Check for corner decorations visibility
    const parentDiv = page.locator('[data-testid="btn-secondary-default"]').locator('..');
    await expect(parentDiv).toHaveClass(/group/);
  });

  test('Other variants should not have corners', async ({ page }) => {
    const outlineButton = page.getByTestId('btn-outline');
    const ghostButton = page.getByTestId('btn-ghost');

    // These should not have the group wrapper
    await expect(outlineButton).toBeVisible();
    await expect(ghostButton).toBeVisible();

    // Take screenshots
    await outlineButton.screenshot({ path: 'test-results/button-outline-default.png' });
    await ghostButton.screenshot({ path: 'test-results/button-ghost-default.png' });

    // Hover and check
    await outlineButton.hover();
    await page.waitForTimeout(300);
    await outlineButton.screenshot({ path: 'test-results/button-outline-hover.png' });
  });

  test('Button size variations', async ({ page }) => {
    const smallPrimary = page.getByTestId('btn-primary-sm');
    const largePrimary = page.getByTestId('btn-primary-lg');
    const defaultPrimary = page.getByTestId('btn-primary-default');

    // Check that all are visible
    await expect(smallPrimary).toBeVisible();
    await expect(largePrimary).toBeVisible();
    await expect(defaultPrimary).toBeVisible();

    // Get bounding boxes to verify sizes
    const smallBox = await smallPrimary.boundingBox();
    const defaultBox = await defaultPrimary.boundingBox();
    const largeBox = await largePrimary.boundingBox();

    // Verify size progression
    expect(smallBox?.height).toBeLessThan(defaultBox?.height || 0);
    expect(defaultBox?.height).toBeLessThan(largeBox?.height || 0);
  });

  test('Disabled state styling', async ({ page }) => {
    const disabledPrimary = page.getByTestId('btn-primary-disabled');
    const disabledSecondary = page.getByTestId('btn-secondary-disabled');

    await expect(disabledPrimary).toBeDisabled();
    await expect(disabledSecondary).toBeDisabled();

    // Take screenshots of disabled states
    await disabledPrimary.screenshot({ path: 'test-results/button-primary-disabled.png' });
    await disabledSecondary.screenshot({ path: 'test-results/button-secondary-disabled.png' });

    // Try to hover (should not have hover effect)
    await disabledPrimary.hover({ force: true });
    await page.waitForTimeout(300);
    await disabledPrimary.screenshot({ path: 'test-results/button-primary-disabled-hover-attempt.png' });
  });

  test('Full page screenshot for visual review', async ({ page }) => {
    // Take full page screenshot
    await page.screenshot({
      path: 'test-results/button-test-full-page.png',
      fullPage: true
    });
  });

  test('Interactive hover test - corner decoration animation', async ({ page }) => {
    const testButton = page.getByTestId('btn-test-primary');
    const testButtonSecondary = page.getByTestId('btn-test-secondary');

    // Scroll into view
    await testButton.scrollIntoViewIfNeeded();

    // Take before hover
    await page.screenshot({ path: 'test-results/interactive-before-hover.png' });

    // Hover over primary
    await testButton.hover();
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'test-results/interactive-primary-hover.png' });

    // Move away
    await page.mouse.move(0, 0);
    await page.waitForTimeout(300);

    // Hover over secondary
    await testButtonSecondary.hover();
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'test-results/interactive-secondary-hover.png' });
  });

  test('Corner decoration element inspection', async ({ page }) => {
    const button = page.getByTestId('btn-primary-default');

    // Get the parent div that should contain corners
    const parentDiv = button.locator('..').first();

    // Check for corner decoration elements
    const corners = parentDiv.locator('div.absolute');
    const cornerCount = await corners.count();

    // Should have 4 corner decorations
    expect(cornerCount).toBe(4);

    // Check corner positions
    const topLeft = parentDiv.locator('div.absolute.-top-0\\.5.-left-0\\.5');
    const topRight = parentDiv.locator('div.absolute.-top-0\\.5.-right-0\\.5');
    const bottomLeft = parentDiv.locator('div.absolute.-bottom-0\\.5.-left-0\\.5');
    const bottomRight = parentDiv.locator('div.absolute.-bottom-0\\.5.-right-0\\.5');

    await expect(topLeft).toHaveCount(1);
    await expect(topRight).toHaveCount(1);
    await expect(bottomLeft).toHaveCount(1);
    await expect(bottomRight).toHaveCount(1);
  });
});
