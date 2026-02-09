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
  const [items, setItems] = useState<Product[]>([]);
  const [removedItems, setRemovedItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const loadWishlist = async () => {
      if (typeof window === 'undefined') {
        setIsLoading(false);
        return;
      }
      
      const savedWishlist = localStorage.getItem('wishlist');
      if (!savedWishlist) {
        setIsLoading(false);
        return;
      }
      
      try {
        const parsedWishlist: Product[] = JSON.parse(savedWishlist);
        
        const validatedWishlist: Product[] = [];
        const removed: string[] = [];

        // Use for...of to properly handle async/await
        for (const savedProduct of parsedWishlist) {
          const currentProduct = await getProductById(savedProduct.id);
          
          if (currentProduct && currentProduct.inStock && currentProduct.quantity > 0) {
            validatedWishlist.push(currentProduct);
          } else if (savedProduct.name) {
            removed.push(savedProduct.name);
          }
        }

        setItems(validatedWishlist);
        setRemovedItems(removed);
      } catch (error) {
        console.error('Error loading wishlist:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadWishlist();
  }, []);

  // Auto-clear removed items notification after 5 seconds
  useEffect(() => {
    if (removedItems.length > 0) {
      const timer = setTimeout(() => setRemovedItems([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [removedItems.length]);

  // Save to localStorage whenever items change (but not during initial load)
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('wishlist', JSON.stringify(items));
    }
  }, [items, isLoading]);

  const addToWishlist = async (product: Product) => {
    const currentProduct = await getProductById(product.id);
    
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