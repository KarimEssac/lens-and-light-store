'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  removedItems: string[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    
    const savedCart = localStorage.getItem('cart');
    if (!savedCart) return [];
    
    try {
      const parsedCart: CartItem[] = JSON.parse(savedCart);
      return parsedCart.filter(item => item.product.inStock && item.product.quantity > 0);
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  });

  const [removedItems, setRemovedItems] = useState<string[]>([]);

  useEffect(() => {
    if (removedItems.length > 0) {
      const timer = setTimeout(() => setRemovedItems([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [removedItems.length]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    if (!product.inStock || product.quantity <= 0) {
      return;
    }

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        const newQuantity = Math.min(
          existingItem.quantity + quantity,
          product.quantity
        );
        
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        const maxQuantity = Math.min(quantity, product.quantity);
        return [...prevItems, { product, quantity: maxQuantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId 
          ? { ...item, quantity: Math.min(quantity, item.product.quantity) } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        removedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}