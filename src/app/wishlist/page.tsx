'use client';

import Link from 'next/link';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">
          favorite
        </span>
        <h1 className="text-3xl font-black text-header-dark dark:text-white mb-4">
          Your Wishlist is Empty
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Start adding products you love to your wishlist
        </p>
        <Link
          href="/catalog"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-black text-header-dark dark:text-white mb-8">
        My Wishlist ({items.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <Link href={`/product/${product.id}`} className="block">
              <div className="aspect-square bg-white dark:bg-gray-800">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
              </div>
            </Link>

            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-primary font-bold mb-1">
                {product.brand}
              </p>
              <Link href={`/product/${product.id}`}>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary/90 transition-colors text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}