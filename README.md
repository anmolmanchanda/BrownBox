# EcoPack Solutions - B2B Sustainable Packaging E-Commerce Platform

A production-grade, gallery-style e-commerce platform for sustainable packaging solutions, built with Next.js 15, TypeScript, and modern web technologies.

## 🌟 Features

### Core Functionality
- **Gallery-Style Product Presentation**: Masonry layout with interactive hover effects
- **Advanced Animations**: Framer Motion powered transitions and parallax effects
- **Sustainability Metrics**: Real-time environmental impact visualization
- **B2B Features**: Bulk pricing tiers, custom quotes, and volume discounts
- **Mobile-First Design**: Fully responsive with touch-optimized interactions

### Technical Highlights
- **Performance Optimized**: ISR, Edge Runtime, and streaming SSR
- **Type-Safe**: Full TypeScript with strict mode
- **SEO Ready**: Dynamic meta tags, structured data, and sitemap generation
- **Accessible**: WCAG 2.1 AA compliant with Radix UI components
- **Secure**: CSP headers, input sanitization, and rate limiting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/sustainable-packaging-platform.git

# Navigate to project directory
cd sustainable-packaging-platform

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing pages group
│   ├── (shop)/           # E-commerce pages group
│   ├── api/              # API routes
│   └── admin/            # Admin dashboard
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── product/          # Product-specific components
│   ├── layouts/          # Layout components
│   └── home/             # Homepage sections
├── lib/                   # Utility functions
│   ├── shopify/          # Shopify integration
│   ├── animations/       # Animation configs
│   └── utils/            # Helper functions
├── types/                 # TypeScript definitions
├── stores/                # Zustand state management
└── hooks/                 # Custom React hooks
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.5+
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **State Management**: Zustand
- **Data Fetching**: TanStack Query v5

### Backend & Infrastructure
- **API**: Next.js API Routes with Edge Runtime
- **Commerce**: Shopify Storefront API
- **Database**: PostgreSQL (Neon/Supabase)
- **Caching**: Redis (Upstash)
- **Storage**: Cloudflare R2/AWS S3
- **Email**: Resend/SendGrid

### DevOps & Deployment
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry + Vercel Analytics
- **Testing**: Vitest + Playwright
- **Code Quality**: ESLint + Prettier

## 🎨 Key Features Implementation

### Gallery-Style Product Display
- Masonry grid layout with responsive columns
- Lazy loading with blur placeholders
- Virtual scrolling for large catalogs
- Filter and sort capabilities

### Interactive Hover Effects
- 3D card transformations
- Sustainability metrics overlay
- Quick action buttons
- Smooth spring animations

### Sustainability Dashboard
- Real-time CO₂ savings calculator
- Recyclability percentage display
- Biodegradability timeline
- Environmental impact score

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Shopify
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token

# Database
DATABASE_URL=postgresql://...

# Authentication
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000

# Email
RESEND_API_KEY=your-key

# WhatsApp
WHATSAPP_API_KEY=your-key

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run format       # Format with Prettier

# Analysis
npm run analyze      # Bundle size analysis
```

## 🚀 Deployment

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

```bash
# Manual deployment
vercel --prod
```

### Docker Deployment

```bash
# Build image
docker build -t ecopack-platform .

# Run container
docker run -p 3000:3000 ecopack-platform
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Performance Testing
- Lighthouse CI integration
- Core Web Vitals monitoring
- Load testing with k6

## 📊 Performance Targets

- **LCP**: < 1.5s
- **FID**: < 50ms
- **CLS**: < 0.05
- **INP**: < 150ms
- **TTFB**: < 400ms

## 🔒 Security

- Input sanitization with DOMPurify
- SQL injection prevention
- XSS protection with CSP headers
- CSRF tokens for forms
- Rate limiting (100 req/min)
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- shadcn for the UI component system
- All contributors and maintainers

## 📞 Support

For support, email support@ecopacksolutions.com or open an issue on GitHub.

---

Built with 💚 for a sustainable future