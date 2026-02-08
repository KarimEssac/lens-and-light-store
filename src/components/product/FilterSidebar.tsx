'use client';
import { Product } from '@/types';

interface FilterSidebarProps {
  selectedBrands: string[];
  selectedPriceRange: string;
  onBrandChange: (brand: string) => void;
  onPriceChange: (range: string) => void;
  onClearFilters: () => void;
  allProducts: Product[]; // Add this to calculate counts
}

export default function FilterSidebar({ 
  selectedBrands, 
  selectedPriceRange, 
  onBrandChange, 
  onPriceChange,
  onClearFilters,
  allProducts
}: FilterSidebarProps) {
  // Dynamic brand counts
  const brandCounts = allProducts.reduce((acc, product) => {
    acc[product.brand] = (acc[product.brand] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const brands = Object.entries(brandCounts).map(([name, count]) => ({ name, count }));

  const priceRanges = [
    { label: 'Under $500', value: '0-500' },
    { label: '$500 - $1,000', value: '500-1000' },
    { label: '$1,000 - $2,000', value: '1000-2000' },
    { label: 'Over $2,000', value: '2000-' },
  ];

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-8">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Filters</h3>

        <div className="border-b border-slate-200 dark:border-zinc-800 pb-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Brand</h4>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </div>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.name)}
                  onChange={() => onBrandChange(brand.name)}
                  className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">
                  {brand.name}
                </span>
                <span className="text-xs text-slate-400 ml-auto">{brand.count}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-b border-slate-200 dark:border-zinc-800 pb-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">Price Range</h4>
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </div>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPriceRange === range.value}
                  onChange={() => onPriceChange(range.value)}
                  className="border-slate-300 text-primary focus:ring-primary w-4 h-4"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button 
          onClick={onClearFilters}
          className="w-full py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}