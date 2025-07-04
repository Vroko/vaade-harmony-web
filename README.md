# VAADE Harmony Web Next.js Migration

This project has been migrated from Vite + React to Next.js for better server-side rendering and dynamic meta tags support.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

- Visit `http://localhost:3000` for the main app
- Visit `http://localhost:3000/view/[shareId]` for shared albums

## 📁 Project Structure

```
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   ├── _document.tsx     # Custom HTML document
│   ├── index.tsx         # Home page
│   └── view/
│       └── [shareId].tsx # Dynamic share pages with SSR
├── src/
│   ├── api.ts           # API functions
│   ├── types.ts         # TypeScript interfaces
│   ├── components/      # Reusable components
│   └── index.css        # Global styles
├── public/              # Static assets
└── next.config.js       # Next.js configuration
```

**Note**: This migration enables proper social media sharing with dynamic album covers and information. The old client-side approach couldn't provide dynamic meta tags to social media crawlers.
