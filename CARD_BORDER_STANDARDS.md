# Card Border Standards - Design System

## Overview

This document establishes the standard border and corner decoration styling for all card components across the Usekase website. Following these standards ensures visual consistency and maintains a cohesive design language.

## 🎨 Standard Border Styling

All cards moving forward should use the **zinc-based border system** with decorative corner elements.

### Core Border Classes

```tsx
border-2 border-zinc-200 dark:border-zinc-700 rounded-md
```

**Explanation:**
- `border-2` - 2px solid border width
- `border-zinc-200` - Light mode: zinc-200 (#e4e4e7)
- `dark:border-zinc-700` - Dark mode: zinc-700 (#3f3f46)
- `rounded-md` - Medium border radius (0.375rem / 6px)

### Background for Containers

```tsx
bg-white dark:bg-gray-800
```

**Explanation:**
- `bg-white` - Clean white background in light mode
- `dark:bg-gray-800` - Dark gray background in dark mode (#1f2937)

## 🔲 Decorative Corner Elements

All cards should include L-shaped corner decorations at all four corners.

### Corner Decoration Component

```tsx
{/* Container must have position relative */}
<div className="relative bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md">
  {/* Top-left corner */}
  <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />

  {/* Top-right corner */}
  <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />

  {/* Bottom-left corner */}
  <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />

  {/* Bottom-right corner */}
  <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

  {/* Your content here */}
</div>
```

### Corner Decoration Specifications

- **Size**: `size-6` (1.5rem / 24px × 24px)
- **Position**: Absolute positioning at `-0.5` (slightly overlapping parent border)
- **Border Width**: `border-2` (2px)
- **Border Colors**:
  - Light mode: `border-zinc-700` (darker for contrast)
  - Dark mode: `border-zinc-200` (lighter for contrast)
- **Border Radius**: Matches container (`rounded-tl-md`, `rounded-tr-md`, etc.)

## 📐 Complete Card Template

### Standard Card with Border Corners

```tsx
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function StandardCard({ title, description, children, className }: CardProps) {
  return (
    <div className={cn(
      "relative bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md p-8 md:p-12",
      className
    )}>
      {/* Corner decorations */}
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />

      {/* Content */}
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
```

## 🎯 Where This Standard Is Applied

### Current Implementations

1. **Hero Section** (`src/components/sections/Hero.tsx`)
   - Title container with border corners

2. **Sticky Scroll Cards** (`src/components/ui/sticky-scroll-cards-section.tsx`)
   - Build, Operate, Transfer, Monitor phase cards

3. **Problem/Solution Section** (`src/components/sections/ProblemSolutionEnhanced.tsx`)
   - "Old Way" comparison container
   - "Usekase Way" comparison container

4. **Card Component** (`src/components/ui/card.tsx`)
   - "corners" variant implementation

## 🚫 What NOT To Do

### ❌ Incorrect Border Styling

```tsx
{/* DON'T use gray borders */}
<div className="border-2 border-gray-200 dark:border-gray-700 rounded-3xl">

{/* DON'T use single-width borders */}
<div className="border border-zinc-200 dark:border-zinc-700 rounded-md">

{/* DON'T use large border radius */}
<div className="border-2 border-zinc-200 dark:border-zinc-700 rounded-3xl">

{/* DON'T mix border colors */}
<div className="border-2 border-zinc-200 dark:border-gray-700 rounded-md">
```

### ❌ Incorrect Corner Decorations

```tsx
{/* DON'T use wrong sizes */}
<div className="size-4 absolute ...">  {/* Too small */}

{/* DON'T reverse the color scheme */}
<div className="border-zinc-200 dark:border-zinc-700 ...">  {/* Wrong */}

{/* DON'T use wrong border widths */}
<div className="border-l border-t ...">  {/* Too thin */}

{/* DON'T omit corners */}
{/* Always include all 4 corners for consistency */}
```

## ✅ Best Practices

### 1. Consistent Spacing

Always use consistent padding inside bordered containers:
```tsx
{/* Mobile: p-8, Desktop: p-12 */}
<div className="... p-8 md:p-12">
```

### 2. Relative Positioning

Parent container must have `relative` positioning:
```tsx
<div className="relative ...">  {/* Required for absolute corner elements */}
```

### 3. Z-Index Considerations

If content overlaps corners, manage z-index:
```tsx
<div className="relative bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md">
  {/* Corners */}
  <div className="size-6 absolute ... z-10" />

  {/* Content */}
  <div className="relative z-0">
    {/* Your content */}
  </div>
</div>
```

### 4. Responsive Border Width

Keep border width consistent across breakpoints:
```tsx
{/* ✅ Good - consistent border */}
<div className="border-2 ...">

{/* ❌ Bad - changing border width */}
<div className="border md:border-2 ...">
```

### 5. Shadow Effects (Optional)

For elevated cards, add shadows that complement borders:
```tsx
<div className="... shadow-xl">  {/* Subtle elevation */}
```

## 🎨 Color Variants

While the standard uses zinc, you may use themed colors for specific contexts:

### Primary Themed Cards

```tsx
<div className="relative bg-primary/5 border-2 border-primary/20 rounded-md">
  {/* Corners in primary color */}
  <div className="border-primary size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
  {/* ... other corners */}
</div>
```

### Destructive Themed Cards

```tsx
<div className="relative bg-destructive/5 border-2 border-destructive/20 rounded-md">
  {/* Corners in destructive color */}
  <div className="border-destructive size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
  {/* ... other corners */}
</div>
```

**Note**: Only use colored variants when semantically appropriate (e.g., error states, primary CTAs). Default to zinc borders for neutral content.

## 📋 Migration Checklist

When updating existing cards to match this standard:

- [ ] Replace border colors with zinc-200/zinc-700
- [ ] Change rounded-3xl to rounded-md
- [ ] Ensure border-2 width
- [ ] Add relative positioning to container
- [ ] Add all 4 corner decorations
- [ ] Verify corner decoration colors (zinc-700 light / zinc-200 dark)
- [ ] Test in both light and dark modes
- [ ] Verify responsive behavior on mobile and desktop
- [ ] Check z-index stacking if content overlaps
- [ ] Ensure consistent padding (p-8 md:p-12)

## 🔧 Utility Component

Consider creating a reusable corner decoration component:

```tsx
// src/components/ui/corner-borders.tsx
export function CornerBorders() {
  return (
    <>
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
      <div className="dark:border-zinc-200 border-zinc-700 size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />
    </>
  );
}

// Usage
import { CornerBorders } from "@/components/ui/corner-borders";

<div className="relative bg-white dark:bg-gray-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-md p-8">
  <CornerBorders />
  {/* Your content */}
</div>
```

## 📚 Related Documentation

- [Card Variants Integration Guide](./CARD_VARIANTS_INTEGRATION.md)
- [Category List Integration Guide](./CATEGORY_LIST_INTEGRATION.md)
- [Usekase README](./USEKASE_README.md)

## 🎯 Design System Goals

This standard achieves:
- **Visual Consistency**: All cards use the same border system
- **Modern Aesthetic**: Zinc colors provide a contemporary, professional look
- **Dark Mode Support**: Proper contrast ratios in both themes
- **Tech-Inspired**: Corner decorations add a modern, technical feel
- **Accessibility**: High contrast borders are easy to see
- **Maintainability**: Clear standards reduce design decisions

## 📝 Version History

- **v1.0** (2025-10-27): Initial standard established
  - Defined zinc border colors
  - Specified corner decoration pattern
  - Documented complete implementation

---

**For questions or clarifications**, refer to the card.tsx "corners" variant implementation or contact the development team.
