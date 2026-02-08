# 🤖 AI INSTRUCTIONS - READ FIRST

## CRITICAL RULES FOR ALL FILE OPERATIONS

### 1. FILE PATH DECLARATION
**ALWAYS state the complete file path before creating or modifying any file.**

Format:
```
Creating/Modifying: /src/components/layout/Header.tsx
```

### 2. NO CODE COMMENTS
**NEVER add comments in any code files you create or modify.**
- No `//` comments
- No `/* */` comments  
- No `#` comments
- No documentation comments
- Write self-documenting code with clear variable and function names

### 3. CLIENT COMPONENTS
Add `'use client'` at the top of files that use:
- `useState`, `useEffect`, or any React hooks
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`localStorage`, `window`, etc.)

### 4. NEXT.JS RULES
- Use `<Link>` from `next/link` for navigation, NOT `<a href>`
- Escape apostrophes in JSX: use `&apos;` not `'`
- Avoid `Math.random()` in render - use `useState(() => Math.random())`

### 5. TAILWIND CSS RULES
- **Cannot use** `group` class inside `@apply` directives
- Add `group` directly in JSX className instead

### 6. CONFIGURATION FILE FORMATS
- `next.config.js` - Must be `.js` (not `.ts`) and use `module.exports`
- `postcss.config.mjs` - Must be `.mjs` and use `export default`

---

# 🗂️ COMPLETE FILE STRUCTURE GUIDE
## Lens & Light Photography Store

---

## 📁 EXACT FOLDER STRUCTURE

```
lens-and-light-store/
│
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.ts
├── 📄 next.config.js
├── 📄 postcss.config.mjs
├── 📄 .gitignore
├── 📄 README.md
│
├── 📁 public/
│   └── 📁 images/
│
└── 📁 src/
    │
    ├── 📁 app/
    │   ├── 📄 layout.tsx
    │   ├── 📄 page.tsx
    │   ├── 📄 globals.css
    │   │
    │   ├── 📁 catalog/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 product/
    │   │   └── 📁 [id]/
    │   │       └── 📄 page.tsx
    │   │
    │   ├── 📁 cart/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 checkout/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 wishlist/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 privacy/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 terms/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 refund-policy/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 support/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 track/
    │   │   └── 📄 page.tsx
    │   │
    │   ├── 📁 returns/
    │   │   └── 📄 page.tsx
    │   │
    │   └── 📁 stores/
    │       └── 📄 page.tsx
    │
    ├── 📁 components/
    │   │
    │   ├── 📄 Providers.tsx
    │   ├── 📄 RemovedItemsNotification.tsx
    │   ├── 📄 LoadingSpinner.tsx
    │   ├── 📄 PageTransition.tsx
    │   │
    │   ├── 📁 layout/
    │   │   ├── 📄 Header.tsx
    │   │   ├── 📄 Footer.tsx
    │   │   └── 📄 Breadcrumbs.tsx
    │   │
    │   ├── 📁 home/
    │   │   ├── 📄 HeroSection.tsx
    │   │   ├── 📄 TrustBadges.tsx
    │   │   ├── 📄 CategorySection.tsx
    │   │   ├── 📄 FeaturedProducts.tsx
    │   │   └── 📄 Newsletter.tsx
    │   │
    │   ├── 📁 product/
    │   │   ├── 📄 ProductCard.tsx
    │   │   ├── 📄 ProductGrid.tsx
    │   │   ├── 📄 FilterSidebar.tsx
    │   │   ├── 📄 ProductGallery.tsx
    │   │   └── 📄 ProductInfo.tsx
    │   │
    │   ├── 📁 cart/
    │   │   ├── 📄 CartItem.tsx
    │   │   └── 📄 OrderSummary.tsx
    │   │
    │   └── 📁 checkout/
    │       ├── 📄 ProgressStepper.tsx
    │       └── 📄 PaymentForm.tsx
    │
    ├── 📁 styles/
    │   ├── 📄 colors.css
    │   ├── 📄 typography.css
    │   ├── 📄 components.css
    │   └── 📄 utilities.css
    │
    ├── 📁 lib/
    │   ├── 📄 products.ts
    │   └── 📄 constants.ts
    │
    ├── 📁 types/
    │   └── 📄 index.ts
    │
    └── 📁 hooks/
        ├── 📄 useCart.tsx
        ├── 📄 useTheme.tsx
        ├── 📄 useWishlist.tsx
        └── 📄 useToast.tsx
```

---

## 🎯 MODIFICATION GUIDE: "I Want to Change..."

### **DESIGN & STYLING**

#### Change the primary color
→ **File:** `/src/styles/colors.css`
→ **Find:** `--color-primary: #445964;`
→ **Also Update:** `/tailwind.config.ts` → colors → primary

#### Change fonts
→ **File:** `/src/styles/typography.css`
→ **And:** `/src/app/layout.tsx` (import statement)

#### Change border radius globally
→ **File:** `/tailwind.config.ts`
→ **Section:** `theme.extend.borderRadius`

#### Add custom CSS classes
→ **File:** `/src/styles/utilities.css` (for utilities)
→ **Or:** `/src/styles/components.css` (for component styles)

#### Change dark mode colors
→ **File:** `/src/styles/colors.css`
→ **Section:** `.dark { ... }`

#### Toggle dark/light theme
→ **Hook:** `useTheme()` from `/src/hooks/useTheme.tsx`
→ **Method:** `toggleTheme()`
→ **Used in:** Header (desktop and mobile menu)

---

### **NAVIGATION & LAYOUT**

#### Add/Remove navigation links
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `NAV_LINKS`
→ **Renders in:** `/src/components/layout/Header.tsx` (desktop nav & mobile menu)

#### Change logo or site name
→ **File:** `/src/components/layout/Header.tsx`
→ **Also:** `/src/lib/constants.ts` → `SITE_NAME`

#### Modify footer links
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `FOOTER_LINKS.shopGear` (matches header categories)
→ **Variable:** `FOOTER_LINKS.support`
→ **Variable:** `FOOTER_LINKS.legal`
→ **Renders in:** `/src/components/layout/Footer.tsx`

#### Change header behavior (sticky, transparent, etc.)
→ **File:** `/src/components/layout/Header.tsx`
→ **Class:** `sticky top-0 z-50`

#### Mobile menu customization
→ **File:** `/src/components/layout/Header.tsx`
→ **Features:** Hamburger menu with navigation, wishlist link, theme toggle
→ **Mobile view:** Shows logo, cart, hamburger on screens < 768px
→ **Desktop view:** Shows full navigation, search bar, theme toggle, wishlist, cart

---

### **HOME PAGE**

#### Change hero section text or image
→ **File:** `/src/components/home/HeroSection.tsx`

#### Add/Remove trust badges
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `TRUST_BADGES`
→ **Renders in:** `/src/components/home/TrustBadges.tsx`

#### Change categories shown
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `CATEGORIES`
→ **Renders in:** `/src/components/home/CategorySection.tsx`

#### Change newsletter signup
→ **File:** `/src/components/home/Newsletter.tsx`

#### Change featured products count
→ **File:** `/src/lib/products.ts`
→ **Function:** `getFeaturedProducts()` → `.slice(0, 4)` change the 4

#### Featured products grid layout
→ **File:** `/src/components/home/FeaturedProducts.tsx`
→ **Grid:** `grid-cols-2` (mobile) → `md:grid-cols-3` → `lg:grid-cols-4`

---

### **PRODUCTS**

#### Add/Edit/Remove products
→ **File:** `/src/lib/products.ts`
→ **Variable:** `products` array
→ **Format:** Follow the existing Product type structure

#### Change product card design
→ **File:** `/src/components/product/ProductCard.tsx`
→ **Features:** Wishlist heart button, Add to Cart button, stock badge on image, toast notifications on add actions

#### Product card responsive layout
→ **Mobile:** 2 cards per row (`grid-cols-2`)
→ **Tablet:** 3 cards per row (`md:grid-cols-3`)
→ **Desktop:** 3-4 cards per row (`lg:grid-cols-3` or `lg:grid-cols-4`)

#### Modify product filters
→ **File:** `/src/components/product/FilterSidebar.tsx`

#### Change product grid layout
→ **File:** `/src/components/product/ProductGrid.tsx`
→ **Grid:** `grid-cols-2 md:grid-cols-3 lg:grid-cols-3`
→ **Features:** Sort dropdown (Popular, Price Low-High, Price High-Low, Newest)

#### Product sorting options
→ **File:** `/src/components/product/ProductGrid.tsx`
→ **Options:** Most Popular (by rating), Price: Low to High, Price: High to Low, Newest First
→ **Logic:** Uses `useMemo` to sort products based on selected option

#### Modify product detail page layout
→ **File:** `/src/app/product/[id]/page.tsx` (structure)
→ **Gallery:** `/src/components/product/ProductGallery.tsx`
→ **Info Panel:** `/src/components/product/ProductInfo.tsx`

#### Add more product images
→ **File:** `/src/lib/products.ts`
→ **Field:** Add URLs to `images` array in product object

---

### **SHOPPING CART**

#### Change cart item design
→ **File:** `/src/components/cart/CartItem.tsx`

#### Modify order summary
→ **File:** `/src/components/cart/OrderSummary.tsx`

#### Change tax rate
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `TAX_RATE` (currently 0.085 = 8.5%)

#### Change free shipping threshold
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `FREE_SHIPPING_THRESHOLD`

---

### **WISHLIST SYSTEM**

#### Add item to wishlist
→ **Hook:** `useWishlist()` from `/src/hooks/useWishlist.tsx`
→ **Method:** `addToWishlist(product)`
→ **Used in:** ProductCard (heart button), ProductInfo

#### Remove from wishlist
→ **Hook:** `useWishlist()`
→ **Method:** `removeFromWishlist(productId)`
→ **Used in:** ProductCard, ProductInfo, Wishlist page

#### Check if item in wishlist
→ **Hook:** `useWishlist()`
→ **Method:** `isInWishlist(productId)` → returns boolean
→ **Used in:** ProductCard, ProductInfo (to show filled/unfilled heart)

#### Get wishlist count
→ **Hook:** `useWishlist()`
→ **Property:** `totalItems`
→ **Used in:** Header badge

#### Wishlist page
→ **File:** `/src/app/wishlist/page.tsx`
→ **Features:** Grid of wishlist items, Add to Cart, Remove buttons

---

### **CHECKOUT**

#### Modify checkout steps
→ **File:** `/src/components/checkout/ProgressStepper.tsx`
→ **Variable:** `steps` array

#### Change payment form fields
→ **File:** `/src/components/checkout/PaymentForm.tsx`

#### Add/Remove payment methods
→ **File:** `/src/components/checkout/PaymentForm.tsx`
→ **Section:** Payment method buttons

---

### **CART SYSTEM**

#### Add item to cart
→ **Hook:** `useCart()` from `/src/hooks/useCart.tsx`
→ **Method:** `addToCart(product, quantity)`
→ **Used in:** ProductInfo, ProductCard

#### Update cart quantity
→ **Hook:** `useCart()`
→ **Method:** `updateQuantity(productId, newQuantity)`
→ **Used in:** CartItem

#### Remove from cart
→ **Hook:** `useCart()`
→ **Method:** `removeFromCart(productId)`
→ **Used in:** CartItem

#### Get cart count
→ **Hook:** `useCart()`
→ **Property:** `totalItems`
→ **Used in:** Header badge

---

### **PRODUCTS FILTERING**

#### Filter products by category
→ **File:** `/src/app/catalog/page.tsx`
→ **Reads:** URL param `category`
→ **Uses:** `getProductsByCategory()` from products.ts

#### Filter by brand/price
→ **Component:** `/src/components/product/FilterSidebar.tsx`
→ **State:** `selectedBrands`, `selectedPriceRange`
→ **Parent:** Catalog page manages filter state

#### Product pagination
→ **Component:** `/src/components/product/ProductGrid.tsx`
→ **Logic:** 9 products per page, hides pagination if ≤9 items

#### Star ratings
→ **Components:** ProductCard, ProductInfo
→ **Logic:** Partial fill using overlapping divs with width percentage

---

### **PAGES**

#### Privacy Policy page
→ **File:** `/src/app/privacy/page.tsx`
→ **Features:** Information collection, usage, sharing, security, user rights

#### Terms of Service page
→ **File:** `/src/app/terms/page.tsx`
→ **Features:** Acceptance of terms, service usage, product info, orders, liability

#### Refund Policy page
→ **File:** `/src/app/refund-policy/page.tsx`
→ **Features:** Return window, process, non-returnable items, exchanges, shipping

#### Wishlist page
→ **File:** `/src/app/wishlist/page.tsx`
→ **Features:** Grid view of saved products, Add to Cart, Remove buttons

#### Checkout page
→ **File:** `/src/app/checkout/page.tsx`
→ **Features:** Editable shipping address (localStorage), Payment methods (Card, PayPal, Apple Pay, COD), Order summary, Success toast notification
→ **Shipping Address Storage:** localStorage with key `shippingAddress`
→ **Payment Methods:** Credit Card, PayPal, Apple Pay, Cash on Delivery
→ **Console Logging:** Order data logged to console on successful order placement
→ **Demo Mode:** Training placeholder warning, no real data processing

#### Support/FAQ page
→ **File:** `/src/app/support/page.tsx`
→ **Features:** Collapsible FAQ, contact methods

#### Order tracking
→ **File:** `/src/app/track/page.tsx`
→ **Features:** Timeline, order lookup

#### Returns
→ **File:** `/src/app/returns/page.tsx`
→ **Features:** Multi-step form, success state

#### Store locator
→ **File:** `/src/app/stores/page.tsx`
→ **Features:** Store cards, search, services

---

### **PROVIDERS & CONTEXT**

#### Root providers wrapper
→ **File:** `/src/components/Providers.tsx`
→ **Wraps:** ThemeProvider → ToastProvider → WishlistProvider → CartProvider
→ **Used in:** `/src/app/layout.tsx`

#### Theme provider
→ **File:** `/src/hooks/useTheme.tsx`
→ **Provides:** `theme`, `toggleTheme()`, `setTheme()`
→ **Storage:** localStorage with key `theme`

#### Wishlist provider
→ **File:** `/src/hooks/useWishlist.tsx`
→ **Provides:** `items`, `addToWishlist()`, `removeFromWishlist()`, `isInWishlist()`, `totalItems`
→ **Storage:** localStorage with key `wishlist`

#### Cart provider
→ **File:** `/src/hooks/useCart.tsx`
→ **Provides:** `items`, `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`, `totalItems`, `subtotal`, `removedItems`
→ **Storage:** localStorage with key `cart`

#### Toast provider
→ **File:** `/src/hooks/useToast.tsx`
→ **Provides:** `showToast(message, type, productName?)`
→ **Types:** 'cart' (blue), 'wishlist' (pink), 'success' (green), 'error' (red), 'info' (gray)
→ **Features:** Auto-dismiss after 4 seconds, manual close button, stacks multiple toasts
→ **Usage:** `showToast('Added to Cart!', 'cart', product.name)`

---

### **TOAST NOTIFICATIONS**

#### Show a toast notification
→ **Hook:** `useToast()` from `/src/hooks/useToast.tsx`
→ **Method:** `showToast(message, type, productName?)`
→ **Used in:** ProductCard, ProductInfo, PaymentForm

#### Toast types and colors
→ **'cart'** - Blue theme (shopping cart icon)
→ **'wishlist'** - Pink theme (heart icon)
→ **'success'** - Green theme (check circle icon)
→ **'error'** - Red theme (error icon)
→ **'info'** - Gray theme (info icon)

#### Toast behavior
→ **Auto-dismiss:** 4 seconds
→ **Manual close:** Click X button
→ **Stacking:** Multiple toasts stack vertically
→ **Position:** Fixed top-right corner (z-index 9999)
→ **Animation:** Slide in from right, scale animation on icon

#### Example usage
```typescript
const { showToast } = useToast();

showToast('Added to Cart!', 'cart', product.name);
showToast('Added to Wishlist!', 'wishlist', product.name);
showToast('Order Placed Successfully!', 'success', 'Thank you!');
```

---

### **CHECKOUT SYSTEM**

#### Shipping address management
→ **Storage:** localStorage with key `shippingAddress`
→ **Fields:** fullName, addressLine1, addressLine2, city, state, zipCode, country
→ **Edit mode:** Click "Change" button to edit saved address
→ **Validation:** Required fields marked with asterisk (*)

#### Payment methods
→ **Credit Card:** Form with cardholder name, card number, expiry, CVV
→ **PayPal:** Shows redirect message (demo mode)
→ **Apple Pay:** Touch ID/Face ID option (demo mode)
→ **Cash on Delivery (COD):** Pay at delivery with cash

#### Order processing
→ **Console logging:** Full order data logged on successful order
→ **Order data includes:** orderId, timestamp, customer info, payment method, items, totals
→ **Success toast:** Green toast notification shows before redirect
→ **Cart clearing:** Cart empties after successful order
→ **Redirect:** Redirects to home page after 3 seconds

#### Demo mode notice
→ **Warning banner:** Yellow banner warns this is training project
→ **Placeholder text:** All inputs have "(Demo only)" in placeholders
→ **No processing:** No real payment processing occurs

---

### **METADATA & SEO**

#### Change page titles/descriptions
→ **File:** `/src/app/layout.tsx`
→ **Variable:** `metadata` object

#### Add favicon
→ **File:** `/src/app/layout.tsx`
→ **Location:** Put favicon in `/public/` folder
→ **Add:** `<link rel="icon" href="/favicon.ico" />` in `<head>`

---

## 🚀 COMMON TASKS

### Task: Add Cart Functionality to Product Card
1. Import: `import { useCart } from '@/hooks/useCart'`
2. Get method: `const { addToCart } = useCart()`
3. Add button with: `onClick={() => addToCart(product, 1)}`

### Task: Add Wishlist Functionality
1. Import: `import { useWishlist } from '@/hooks/useWishlist'`
2. Get methods: `const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()`
3. Check status: `const inWishlist = isInWishlist(product.id)`
4. Toggle: `onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}`

### Task: Add Theme Toggle
1. Import: `import { useTheme } from '@/hooks/useTheme'`
2. Get methods: `const { theme, toggleTheme } = useTheme()`
3. Add button: `onClick={toggleTheme}`
4. Show icon: `{theme === 'light' ? 'dark_mode' : 'light_mode'}`

### Task: Show Toast Notification
1. Import: `import { useToast } from '@/hooks/useToast'`
2. Get method: `const { showToast } = useToast()`
3. Show toast: `showToast('Message', 'type', 'Optional product name')`
4. Types: 'cart' (blue), 'wishlist' (pink), 'success' (green), 'error' (red), 'info' (gray)

### Task: Create New Page
1. Create folder: `/src/app/pagename/`
2. Create file: `/src/app/pagename/page.tsx`
3. Add `'use client'` if needed
4. Export default component

### Task: Add Product
1. Open: `/src/lib/products.ts`
2. Add to `products` array with all required fields
3. Product will auto-appear in catalog

### Task: Change Filter Logic
1. Open: `/src/app/catalog/page.tsx`
2. Modify `filteredProducts` useMemo logic
3. FilterSidebar receives callbacks as props

---

## 📝 TYPE DEFINITIONS

**All types in:** `/src/types/index.ts`

Key types:
- `Product` - product data structure
- `CartItem` - { product: Product, quantity: number }
- `Breadcrumb` - { label: string, href?: string }

---

## 💡 PROJECT STACK

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols Outlined
- **State Management:** React Context (Cart, Wishlist, Theme, Toast)
- **Storage:** localStorage (cart, wishlist, theme, shipping address persistence)
- **Notifications:** Global toast system with color-coded types
- **Responsive:** Mobile-first design with hamburger menu

---

## 📂 QUICK FILE REFERENCE

### Pages (Routes)
- Home: `/src/app/page.tsx`
- Catalog: `/src/app/catalog/page.tsx`
- Product Detail: `/src/app/product/[id]/page.tsx`
- Cart: `/src/app/cart/page.tsx`
- Checkout: `/src/app/checkout/page.tsx`
- Wishlist: `/src/app/wishlist/page.tsx`
- Privacy Policy: `/src/app/privacy/page.tsx`
- Terms of Service: `/src/app/terms/page.tsx`
- Refund Policy: `/src/app/refund-policy/page.tsx`
- Support: `/src/app/support/page.tsx`
- Track Order: `/src/app/track/page.tsx`
- Returns: `/src/app/returns/page.tsx`
- Store Locator: `/src/app/stores/page.tsx`

### Layout Components
- Header: `/src/components/layout/Header.tsx` (with mobile menu)
- Footer: `/src/components/layout/Footer.tsx`
- Breadcrumbs: `/src/components/layout/Breadcrumbs.tsx`

### Home Components
- HeroSection: `/src/components/home/HeroSection.tsx`
- TrustBadges: `/src/components/home/TrustBadges.tsx`
- CategorySection: `/src/components/home/CategorySection.tsx`
- FeaturedProducts: `/src/components/home/FeaturedProducts.tsx`
- Newsletter: `/src/components/home/Newsletter.tsx`

### Product Components
- ProductCard: `/src/components/product/ProductCard.tsx` (with cart & wishlist buttons)
- ProductGrid: `/src/components/product/ProductGrid.tsx` (with sorting)
- FilterSidebar: `/src/components/product/FilterSidebar.tsx`
- ProductGallery: `/src/components/product/ProductGallery.tsx`
- ProductInfo: `/src/components/product/ProductInfo.tsx` (with wishlist toggle, toast notifications)

### Cart Components
- CartItem: `/src/components/cart/CartItem.tsx`
- OrderSummary: `/src/components/cart/OrderSummary.tsx`

### Checkout Components
- ProgressStepper: `/src/components/checkout/ProgressStepper.tsx`
- PaymentForm: `/src/components/checkout/PaymentForm.tsx` (with shipping address, payment methods, order processing)

### Providers
- Providers: `/src/components/Providers.tsx` (wraps all context providers: Theme, Toast, Wishlist, Cart)

### Data & Logic
- Products Data: `/src/lib/products.ts`
- Constants: `/src/lib/constants.ts`
- Type Definitions: `/src/types/index.ts`

### Hooks
- Cart Hook: `/src/hooks/useCart.tsx`
- Theme Hook: `/src/hooks/useTheme.tsx`
- Wishlist Hook: `/src/hooks/useWishlist.tsx`
- Toast Hook: `/src/hooks/useToast.tsx`

### Styles
- Colors: `/src/styles/colors.css`
- Typography: `/src/styles/typography.css`
- Components: `/src/styles/components.css`
- Utilities: `/src/styles/utilities.css`
- Global: `/src/app/globals.css`

### Configuration
- Tailwind: `/tailwind.config.ts`
- Next.js: `/next.config.js`
- PostCSS: `/postcss.config.mjs`
- TypeScript: `/tsconfig.json`
- Package: `/package.json`

---

## 🎨 RESPONSIVE DESIGN BREAKPOINTS

- **Mobile:** < 768px (md breakpoint)
  - 2 product cards per row
  - Hamburger menu
  - Only logo, cart, and menu button visible
  
- **Tablet:** 768px - 1024px (md to lg)
  - 3 product cards per row
  - Full navigation visible
  - Search bar appears
  
- **Desktop:** > 1024px (lg)
  - 3-4 product cards per row
  - All features visible
  - Theme toggle, wishlist in header

---

## 🔄 STATE PERSISTENCE

All state is persisted to localStorage:
- **Cart:** `localStorage.getItem('cart')`
- **Wishlist:** `localStorage.getItem('wishlist')`
- **Theme:** `localStorage.getItem('theme')`
- **Shipping Address:** `localStorage.getItem('shippingAddress')`

Data automatically syncs between tabs and persists across sessions.

---

**Last Updated:** February 2026 (with toast notifications, checkout system, shipping address, payment methods)