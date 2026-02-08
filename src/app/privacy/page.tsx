export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-header-dark dark:text-white mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: February 8, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            make a purchase, or contact customer support. This may include your name, email address, 
            shipping address, and payment information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use the information we collect to process orders, provide customer service, 
            send marketing communications, and improve our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Information Sharing
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We do not sell or rent your personal information to third parties. We may share 
            information with service providers who assist us in operating our website and 
            conducting our business.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You have the right to access, correct, or delete your personal information. 
            Contact us at support@lenslight.com for any privacy-related requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-header-dark dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about this Privacy Policy, please contact us at 
            support@lenslight.com or call 1-800-GEAR-NOW.
          </p>
        </section>
      </div>
    </div>
  );
}