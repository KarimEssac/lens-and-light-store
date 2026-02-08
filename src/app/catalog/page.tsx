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
  const searchQuery = searchParams.get('search');
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = category 
      ? getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1))
      : products;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

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
  }, [category, searchQuery, selectedBrands, selectedPriceRange]);

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

  const getPageTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (category) return category.charAt(0).toUpperCase() + category.slice(1);
    return 'All Products';
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: getPageTitle(), href: '/catalog' },
  ];

  const activeFiltersCount = selectedBrands.length + (selectedPriceRange ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 animate-fade-in">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {getPageTitle()}
            </h2>
            <span className="text-base sm:text-lg text-slate-400 font-medium">{filteredProducts.length} items</span>
          </div>

          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors relative w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-primary">tune</span>
            Filters
            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
        {searchQuery && filteredProducts.length === 0 && (
          <p className="mt-4 text-gray-500">
            No products found matching &quot;{searchQuery}&quot;. Try a different search term.
          </p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar 
          selectedBrands={selectedBrands}
          selectedPriceRange={selectedPriceRange}
          onBrandChange={handleBrandChange}
          onPriceChange={handlePriceChange}
          onClearFilters={handleClearFilters}
          allProducts={category ? getProductsByCategory(category.charAt(0).toUpperCase() + category.slice(1)) : products}
          isModalOpen={isFilterModalOpen}
          onCloseModal={() => setIsFilterModalOpen(false)}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}