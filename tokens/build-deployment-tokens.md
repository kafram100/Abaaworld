# ABAA Environment & Build Tokens

## Environment Configuration Tokens

### Development Environment (.env.local)
```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME=ABAA
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development

# Email Service
NEXT_PUBLIC_EMAIL_SERVICE=mailchimp
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_ENABLED=false

# Feature Flags
NEXT_PUBLIC_FEATURE_COMMENTS=false
NEXT_PUBLIC_FEATURE_NEWSLETTER=true
```

### Production Environment (.env.production)
```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME=ABAA
NEXT_PUBLIC_SITE_URL=https://abaa.com
NEXT_PUBLIC_ENV=production

# Email Service
NEXT_PUBLIC_EMAIL_SERVICE=mailchimp
MAILCHIMP_API_KEY=prod_api_key_here
MAILCHIMP_LIST_ID=prod_list_id_here

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_ENABLED=true

# Feature Flags
NEXT_PUBLIC_FEATURE_COMMENTS=true
NEXT_PUBLIC_FEATURE_NEWSLETTER=true
```

## Build Configuration Tokens

### Next.js Config (next.config.js)
```javascript
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  env: {
    SITE_NAME: 'ABAA',
  },
  
  redirects: async () => [
    {
      source: '/about',
      destination: '/#about',
      permanent: true,
    },
  ],
};
```

### TypeScript Config (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Package.json Scripts Tokens

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch",
    "analyze": "ANALYZE=true next build"
  }
}
```

## Deployment Environment Tokens

### Vercel Environment (automatic)
```env
NEXT_PUBLIC_VERCEL_ENV=production
NEXT_PUBLIC_VERCEL_URL=abaa.vercel.app
VERCEL_ENV=production
```

### Docker Environment (if self-hosted)
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Monitoring Tokens

### Web Vitals Metrics
```javascript
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  
  // Send to analytics
  navigator.sendBeacon('/api/analytics', body);
}
```

### Bundle Analysis Configuration
```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Analyze bundle
ANALYZE=true npm run build
```

## Security Tokens

### Headers Configuration (next.config.js)
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ]
}
```

### CSP (Content Security Policy)
```javascript
// Middleware or next.config.js
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  connect-src 'self' https://api.mailchimp.com;
  frame-ancestors 'none';
`
```

## API Integration Tokens

### API Route Examples
```typescript
// pages/api/subscribe.ts
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    try {
      // Integrate with email service
      const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/{LIST_ID}/members', {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending'
        })
      });
      
      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ error: 'Subscription failed' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
```

## Monitoring & Analytics Tokens

### Google Analytics Integration
```typescript
// lib/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag?.('config', GA_ID, {
    page_path: url,
  });
};

export const event = (name: string, params?: Record<string, any>) => {
  window.gtag?.('event', name, params);
};
```
