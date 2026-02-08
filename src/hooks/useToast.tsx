'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type ToastType = 'cart' | 'wishlist' | 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  productName?: string;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType, productName?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType, productName?: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, productName }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case 'cart':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/95',
          border: 'border-blue-500',
          iconBg: 'bg-blue-500',
          textTitle: 'text-blue-900 dark:text-blue-100',
          textDesc: 'text-blue-800 dark:text-blue-200',
          icon: 'shopping_cart',
        };
      case 'wishlist':
        return {
          bg: 'bg-pink-50 dark:bg-pink-900/95',
          border: 'border-pink-500',
          iconBg: 'bg-pink-500',
          textTitle: 'text-pink-900 dark:text-pink-100',
          textDesc: 'text-pink-800 dark:text-pink-200',
          icon: 'favorite',
        };
      case 'success':
        return {
          bg: 'bg-green-50 dark:bg-green-900/95',
          border: 'border-green-500',
          iconBg: 'bg-green-500',
          textTitle: 'text-green-900 dark:text-green-100',
          textDesc: 'text-green-800 dark:text-green-200',
          icon: 'check_circle',
        };
      case 'error':
        return {
          bg: 'bg-red-50 dark:bg-red-900/95',
          border: 'border-red-500',
          iconBg: 'bg-red-500',
          textTitle: 'text-red-900 dark:text-red-100',
          textDesc: 'text-red-800 dark:text-red-200',
          icon: 'error',
        };
      default:
        return {
          bg: 'bg-slate-50 dark:bg-slate-900/95',
          border: 'border-slate-500',
          iconBg: 'bg-slate-500',
          textTitle: 'text-slate-900 dark:text-slate-100',
          textDesc: 'text-slate-800 dark:text-slate-200',
          icon: 'info',
        };
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      <div className="fixed top-6 right-6 z-[9999] space-y-3 pointer-events-none">
        {toasts.map((toast) => {
          const styles = getToastStyles(toast.type);
          return (
            <div
              key={toast.id}
              className={`${styles.bg} border-l-4 ${styles.border} p-4 rounded-lg shadow-2xl min-w-[350px] backdrop-blur-sm animate-slide-in-right pointer-events-auto`}
            >
              <div className="flex items-start gap-3">
                <div className={`${styles.iconBg} rounded-full p-2 animate-scale-in`}>
                  <span className="material-symbols-outlined text-white text-xl">
                    {styles.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${styles.textTitle} text-base mb-1`}>
                    {toast.message}
                  </h4>
                  {toast.productName && (
                    <p className={`text-sm ${styles.textDesc}`}>
                      {toast.productName}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className={`${styles.textTitle} hover:opacity-70 transition-opacity`}
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}