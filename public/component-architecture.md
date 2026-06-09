# ABAA Component Architecture

## Section Component Pattern

Each major section follows a consistent pattern:

```typescript
// Example: BooksSection.tsx
const BooksSection = () => {
  return (
    <section className=\"section-container\">
      <div className=\"content-wrapper\">
        <SectionHeader 
          title=\"Books & Ideas\"
          subtitle=\"Thought leadership publications\"
        />
        <SectionContent>
          {/* Main content */}
        </SectionContent>
        <SectionCTA />
      </div>
    </section>
  );
};
```

## Component Breakdown

### Navigation Component
**Purpose**: Header with logo and site links  
**Props**: 
- `siteTitle?: string`
- `links?: NavLink[]`

### Hero Section
**Purpose**: Magnetic opening, first impression  
**Content**: Hero image/video, headline, subheadline, CTA

### Information Sections (2-10)
**Pattern**: Title + Content + Optional CTA  
**Key Sections**:
- MeetAbaaSection - Personal introduction
- FounderJourneySection - Origin story
- WhatIBuildSection - Products/services
- GlobalImpactSection - Reach and influence
- BooksSection - Publications
- PracticeAuthoritySection - Professional credentials
- SpeakingSection - Speaking history
- ValuesSection - Core values
- ReflectionsSection - Philosophical insights

### Email Section
**Purpose**: Call-to-action for subscriber signup  
**Features**:
- Email input field
- Subscribe button
- Success/error feedback
- Privacy assurance message

### Footer
**Purpose**: Site navigation and legal info  
**Content**:
- Copyright notice
- Links to social profiles
- Legal links (Privacy, Terms)
- Contact information

## Reusable Component Patterns

### SectionHeader
```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}
```

### SectionContent
```typescript
interface SectionContentProps {
  children: React.ReactNode;
  layout?: 'single' | 'two-column' | 'grid';
}
```

### Card Component
Used in various sections for content cards:
```typescript
interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}
```

## State Management

- **Minimal state**: Mostly presentational components
- **Form state**: EmailSection uses local state
- **Navigation state**: Active section tracking (optional)
- **Theme state**: Light/dark mode (future enhancement)

## Styling Strategy

- **Utility classes**: Tailwind CSS for all styling
- **Component classes**: Minimal custom CSS
- **Responsive breakpoints**: sm, md, lg, xl, 2xl
- **Dark mode**: Configurable via Tailwind
