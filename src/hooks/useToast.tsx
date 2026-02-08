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
    const id = Date.now() + Math.random();
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
          bg: 'bg-blue-100 dark:bg-teal-900/30',
          border: 'border-blue-500 dark:border-teal-500',
          iconBg: 'bg-blue-500 dark:bg-teal-600',
          textTitle: 'text-blue-900 dark:text-teal-100',
          textDesc: 'text-blue-800 dark:text-teal-200',
          icon: 'shopping_cart',
        };
      case 'wishlist':
        return {
          bg: 'bg-purple-100 dark:bg-purple-900',
          border: 'border-purple-500',
          iconBg: 'bg-purple-500',
          textTitle: 'text-purple-900 dark:text-purple-100',
          textDesc: 'text-purple-800 dark:text-purple-200',
          icon: 'favorite',
        };
      case 'success':
        return {
          bg: 'bg-green-100 dark:bg-green-900',
          border: 'border-green-500',
          iconBg: 'bg-green-500',
          textTitle: 'text-green-900 dark:text-green-100',
          textDesc: 'text-green-800 dark:text-green-200',
          icon: 'check_circle',
        };
      case 'error':
        return {
          bg: 'bg-red-100 dark:bg-red-900',
          border: 'border-red-500',
          iconBg: 'bg-red-500',
          textTitle: 'text-red-900 dark:text-red-100',
          textDesc: 'text-red-800 dark:text-red-200',
          icon: 'error',
        };
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-800',
          border: 'border-gray-500',
          iconBg: 'bg-gray-500',
          textTitle: 'text-gray-900 dark:text-gray-100',
          textDesc: 'text-gray-800 dark:text-gray-200',
          icon: 'info',
        };
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }} className="space-y-2 md:space-y-3">
        {toasts.map((toast) => {
          const styles = getToastStyles(toast.type);
          return (
            <div
              key={toast.id}
              className={`${styles.bg} border-l-4 ${styles.border} p-3 md:p-4 rounded-lg shadow-2xl backdrop-blur-sm animate-slide-in-right w-[280px] md:min-w-[350px] md:max-w-[400px]`}
            >
              <div className="flex items-start gap-2 md:gap-3">
                <div className={`${styles.iconBg} rounded-full p-1.5 md:p-2 animate-scale-in`}>
                  <span className="material-symbols-outlined text-white text-lg md:text-xl">
                    {styles.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold ${styles.textTitle} text-sm md:text-base mb-1`}>
                    {toast.message}
                  </h4>
                  {toast.productName && (
                    <p className={`text-xs md:text-sm ${styles.textDesc}`}>
                      {toast.productName}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className={`${styles.textTitle} hover:opacity-70 transition-opacity`}
                >
                  <span className="material-symbols-outlined text-base md:text-lg">close</span>
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