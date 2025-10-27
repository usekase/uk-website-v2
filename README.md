# React + TypeScript + Vite + ShadCN UI Frontend Demo

A modern, fully-featured React frontend application showcasing ShadCN UI components with TypeScript, Vite, and component variant customization.

## Features

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety throughout the application
- **Vite** - Lightning-fast HMR and optimized builds
- **ShadCN UI** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Component Variants** - Extended ShadCN components with custom variants using CVA
- **Responsive Design** - Mobile-friendly navigation and layout

## Project Structure

```
frontend-app/
├── src/
│   ├── components/
│   │   ├── ui/              # ShadCN UI components
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── card.tsx     # Card component
│   │   │   ├── dialog.tsx   # Dialog/Modal component
│   │   │   ├── input.tsx    # Input component
│   │   │   └── label.tsx    # Label component
│   │   └── Navbar.tsx       # Responsive navigation bar
│   ├── pages/
│   │   ├── Home.tsx                # Home/landing page
│   │   ├── ShadcnExamples.tsx      # ShadCN component demos
│   │   └── TweakcnExamples.tsx     # Custom variant examples
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── types/
│   │   └── tweakcn.d.ts     # Type declarations
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & Tailwind
├── components.json          # ShadCN configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Pages

### Home Page (`/`)
- Landing page with project overview
- Feature cards highlighting technologies used
- Navigation to example pages

### ShadCN Examples (`/shadcn-examples`)
- Interactive demonstrations of ShadCN components
- Button variants and sizes
- Card layouts
- Dialog/Modal examples
- Form inputs with labels
- Interactive examples with state

### Component Customization (`/tweakcn-examples`)
- Custom button variants (gradient, success, warning, info)
- Extended size variants (xs, xl)
- Code examples showing how to extend components
- Side-by-side comparison of standard vs extended components

## Components

### ShadCN UI Components
All components are located in `src/components/ui/`:

1. **Button** - Versatile button component with multiple variants
2. **Card** - Container component with header, content, and footer
3. **Dialog** - Modal dialog with overlay
4. **Input** - Styled form input
5. **Label** - Form label component

### Custom Components

**Navbar** - Responsive navigation bar with:
- Logo and branding
- Desktop navigation menu
- Mobile hamburger menu
- Active route highlighting

## Setup Instructions

### Prerequisites

**Important**: This project requires Node.js 20.19+ or 22.12+ due to Vite v7 requirements.

If you're using an older Node version, you have two options:

1. **Upgrade Node.js** (Recommended)
   ```bash
   # Using nvm
   nvm install 20.19
   nvm use 20.19

   # Or download from nodejs.org
   # https://nodejs.org/
   ```

2. **Downgrade Vite** (Alternative)
   ```bash
   npm install -D vite@^5.0.0 @vitejs/plugin-react@^4.0.0
   ```

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Styling
- **ShadCN UI** - Component library
- **Radix UI** - Headless UI primitives
- **class-variance-authority** - Variant management
- **React Router 7** - Routing
- **Lucide React** - Icons

## Customization

### Adding New ShadCN Components

ShadCN components are designed to be copied into your project. To add more components:

1. Visit [ui.shadcn.com](https://ui.shadcn.com)
2. Browse available components
3. Copy the component code into `src/components/ui/`
4. Install any required dependencies

### Extending Component Variants

The project demonstrates how to extend ShadCN components with custom variants:

```typescript
import { cva } from "class-variance-authority";

const customButton = cva(
  "base-classes...",
  {
    variants: {
      variant: {
        // Original variants
        default: "...",
        // Your custom variants
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500...",
      },
    },
  }
);
```

### Theming

Colors and design tokens are configured via CSS variables in `src/index.css`. The project includes both light and dark theme configurations.

## Design System

This project follows standardized design patterns for consistency:

- **[Card Border Standards](./CARD_BORDER_STANDARDS.md)** - Official standards for all card borders and corner decorations
  - Zinc-based borders (`border-zinc-200 dark:border-zinc-700`)
  - Medium border radius (`rounded-md`)
  - Decorative corner elements
  - 2px border width (`border-2`)

When creating new card-based components, always reference the Card Border Standards to ensure visual consistency.

## Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

This is a demo project created for educational purposes.
