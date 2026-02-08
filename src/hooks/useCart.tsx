'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types';
import { getProductById } from '@/lib/products';

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
      
      const validatedCart: CartItem[] = [];

      parsedCart.forEach((item) => {
        const currentProduct = getProductById(item.product.id);
        
        if (currentProduct && currentProduct.inStock && currentProduct.quantity > 0) {
          const maxQuantity = Math.min(item.quantity, currentProduct.quantity);
          
          validatedCart.push({
            product: currentProduct,
            quantity: maxQuantity,
          });
        }
      });

      return validatedCart;
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  });

  const [removedItems, setRemovedItems] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    
    const savedCart = localStorage.getItem('cart');
    if (!savedCart) return [];
    
    try {
      const parsedCart: CartItem[] = JSON.parse(savedCart);
      const removed: string[] = [];

      parsedCart.forEach((item) => {
        const currentProduct = getProductById(item.product.id);
        
        if (!currentProduct || !currentProduct.inStock || currentProduct.quantity <= 0) {
          removed.push(item.product.name);
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
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const currentProduct = getProductById(product.id);
    
    if (!currentProduct || !currentProduct.inStock || currentProduct.quantity <= 0) {
      return;
    }

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        const newQuantity = Math.min(
          existingItem.quantity + quantity,
          currentProduct.quantity
        );
        
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, product: currentProduct, quantity: newQuantity }
            : item
        );
      } else {
        const maxQuantity = Math.min(quantity, currentProduct.quantity);
        return [...prevItems, { product: currentProduct, quantity: maxQuantity }];
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

    const currentProduct = getProductById(productId);
    if (!currentProduct || !currentProduct.inStock) {
      removeFromCart(productId);
      return;
    }

    const maxQuantity = Math.min(quantity, currentProduct.quantity);
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId 
          ? { ...item, product: currentProduct, quantity: maxQuantity } 
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