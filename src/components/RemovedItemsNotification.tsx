'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

export default function RemovedItemsNotification() {
  const { removedItems: cartRemoved } = useCart();
  const { removedItems: wishlistRemoved } = useWishlist();
  const [visible, setVisible] = useState(false);

  const allRemovedItems = [...(cartRemoved || []), ...(wishlistRemoved || [])];

  useEffect(() => {
    if (allRemovedItems.length > 0) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [allRemovedItems.length]);

  if (!visible || allRemovedItems.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-slide-in-right">
      <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg shadow-xl">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl">
            info
          </span>
          <div className="flex-1">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1">
              Items Removed
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
              The following items are no longer available and have been removed:
            </p>
            <ul className="text-xs text-amber-700 dark:text-amber-300 space-y-1">
              {allRemovedItems.map((itemName, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-600 rounded-full"></span>
                  {itemName}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}