'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CartItem from '@/components/cart/CartItem';
import OrderSummary from '@/components/cart/OrderSummary';
import { useCart } from '@/hooks/useCart';
import { PROMO_CODES } from '@/lib/constants';
import { PromoCode } from '@/types';

export default function CartPage() {
  const { items } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState('');

  const breadcrumbs = [
    { label: 'Store', href: '/' },
    { label: 'Shopping Cart' },
  ];

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    const foundPromo = PROMO_CODES.find(p => p.code === code);
    
    if (!foundPromo) {
      setPromoError('Invalid promo code');
      setAppliedPromo(null);
      return;
    }

    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    
    if (foundPromo.minPurchase && subtotal < foundPromo.minPurchase) {
      setPromoError(`Minimum purchase of $${foundPromo.minPurchase} required`);
      setAppliedPromo(null);
      return;
    }

    setAppliedPromo(foundPromo);
    setPromoError('');
    setPromoCode('');
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoError('');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-10 animate-fade-in">
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
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 animate-fade-in">
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

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
              Promo Code
            </h3>
            
            {appliedPromo ? (
              <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div>
                  <p className="font-bold text-green-700 dark:text-green-400">
                    {appliedPromo.code} Applied
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-500">
                    {appliedPromo.description}
                  </p>
                </div>
                <button
                  onClick={handleRemovePromo}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold text-sm transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value.toUpperCase());
                      setPromoError('');
                    }}
                    placeholder="Enter promo code"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-lg transition-all duration-200"
                  >
                    Apply
                  </button>
                </div>
                
                {promoError && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {promoError}
                  </p>
                )}
                
              </div>
            )}
          </div>

          <div className="pt-6">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-primary dark:text-slate-300 font-bold text-sm hover:translate-x-[-4px] transition-transform duration-200"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </Link>
          </div>
        </div>

        <OrderSummary items={items} appliedPromo={appliedPromo} />
      </div>
    </div>
  );
}