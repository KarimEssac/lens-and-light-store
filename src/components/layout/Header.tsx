'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
          <div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">camera</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-header-dark dark:text-white uppercase">
            Lens & Light
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-600 dark:text-gray-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border-none bg-gray-100 dark:bg-gray-800 rounded-lg text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-gray-700 transition-all"
              placeholder="Search for gear, brands, or tutorials..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="/wishlist"
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
          >
            <span className="material-symbols-outlined">favorite</span>
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          
          <Link
            href="/cart"
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors relative"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}