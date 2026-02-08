'use client';

import Link from 'next/link';
import { CartItem } from '@/types';
import { TAX_RATE, SHIPPING_COST } from '@/lib/constants';

interface OrderSummaryProps {
  items: CartItem[];
  showPromoCode?: boolean;
  showTrustBadges?: boolean;
}

export default function OrderSummary({ 
  items, 
  showPromoCode = true,
  showTrustBadges = true 
}: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const shipping = SHIPPING_COST;
  const total = subtotal + tax + shipping;

  return (
    <aside className="w-full lg:w-[380px] lg:sticky lg:top-24 space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-secondary-accent/20 dark:border-slate-800 shadow-lg overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Order Summary</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Subtotal</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>Estimated Shipping</span>
            <span className="text-emerald-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>Estimated Tax</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">
              ${tax.toFixed(2)}
            </span>
          </div>

          <div className="pt-4 mt-4 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
            <span className="text-lg font-bold text-slate-900 dark:text-white">Order Total</span>
            <span className="text-3xl font-black text-primary dark:text-slate-100 tracking-tight">
              ${total.toFixed(2)}
            </span>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-[0.98] mt-4"
          >
            Proceed to Checkout
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>

        {showPromoCode && (
          <div className="px-6 pb-6 pt-2">
            <label className="block text-xs font-bold text-secondary-accent uppercase tracking-widest mb-3">
              Promo Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 px-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Enter code"
              />
              <button className="px-4 py-2 border border-secondary-accent text-secondary-accent text-sm font-bold rounded-lg hover:bg-secondary-accent/10 transition-colors">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {showTrustBadges && (
        <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">verified_user</span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                Secure Checkout
              </p>
              <p className="text-xs text-slate-500">256-bit SSL encrypted payment</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">local_shipping</span>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                Fast Delivery
              </p>
              <p className="text-xs text-slate-500">Free 2-day shipping on orders over $500</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-4 grayscale opacity-40">
        <span className="material-symbols-outlined text-2xl">credit_card</span>
        <span className="material-symbols-outlined text-2xl">payments</span>
        <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
      </div>
    </aside>
  );
}