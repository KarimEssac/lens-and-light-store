'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-secondary-accent/20 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-6">
      <div className="w-full sm:w-32 aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
        <div
          className="w-full h-full bg-cover bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('${item.product.image}')` }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              {item.product.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{item.product.description}</p>
            <p className="text-xs text-slate-400 mt-0.5 italic">SKU: {item.product.sku}</p>
          </div>
          <p className="text-xl font-bold text-primary dark:text-slate-100">
            ${item.product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center border border-secondary-accent/30 dark:border-slate-700 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center"
            >
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border-none focus:ring-0 text-sm font-bold bg-transparent"
            />
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center"
            >
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>

          <button 
            onClick={() => removeFromCart(item.product.id)}
            className="flex items-center gap-1.5 text-xs font-bold text-secondary-accent hover:text-red-500 transition-colors uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-lg">delete</span>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}