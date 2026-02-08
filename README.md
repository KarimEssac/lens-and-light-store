# 📷 Lens & Light Photography Store

A modern, fully responsive e-commerce platform for professional photography equipment built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- ✅ **Fully Responsive Design** - Mobile-first approach with adaptive layouts
- ✅ **Dark Mode Support** - Toggle between light and dark themes
- ✅ **Toast Notifications** - Color-coded notifications for user actions (cart, wishlist, orders)
- ✅ **Mobile Filter Modal** - Smooth sliding filter panel for mobile devices
- ✅ **Server-Side Rendering** - Built with Next.js App Router for optimal performance
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Product Catalog** - Advanced filtering and sorting capabilities
- ✅ **Shopping Cart** - Full cart management with localStorage persistence
- ✅ **Wishlist System** - Save favorite products for later
- ✅ **Checkout Flow** - Multi-step checkout with shipping address management
- ✅ **Payment Options** - Credit Card, PayPal, Apple Pay, Cash on Delivery
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
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCart.tsx        # Shopping cart management
│   │   ├── useWishlist.tsx    # Wishlist management
│   │   ├── useTheme.tsx       # Dark mode toggle
│   │   └── useToast.tsx       # Toast notifications
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

## 🔄 State Management

### Context Providers
- **ThemeProvider** - Light/dark mode with localStorage persistence
- **ToastProvider** - Global toast notification system
- **WishlistProvider** - Wishlist management with localStorage
- **CartProvider** - Shopping cart with localStorage and stock validation

### localStorage Keys
- `theme` - User's theme preference (light/dark)
- `cart` - Shopping cart items with quantities
- `wishlist` - Saved products
- `shippingAddress` - User's shipping address for checkout

### Toast Notification Types
- **Cart** (Blue) - Add to cart confirmations
- **Wishlist** (Pink) - Wishlist add/remove notifications
- **Success** (Green) - Order success, general success messages
- **Error** (Red) - Error messages
- **Info** (Gray) - General information, item removals

## 📄 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, featured products, and categories |
| `/catalog` | Product catalog with filters, sorting, and mobile filter modal |
| `/product/[id]` | Individual product details with add to cart/wishlist |
| `/cart` | Shopping cart overview with quantity management |
| `/checkout` | Checkout with shipping address and payment methods |
| `/wishlist` | Saved products for later purchase |
| `/privacy` | Privacy policy page |
| `/terms` | Terms of service page |
| `/refund-policy` | Refund and return policy |
| `/support` | Customer support and FAQ |
| `/track` | Order tracking page |
| `/returns` | Returns management page |
| `/stores` | Store locator page |

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)** - Form styling plugin
- **[Material Symbols](https://fonts.google.com/icons)** - Icon library
- **React Context API** - State management
- **localStorage API** - Client-side data persistence

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## ✨ Animations

### Custom Tailwind Animations
- `fade-in` - Smooth fade in effect
- `fade-out` - Smooth fade out effect
- `fade-in-up` - Fade in with upward motion
- `slide-in-right` - Slide in from right (toasts)
- `slide-in-left` - Slide in from left
- `slide-up` - Slide up from bottom (mobile filter modal)
- `scale-in` - Scale and fade in effect

### Interactive Elements
- Product card hover effects
- Button hover states
- Toast notification animations
- Modal slide animations
- Smooth page transitions

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

## ⚠️ Demo Mode

This is a **training and demonstration project**. The checkout process includes:
- **No real payment processing** - All payment forms are for demonstration only
- **Console logging** - Order data is logged to browser console for development
- **localStorage persistence** - Cart and user data saved locally
- **Demo warning banner** - Visible reminder on checkout page
- **Training placeholder text** - All payment inputs clearly marked as demo

**Do not enter real payment information.** This application is designed for educational purposes and portfolio demonstration.

## 📝 Key Features Breakdown

### Home Page
- Hero section with call-to-action
- Trust badges
- Category showcase
- Featured products grid
- Newsletter signup

### Product Catalog
- Advanced filtering (brand, price, etc.)
- **Mobile filter modal** with smooth slide-up animation
- Multiple sorting options
- Responsive product cards with wishlist hearts
- **Toast notifications** on add to cart/wishlist
- Pagination

### Product Details
- Image gallery with thumbnails
- Full specifications
- Add to cart functionality with quantity selector
- **Wishlist toggle** with instant feedback
- **Toast notifications** on actions
- Related products
- Trust badges (warranty, shipping, returns)

### Wishlist
- Grid view of saved products
- Add to cart directly from wishlist
- Remove items with confirmation
- **Toast notifications** on actions
- Persistent storage with localStorage

### Shopping Cart
- Quantity adjustment with stock validation
- Remove items
- Order summary with tax calculation
- Promo code input
- **Removed items notification** for out-of-stock products
- Trust badges
- Persistent storage with localStorage

### Checkout
- Multi-step progress indicator
- **Editable shipping address** with localStorage persistence
- **Multiple payment methods**:
  - Credit/Debit Card
  - PayPal
  - Apple Pay
  - Cash on Delivery (COD)
- Order review with itemized pricing
- **Demo mode warning** for training purposes
- **Success toast** with order confirmation
- **Console logging** of complete order data
- Security badges (PCI, SSL)

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

- [ ] User authentication and accounts
- [ ] Real payment gateway integration
- [ ] Product reviews and ratings system
- [ ] Order history and tracking
- [ ] Real-time inventory management
- [ ] Advanced search with autocomplete
- [ ] AI-powered product recommendations
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-currency support
- [ ] Product comparison feature
- [ ] Size guides and specifications filters

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
- Custom React hooks for reusable logic
- Context API for global state management
- Responsive design patterns
- Mobile-first approach
- Accessibility considerations
- SEO optimization
- Clean code principles
- localStorage for data persistence
- Toast notification system
- Smooth animations and transitions

### Key Technical Features
- **Server & Client Components** - Optimized rendering strategy
- **Dynamic Routing** - File-based routing with Next.js App Router
- **Form Validation** - Client-side validation for all forms
- **Error Handling** - Graceful error states and user feedback
- **Loading States** - Skeleton screens and loading indicators
- **Dark Mode** - System-aware theme with manual override
- **Responsive Images** - Optimized image loading
- **Code Splitting** - Automatic code splitting for optimal performance