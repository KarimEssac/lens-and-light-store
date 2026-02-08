'use client';

import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items } = useCart();

  const breadcrumbs = [
    { label: 'Store', href: '/' },
    { label: 'Shopping Cart' },
  ];

  if (items.length === 0) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-8xl text-slate-300 dark:text-slate-700 mb-4 block">
            shopping_cart
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-8">
        <div className="flex items-baseline gap-4">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">Shopping Cart</h2>
          <span className="text-lg text-slate-400 font-medium">{items.length} items</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 w-full space-y-4">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}

          <div className="pt-6">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-primary dark:text-slate-300 font-bold text-sm hover:translate-x-[-4px] transition-transform"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </Link>
          </div>
        </div>

        <OrderSummary items={items} />
      </div>
    </div>
  );
}