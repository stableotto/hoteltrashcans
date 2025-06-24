# Astro Website Project Plan

## 🏗️ Project Structure
```
hoteltrashcans/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   └── collections/
│   │       └── [slug].astro
│   ├── content/
│   │   ├── config.ts
│   │   └── collections/
│   │       ├── luxury-hotel-collection.md
│   │       ├── modern-office-collection.md
│   │       ├── vintage-restaurant-collection.md
│   │       ├── eco-friendly-collection.md
│   │       ├── minimalist-collection.md
│   │       ├── industrial-collection.md
│   │       ├── boutique-hotel-collection.md
│   │       ├── premium-spa-collection.md
│   │       └── executive-collection.md
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ClienteleSection.astro
│   │   ├── CollectionsGrid.astro
│   │   ├── ProductShowcase.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── CollectionLayout.astro
│   └── styles/
│       ├── global.css
│       ├── components.css
│       └── responsive.css
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

## 📋 Implementation Steps

### Step 1: Initialize Astro Project
- [x] Create Astro project with TypeScript support
- [x] Configure astro.config.mjs for Cloudflare Pages
- [x] Set up package.json with required dependencies

### Step 2: Content Collections Setup
- [x] Configure content collections in src/content/config.ts
- [x] Create 9 collection markdown files with frontmatter:
  - title, slug, description, coverImage
  - heroImage, mainProductImage, colorVariations array
  - buyNowLink, downloadPdfLink

### Step 3: Base Layout & SEO
- [x] Create BaseLayout.astro with:
  - HTML structure with semantic elements
  - Google Fonts integration (Avenir Next/Nunito Sans, Roboto)
  - SEO component integration
  - Global CSS imports
- [x] Create SEO.astro component for meta tags, Open Graph, canonical URLs

### Step 4: Global Styles
- [x] Create global.css with:
  - CSS reset and base styles
  - Font family definitions
  - Mobile-first responsive approach
  - CSS custom properties for theming
- [x] Create components.css for reusable component styles
- [x] Create responsive.css for breakpoint-specific styles

### Step 5: Header Component
- [x] Create Header.astro with:
  - Logo on left, navigation on right
  - Hamburger menu for mobile
  - Vanilla JavaScript for mobile menu toggle
  - Responsive design

### Step 6: Home Page Components
- [x] Hero.astro: Full-width background image with text overlay
- [x] ClienteleSection.astro: Company logos grid
- [x] CollectionsGrid.astro: 2x2 responsive grid (3x3 on larger screens)
- [x] ProductShowcase.astro: Image gallery with lazy loading
- [x] Footer.astro: Site navigation and copyright

### Step 7: Home Page Assembly
- [x] Create index.astro combining all components
- [x] Implement proper semantic HTML structure
- [x] Add lazy loading for images
- [x] Configure R2 image URLs

### Step 8: Collection Pages
- [x] Create [slug].astro dynamic route
- [x] Create CollectionLayout.astro for collection page structure
- [x] Implement:
  - Hero image section
  - Title and description
  - Main product image
  - Color variations grid (responsive)
  - Call-to-action section with image and buttons

### Step 9: SEO & Performance
- [x] Generate sitemap.xml
- [x] Create robots.txt
- [x] Add Open Graph and Twitter meta tags
- [x] Implement canonical URLs
- [x] Optimize image loading with lazy loading
- [x] Use WebP format recommendations in comments

### Step 10: Accessibility
- [x] Add alt text to all images
- [x] Implement proper heading hierarchy
- [x] Use semantic HTML elements
- [x] Ensure keyboard navigation for mobile menu
- [x] Add ARIA labels where needed

### Step 11: Cloudflare Integration
- [x] Configure astro.config.mjs for Cloudflare Pages
- [x] Set up R2 image URLs in configuration
- [x] Add deployment instructions
- [x] Create environment variable setup guide

### Step 12: Documentation
- [x] Create comprehensive README.md
- [x] Add Cloudflare Pages deployment guide
- [x] Include R2 setup instructions
- [x] Add development and build commands

## 🌐 Cloudflare R2 Image URLs Structure
```
https://your-r2-domain.com/
├── hero/
│   └── hero-bg.webp
├── clientele/
│   ├── company-1-logo.webp
│   ├── company-2-logo.webp
│   └── ...
├── collections/
│   ├── covers/
│   │   ├── luxury-hotel.webp
│   │   └── ...
│   ├── heroes/
│   │   ├── luxury-hotel-hero.webp
│   │   └── ...
│   ├── main-products/
│   │   ├── luxury-hotel-main.webp
│   │   └── ...
│   └── variations/
│       ├── luxury-hotel-var-1.webp
│       └── ...
└── showcase/
    ├── product-1.webp
    └── ...
```

## 📱 Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🎨 Design Specifications
- **Colors**: Dark hero backgrounds, white text overlays, professional color scheme
- **Typography**: 
  - Headings: Avenir Next (fallback: Nunito Sans)
  - Body: Roboto
- **Grid**: CSS Grid and Flexbox for responsive layouts
- **Images**: WebP format, lazy loading, R2 CDN delivery

## 🚀 Deployment
1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure environment variables for R2 URLs
5. Deploy and test responsive design across devices 