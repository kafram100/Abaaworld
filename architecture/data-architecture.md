# ABAA Data & Content Architecture

## Content Structure

### Static Content Source
All content lives in either:
1. **Component files**: Hardcoded content (initial approach)
2. **Content JSON**: Centralized content files
3. **Markdown**: MDX files for rich content
4. **CMS**: Optional content management system

### Recommended: Content Structure

```
src/
├── content/
│   ├── hero.json
│   ├── about.json
│   ├── books.json
│   ├── speaking.json
│   ├── values.json
│   └── metadata.json
```

### Content Schema Example

```json
{
  "hero": {
    "headline": "Welcome to ABAA's World",
    "subheadline": "Healthcare. Systems. Impact.",
    "ctaText": "Explore the Journey",
    "backgroundImage": "/images/hero-bg.jpg"
  },
  "about": {
    "title": "Meet ABAA",
    "subtitle": "A visionary in healthcare systems",
    "bio": "...",
    "image": "/images/portrait.jpg"
  },
  "books": [
    {
      "title": "Book Title",
      "author": "ABAA",
      "year": 2023,
      "image": "/images/book1.jpg",
      "link": "https://..."
    }
  ]
}
```

## Media Assets

### Image Guidelines
- **Hero images**: 1920x1080px, optimized
- **Section images**: 1200x600px
- **Portrait**: 400x400px minimum
- **Thumbnails**: 300x300px
- **Format**: WebP with JPEG fallback

### Asset Organization

```
public/
├── images/
│   ├── hero/
│   ├── sections/
│   ├── books/
│   ├── portraits/
│   └── icons/
├── videos/
└── documents/
```

## SEO & Metadata

### Page Metadata
```typescript
export const metadata = {
  title: "ABAA - Healthcare & Systems Thought Leader",
  description: "Explore ABAA's journey, impact, and thought leadership...",
  keywords: ["healthcare", "systems thinking", "leadership"],
  openGraph: {
    title: "ABAA",
    image: "/og-image.jpg"
  }
}
```

### Per-Section SEO
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Meta descriptions
- Schema.org markup

## Form Data Management

### Email Subscription Flow

```
User Input
    ↓
Client-side Validation
    ↓
API Route (/api/subscribe)
    ↓
Email Service (Mailchimp/SendGrid)
    ↓
Database/List
    ↓
Confirmation Email
```

### Integration Options
- **Mailchimp**: Free tier, good for small lists
- **SendGrid**: Professional, reliable
- **Substack**: Integrated subscription service
- **Custom API**: Build your own backend
