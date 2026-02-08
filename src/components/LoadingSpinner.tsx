'use client';

import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 300);
    };

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-background-dark flex items-center justify-center animate-fade-out">
      <div className="text-center">
        <div className="inline-block relative">
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl animate-pulse">camera</span>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-400 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}