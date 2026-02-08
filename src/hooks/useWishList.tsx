'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';
import { getProductById } from '@/lib/products';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  totalItems: number;
  removedItems: string[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window === 'undefined') return [];
    
    const savedWishlist = localStorage.getItem('wishlist');
    if (!savedWishlist) return [];
    
    try {
      const parsedWishlist: Product[] = JSON.parse(savedWishlist);
      
      const validatedWishlist: Product[] = [];

      parsedWishlist.forEach((savedProduct) => {
        const currentProduct = getProductById(savedProduct.id);
        
        if (currentProduct && currentProduct.inStock && currentProduct.quantity > 0) {
          validatedWishlist.push(currentProduct);
        }
      });

      return validatedWishlist;
    } catch (error) {
      console.error('Error loading wishlist:', error);
      return [];
    }
  });

  const [removedItems, setRemovedItems] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    
    const savedWishlist = localStorage.getItem('wishlist');
    if (!savedWishlist) return [];
    
    try {
      const parsedWishlist: Product[] = JSON.parse(savedWishlist);
      const removed: string[] = [];

      parsedWishlist.forEach((savedProduct) => {
        const currentProduct = getProductById(savedProduct.id);
        
        if (!currentProduct || !currentProduct.inStock || currentProduct.quantity <= 0) {
          removed.push(savedProduct.name);
        }
      });

      return removed;
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (removedItems.length > 0) {
      const timer = setTimeout(() => setRemovedItems([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [removedItems.length]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product: Product) => {
    const currentProduct = getProductById(product.id);
    
    if (!currentProduct || !currentProduct.inStock || currentProduct.quantity <= 0) {
      return;
    }

    setItems(currentItems => {
      const exists = currentItems.find(item => item.id === product.id);
      if (exists) {
        return currentItems;
      }
      return [...currentItems, currentProduct];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  const totalItems = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        totalItems,
        removedItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}