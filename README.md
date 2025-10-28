# UseKase AI - Frontend Application

A modern, production-ready React frontend application showcasing the UseKase AI platform with custom ShadCN UI components, animated sections, and a unique design system featuring corner-decorated buttons.

## 🚀 Features

- **React 19** - Latest React with concurrent features and improved hooks
- **TypeScript** - Full type safety throughout the application
- **Vite 7** - Lightning-fast HMR and optimized builds
- **ShadCN UI** - Beautiful, accessible component library
- **Tailwind CSS 3** - Utility-first CSS framework with custom design tokens
- **React Router 7** - Modern client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics for visual effects
- **Playwright** - End-to-end testing and visual regression testing
- **Custom Button System** - Unique corner decoration hover effects
- **Responsive Design** - Mobile-first approach with adaptive layouts

## 📁 Project Structure

```
frontend-app/
├── src/
│   ├── components/
│   │   ├── ui/                    # ShadCN UI components
│   │   │   ├── button.tsx         # Custom button with corner decorations
│   │   │   ├── card.tsx           # Card component
│   │   │   ├── animated-testimonials.tsx
│   │   │   ├── category-list.tsx
│   │   │   ├── feature-section.tsx
│   │   │   ├── sticky-scroll-cards-section.tsx
│   │   │   └── ...
│   │   ├── layout/                # Layout components
│   │   │   ├── UsekaseNavbar.tsx
│   │   │   └── UsekaseFooter.tsx
│   │   ├── sections/              # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── BOTModelEnhanced.tsx
│   │   │   ├── KIBOTEngineEnhanced.tsx
│   │   │   ├── ValuePropositionEnhanced.tsx
│   │   │   ├── SectorsEnhanced.tsx
│   │   │   ├── TestimonialsEnhanced.tsx
│   │   │   ├── FlywheelFunding.tsx
│   │   │   ├── ProblemSolutionEnhanced.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── Navbar.tsx             # Demo app navigation
│   ├── pages/
│   │   ├── UsekaseHome.tsx        # Main landing page
│   │   ├── Home.tsx               # Demo hub
│   │   ├── ButtonTest.tsx         # Button visual testing page
│   │   ├── ShadcnExamples.tsx     # ShadCN component demos
│   │   ├── TweakcnExamples.tsx    # Custom variant examples
│   │   ├── CardVariantsDemo.tsx
│   │   ├── CategoryListDemo.tsx
│   │   ├── AnimatedTestimonialsDemo.tsx
│   │   ├── FeatureStepsDemo.tsx
│   │   └── StickyScrollDemo.tsx
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn helper)
│   ├── App.tsx                    # Main app with routing
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles & design tokens
├── tests/                         # Playwright tests
│   ├── button-visual.spec.ts
│   ├── button-hover-capture.spec.ts
│   └── example.spec.ts
├── playwright.config.ts           # Playwright configuration
├── components.json                # ShadCN configuration
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite configuration
```

## 🎨 Design System

### Color Palette

The application uses a custom color scheme defined in CSS variables:

**Light Theme:**
- Primary: `#cc33ab` (Magenta)
- Secondary: `#30e5e8` (Cyan)
- Accent: `#33ccad` (Teal)
- Background: `#f8f9fa` (Light Gray)
- Foreground: `#131320` (Dark Blue)

**Dark Theme:**
- Background: `#131320`
- Foreground: `#eeeff2`
- Card: `#252538`
- Muted: `#1a1a2b`

### Button System

The application features a unique button design with **animated corner decorations**:

- **Default/Primary Buttons**: Magenta background with corner decorations on hover
- **Secondary Buttons**: Cyan background with corner decorations on hover
- **Corner Decorations**: L-shaped borders that fade in at all four corners on hover
- **Border Animation**: 2px border that changes to primary color on hover
- **Click Animation**: Subtle scale-down effect (98%) on active state
- **Transition Timing**: Synchronized 200ms transitions for smooth animations

**Variants Available:**
- `default` - Primary magenta with corners
- `secondary` - Cyan with corners
- `destructive` - Red for destructive actions
- `outline` - Border-only style (no corners)
- `ghost` - Transparent background (no corners)
- `link` - Text-only link style (no corners)

**Sizes:**
- `sm` - Small (36px height)
- `default` - Medium (40px height)
- `lg` - Large (44px height)
- `icon` - Square icon button (40x40px)

## 🌐 Pages

### Main Application

**Home (`/`)** - UseKase AI landing page featuring:
- Hero section with animated background
- BOT Model explanation
- K-IBOT Engine showcase
- Value proposition
- Industry sectors
- Testimonials
- Flywheel funding model
- Problem/Solution presentation
- Final CTA

### Demo Hub

**Demos Home (`/demos`)** - Navigation hub for component demos

**Button Test (`/demos/button-test`)** - Interactive button testing page with:
- All button variants and sizes
- Hover state demonstrations
- Click animation testing
- Visual regression test cases

**ShadCN Examples (`/demos/shadcn-examples`)** - Standard ShadCN components

**Component Demos:**
- `/demos/card-variants` - Card component variations
- `/demos/category-list` - Category list component
- `/demos/animated-testimonials` - Animated testimonial carousel
- `/demos/feature-steps` - Feature section demonstrations
- `/demos/sticky-scroll` - Sticky scroll effects

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js 20.19+ or 22.12+** (required for Vite 7)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   cd frontend-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Application will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - TypeScript check + Vite production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run Playwright tests
- `npm run test:ui` - Run tests with Playwright UI
- `npm run test:debug` - Debug tests
- `npm run test:headed` - Run tests in headed mode (visible browser)
- `npm run test:report` - Show test report

## 🧪 Testing

The project includes comprehensive Playwright tests for visual regression and interaction testing:

```bash
# Run all tests
npm run test

# Run with UI (recommended for development)
npm run test:ui

# Run specific test file
npx playwright test tests/button-visual.spec.ts

# Generate test report
npm run test:report
```

**Test Coverage:**
- Button hover states and animations
- Corner decoration visibility
- Click animations
- Visual regression testing
- Component interaction tests

## 🎯 Key Components

### Button (`src/components/ui/button.tsx`)

Enhanced ShadCN button with unique corner decoration system:

```tsx
import { Button } from "@/components/ui/button";

// Primary button with corners
<Button>Click me</Button>

// Secondary button with corners
<Button variant="secondary">Secondary</Button>

// Large size
<Button size="lg">Large Button</Button>

// No corners (outline variant)
<Button variant="outline">Outline</Button>
```

**Important Implementation Details:**
- Corner decorations only appear on `default` and `secondary` variants
- Uses `group` hover pattern for synchronized animations
- Corners use `border-primary` for visibility
- All transitions synchronized to 200ms

### Animated Sections

- **Hero**: Animated gradient background with CTA
- **BOT Model**: Explanation of the Build-Operate-Transfer model
- **K-IBOT Engine**: Showcase of the K-IBOT technology
- **Testimonials**: Carousel with smooth transitions

## 🎨 Customization

### Adding New ShadCN Components

1. Visit [ui.shadcn.com](https://ui.shadcn.com)
2. Browse available components
3. Copy component code to `src/components/ui/`
4. Install required dependencies

### Extending Button Variants

To add new button variants, edit `src/components/ui/button.tsx`:

```typescript
variants: {
  variant: {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    // Add your custom variant
    custom: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
  }
}
```

### Theme Customization

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #cc33ab;     /* Change primary color */
  --secondary: #30e5e8;   /* Change secondary color */
  --accent: #33ccad;      /* Change accent color */
}
```

## 🔧 Technologies Used

- **React 19.1.1** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.1.7** - Build tool
- **Tailwind CSS 3.4.18** - Styling
- **ShadCN UI** - Component library
- **Radix UI** - Headless UI primitives
- **class-variance-authority** - Variant management
- **React Router 7.9.4** - Routing
- **Framer Motion 12.23.24** - Animations
- **Three.js 0.180.0** - 3D graphics
- **Playwright 1.56.1** - Testing
- **Lucide React 0.548.0** - Icons

## 🐛 Known Issues & Solutions

### Button Corners Not Visible

**Issue:** Corner decorations were initially invisible due to poor color contrast (`border-zinc-700` on dark backgrounds).

**Solution:** Changed to `border-primary` for better visibility. See commit history for details.

### TypeScript Build Errors

**Issue:** `variant="primary"` is not a valid button variant.

**Solution:** Use `variant="default"` or omit the variant prop entirely (defaults to "default").

## 📚 Additional Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive context for Claude AI, including full application architecture, button system details, and CSS structure
- **[CARD_BORDER_STANDARDS.md](./CARD_BORDER_STANDARDS.md)** - Design standards for card borders and decorations

## 🔗 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## 📄 License

This project is part of the UseKase AI platform. All rights reserved.

## 🤝 Contributing

For bug reports or feature requests, please contact the development team.

---

**Built with ❤️ by the UseKase AI team**
