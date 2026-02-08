export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-header-dark dark:text-white mb-8">
        Refund Policy
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: February 8, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            30-Day Return Window
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We offer a 30-day return window from the date of delivery. Items must be in original 
            condition with all accessories, manuals, and packaging to qualify for a full refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Refund Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Once we receive your returned item and verify its condition, we will process your 
            refund within 5-7 business days. Refunds will be issued to the original payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Non-Returnable Items
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The following items cannot be returned: opened memory cards, used cleaning supplies, 
            custom-ordered items, and clearance products marked as final sale.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Exchanges
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We gladly exchange defective or damaged items. Contact us within 7 days of delivery 
            to arrange an exchange. We&apos;ll cover return shipping for defective items.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Return Shipping
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Customers are responsible for return shipping costs unless the item is defective or 
            we shipped the wrong product. We recommend using a trackable shipping service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Restocking Fee
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A 15% restocking fee may apply to opened items in original condition. This fee does 
            not apply to defective items or shipping errors on our part.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            How to Initiate a Return
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Contact our customer service at support@lenslight.com or call 1-800-GEAR-NOW to 
            receive a Return Authorization Number. Include this number with your return shipment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about our refund policy, please contact us at 
            support@lenslight.com or 1-800-GEAR-NOW.
          </p>
        </section>
      </div>
    </div>
  );
}