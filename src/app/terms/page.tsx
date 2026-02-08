export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-header-dark dark:text-white mb-8">
        Terms of Service
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: February 8, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            By accessing and using Lens & Light, you accept and agree to be bound by these 
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Use of Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these 
            terms. You may not use our services in any way that could damage, disable, or impair 
            our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Product Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We strive to provide accurate product information, but we do not warrant that product 
            descriptions or other content is accurate, complete, or error-free. Prices and 
            availability are subject to change without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Orders and Payment
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All orders are subject to acceptance and availability. We reserve the right to refuse 
            or cancel any order for any reason. Payment must be received before order processing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Lens & Light shall not be liable for any indirect, incidental, special, or 
            consequential damages arising out of or related to your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We reserve the right to modify these terms at any time. Continued use of our services 
            after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            For questions about these Terms of Service, contact us at support@lenslight.com 
            or 1-800-GEAR-NOW.
          </p>
        </section>
      </div>
    </div>
  );
}