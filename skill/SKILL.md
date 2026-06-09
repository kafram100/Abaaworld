---
name: ABAA Project Development
description: Specialized skill for ABAA portfolio website development and customization
keywords: [abaa, portfolio, healthcare, react, typescript, tailwind, next.js]
version: "1.0.0"
author: ABAA Team
lastUpdated: 2026-06-08
---

# ABAA Project Development Skill

## Overview

This skill provides specialized guidance for developing, maintaining, and extending the ABAA personal portfolio and thought leadership website. It includes code patterns, component architecture, and best practices specific to this project.

## Scope

- **Project Type**: React/Next.js Portfolio Website
- **Framework**: Next.js 13+
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Components**: 14+ React components in a single-page scroll layout

## Key Features

### 1. Component Development

When creating new sections or components:

```typescript
// Always use TypeScript
interface SectionProps {
  children?: React.ReactNode;
  className?: string;
}

// Export as named export
export const NewSection: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};
```

**Best Practices**:
- Use TypeScript interfaces for all props
- Implement responsive design (mobile-first)
- Maintain consistent spacing and typography
- Keep components focused and single-purpose

### 2. Styling with Tailwind CSS

**Configuration**:
- Utility-first approach
- Custom theme in `tailwind.config.js`
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

**Common Classes**:
```typescript
// Spacing and sizing
className="py-16 px-6 md:px-8 lg:px-12"

// Typography
className="text-3xl md:text-5xl font-bold"

// Colors
className="text-gray-900 bg-white"

// Responsive grids
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### 3. Section Architecture

All major content sections follow this pattern:

1. **Container**: Full-width section with padding
2. **Content Wrapper**: Max-width container for readability
3. **Header**: Section title and subtitle
4. **Content**: Main section content
5. **CTA**: Call-to-action (if applicable)

### 4. Performance Optimization

- Use `next/image` for optimized images
- Implement lazy loading for below-fold sections
- Code splitting via Next.js automatic routes
- CSS purging via Tailwind (removes unused styles)

### 5. TypeScript Standards

- Strict mode enabled
- Type all component props
- Define interfaces for reusable patterns
- Use `React.FC<Props>` type annotations

## Common Patterns

### Hero Section Pattern

```typescript
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary to-secondary flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Headline</h1>
        <p className="text-xl md:text-2xl mt-4">Subheadline</p>
        <button className="mt-8 px-8 py-3 bg-white text-primary rounded">CTA</button>
      </div>
    </section>
  );
};
```

### Content Section Pattern

```typescript
const ContentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Section Title</h2>
        <div className="prose prose-lg">
          {/* Rich content here */}
        </div>
      </div>
    </section>
  );
};
```

### Form Section Pattern

```typescript
const FormSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
  };
  
  return (
    <section className="py-16">
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};
```

## Development Workflow

### File Structure
```
src/
├── components/    # All React components
├── pages/         # Page components
├── styles/        # Global styles
├── utils/         # Utility functions
└── lib/           # Library code
```

### Creating New Components
1. Create new file: `src/components/FeatureName.tsx`
2. Define TypeScript interface for props
3. Implement component with Tailwind classes
4. Export from component barrel (index.ts)
5. Import and use in ABAA.tsx

### Styling Checklist
- [ ] Mobile-first responsive design
- [ ] Consistent spacing (use 4px grid)
- [ ] Proper color contrast (WCAG AA)
- [ ] Readable typography
- [ ] Hover/active states for interactive elements

## Content Guidelines

- Keep section titles concise and benefit-focused
- Use short paragraphs for readability
- Include actionable CTAs
- Use real examples and anecdotes
- Maintain consistent brand voice

## Testing

- Component rendering tests
- Responsive design verification
- Form submission functionality
- Link integrity
- SEO meta tags
- Performance metrics

## Deployment

- Auto-deploy on git push to main
- Staging environment for testing
- Environment variables in `.env.local`
- Post-deployment smoke tests

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Handbook](https://react-typescript-cheatsheet.netlify.app/)
- ABAA Project Architecture Documentation (see architecture folder)

## Troubleshooting

### Build Errors
- Check TypeScript compilation: `npm run type-check`
- Verify imports use correct paths (@/components)
- Ensure all dependencies are installed

### Styling Issues
- Verify Tailwind config includes component files
- Check for conflicting CSS classes
- Clear Next.js cache: `rm -rf .next`

### Performance Issues
- Analyze bundle: `npm run analyze`
- Check image optimization
- Review API calls in Network tab
