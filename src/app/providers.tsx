'use client';

import { CartProvider } from '@/hooks/useCart';
import { ThemeProvider } from '@/hooks/useTheme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <Header />
        <main className="min-h-screen bg-background-light dark:bg-background-dark">
          {children}
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}