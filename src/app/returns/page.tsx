'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function ReturnsPage() {
  const [step, setStep] = useState(1);
  const [returnId] = useState(() => Math.floor(Math.random() * 10000));
  const [formData, setFormData] = useState({
    orderNumber: '',
    email: '',
    reason: '',
    items: [] as string[],
    comments: '',
  });

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Returns & Exchanges' },
  ];

  const returnReasons = [
    'Changed my mind',
    'Product not as described',
    'Defective or damaged',
    'Wrong item received',
    'Better price elsewhere',
    'Quality not as expected',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Success step
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Returns & Exchanges
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          We offer hassle-free returns within 30 days of purchase.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Start Your Return</h2>
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Order Number</label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({...formData, orderNumber: e.target.value})}
                      placeholder="ORD-2024-XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all"
                  >
                    Continue
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary mb-6"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Back
                </button>

                <h2 className="text-2xl font-bold mb-6">Return Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Reason for Return</label>
                    <div className="space-y-2">
                      {returnReasons.map((reason) => (
                        <label key={reason} className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50">
                          <input
                            type="radio"
                            name="reason"
                            value={reason}
                            onChange={(e) => setFormData({...formData, reason: e.target.value})}
                            className="text-primary focus:ring-primary"
                            required
                          />
                          <span className="text-sm">{reason}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Additional Comments (Optional)</label>
                    <textarea
                      value={formData.comments}
                      onChange={(e) => setFormData({...formData, comments: e.target.value})}
                      rows={4}
                      placeholder="Tell us more about your return..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all"
                  >
                    Submit Return Request
                  </button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">Return Request Submitted!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We&apos;ve received your return request. You&apos;ll receive a return shipping label at <strong>{formData.email}</strong> within 24 hours.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold mb-1">Return Request Number</p>
                  <p className="text-2xl font-bold text-primary">RET-2024-{returnId}</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/track"
                    className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold py-3 rounded-lg transition-all text-center"
                  >
                    Track Return
                  </Link>
                  <Link
                    href="/"
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all text-center"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Return Policy */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg mb-4">Return Policy</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">schedule</span>
                  <div>
                    <p className="font-semibold mb-1">30-Day Window</p>
                    <p className="text-slate-600 dark:text-slate-400">Returns accepted within 30 days of delivery</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">inventory_2</span>
                  <div>
                    <p className="font-semibold mb-1">Original Condition</p>
                    <p className="text-slate-600 dark:text-slate-400">Items must be unused with all packaging</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">local_shipping</span>
                  <div>
                    <p className="font-semibold mb-1">Free Return Shipping</p>
                    <p className="text-slate-600 dark:text-slate-400">We cover return shipping costs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">payments</span>
                  <div>
                    <p className="font-semibold mb-1">Fast Refunds</p>
                    <p className="text-slate-600 dark:text-slate-400">Refunds processed within 5 business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Need Help?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Our support team is ready to assist with your return.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Contact Support
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            {/* Exchange Option */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl mb-2 block">swap_horiz</span>
              <h4 className="font-bold mb-2">Want to Exchange?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Get a different size, color, or product instead of a refund.
              </p>
              <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                Request Exchange →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}