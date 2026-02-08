'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishList';
import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity duration-200">
            <div className="bg-primary text-white p-1.5 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-105">
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
                className="hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex-1 max-w-xl hidden md:block">
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors duration-200">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border-none bg-gray-100 dark:bg-gray-800 rounded-lg text-sm placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200"
                placeholder="Search for gear, brands, or tutorials..."
              />
            </form>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined">
                  {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
              </button>

              <Link
                href="/wishlist"
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 relative"
              >
                <span className="material-symbols-outlined">favorite</span>
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-fade-in">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>
            
            <Link
              href="/cart"
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 relative"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-fade-in">
                  {totalItems}
                </span>
              )}
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 transition-transform duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/50 animate-fade-in" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-[73px] right-0 w-64 h-[calc(100vh-73px)] bg-white dark:bg-background-dark border-l border-gray-200 dark:border-gray-800 shadow-xl animate-slide-in-right">
            <nav className="flex flex-col p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 dark:border-gray-800 my-4" />
              
              <Link
                href="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3"
              >
                <span className="material-symbols-outlined">favorite</span>
                Wishlist
                {wishlistCount > 0 && (
                  <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <div className="border-t border-gray-200 dark:border-gray-800 my-4" />

              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3"
              >
                <span className="material-symbols-outlined">
                  {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}