'use client'
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import FilterSidebar from '@/components/product/FilterSidebar';
import ProductGrid from '@/components/product/ProductGrid';
import { products, getProductsByCategory } from '@/lib/products';
import { Product } from '@/types';

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  const filteredProducts = useMemo(() => {
    let filtered = category 
      ? getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1))
      : products;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(v => v ? parseFloat(v) : null);
      filtered = filtered.filter(p => {
        if (max) return p.price >= min! && p.price <= max;
        return p.price >= min!;
      });
    }

    return filtered;
  }, [category, selectedBrands, selectedPriceRange]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (range: string) => {
    setSelectedPriceRange(prev => prev === range ? '' : range);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRange('');
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products', href: '/catalog' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <div className="flex items-baseline gap-4">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}
          </h2>
          <span className="text-lg text-slate-400 font-medium">{filteredProducts.length} items</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar 
          selectedBrands={selectedBrands}
          selectedPriceRange={selectedPriceRange}
          onBrandChange={handleBrandChange}
          onPriceChange={handlePriceChange}
          onClearFilters={handleClearFilters}
          allProducts={category ? getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1)) : products}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}