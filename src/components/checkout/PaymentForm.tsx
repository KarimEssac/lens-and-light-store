'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/useToast';

interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    [key: string]: any;
  };
  quantity: number;
}

interface PaymentFormProps {
  items: CartItem[];
}

export default function PaymentForm({ items }: PaymentFormProps) {
  const { clearCart } = useCart();
  const router = useRouter();
  const { showToast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay' | 'cod'>('card');
  const [billingIsSame, setBillingIsSame] = useState(true);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  useEffect(() => {
    const savedAddress = localStorage.getItem('shippingAddress');
    if (savedAddress) {
      try {
        setShippingAddress(JSON.parse(savedAddress));
      } catch (error) {
        console.error('Error loading shipping address:', error);
      }
    } else {
      setIsEditingAddress(true);
    }
  }, []);

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const saveAddress = () => {
    if (!shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode) {
      alert('Please fill in all required fields');
      return;
    }
    localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
    setIsEditingAddress(false);
  };

  const handleCompleteOrder = () => {
    if (!shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.city) {
      alert('Please complete your shipping address');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const orderData = {
        success: true,
        orderId: `ORD-${Date.now()}`,
        timestamp: new Date().toISOString(),
        customer: {
          name: shippingAddress.fullName,
          address: {
            line1: shippingAddress.addressLine1,
            line2: shippingAddress.addressLine2 || null,
            city: shippingAddress.city,
            state: shippingAddress.state,
            zipCode: shippingAddress.zipCode,
            country: shippingAddress.country,
          },
        },
        paymentMethod: paymentMethod,
        items: items.map(item => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          total: item.product.price * item.quantity,
        })),
        summary: {
          subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
          tax: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 0.02,
          shipping: 0,
          total: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * 1.02,
        },
      };

      console.log('✅ ORDER SUCCESS:', orderData);
      
      setIsProcessing(false);
      showToast('Order Placed Successfully!', 'success', 'Thank you for your order. Redirecting...');
      
      setTimeout(() => {
        clearCart();
        setTimeout(() => {
          router.push('/');
        }, 500);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_shipping</span>
            Shipping Address
          </h3>
          {!isEditingAddress && (
            <button 
              onClick={() => setIsEditingAddress(true)}
              className="text-primary text-sm font-semibold hover:underline"
            >
              Change
            </button>
          )}
        </div>
        
        {isEditingAddress ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={shippingAddress.fullName}
                onChange={(e) => handleAddressChange('fullName', e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={shippingAddress.addressLine1}
                onChange={(e) => handleAddressChange('addressLine1', e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="123 Photography Lane"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                value={shippingAddress.addressLine2 || ''}
                onChange={(e) => handleAddressChange('addressLine2', e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Apt, Suite, Unit, Building (Optional)"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="San Francisco"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={shippingAddress.state}
                  onChange={(e) => handleAddressChange('state', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="CA"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={shippingAddress.zipCode}
                  onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="94103"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Country
                </label>
                <input
                  type="text"
                  value={shippingAddress.country}
                  onChange={(e) => handleAddressChange('country', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="United States"
                />
              </div>
            </div>
            
            <button
              onClick={saveAddress}
              className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
            >
              Save Address
            </button>
          </div>
        ) : (
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {shippingAddress.fullName}<br />
            {shippingAddress.addressLine1}
            {shippingAddress.addressLine2 && <>, {shippingAddress.addressLine2}</>}<br />
            {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}<br />
            {shippingAddress.country}
          </p>
        )}
      </section>

      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6 flex items-start gap-3">
          <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-xl">
            info
          </span>
          <div className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Training Project Notice:</strong> This is a demo checkout for educational purposes. Please do not enter real payment information. No actual transactions will be processed.
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'card'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'card' ? 'text-primary' : 'text-slate-400'
              }`}>
                credit_card
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'card' ? 'text-primary' : 'text-slate-500'
              }`}>
                Card
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'paypal'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'paypal' ? 'text-primary' : 'text-slate-400'
              }`}>
                payments
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'paypal' ? 'text-primary' : 'text-slate-500'
              }`}>
                PayPal
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod('applepay')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'applepay'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'applepay' ? 'text-primary' : 'text-slate-400'
              }`}>
                phone_iphone
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'applepay' ? 'text-primary' : 'text-slate-500'
              }`}>
                Apple Pay
              </span>
            </button>

            <button
              onClick={() => setPaymentMethod('cod')}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                paymentMethod === 'cod'
                  ? 'border-2 border-primary bg-primary/5'
                  : 'border border-slate-200 dark:border-slate-800 hover:border-primary/50'
              }`}
            >
              <span className={`material-symbols-outlined mb-1 ${
                paymentMethod === 'cod' ? 'text-primary' : 'text-slate-400'
              }`}>
                payments
              </span>
              <span className={`text-xs font-bold uppercase tracking-tight ${
                paymentMethod === 'cod' ? 'text-primary' : 'text-slate-500'
              }`}>
                COD
              </span>
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="e.g. John Doe (Demo only)"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 pr-12 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="0000 0000 0000 0000 (Demo only)"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    lock
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="MM/YY (Demo)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    CVV
                    <span
                      className="material-symbols-outlined text-[16px] text-slate-400 cursor-help"
                      title="3-4 digits on back of card"
                    >
                      info
                    </span>
                  </label>
                  <input
                    type="password"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="*** (Demo)"
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-4xl mb-3 block">
                account_balance_wallet
              </span>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                You will be redirected to PayPal to complete your payment securely.
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                (Demo mode - no actual redirect will occur)
              </p>
            </div>
          )}

          {paymentMethod === 'applepay' && (
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-4xl mb-3 block">
                phone_iphone
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Pay securely with Apple Pay using Touch ID or Face ID.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                (Demo mode - Apple Pay integration not active)
              </p>
            </div>
          )}

          {paymentMethod === 'cod' && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl">
                  local_atm
                </span>
                <div>
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
                    Cash on Delivery
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                    Pay with cash when your order is delivered to your doorstep.
                  </p>
                  <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                      Have exact change ready for the delivery person
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                      Cash only - cards not accepted at delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-green-600 rounded-full"></span>
                      You&apos;ll receive a receipt upon payment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              checked={billingIsSame}
              onChange={(e) => setBillingIsSame(e.target.checked)}
              className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              id="billing"
            />
            <label htmlFor="billing" className="text-sm text-slate-600 dark:text-slate-400">
              Billing address is same as shipping
            </label>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/cart"
            className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Cart
          </Link>
          <button 
            onClick={handleCompleteOrder}
            disabled={isProcessing}
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                Processing...
              </>
            ) : (
              <>
                Complete Order
                <span className="material-symbols-outlined">chevron_right</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">PCI Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xl">lock_reset</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">256-bit SSL</span>
          </div>
        </div>
      </section>
    </>
  );
}