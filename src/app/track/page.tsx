'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface TrackingItem {
  name: string;
  quantity: number;
  image: string;
}

interface TimelineEvent {
  status: string;
  date: string;
  completed: boolean;
  current?: boolean;
}

interface TrackingData {
  orderNumber: string;
  status: string;
  estimatedDelivery: string;
  carrier: string;
  trackingNumber: string;
  items: TrackingItem[];
  timeline: TimelineEvent[];
}

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(false);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Track Order' },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setTrackingData({
        orderNumber: orderNumber || 'ORD-2026-1234',
        status: 'In Transit',
        estimatedDelivery: 'Feb 12, 2026',
        carrier: 'FedEx',
        trackingNumber: '1234567890',
        items: [
          { name: 'Alpha Z1 Flagship Camera', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuU7ovYqCKCFnhn1QSSjpKQGZlvZoj0Grx55YCUgxeb6yEDGWUIZg4_3o1RLOUK94PHhyM8hR3v0szZFFPg9zWivwqTDuV1XVisFxsWFC1mgE13gLraoz2l3siDDF7TMHCpn6NF251uaIz1dQgZ9j9Qfk1R5zPhZk20iaMhZxBQznMlDI5i7vI5v56BQG28MIo-DJDH7FrDCUF2NZFnRj1Kol2mvzAqGYbHFl9Ec1GBnJgegtTdFdiYEQiknrGB1UVVq81st7egQM' },
        ],
        timeline: [
          { status: 'Order Placed', date: 'Feb 8, 2026 10:30 AM', completed: true },
          { status: 'Processing', date: 'Feb 8, 2026 2:45 PM', completed: true },
          { status: 'Shipped', date: 'Feb 9, 2026 8:15 AM', completed: true },
          { status: 'In Transit', date: 'Feb 10, 2026 6:20 AM', completed: true, current: true },
          { status: 'Out for Delivery', date: 'Expected Feb 12', completed: false },
          { status: 'Delivered', date: 'Expected Feb 12', completed: false },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Track Your Order
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Enter your order details to track your shipment.
        </p>

        <div className="max-w-2xl mb-12">
          <form onSubmit={handleTrack} className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Order Number
                </label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="ORD-2026-XXXX"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Tracking...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">search</span>
                    Track Order
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {trackingData && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    Order #{trackingData.orderNumber}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    {trackingData.carrier} • Tracking: {trackingData.trackingNumber}
                  </p>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-bold">
                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                    {trackingData.status}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Est. Delivery: <span className="font-semibold">{trackingData.estimatedDelivery}</span>
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <h3 className="font-semibold mb-4">Items in this shipment</h3>
                <div className="space-y-3">
                  {trackingData.items.map((item: TrackingItem, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
                        <div
                          className="w-full h-full bg-center bg-no-repeat bg-contain"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-lg mb-6">Shipment Timeline</h3>
              <div className="space-y-6">
                {trackingData.timeline.map((event: TimelineEvent, index: number) => (
                  <div key={index} className="relative flex gap-4">
                    {index !== trackingData.timeline.length - 1 && (
                      <div className={`absolute left-4 top-10 w-0.5 h-full ${event.completed ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`} />
                    )}
                    
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      event.current 
                        ? 'bg-primary ring-4 ring-primary/20' 
                        : event.completed 
                          ? 'bg-primary' 
                          : 'bg-slate-200 dark:bg-slate-700'
                    }`}>
                      {event.completed && (
                        <span className="material-symbols-outlined text-white text-sm">check</span>
                      )}
                    </div>

                    <div className="flex-1 pb-6">
                      <h4 className={`font-bold mb-1 ${event.current ? 'text-primary' : event.completed ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                        {event.status}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">help</span>
                <div>
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    If you have questions about your order or delivery, our support team is here to help.
                  </p>
                  <a href="/support" className="text-sm font-semibold text-primary hover:underline">
                    Contact Support →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}