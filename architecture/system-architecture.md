# ABAA Technical Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer (Browser)                │
│  ┌────────────────────────────────────────────────────┐ │
│  │           React Components (TSX)                    │ │
│  │  - Navigation                                       │ │
│  │  - Page Sections (11 major sections)               │ │
│  │  - Footer                                           │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Styling & Presentation Layer                │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Tailwind CSS                                       │ │
│  │  - Utility-first styling                           │ │
│  │  - Responsive design                               │ │
│  │  - Custom theme (colors, spacing, fonts)           │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                 Runtime Environment                      │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Next.js / React                                   │ │
│  │  - Server-side rendering (SSR)                     │ │
│  │  - Static site generation (SSG)                    │ │
│  │  - API routes (optional)                           │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Deployment & Hosting Layer                  │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Vercel / Node.js Server                           │ │
│  │  - CDN for static content                          │ │
│  │  - Auto-scaling                                    │ │
│  │  - Performance optimization                        │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
ABAA (Index)
├── Navigation
│   ├── Logo
│   └── Links
├── main
│   ├── HeroSection
│   ├── MeetAbaaSection
│   ├── FounderJourneySection
│   ├── WhatIBuildSection
│   ├── GlobalImpactSection
│   ├── BooksSection
│   ├── PracticeAuthoritySection
│   ├── SpeakingSection
│   ├── ValuesSection
│   ├── ReflectionsSection
│   ├── FinalConversionSection
│   └── EmailSection
└── Footer
```

## Data Flow

### Static Content
- All content served as static HTML
- Pre-rendered at build time
- No runtime database calls required
- Fast page loads and optimal SEO

### Form Submissions
```
EmailSection (Component)
    ↓
Form Input (Email)
    ↓
Email Service Provider (Mailchimp, SendGrid, etc.)
    ↓
Subscriber Database
```

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React/TypeScript | UI components |
| **Styling** | Tailwind CSS | Responsive design |
| **Framework** | Next.js | Server rendering & optimization |
| **Build** | Webpack (via Next.js) | Module bundling |
| **Deployment** | Vercel | Hosting & CDN |
| **Version Control** | Git | Code management |

## Performance Considerations

- **Lazy Loading**: Sections load as user scrolls
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic per-route
- **CSS Optimization**: Tailwind purges unused styles
- **Caching**: Browser cache + CDN caching
