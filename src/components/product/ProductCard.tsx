import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
    <Link href={`/product/${product.id}`}>
      <div className="product-card group">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        <div className="relative aspect-square bg-white dark:bg-gray-800 overflow-hidden">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <p className="text-xs uppercase tracking-wide text-primary font-bold mb-1">
            {product.brand}
          </p>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-slate-500">
              ({product.reviewCount})
            </span>
          </div>

          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.inStock ? (
              <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                ✓ In Stock
              </p>
            ) : (
              <p className="text-xs text-red-600 dark:text-red-400 font-semibold">
                Out of Stock
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}