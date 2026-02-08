'use client';

import { ReactNode } from 'react';
import { CartProvider } from '@/hooks/useCart';
import { ThemeProvider } from '@/hooks/useTheme';
import { WishlistProvider } from '@/hooks/useWishlist';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
  );
}