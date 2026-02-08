import ProgressStepper from '@/components/checkout/ProgressStepper';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderSummary from '@/components/cart/OrderSummary';
import { products } from '@/lib/products';

export default function CheckoutPage() {
  const cartItems = [
    { product: products[1], quantity: 1 },
    { product: products[2], quantity: 1 },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <ProgressStepper currentStep={2} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <PaymentForm />
        </div>
        <div className="lg:col-span-5">
          <OrderSummary items={cartItems} showPromoCode={false} showTrustBadges={false} />
        </div>
      </div>
    </main>
  );
}