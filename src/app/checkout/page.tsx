'use client';

import ProgressStepper from '@/components/checkout/ProgressStepper';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderSummary from '@/components/cart/OrderSummary';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push('/cart');
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <ProgressStepper currentStep={2} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <PaymentForm items={items} />
        </div>
        <div className="lg:col-span-5">
          <OrderSummary items={items} showPromoCode={false} showTrustBadges={false} />
        </div>
      </div>
    </main>
  );
}