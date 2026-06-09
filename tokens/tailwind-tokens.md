# ABAA Tailwind Configuration Tokens

## Tailwind Config Reference

This file documents the Tailwind CSS configuration tokens used in the ABAA project.

### Tailwind Configuration File

```javascript
// tailwind.config.js

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#3B82F6',
          900: '#0F172A',
        },
        secondary: {
          50: '#f0f9ff',
          500: '#0EA5E9',
          900: '#0c4a6e',
        },
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

## Component-Level Tokens

### Button Tokens
```
Base Button:   bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark
Secondary:     bg-gray-200 text-gray-900 px-4 py-2 rounded font-medium
Outline:       border-2 border-primary text-primary px-4 py-2 rounded
Ghost:         text-primary px-4 py-2 rounded hover:bg-gray-100
```

### Section Tokens
```
Padding:       py-16 md:py-24 px-6 md:px-8 lg:px-12
Container:     max-w-6xl mx-auto
Full Width:    w-full
Typography:    prose prose-lg
```

### Card Tokens
```
Base:          bg-white rounded-lg shadow-md
Hover:         hover:shadow-lg transition-shadow
Border:        border border-gray-200
Padding:       p-6
```

## Responsive Token Usage

### Mobile-First Approach
```
xs:  320px - base/mobile styles
sm:  640px - tablet styles  
md:  768px - small desktop
lg:  1024px - desktop
xl:  1280px - large desktop
2xl: 1536px - extra large
```

### Example Pattern
```typescript
// Mobile first - styles applied at smallest breakpoint
className="text-lg md:text-2xl lg:text-4xl"

// Spacing responsive
className="px-4 md:px-6 lg:px-12"

// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Dark Mode Tokens (Future)

For future dark mode implementation:
```javascript
darkMode: 'class',

theme: {
  extend: {
    colors: {
      dark: {
        bg: '#0f1419',
        surface: '#1e2139',
        text: '#e5e7eb',
      }
    }
  }
}
```

## Performance Optimization Tokens

### PurgeCSS Configuration
Only includes classes used in component files:
```javascript
content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './public/**/*.html',
]
```

### Code-split Tokens
- Component-specific utilities only
- Shared utilities in global CSS
- Avoid arbitrary class usage

## Accessibility Tokens

### Color Contrast
- Primary text on white: 14:1 (WCAG AAA)
- Secondary text: 7:1 (WCAG AA)
- Interactive elements: 4.5:1 minimum

### Focus States
```
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
```

### Motion
```
transition-all duration-300 ease-in-out
```
