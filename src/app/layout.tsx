import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/hooks/useCart';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lens & Light - Photography Equipment Store',
  description: 'Your premier destination for professional photography gear',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen bg-background-light dark:bg-background-dark">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}