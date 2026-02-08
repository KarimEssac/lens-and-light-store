'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank'>('card');
  const [billingIsSame, setBillingIsSame] = useState(true);

  return (
    <>
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_shipping</span>
            Shipping Address
          </h3>
          <button className="text-primary text-sm font-semibold hover:underline">Change</button>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          John Doe<br />
          123 Photography Lane, Studio B<br />
          San Francisco, CA 94103<br />
          United States
        </p>
      </section>

      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'card'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'card' ? 'text-primary' : 'text-slate-400'
              }`}>
                credit_card
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'card' ? 'text-primary' : 'text-slate-500'
              }`}>
                Card
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'paypal'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'paypal' ? 'text-primary' : 'text-slate-400'
              }`}>
                payments
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'paypal' ? 'text-primary' : 'text-slate-500'
              }`}>
                PayPal
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod('bank')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'bank'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'bank' ? 'text-primary' : 'text-slate-400'
              }`}>
                account_balance
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'bank' ? 'text-primary' : 'text-slate-500'
              }`}>
                Transfer
              </span>
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="0000 0000 0000 0000"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    lock
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    CVV
                    <span
                      className="material-symbols-outlined text-[16px] text-slate-400 cursor-help"
                      title="3-4 digits on back of card"
                    >
                      info
                    </span>
                  </label>
                  <input
                    type="password"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              checked={billingIsSame}
              onChange={(e) => setBillingIsSame(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              id="billing"
            />
            <label htmlFor="billing" className="text-sm text-slate-600 dark:text-slate-400">
              Billing address is same as shipping
            </label>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/cart"
            className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Cart
          </Link>
          <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            Complete Order
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">PCI Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xl">lock_reset</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">256-bit SSL</span>
          </div>
        </div>
      </section>
    </>
  );
}