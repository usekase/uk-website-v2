# UseKase AI Frontend - Claude AI Context

This document provides comprehensive context about the UseKase AI frontend application for Claude AI assistance. It covers the application architecture, design system, button implementation, CSS structure, and common patterns used throughout the codebase.

## Table of Contents

1. [Application Overview](#application-overview)
2. [Architecture & Routing](#architecture--routing)
3. [Button System (Critical)](#button-system-critical)
4. [CSS & Styling Architecture](#css--styling-architecture)
5. [Component Patterns](#component-patterns)
6. [Common Issues & Solutions](#common-issues--solutions)
7. [Development Guidelines](#development-guidelines)

---

## Application Overview

### Purpose
UseKase AI is a platform showcasing AI-powered solutions with a focus on the Build-Operate-Transfer (BOT) model and K-IBOT Engine technology. The frontend is built as a modern React SPA with a unique design system featuring animated corner decorations on interactive elements.

### Tech Stack
- **React 19.1.1** - Latest concurrent features
- **TypeScript 5.9** - Strict type checking enabled
- **Vite 7.1.7** - Build tool with HMR
- **Tailwind CSS 3.4.18** - Utility-first CSS
- **ShadCN UI** - Component library (customized)
- **Framer Motion 12.23.24** - Animation library
- **React Router 7.9.4** - Client-side routing
- **Playwright 1.56.1** - E2E testing

### Key Directories
```
src/
├── components/
│   ├── ui/          - Base UI components (buttons, cards, inputs)
│   ├── layout/      - Navigation, footer, layout wrappers
│   └── sections/    - Page sections (Hero, BOT Model, etc.)
├── pages/           - Route components
├── lib/            - Utilities (cn helper, etc.)
└── index.css       - Global styles & CSS variables
```

---

## Architecture & Routing

### Route Structure

The application uses React Router v7 with nested routes:

```typescript
// App.tsx structure
<Router>
  <Routes>
    {/* Main landing page */}
    <Route path="/" element={<UsekaseHome />} />

    {/* Demo pages - nested routing */}
    <Route path="/demos/*" element={<DemoLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="shadcn-examples" element={<ShadcnExamples />} />
      <Route path="button-test" element={<ButtonTest />} />
      {/* ... more routes */}
    </Route>
  </Routes>
</Router>
```

**Important:** The `/demos/*` route uses a wildcard pattern, and child routes use **relative paths** (no leading slash).

### Page Components

**UsekaseHome** (`/`) - Main landing page composed of sections:
- `Hero` - Animated hero with CTA
- `BOTModelEnhanced` - Build-Operate-Transfer explanation
- `KIBOTEngineEnhanced` - K-IBOT technology showcase
- `ValuePropositionEnhanced` - Value propositions
- `SectorsEnhanced` - Industry sectors served
- `TestimonialsEnhanced` - Customer testimonials
- `FlywheelFunding` - Funding model explanation
- `ProblemSolutionEnhanced` - Problem/solution framework
- `FinalCTA` - Call to action

**Demo Pages** (`/demos/*`) - Component showcases and testing pages

---

## Button System (Critical)

### Overview

The button component (`src/components/ui/button.tsx`) is a customized ShadCN button with a **unique corner decoration system** that was recently debugged and fixed.

### Visual Design

Buttons with `default` or `secondary` variants feature:
1. **Corner Decorations**: 4 L-shaped borders at each corner
2. **Border Animation**: 2px border that changes color on hover
3. **Background Transition**: Slight opacity change on hover
4. **Click Animation**: Subtle scale-down (98%) on active state

### Implementation Details

```typescript
// Button wrapper structure (for default/secondary variants)
<div className="relative inline-flex group">
  {/* 4 corner decoration divs */}
  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  border-primary size-4 absolute -top-0.5 -left-0.5
                  border-l-2 border-t-2 rounded-tl-md z-10 pointer-events-none" />
  {/* ... 3 more corners ... */}

  <button className="... group-hover:border-primary transition-all duration-200
                     group-active:scale-[0.98] border-2 border-transparent">
    {children}
  </button>
</div>
```

### Critical Bug Fix (December 2024)

**Problem:**
- Original code: `const shouldHaveCorners = variant === "default" || variant === "secondary"`
- When no `variant` prop is passed, the value is `undefined`, not `"default"`
- CVA's `defaultVariants` only affects className generation, NOT the prop value
- Result: Buttons without explicit variant had NO corner decorations and NO hover effects

**Solution:**
```typescript
// CORRECT implementation
const shouldHaveCorners = !variant || variant === "default" || variant === "secondary"
```

This checks for:
- `undefined` (no variant prop)
- `"default"` (explicit default)
- `"secondary"` (explicit secondary)

### Variant Behavior

| Variant | Corner Decorations | Button Color | Border on Hover |
|---------|-------------------|--------------|-----------------|
| `default` (or omitted) | ✅ Yes | Magenta (#cc33ab) | Magenta |
| `secondary` | ✅ Yes | Cyan (#30e5e8) | Magenta (inherits primary) |
| `destructive` | ❌ No | Red | N/A |
| `outline` | ❌ No | Transparent | N/A |
| `ghost` | ❌ No | Transparent | N/A |
| `link` | ❌ No | Transparent | N/A |

### Corner Decoration Visibility Fix

**Original Issue:**
- Corners used `border-zinc-700` (#3f3f46)
- On dark backgrounds (zinc-900, zinc-800), corners were nearly invisible
- Very poor contrast ratio

**Solution:**
```typescript
// Changed from border-zinc-700 to border-primary
<div className="... border-primary ..." />
```

**Result:**
- Corners now use the primary color (#cc33ab - magenta)
- Excellent visibility on all backgrounds
- Matches the border animation color for visual consistency

### Animation Timing

All button transitions are synchronized to **200ms**:
- Corner opacity fade-in: `transition-opacity duration-200`
- Border color change: `transition-all duration-200`
- Button scale on active: `transition-all duration-200`

### Usage Examples

```typescript
// ✅ Correct - default variant with corners
<Button>Click Me</Button>
<Button variant="default">Click Me</Button>

// ✅ Correct - secondary with corners
<Button variant="secondary">Secondary</Button>

// ✅ Correct - outline without corners
<Button variant="outline">Outline</Button>

// ❌ WRONG - "primary" is not a valid variant
<Button variant="primary">Wrong</Button>  // TypeScript error!
```

### Testing

Visual regression tests are in `tests/button-visual.spec.ts`:
- Corner decoration presence (should find 4 elements)
- Corner color verification (should be rgb(204, 51, 171) - magenta)
- Hover state animations
- Click state animations

---

## CSS & Styling Architecture

### CSS Variable System

All design tokens are defined in `src/index.css` using CSS variables:

```css
:root {
  /* Colors */
  --primary: #cc33ab;           /* Magenta */
  --primary-foreground: #ffffff;
  --secondary: #30e5e8;         /* Cyan */
  --secondary-foreground: #131320;
  --accent: #33ccad;            /* Teal */
  --background: #f8f9fa;        /* Light gray */
  --foreground: #131320;        /* Dark blue */

  /* Component colors */
  --card: #ffffff;
  --card-foreground: #131320;
  --muted: #f3f3fc;
  --border: #e1e5e7;

  /* Design tokens */
  --radius: 0rem;               /* Sharp corners by default */
  --font-sans: Outfit, sans-serif;
  --font-mono: Fira Code, monospace;

  /* Shadows */
  --shadow-sm: 0px 4px 8px -2px hsl(0 0% 10.1961% / 0.10), ...;
  /* ... more shadow definitions */
}

.dark {
  --background: #131320;
  --foreground: #eeeff2;
  --card: #252538;
  --muted: #1a1a2b;
  --border: #383854;
  /* ... dark theme overrides */
}
```

### Tailwind Configuration

The Tailwind config (`tailwind.config.js`) extends the CSS variables:

```javascript
theme: {
  extend: {
    colors: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      // ... more color mappings
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    }
  }
}
```

### Color Palette Details

**Primary Colors:**
- Magenta: `#cc33ab` / `rgb(204, 51, 171)` - Used for primary actions, hover states
- Cyan: `#30e5e8` / `rgb(48, 229, 232)` - Used for secondary elements
- Teal: `#33ccad` / `rgb(51, 204, 173)` - Used for accents

**Neutral Scale (Light Theme):**
- Background: `#f8f9fa` (very light gray)
- Card: `#ffffff` (white)
- Border: `#e1e5e7` (light gray)
- Foreground: `#131320` (dark blue-black)

**Neutral Scale (Dark Theme):**
- Background: `#131320` (very dark blue)
- Card: `#252538` (dark purple-blue)
- Muted: `#1a1a2b` (darker purple)
- Border: `#383854` (medium gray-blue)

### Utility Classes

**Custom Utilities Defined:**
```css
@layer base {
  * {
    border-color: var(--border);  /* Default border color */
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
  }
}
```

### Component-Level Styling Pattern

Most components use a combination of:
1. **Tailwind utility classes** for layout and common styles
2. **CVA (class-variance-authority)** for variant management
3. **Inline styles** only for dynamic values (e.g., animations)

Example:
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
);
```

---

## Component Patterns

### 1. Compound Components (Card)

```typescript
// Card uses compound component pattern
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### 2. ForwardRef Pattern (Button, Input)

All interactive components use `React.forwardRef` for ref forwarding:

```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Component implementation
    return <button ref={ref} {...props} />
  }
);
Button.displayName = "Button";
```

### 3. Slot Pattern (Button)

Buttons support the `asChild` prop to render as different elements:

```typescript
<Button asChild>
  <Link to="/somewhere">Navigate</Link>
</Button>
// Renders: <a href="/somewhere" class="button-classes">Navigate</a>
```

### 4. Group Hover Pattern

Used extensively in the button corner decorations:

```typescript
<div className="relative inline-flex group">
  <div className="opacity-0 group-hover:opacity-100 ..." />
  <button className="group-hover:border-primary ...">
    Click me
  </button>
</div>
```

### 5. Motion Components (Framer Motion)

Animated sections use Framer Motion:

```typescript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## Common Issues & Solutions

### Issue 1: Button Corners Not Rendering

**Symptoms:**
- No wrapper div around button
- No corner decorations visible
- Hover effects not working
- Test finds 0 corner elements

**Diagnosis:**
```typescript
// Check if variant is undefined when component renders
console.log("variant:", variant);  // undefined
console.log("shouldHaveCorners:", variant === "default");  // false!
```

**Solution:**
```typescript
// Fix the condition
const shouldHaveCorners = !variant || variant === "default" || variant === "secondary";
```

### Issue 2: TypeScript Build Error - Invalid Variant

**Error:**
```
Type '"primary"' is not assignable to type '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined'
```

**Cause:**
```typescript
<Button variant="primary">Text</Button>  // "primary" doesn't exist!
```

**Solution:**
```typescript
<Button>Text</Button>  // Use default (no variant prop)
// OR
<Button variant="default">Text</Button>  // Explicit default
```

### Issue 3: Corner Decorations Invisible

**Symptoms:**
- Corners render (4 elements found in tests)
- Corner opacity is 1 on hover
- But corners are not visible to the eye

**Cause:**
```typescript
// border-zinc-700 has poor contrast on dark backgrounds
<div className="border-zinc-700 ..." />
```

**Solution:**
```typescript
// Use border-primary for high contrast
<div className="border-primary ..." />
```

### Issue 4: Inconsistent Hover Animation Timing

**Symptoms:**
- Corners fade in at different speed than border changes
- Animation feels "janky" or disjointed

**Solution:**
Synchronize all transitions to 200ms:
```typescript
<div className="transition-opacity duration-200 ..." />  // Corners
<button className="transition-all duration-200 ...">    // Button
```

### Issue 5: Layout Shift on Hover

**Symptoms:**
- Button or surrounding content shifts when hovering
- Caused by border appearing/disappearing

**Solution:**
Always have border present, just transparent:
```typescript
// ✅ Good - border always present
className="border-2 border-transparent group-hover:border-primary"

// ❌ Bad - adds border on hover
className="group-hover:border-2 group-hover:border-primary"
```

---

## Development Guidelines

### When Adding New Components

1. **Use ShadCN components as base** when possible
2. **Place in correct directory:**
   - `src/components/ui/` - Base UI components
   - `src/components/layout/` - Layout wrappers
   - `src/components/sections/` - Page sections
3. **Use TypeScript** with proper types/interfaces
4. **Follow naming conventions:**
   - Components: PascalCase (e.g., `ButtonTest.tsx`)
   - Files: Same as component name
   - Props interfaces: `ComponentNameProps`
5. **Export from component file:**
   ```typescript
   export { Button, buttonVariants };
   export type { ButtonProps };
   ```

### When Modifying Buttons

1. **Test corner decorations:**
   ```bash
   npm run test -- tests/button-visual.spec.ts
   ```
2. **Check all variants:**
   - default, secondary, destructive, outline, ghost, link
3. **Verify on ButtonTest page:**
   ```
   http://localhost:5173/demos/button-test
   ```
4. **Ensure TypeScript builds:**
   ```bash
   npm run build
   ```

### When Working with CSS

1. **Use CSS variables** for colors, not hardcoded hex values
   ```typescript
   // ✅ Good
   className="bg-primary text-primary-foreground"

   // ❌ Bad
   className="bg-[#cc33ab] text-white"
   ```

2. **Use Tailwind utilities** first, custom CSS only when necessary

3. **Dark mode:** Use Tailwind dark: prefix
   ```typescript
   className="bg-zinc-100 dark:bg-zinc-800"
   ```

4. **Respect design tokens:**
   - Radius: Use `rounded-md`, `rounded-lg` (defined in theme)
   - Spacing: Use standard Tailwind spacing scale
   - Shadows: Use `shadow-sm`, `shadow-md`, etc.

### When Creating Routes

1. **Nested routes under /demos use relative paths:**
   ```typescript
   // ✅ Correct
   <Route path="button-test" element={<ButtonTest />} />

   // ❌ Wrong
   <Route path="/button-test" element={<ButtonTest />} />
   ```

2. **Parent route must use wildcard:**
   ```typescript
   <Route path="/demos/*" element={<DemoLayout />}>
   ```

### When Writing Tests

1. **Use data-testid for test selectors:**
   ```typescript
   <Button data-testid="btn-primary-default">Text</Button>
   ```

2. **Wait for transitions:**
   ```typescript
   await button.hover();
   await page.waitForTimeout(250);  // Wait for 200ms transition + buffer
   ```

3. **Check computed styles, not classes:**
   ```typescript
   const bgColor = await button.evaluate(el =>
     window.getComputedStyle(el).backgroundColor
   );
   ```

### Common Import Patterns

```typescript
// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

// Utilities
import { cn } from "@/lib/utils";

// React
import { useState, useEffect, forwardRef } from "react";

// Router
import { Link, useNavigate } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Types
import type { ButtonProps } from "@/components/ui/button";
```

---

## Quick Reference

### Button Variants
```typescript
variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
size?: "default" | "sm" | "lg" | "icon"
```

### Color Variables
```css
--primary: #cc33ab        (Magenta)
--secondary: #30e5e8      (Cyan)
--accent: #33ccad         (Teal)
--background: #f8f9fa     (Light) / #131320 (Dark)
--foreground: #131320     (Light) / #eeeff2 (Dark)
```

### Animation Timings
- Button transitions: 200ms
- Page transitions: 300-500ms
- Micro-interactions: 150-200ms

### Test Commands
```bash
npm run test                    # Run all tests
npm run test:ui                 # Test with UI
npx playwright test --headed    # Test with visible browser
npm run test:report             # Show test report
```

### Build Commands
```bash
npm run dev      # Development with HMR
npm run build    # Production build
npm run preview  # Preview production build
```

---

## Summary

This application is a modern React SPA with a unique design system centered around corner-decorated buttons. The most critical implementation detail is the button's corner decoration system, which requires careful handling of variant props to function correctly. When working with this codebase, always:

1. **Check button variant handling** - Never assume default variant works without explicit checks
2. **Use CSS variables** - Never hardcode colors
3. **Test visual changes** - Run Playwright tests for UI modifications
4. **Synchronize animations** - Keep all transitions at consistent durations
5. **Follow TypeScript strictly** - The type system will catch variant errors

For any questions or clarifications, refer to the button implementation in `src/components/ui/button.tsx` and the test suite in `tests/button-visual.spec.ts`.

---

**Last Updated:** December 2024
**Critical Fixes Applied:** Button corner decoration rendering, corner visibility, TypeScript type errors
