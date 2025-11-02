# Copilot Instructions for IDL-Carbon

This is a **Figma-to-React** conversion project demonstrating IBM Carbon Design System components built with React, TypeScript, Vite, and Tailwind CSS.

## Architecture Overview

- **Frontend**: React 18 with TypeScript, built using Vite
- **Styling**: Tailwind CSS with custom Carbon Design System color tokens
- **UI Components**: Official IBM Carbon components (@carbon/react) + custom Carbon-style components + shadcn/ui library (Radix UI primitives)
- **Assets**: Figma-generated SVG icons and images with specialized import aliases

## Key Development Patterns

### Figma Asset Integration

- **SVG Icons**: Stored as path strings in `src/imports/svg-*.ts` files, imported via `svgPaths.p<hash>`
- **Images**: Referenced via `figma:asset/<hash>.png` aliases configured in `vite.config.ts`
- **Components**: Large Figma-generated components in `src/imports/CarbonDesignSystem*.tsx`

### Component Architecture

- **Carbon Components**: Mix of official `@carbon/react` components and custom implementations in `App.tsx`
  - Official Carbon: Header, Button, Tile, Accordion components with proper Carbon props
  - Custom Carbon-style: Components following Carbon Design System patterns with exact color values
  - Import Carbon components with aliases to avoid conflicts: `Button as CarbonButton`
- **UI Library**: shadcn/ui components in `src/components/ui/` for complex interactions
- **Utility**: `cn()` function in `utils.ts` for conditional className merging

### Styling Conventions

- **CSS Variables**: Extensive use of custom properties in `globals.css` for theming
- **Carbon Colors**: Hardcoded hex values for Carbon Design System compliance
- **Typography**: Precise tracking values matching Carbon specs (e.g., `tracking-[0.0703px]`)
- **Layout**: Flexbox-first with specific gap values matching design specs

### State Management

- **Local State**: React `useState` for component-level interactions (accordions, toggles)
- **No Global State**: Simple application structure with props passing

## Development Commands

```bash
npm i              # Install dependencies
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
```

## File Organization Patterns

- `src/App.tsx` - Main application with inline Carbon components
- `src/components/ui/` - Reusable UI primitives (shadcn/ui)
- `src/components/figma/` - Figma-specific utilities (ImageWithFallback)
- `src/imports/` - Figma-generated assets and large components
- `src/styles/globals.css` - Global styles and CSS custom properties

## Critical Implementation Details

- **Vite Aliases**: Extensive alias configuration for package versions and Figma assets
- **Asset References**: Use `imgRender`, `imgRender1`, etc. for Figma images
- **Icon Usage**: SVG paths via `svgPaths.p<hash>` with `fill="currentColor"`
- **Responsive**: Mobile-first approach with `md:` and `lg:` breakpoints
- **Carbon Compliance**: Exact pixel values and colors from IBM Carbon Design System

When modifying this codebase, maintain the Figma-to-code workflow patterns and Carbon Design System visual fidelity.
