'use client';

import { ThemeProvider } from '@/hooks/useTheme';
import { WishlistProvider } from '@/hooks/useWishList';
import { CartProvider } from '@/hooks/useCart';
import { ToastProvider } from '@/hooks/useToast';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}