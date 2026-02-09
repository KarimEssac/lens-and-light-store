'use client'
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Product } from '@/types';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const data = await getFeaturedProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

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

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}