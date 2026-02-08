# 📷 Lens & Light Photography Store

A modern, fully responsive e-commerce platform for professional photography equipment built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- ✅ **Fully Responsive Design** - Mobile-first approach with adaptive layouts
- ✅ **Dark Mode Support** - Toggle between light and dark themes
- ✅ **Server-Side Rendering** - Built with Next.js App Router for optimal performance
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Product Catalog** - Advanced filtering and sorting capabilities
- ✅ **Shopping Cart** - Full cart management functionality
- ✅ **Checkout Flow** - Multi-step checkout process
- ✅ **SEO Optimized** - Proper metadata and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Extract the project files**
2. **Navigate to the project directory**
   ```bash
   cd lens-and-light-store
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lens-and-light-store/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── catalog/            # Product catalog
│   │   ├── product/[id]/       # Product details (dynamic)
│   │   ├── cart/               # Shopping cart
│   │   └── checkout/           # Checkout process
│   │
│   ├── components/             # React components
│   │   ├── layout/            # Header, Footer, Breadcrumbs
│   │   ├── home/              # Home page components
│   │   ├── product/           # Product-related components
│   │   ├── cart/              # Cart components
│   │   └── checkout/          # Checkout components
│   │
│   ├── styles/                # CSS modules
│   │   ├── colors.css         # Color variables
│   │   ├── typography.css     # Typography styles
│   │   ├── components.css     # Component styles
│   │   └── utilities.css      # Utility classes
│   │
│   ├── lib/                   # Utilities and data
│   │   ├── products.ts        # Product data
│   │   └── constants.ts       # App constants
│   │
│   └── types/                 # TypeScript definitions
│       └── index.ts
│
├── public/                    # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: `#445964` - Main brand color
- **Header Dark**: `#263238` - Darker accent
- **Background Light**: `#f7f7f7` - Light mode background
- **Background Dark**: `#171a1b` - Dark mode background

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 📄 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, featured products, and categories |
| `/catalog` | Product catalog with filters and sorting |
| `/product/[id]` | Individual product details page |
| `/cart` | Shopping cart overview |
| `/checkout` | Secure checkout process |

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Material Symbols](https://fonts.google.com/icons)** - Icon library

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Key Features Breakdown

### Home Page
- Hero section with call-to-action
- Trust badges
- Category showcase
- Featured products grid
- Newsletter signup

### Product Catalog
- Advanced filtering (brand, price, etc.)
- Multiple sorting options
- Grid/list view toggle
- Pagination
- Responsive product cards

### Product Details
- Image gallery with thumbnails
- Full specifications
- Add to cart functionality
- Related products
- Customer reviews section (UI ready)

### Shopping Cart
- Quantity adjustment
- Remove items
- Order summary
- Promo code input
- Trust badges

### Checkout
- Multi-step progress indicator
- Shipping address form
- Payment method selection
- Order review
- Security badges

## 🔐 Security Features

- SSL encryption indicators
- PCI compliance badges
- Secure payment gateway ready
- Input validation
- XSS protection

## 🚀 Performance Optimizations

- Server-side rendering
- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- Optimized fonts

## 📈 Future Enhancements

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Real-time inventory
- [ ] Advanced search
- [ ] Product recommendations
- [ ] Email notifications
- [ ] Admin dashboard

## 📞 Support

For questions or support, please contact:
- Email: support@lenslight.com
- Phone: 1-800-GEAR-NOW

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Development

Built with modern web development best practices:
- Component-based architecture
- TypeScript for type safety
- Responsive design patterns
- Accessibility considerations
- SEO optimization
- Clean code principles

---

**Made with ❤️ for photographers everywhere**# lens-and-light-store
