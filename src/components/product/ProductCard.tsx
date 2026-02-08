'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span 
          key={index} 
          className={`material-symbols-outlined text-sm ${
            index < Math.floor(rating) 
              ? 'text-yellow-500' 
              : index < rating 
                ? 'text-yellow-500 opacity-50' 
                : 'text-gray-300 dark:text-gray-600'
          }`}
          style={{ 
            fontVariationSettings: index < Math.floor(rating) ? '"FILL" 1' : '"FILL" 0'
          }}
        >
          star
        </span>
      ));
  };

  return (
    <div className="product-card group h-full flex flex-col relative">
      {product.badge && (
        <span className="absolute top-2 left-2 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 z-10 p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <span 
          className={`material-symbols-outlined text-lg ${inWishlist ? 'text-red-500' : 'text-gray-400'}`}
          style={{ fontVariationSettings: inWishlist ? '"FILL" 1' : '"FILL" 0' }}
        >
          favorite
        </span>
      </button>

      <Link href={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="relative aspect-square bg-white dark:bg-gray-800 overflow-hidden">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          
          <span className={`absolute bottom-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full font-semibold text-xs ${
            product.inStock 
              ? 'bg-green-100 dark:bg-green-900/80 text-green-700 dark:text-green-300'
              : 'bg-red-100 dark:bg-red-900/80 text-red-700 dark:text-red-300'
          }`}>
            <span className="material-symbols-outlined text-xs">
              {product.inStock ? 'check_circle' : 'cancel'}
            </span>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="p-3 flex-1 flex flex-col gap-1">
          <p className="text-xs uppercase tracking-wide text-primary font-bold">
            {product.brand}
          </p>
          <h3 className="font-bold text-base text-slate-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem] mb-0.5">
            {product.name}
          </h3>

          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-slate-500">
              ({product.reviewCount})
            </span>
          </div>

          <div className="mt-auto pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="px-3 pb-3">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-primary text-white py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}