# Playwright Visual Testing Setup

This document describes the Playwright integration for visual UI testing in the Usekase frontend application.

## Overview

Playwright has been integrated into the stack to enable:
- Visual regression testing of UI components
- Automated screenshot capture for design review
- End-to-end testing of user flows
- Component interaction testing

## Installation

Playwright is already installed. If you need to reinstall or add browsers:

```bash
npm install -D @playwright/test playwright
npx playwright install chromium
```

## Configuration

### Playwright Config ([playwright.config.ts](playwright.config.ts))
- Base URL: `http://localhost:5173`
- Browser: Chromium (Desktop Chrome)
- Screenshots: Taken on test failure
- Videos: Retained on failure
- Auto-starts dev server before tests

### MCP Integration ([.mcp.json](.mcp.json))
The playwright-mcp server is configured to enable AI-assisted browser automation:
- Server: `@executeautomation/playwright-mcp-server`
- Browser: Chromium (headless mode)

## Usage

### Running Tests

```bash
# Run all tests (headless)
npm test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests with browser visible
npm run test:headed

# Debug tests step-by-step
npm run test:debug

# View test report
npm run test:report
```

### Writing Visual Tests

Tests are located in the [tests/](tests/) directory. Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test('component visual check', async ({ page }) => {
  // Navigate to page
  await page.goto('/');

  // Wait for full load
  await page.waitForLoadState('networkidle');

  // Take screenshot
  await page.screenshot({
    path: 'screenshots/component.png',
    fullPage: true
  });

  // Assert UI elements
  await expect(page.locator('button')).toBeVisible();
});
```

## Visual Design Workflow

### 1. Component Development
When designing new components:
1. Create the component
2. Add it to a test page or examples page
3. Write a Playwright test to capture screenshots
4. Run `npm run test:headed` to see the component in action

### 2. Visual Regression Testing
```typescript
test('button component matches design', async ({ page }) => {
  await page.goto('/shadcn-examples');

  // Screenshot specific component
  const button = page.locator('button.primary');
  await button.screenshot({ path: 'screenshots/button-primary.png' });
});
```

### 3. Responsive Design Testing
```typescript
test.use({ viewport: { width: 375, height: 667 } }); // Mobile

test('mobile layout', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'screenshots/mobile-home.png' });
});
```

## MCP Server Usage

The playwright-mcp server allows AI assistants (like Claude) to:
- Navigate pages programmatically
- Interact with UI elements
- Take screenshots on demand
- Verify component behavior
- Debug visual issues

To use MCP tools with Claude Code, the MCP server will automatically start when needed.

## Directory Structure

```
frontend-app/
├── playwright.config.ts      # Playwright configuration
├── .mcp.json                 # MCP server configuration
├── tests/                    # Test files (*.spec.ts)
│   └── example.spec.ts       # Example tests
├── screenshots/              # Generated screenshots (gitignored)
├── test-results/             # Test artifacts (gitignored)
└── playwright-report/        # HTML test reports (gitignored)
```

## Best Practices

1. **Organize Tests by Feature**
   - Create separate test files for each major component or page
   - Use `test.describe()` blocks to group related tests

2. **Wait for Stability**
   - Always use `waitForLoadState('networkidle')` before screenshots
   - Wait for animations to complete before capturing

3. **Screenshot Naming**
   - Use descriptive names: `component-name-state.png`
   - Include viewport size for responsive tests: `hero-mobile.png`

4. **Component Isolation**
   - Test components in isolation when possible
   - Use the ShadcnExamples page for component showcase

5. **Visual Regression**
   - Keep baseline screenshots in version control (optional)
   - Compare new screenshots against baselines
   - Document intentional visual changes

## Troubleshooting

### Dev Server Not Starting
If tests fail because the dev server doesn't start:
```bash
# Start dev server manually first
npm run dev

# In another terminal, run tests
npm test -- --no-server
```

### Screenshots Not Generated
- Check that the `screenshots/` directory exists
- Ensure sufficient disk space
- Verify test is awaiting screenshot promise

### Browser Not Found
```bash
# Reinstall browser
npx playwright install chromium
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright MCP Server](https://github.com/executeautomation/playwright-mcp-server)
- [Visual Testing Guide](https://playwright.dev/docs/test-snapshots)
