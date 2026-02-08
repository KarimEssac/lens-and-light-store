'use client';

import Link from 'next/link';
import { CartItem, PromoCode } from '@/types';
import { TAX_RATE, SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from '@/lib/constants';

interface OrderSummaryProps {
  items: CartItem[];
  appliedPromo?: PromoCode | null;
  showPromoCode?: boolean;
  showTrustBadges?: boolean;
}

export default function OrderSummary({ 
  items, 
  appliedPromo,
  showPromoCode = false,
  showTrustBadges = true 
}: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  let promoDiscount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percentage') {
      promoDiscount = subtotal * (appliedPromo.discount / 100);
    } else {
      promoDiscount = appliedPromo.discount;
    }
  }
  
  const subtotalAfterPromo = subtotal - promoDiscount;
  const tax = subtotalAfterPromo * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotalAfterPromo + tax + shipping;

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

          {appliedPromo && promoDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">
                Promo ({appliedPromo.code})
              </span>
              <span className="font-medium text-green-600 dark:text-green-400">
                -${promoDiscount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="flex justify-between text-sm text-slate-500">
            <span>Estimated Shipping</span>
            {shipping === 0 ? (
              <span className="text-emerald-600 font-medium">Free</span>
            ) : (
              <span className="font-medium text-slate-900 dark:text-slate-200">
                ${(shipping as number).toFixed(2)}
              </span>
            )}
          </div>

          {subtotal < FREE_SHIPPING_THRESHOLD && FREE_SHIPPING_THRESHOLD - subtotal > 0 && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-xs text-blue-700 dark:text-blue-400">
              Add <span className="font-bold">${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}</span> more for free shipping!
            </div>
          )}

          <div className="flex justify-between text-sm text-slate-500">
            <span>Estimated Tax (2%)</span>
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
            className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all duration-200 shadow-md active:scale-[0.98] mt-4"
          >
            Proceed to Checkout
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
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
              <p className="text-xs text-slate-500">Free 2-day shipping on orders over $499</p>
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