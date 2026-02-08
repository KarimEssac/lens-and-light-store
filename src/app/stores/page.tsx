'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function StoresPage() {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [searchZip, setSearchZip] = useState('');

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Store Locations' },
  ];

  const stores = [
    {
      id: 1,
      name: 'Lens & Light - Manhattan',
      address: '123 Fifth Avenue',
      city: 'New York, NY 10011',
      phone: '(212) 555-0100',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
      services: ['Expert Consultations', 'Same-Day Pickup', 'Repair Services', 'Trade-In Program'],
      distance: '2.3 miles',
    },
    {
      id: 2,
      name: 'Lens & Light - Brooklyn',
      address: '456 Bedford Avenue',
      city: 'Brooklyn, NY 11249',
      phone: '(718) 555-0200',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
      services: ['Expert Consultations', 'Equipment Rental', 'Workshops', 'Trade-In Program'],
      distance: '5.1 miles',
    },
    {
      id: 3,
      name: 'Lens & Light - Los Angeles',
      address: '789 Sunset Boulevard',
      city: 'Los Angeles, CA 90028',
      phone: '(323) 555-0300',
      hours: 'Mon-Sat: 9AM-9PM, Sun: 10AM-7PM',
      services: ['Expert Consultations', 'Same-Day Pickup', 'Repair Services', 'Equipment Rental'],
      distance: '12.7 miles',
    },
    {
      id: 4,
      name: 'Lens & Light - San Francisco',
      address: '321 Market Street',
      city: 'San Francisco, CA 94102',
      phone: '(415) 555-0400',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
      services: ['Expert Consultations', 'Workshops', 'Trade-In Program'],
      distance: '8.4 miles',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for stores near ${searchZip}...`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Find a Store Near You
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Visit us in person for expert advice, hands-on demos, and exclusive in-store offers.
        </p>

        <div className="mb-8 max-w-2xl">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchZip}
                onChange={(e) => setSearchZip(e.target.value)}
                placeholder="Enter ZIP code or city"
                className="w-full px-4 py-4 pr-12 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                location_on
              </span>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className={`bg-white dark:bg-slate-800 p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedStore === store.id
                    ? 'border-primary shadow-lg'
                    : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
                }`}
                onClick={() => setSelectedStore(store.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {store.name}
                    </h3>
                    <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {store.address}, {store.city}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">phone</span>
                        {store.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {store.hours}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {store.distance}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Services Available
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {store.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.address + ' ' + store.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border-2 border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-white transition-all text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${store.phone}`}
                    className="flex-1 text-center bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Call Store
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="aspect-square bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <span className="material-symbols-outlined text-6xl text-slate-400 mb-2 block">map</span>
                  <p className="text-sm text-slate-500">Interactive map</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4">In-Store Benefits</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">verified</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Expert Staff:</strong> Get personalized recommendations from photography professionals
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">touch_app</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Try Before You Buy:</strong> Hands-on demos of all products
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">local_offer</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Exclusive Offers:</strong> In-store only deals and promotions
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">schedule</span>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Same-Day Pickup:</strong> Order online, pick up in store today
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-primary mb-3 block">school</span>
              <h4 className="font-bold text-lg mb-2">Free Workshops</h4>
              <p className="text-sm text-slate-300 mb-4">
                Join our weekly photography workshops at select locations. Learn from the pros!
              </p>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all text-sm">
                View Schedule
              </button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold mb-3">Questions?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Contact our team for store hours, services, or product availability.
              </p>
              <a
                href="/support"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Get Help
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}