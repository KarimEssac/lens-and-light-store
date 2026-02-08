'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showSuccess, setShowSuccess] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {Array(5).fill(0).map((_, index) => {
          const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;
          
          return (
            <div key={index} className="relative w-5 h-5">
              <span className="material-symbols-outlined text-base text-gray-300 dark:text-gray-600 absolute inset-0">
                star
              </span>
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <span 
                  className="material-symbols-outlined text-base text-yellow-500 absolute"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {showSuccess && (
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
          <span className="material-symbols-outlined">check_circle</span>
          <span className="font-semibold">Added to cart!</span>
        </div>
      )}

      <div>
        {product.badge && (
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
            {product.badge}
          </span>
        )}
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
          {product.name}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-3">
          by <span className="font-semibold text-slate-900 dark:text-white">{product.brand}</span>
        </p>
        <div className="flex items-center gap-3">
          {renderStars(product.rating)}
          <span className="text-sm text-slate-500">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-3xl font-black text-slate-900 dark:text-white">
            ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-slate-400 line-through">
                ${product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full font-semibold ${
            product.inStock 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          }`}>
            <span className="material-symbols-outlined text-xs">check_circle</span>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <span className="text-slate-500">SKU: {product.sku}</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-2">Description</h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {product.description}
        </p>
      </div>

      {product.specifications && (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">Key Specs</h3>
          <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-3 px-4">
                <span className="text-sm text-slate-600 dark:text-slate-400">{spec.label}</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Quantity:</label>
          <div className="flex items-center border-2 border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-14 text-center border-none focus:ring-0 bg-transparent font-semibold"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          Add to Cart - ${(product.price * quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </button>

        <button 
          onClick={handleWishlistToggle}
          className="w-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
        >
          <span 
            className={`material-symbols-outlined ${inWishlist ? 'text-red-500' : ''}`}
            style={{ fontVariationSettings: inWishlist ? '"FILL" 1' : '"FILL" 0' }}
          >
            favorite
          </span>
          {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-5 rounded-xl space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary">verified</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">2-Year Manufacturer Warranty</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary">local_shipping</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">Free Shipping on Orders $499+</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary">autorenew</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">30-Day Easy Returns</p>
        </div>
      </div>
    </div>
  );
}