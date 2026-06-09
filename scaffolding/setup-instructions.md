# ABAA Project Setup Instructions

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- TypeScript knowledge
- React fundamentals

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd abaa-project
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SITE_NAME=ABAA
NEXT_PUBLIC_SITE_URL=https://abaa.com
```

### 4. Development Server
```bash
npm run dev
# or
yarn dev
```
Server runs at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Initialization Checklist

- [ ] Install dependencies
- [ ] Set up environment variables
- [ ] Configure Tailwind CSS
- [ ] Set up TypeScript compiler
- [ ] Initialize git repository
- [ ] Create initial components
- [ ] Set up ESLint and Prettier
- [ ] Configure path aliases (@/components)

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS customization
- `package.json` - Dependencies and scripts
- `.env.local` - Environment variables
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Code formatting rules
