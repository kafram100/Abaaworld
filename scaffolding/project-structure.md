# ABAA Project Scaffolding

## Project Structure

```
abaa-project/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MeetAbaaSection.tsx
│   │   ├── FounderJourneySection.tsx
│   │   ├── WhatIBuildSection.tsx
│   │   ├── GlobalImpactSection.tsx
│   │   ├── BooksSection.tsx
│   │   ├── PracticeAuthoritySection.tsx
│   │   ├── SpeakingSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── ReflectionsSection.tsx
│   │   ├── FinalConversionSection.tsx
│   │   ├── EmailSection.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── ABAA.tsx (Main Index Page)
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   └── lib/
├── public/
│   ├── images/
│   └── assets/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Component Naming Convention

All components follow the pattern: `[Feature]Section.tsx` or `[Feature].tsx`

- Sections represent major content blocks in the portfolio
- Components are modular and reusable
- Tailwind CSS for styling

## Key Folders

| Folder | Purpose |
|--------|---------|
| `components` | Reusable React components |
| `pages` | Main page components (ABAA.tsx) |
| `styles` | Global CSS and Tailwind configuration |
| `utils` | Utility functions and helpers |
| `lib` | Library code and services |
| `public` | Static assets and images |

## Build System

- **Framework**: React / Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: npm / yarn
