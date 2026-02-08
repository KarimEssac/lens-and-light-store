'use client'
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="px-6 py-12">
      <div className="mb-8 flex items-baseline justify-between">
        <div>
          <h3 className="text-3xl font-black text-header-dark dark:text-white mb-3">
            Featured Gear
          </h3>
          <p className="text-gray-500">Handpicked essentials for every photographer</p>
        </div>
        <Link
          href="/catalog"
          className="text-sm font-bold text-primary hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
} 