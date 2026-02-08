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
    │   ├── 📁 account/
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
        └── 📄 useTheme.ts
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

---

### **NAVIGATION & LAYOUT**

#### Add/Remove navigation links
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `NAV_LINKS`
→ **Renders in:** `/src/components/layout/Header.tsx`

#### Change logo or site name
→ **File:** `/src/components/layout/Header.tsx`
→ **Also:** `/src/lib/constants.ts` → `SITE_NAME`

#### Modify footer links
→ **File:** `/src/lib/constants.ts`
→ **Variable:** `FOOTER_LINKS`
→ **Renders in:** `/src/components/layout/Footer.tsx`

#### Change header behavior (sticky, transparent, etc.)
→ **File:** `/src/components/layout/Header.tsx`
→ **Class:** `sticky top-0 z-50`

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

---

### **PRODUCTS**

#### Add/Edit/Remove products
→ **File:** `/src/lib/products.ts`
→ **Variable:** `products` array
→ **Format:** Follow the existing Product type structure

#### Change product card design
→ **File:** `/src/components/product/ProductCard.tsx`

#### Modify product filters
→ **File:** `/src/components/product/FilterSidebar.tsx`

#### Change product grid layout (2, 3, 4 columns)
→ **File:** `/src/components/product/ProductGrid.tsx`
→ **Line:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
→ **Change:** `lg:grid-cols-3` to desired number

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

#### Account page
→ **File:** `/src/app/account/page.tsx`

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
- **State:** React Context (Cart)
- **Storage:** localStorage (cart persistence)

---

## 📂 QUICK FILE REFERENCE

### Pages (Routes)
- Home: `/src/app/page.tsx`
- Catalog: `/src/app/catalog/page.tsx`
- Product Detail: `/src/app/product/[id]/page.tsx`
- Cart: `/src/app/cart/page.tsx`
- Checkout: `/src/app/checkout/page.tsx`
- Account: `/src/app/account/page.tsx`
- Support: `/src/app/support/page.tsx`
- Track Order: `/src/app/track/page.tsx`
- Returns: `/src/app/returns/page.tsx`
- Store Locator: `/src/app/stores/page.tsx`

### Layout Components
- Header: `/src/components/layout/Header.tsx`
- Footer: `/src/components/layout/Footer.tsx`
- Breadcrumbs: `/src/components/layout/Breadcrumbs.tsx`

### Home Components
- HeroSection: `/src/components/home/HeroSection.tsx`
- TrustBadges: `/src/components/home/TrustBadges.tsx`
- CategorySection: `/src/components/home/CategorySection.tsx`
- FeaturedProducts: `/src/components/home/FeaturedProducts.tsx`
- Newsletter: `/src/components/home/Newsletter.tsx`

### Product Components
- ProductCard: `/src/components/product/ProductCard.tsx`
- ProductGrid: `/src/components/product/ProductGrid.tsx`
- FilterSidebar: `/src/components/product/FilterSidebar.tsx`
- ProductGallery: `/src/components/product/ProductGallery.tsx`
- ProductInfo: `/src/components/product/ProductInfo.tsx`

### Cart Components
- CartItem: `/src/components/cart/CartItem.tsx`
- OrderSummary: `/src/components/cart/OrderSummary.tsx`

### Checkout Components
- ProgressStepper: `/src/components/checkout/ProgressStepper.tsx`
- PaymentForm: `/src/components/checkout/PaymentForm.tsx`

### Data & Logic
- Products Data: `/src/lib/products.ts`
- Constants: `/src/lib/constants.ts`
- Type Definitions: `/src/types/index.ts`

### Hooks
- Cart Hook: `/src/hooks/useCart.tsx`
- Theme Hook: `/src/hooks/useTheme.ts`

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

**Last Updated:** Current session