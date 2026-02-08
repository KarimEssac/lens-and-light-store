# 🗂️ COMPLETE FILE STRUCTURE GUIDE
## Where to Modify What - Lens & Light Photography Store

This guide tells you EXACTLY which file to edit for any feature or change.

---

## 📁 EXACT FOLDER STRUCTURE

```
lens-and-light-store/
│
├── 📄 package.json                          # Dependencies & scripts
├── 📄 tsconfig.json                         # TypeScript configuration
├── 📄 tailwind.config.ts                    # Tailwind/Design system
├── 📄 next.config.js                        # Next.js configuration
├── 📄 postcss.config.js                     # CSS processing
├── 📄 .gitignore                            # Git ignore rules
├── 📄 README.md                             # Project documentation
│
├── 📁 public/                               # Static assets
│   └── 📁 images/                           # Product images (if needed)
│
└── 📁 src/
    │
    ├── 📁 app/                              # PAGES (Next.js App Router)
    │   ├── 📄 layout.tsx                    # Root layout (wraps all pages)
    │   ├── 📄 page.tsx                      # Home page (/)
    │   ├── 📄 globals.css                   # Global CSS imports
    │   │
    │   ├── 📁 catalog/
    │   │   └── 📄 page.tsx                  # Catalog page (/catalog)
    │   │
    │   ├── 📁 product/
    │   │   └── 📁 [id]/
    │   │       └── 📄 page.tsx              # Product details (/product/1)
    │   │
    │   ├── 📁 cart/
    │   │   └── 📄 page.tsx                  # Cart page (/cart)
    │   │
    │   └── 📁 checkout/
    │       └── 📄 page.tsx                  # Checkout page (/checkout)
    │
    ├── 📁 components/                       # REUSABLE COMPONENTS
    │   │
    │   ├── 📁 layout/
    │   │   ├── 📄 Header.tsx                # Top navigation
    │   │   ├── 📄 Footer.tsx                # Bottom footer
    │   │   └── 📄 Breadcrumbs.tsx           # Breadcrumb navigation
    │   │
    │   ├── 📁 home/
    │   │   ├── 📄 HeroSection.tsx           # Hero banner
    │   │   ├── 📄 TrustBadges.tsx           # Trust/feature badges
    │   │   ├── 📄 CategorySection.tsx       # Category grid
    │   │   ├── 📄 FeaturedProducts.tsx      # Featured products section
    │   │   └── 📄 Newsletter.tsx            # Newsletter signup
    │   │
    │   ├── 📁 product/
    │   │   ├── 📄 ProductCard.tsx           # Single product card
    │   │   ├── 📄 ProductGrid.tsx           # Product listing grid
    │   │   ├── 📄 FilterSidebar.tsx         # Filter sidebar
    │   │   ├── 📄 ProductGallery.tsx        # Image gallery
    │   │   └── 📄 ProductInfo.tsx           # Product details panel
    │   │
    │   ├── 📁 cart/
    │   │   ├── 📄 CartItem.tsx              # Single cart item
    │   │   └── 📄 OrderSummary.tsx          # Order summary sidebar
    │   │
    │   └── 📁 checkout/
    │       ├── 📄 ProgressStepper.tsx       # Checkout progress bar
    │       └── 📄 PaymentForm.tsx           # Payment form
    │
    ├── 📁 styles/                           # CSS FILES (SEPARATED)
    │   ├── 📄 colors.css                    # Color variables & themes
    │   ├── 📄 typography.css                # Font styles
    │   ├── 📄 components.css                # Component-specific styles
    │   └── 📄 utilities.css                 # Utility classes
    │
    ├── 📁 lib/                              # DATA & UTILITIES
    │   ├── 📄 products.ts                   # Product data & functions
    │   └── 📄 constants.ts                  # App constants
    │
    ├── 📁 types/                            # TYPESCRIPT DEFINITIONS
    │   └── 📄 index.ts                      # All type definitions
    │
    └── 📁 hooks/                            # CUSTOM REACT HOOKS (optional)
        ├── 📄 useCart.ts                    # Cart management (to be created)
        └── 📄 useTheme.ts                   # Dark mode toggle (to be created)
```

---

## 🎯 MODIFICATION GUIDE: "I Want to Change..."

### **DESIGN & STYLING**

#### "Change the primary color"
→ **File:** `src/styles/colors.css`
→ **Line:** Find `--color-primary: #445964;`
→ **Also Update:** `tailwind.config.ts` → colors → primary

#### "Change fonts"
→ **File:** `src/styles/typography.css`
→ **And:** `src/app/layout.tsx` (import statement)

#### "Change border radius globally"
→ **File:** `tailwind.config.ts`
→ **Section:** `theme.extend.borderRadius`

#### "Add custom CSS classes"
→ **File:** `src/styles/utilities.css` (for utilities)
→ **Or:** `src/styles/components.css` (for component styles)

#### "Change dark mode colors"
→ **File:** `src/styles/colors.css`
→ **Section:** `.dark { ... }`

---

### **NAVIGATION & LAYOUT**

#### "Add/Remove navigation links"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `NAV_LINKS`
→ **Renders in:** `src/components/layout/Header.tsx`

#### "Change logo or site name"
→ **File:** `src/components/layout/Header.tsx`
→ **Section:** Logo div (line ~22)
→ **Also:** `src/lib/constants.ts` → `SITE_NAME`

#### "Modify footer links"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `FOOTER_LINKS`
→ **Renders in:** `src/components/layout/Footer.tsx`

#### "Change header behavior (sticky, transparent, etc.)"
→ **File:** `src/components/layout/Header.tsx`
→ **Class:** `sticky top-0 z-50` (line ~18)

---

### **HOME PAGE**

#### "Change hero section text or image"
→ **File:** `src/components/home/HeroSection.tsx`
→ **Text:** Lines 22-28
→ **Background Image:** Line 11 (style.backgroundImage)

#### "Add/Remove trust badges"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `TRUST_BADGES`
→ **Renders in:** `src/components/home/TrustBadges.tsx`

#### "Change categories shown"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `CATEGORIES`
→ **Renders in:** `src/components/home/CategorySection.tsx`

#### "Change newsletter signup"
→ **File:** `src/components/home/Newsletter.tsx`

#### "Change featured products count"
→ **File:** `src/lib/products.ts`
→ **Function:** `getFeaturedProducts()` → `.slice(0, 4)` change the 4

---

### **PRODUCTS**

#### "Add/Edit/Remove products"
→ **File:** `src/lib/products.ts`
→ **Variable:** `products` array
→ **Format:** Follow the existing Product type structure

#### "Change product card design"
→ **File:** `src/components/product/ProductCard.tsx`

#### "Modify product filters"
→ **File:** `src/components/product/FilterSidebar.tsx`
→ **Data:** Hardcoded brands/prices (lines 5-15)

#### "Change product grid layout (2, 3, 4 columns)"
→ **File:** `src/components/product/ProductGrid.tsx`
→ **Line:** ~35 → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
→ **Change:** `lg:grid-cols-3` to desired number

#### "Modify product detail page layout"
→ **File:** `src/app/product/[id]/page.tsx` (structure)
→ **Gallery:** `src/components/product/ProductGallery.tsx`
→ **Info Panel:** `src/components/product/ProductInfo.tsx`

#### "Add more product images"
→ **File:** `src/lib/products.ts`
→ **Field:** Add URLs to `images` array in product object

---

### **SHOPPING CART**

#### "Change cart item design"
→ **File:** `src/components/cart/CartItem.tsx`

#### "Modify order summary"
→ **File:** `src/components/cart/OrderSummary.tsx`

#### "Change tax rate"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `TAX_RATE` (currently 0.085 = 8.5%)

#### "Change free shipping threshold"
→ **File:** `src/lib/constants.ts`
→ **Variable:** `FREE_SHIPPING_THRESHOLD`

---

### **CHECKOUT**

#### "Modify checkout steps"
→ **File:** `src/components/checkout/ProgressStepper.tsx`
→ **Variable:** `steps` array (line 6-10)

#### "Change payment form fields"
→ **File:** `src/components/checkout/PaymentForm.tsx`

#### "Add/Remove payment methods"
→ **File:** `src/components/checkout/PaymentForm.tsx`
→ **Section:** Payment method buttons (lines 36-72)

---

### **METADATA & SEO**

#### "Change page titles/descriptions"
→ **File:** `src/app/layout.tsx`
→ **Variable:** `metadata` object

#### "Add favicon"
→ **File:** `src/app/layout.tsx`
→ **Location:** Put favicon in `/public/` folder
→ **Add:** `<link rel="icon" href="/favicon.ico" />` in `<head>`

---

### **FUNCTIONALITY**

#### "Add product to cart functionality"
→ **Create:** `src/hooks/useCart.ts`
→ **Import in:** `src/components/product/ProductCard.tsx`
→ **Import in:** `src/components/product/ProductInfo.tsx`

#### "Add dark mode toggle button"
→ **Create:** `src/hooks/useTheme.ts`
→ **Import in:** `src/components/layout/Header.tsx`

#### "Connect to real API/database"
→ **Modify:** `src/lib/products.ts`
→ **Replace:** Static array with API fetch

#### "Add search functionality"
→ **Modify:** `src/components/layout/Header.tsx`
→ **Create:** Search handler function

#### "Add user authentication"
→ **Files to create:**
   - `src/lib/auth.ts`
   - `src/components/auth/LoginForm.tsx`
   - `src/components/auth/SignupForm.tsx`
→ **Modify:** `src/components/layout/Header.tsx` (user icon)

---

## 🔧 CONFIGURATION FILES

#### "Add new dependencies"
→ **File:** `package.json`
→ **Command:** `npm install package-name`

#### "Change Next.js settings"
→ **File:** `next.config.js`

#### "Modify TypeScript rules"
→ **File:** `tsconfig.json`

#### "Update Tailwind config"
→ **File:** `tailwind.config.ts`

---

## 📝 TYPE DEFINITIONS

#### "Add new TypeScript types"
→ **File:** `src/types/index.ts`
→ **Add:** Export new interface/type

---

## 🎨 QUICK REFERENCE: Key Files by Importance

### **Must Know (Top 5)**
1. **`src/lib/products.ts`** - All product data
2. **`src/lib/constants.ts`** - Site-wide settings
3. **`src/styles/colors.css`** - Color scheme
4. **`tailwind.config.ts`** - Design system config
5. **`src/components/layout/Header.tsx`** - Main navigation

### **Page Routes**
- Home: `src/app/page.tsx`
- Catalog: `src/app/catalog/page.tsx`
- Product: `src/app/product/[id]/page.tsx`
- Cart: `src/app/cart/page.tsx`
- Checkout: `src/app/checkout/page.tsx`

### **Layout Components (Used Everywhere)**
- Header: `src/components/layout/Header.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Root Layout: `src/app/layout.tsx`

---

## 🚀 COMMON TASKS - EXACT STEPS

### **Task: Add a New Product**
1. Open `src/lib/products.ts`
2. Add new object to `products` array
3. Follow this structure:
```typescript
{
  id: '9',
  name: 'Product Name',
  brand: 'Brand Name',
  price: 999.00,
  rating: 5,
  reviewCount: 100,
  image: 'https://your-image-url.com/image.jpg',
  category: 'Cameras',
  description: 'Short description',
  inStock: true,
  sku: 'SKU-CODE',
}
```

### **Task: Change Primary Color**
1. Open `src/styles/colors.css`
2. Find: `--color-primary: #445964;`
3. Change to your color (e.g., `#1E40AF`)
4. Open `tailwind.config.ts`
5. Find: `primary: "#445964"`
6. Change to same color: `primary: "#1E40AF"`

### **Task: Add Cart Functionality**
1. Create `src/hooks/useCart.ts`
2. Implement cart logic with useState
3. Import in `src/components/product/ProductCard.tsx`
4. Import in `src/components/product/ProductInfo.tsx`
5. Import in `src/components/layout/Header.tsx` (for cart count)

### **Task: Change Number of Featured Products**
1. Open `src/lib/products.ts`
2. Find function: `getFeaturedProducts()`
3. Change `.slice(0, 4)` to `.slice(0, YOUR_NUMBER)`

---

## 💡 TIPS FOR FUTURE AI PROMPTS

When asking AI to add features, say:

✅ **GOOD:** "Add a wishlist feature. Modify `src/components/product/ProductCard.tsx` to add a heart icon button, create `src/hooks/useWishlist.ts` for state management, and update `src/components/layout/Header.tsx` to show wishlist count."

❌ **BAD:** "Add a wishlist feature"

**Always specify:**
1. Which file(s) to modify
2. Where in the file (which component/function)
3. What new files to create (with full path)

---

# 🗂️ COMPLETE FILE STRUCTURE GUIDE
## Where to Modify What - Lens & Light Photography Store

React + Next.js 14 + TypeScript

## 🎯 AI INTERACTION RULES
1. **Be concise** - No unnecessary words or explanations
2. **No code comments** - Ever
3. **Ask before assuming** - If file existence is uncertain, ask first
4. **Read before modifying** - Use `view` tool to check files before changes

---

## 📁 EXACT FOLDER STRUCTURE

```
lens-and-light-store/
│
├── 📄 package.json                          # Dependencies & scripts
├── 📄 tsconfig.json                         # TypeScript configuration
├── 📄 tailwind.config.ts                    # Tailwind/Design system
├── 📄 next.config.js                        # Next.js configuration (NOT .ts)
├── 📄 postcss.config.mjs                    # CSS processing (ES module)
├── 📄 .gitignore                            # Git ignore rules
├── 📄 README.md                             # Project documentation
│
├── 📁 public/                               # Static assets
│   └── 📁 images/                           # Product images (if needed)
│
└── 📁 src/
    │
    ├── 📁 app/                              # PAGES (Next.js App Router)
    │   ├── 📄 layout.tsx                    # Root layout + CartProvider wrapper
    │   ├── 📄 page.tsx                      # Home page (/)
    │   ├── 📄 globals.css                   # Global CSS imports
    │   │
    │   ├── 📁 catalog/
    │   │   └── 📄 page.tsx                  # Catalog page - filters by category param
    │   │
    │   ├── 📁 product/
    │   │   └── 📁 [id]/
    │   │       └── 📄 page.tsx              # Product details (/product/1)
    │   │
    │   ├── 📁 cart/
    │   │   └── 📄 page.tsx                  # Cart page - uses useCart hook
    │   │
    │   ├── 📁 checkout/
    │   │   └── 📄 page.tsx                  # Checkout page (/checkout)
    │   │
    │   ├── 📁 account/
    │   │   └── 📄 page.tsx                  # Account page (/account)
    │   │
    │   ├── 📁 support/
    │   │   └── 📄 page.tsx                  # Support/FAQ page
    │   │
    │   ├── 📁 track/
    │   │   └── 📄 page.tsx                  # Order tracking page
    │   │
    │   ├── 📁 returns/
    │   │   └── 📄 page.tsx                  # Returns & exchanges page
    │   │
    │   └── 📁 stores/
    │       └── 📄 page.tsx                  # Store locator page
    │
    ├── 📁 components/                       # REUSABLE COMPONENTS
    │   │
    │   ├── 📁 layout/
    │   │   ├── 📄 Header.tsx                # Top nav - uses useCart for badge
    │   │   ├── 📄 Footer.tsx                # Bottom footer
    │   │   └── 📄 Breadcrumbs.tsx           # Breadcrumb navigation
    │   │
    │   ├── 📁 home/
    │   │   ├── 📄 HeroSection.tsx           # Hero banner
    │   │   ├── 📄 TrustBadges.tsx           # Trust/feature badges
    │   │   ├── 📄 CategorySection.tsx       # Category grid
    │   │   ├── 📄 FeaturedProducts.tsx      # Featured products section
    │   │   └── 📄 Newsletter.tsx            # Newsletter signup
    │   │
    │   ├── 📁 product/
    │   │   ├── 📄 ProductCard.tsx           # Single product card - partial star ratings
    │   │   ├── 📄 ProductGrid.tsx           # Product listing - pagination (9 per page)
    │   │   ├── 📄 FilterSidebar.tsx         # Filter sidebar - brand + price filters
    │   │   ├── 📄 ProductGallery.tsx        # Image gallery
    │   │   └── 📄 ProductInfo.tsx           # Product details - uses useCart
    │   │
    │   ├── 📁 cart/
    │   │   ├── 📄 CartItem.tsx              # Single cart item - uses useCart
    │   │   └── 📄 OrderSummary.tsx          # Order summary sidebar
    │   │
    │   └── 📁 checkout/
    │       ├── 📄 ProgressStepper.tsx       # Checkout progress bar
    │       └── 📄 PaymentForm.tsx           # Payment form
    │
    ├── 📁 styles/                           # CSS FILES (SEPARATED)
    │   ├── 📄 colors.css                    # Color variables & themes
    │   ├── 📄 typography.css                # Font styles
    │   ├── 📄 components.css                # Component-specific styles (no 'group' in @apply)
    │   └── 📄 utilities.css                 # Utility classes
    │
    ├── 📁 lib/                              # DATA & UTILITIES
    │   ├── 📄 products.ts                   # Product data & helper functions
    │   └── 📄 constants.ts                  # App constants
    │
    ├── 📁 types/                            # TYPESCRIPT DEFINITIONS
    │   └── 📄 index.ts                      # All type definitions
    │
    └── 📁 hooks/                            # CUSTOM REACT HOOKS
        ├── 📄 useCart.tsx                   # Cart context + hook (localStorage sync)
        └── 📄 useTheme.ts                   # Dark mode toggle (to be created)
```

---

## 🎯 MODIFICATION GUIDE

### **CART SYSTEM**

#### "Add item to cart"
→ **Hook:** `useCart()` from `src/hooks/useCart.tsx`
→ **Method:** `addToCart(product, quantity)`
→ **Used in:** ProductInfo, ProductCard (if added)

#### "Update cart quantity"
→ **Hook:** `useCart()`
→ **Method:** `updateQuantity(productId, newQuantity)`
→ **Used in:** CartItem

#### "Remove from cart"
→ **Hook:** `useCart()`
→ **Method:** `removeFromCart(productId)`
→ **Used in:** CartItem

#### "Get cart count"
→ **Hook:** `useCart()`
→ **Property:** `totalItems`
→ **Used in:** Header badge

### **PRODUCTS**

#### "Filter products by category"
→ **File:** `src/app/catalog/page.tsx`
→ **Reads:** URL param `category`
→ **Uses:** `getProductsByCategory()` from products.ts

#### "Filter by brand/price"
→ **Component:** `src/components/product/FilterSidebar.tsx`
→ **State:** `selectedBrands`, `selectedPriceRange`
→ **Parent:** Catalog page manages filter state

#### "Product pagination"
→ **Component:** `src/components/product/ProductGrid.tsx`
→ **Logic:** 9 products per page, hides pagination if ≤9 items

#### "Star ratings"
→ **Components:** ProductCard, ProductInfo
→ **Logic:** Partial fill using overlapping divs with width percentage

### **PAGES**

#### "Support/FAQ page"
→ **File:** `src/app/support/page.tsx`
→ **Features:** Collapsible FAQ, contact methods

#### "Order tracking"
→ **File:** `src/app/track/page.tsx`
→ **Features:** Timeline, order lookup

#### "Returns"
→ **File:** `src/app/returns/page.tsx`
→ **Features:** Multi-step form, success state

#### "Store locator"
→ **File:** `src/app/stores/page.tsx`
→ **Features:** Store cards, search, services

### **CONFIGURATION**

#### "next.config.js format"
→ **Must be:** `.js` not `.ts`
→ **Must use:** `module.exports` not `export default`

#### "postcss.config.mjs format"
→ **Must be:** `.mjs`
→ **Must use:** `export default` not `module.exports`

### **CSS RULES**

#### "Tailwind @apply restrictions"
→ **Cannot use:** `group` class in @apply directives
→ **Solution:** Add `group` directly in JSX className

### **COMPONENT RULES**

#### "Client components"
→ **Add:** `'use client'` at top if component has:
  - useState, useEffect, hooks
  - Event handlers (onClick, onChange)
  - Browser APIs (localStorage, window)

#### "Avoid Math.random() in render"
→ **Solution:** Move to useState initializer
→ **Example:** `const [id] = useState(() => Math.random())`

#### "Escape apostrophes in JSX"
→ **Use:** `&apos;` not `'`

#### "Links for navigation"
→ **Use:** `<Link>` from `next/link`
→ **Not:** `<a href>`

---

## 🚀 COMMON TASKS

### **Task: Add Cart Functionality to Product Card**
1. Import: `import { useCart } from '@/hooks/useCart'`
2. Get method: `const { addToCart } = useCart()`
3. Add button with: `onClick={() => addToCart(product, 1)}`

### **Task: Create New Page**
1. Create folder: `src/app/pagename/`
2. Create file: `src/app/pagename/page.tsx`
3. Add 'use client' if needed
4. Export default component

### **Task: Add Product**
1. Open: `src/lib/products.ts`
2. Add to `products` array with all required fields
3. Product will auto-appear in catalog

### **Task: Change Filter Logic**
1. Open: `src/app/catalog/page.tsx`
2. Modify `filteredProducts` useMemo logic
3. FilterSidebar receives callbacks as props

---

## 📝 TYPE DEFINITIONS

All types in: `src/types/index.ts`

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

This guide reflects the current state as of the latest session.