'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Support' },
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all products. Items must be in original condition with all packaging and accessories. Simply contact our support team to initiate a return.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping (2-day) is available for orders over $499. All orders are processed within 24 hours.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by location (7-14 business days). Customs fees may apply.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, Amex, Discover), PayPal, Apple Pay, and Google Pay. Financing options are available through Affirm.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order on our Track Order page using your order number.'
    },
    {
      question: 'What warranty do you offer?',
      answer: 'All products come with manufacturer warranty (typically 1-2 years). Extended warranty options are available at checkout. Register your product within 30 days for full coverage.'
    },
  ];

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Phone Support',
      details: '1-800-LENS-LIGHT',
      hours: 'Mon-Fri: 9AM - 8PM EST',
      link: 'tel:1-800-536-7544'
    },
    {
      icon: 'email',
      title: 'Email Support',
      details: 'support@lensandlight.com',
      hours: 'Response within 24 hours',
      link: 'mailto:support@lensandlight.com'
    },
    {
      icon: 'chat',
      title: 'Live Chat',
      details: 'Chat with our team',
      hours: 'Available 24/7',
      link: '#'
    },
    {
      icon: 'store',
      title: 'Visit a Store',
      details: 'Find a location near you',
      hours: 'Store hours vary',
      link: '/stores'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-8">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          How Can We Help?
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Get answers to common questions or reach out to our support team.
        </p>

        <div className="mb-12">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0"
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all group"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-3 block">
                  {method.icon}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {method.details}
                </p>
                <p className="text-xs text-slate-500">{method.hours}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span className={`material-symbols-outlined text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Popular Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/returns" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">autorenew</span>
              <span className="font-semibold">Returns & Exchanges</span>
            </a>
            <a href="/track" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">local_shipping</span>
              <span className="font-semibold">Track Your Order</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">credit_card</span>
              <span className="font-semibold">Payment Issues</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">verified</span>
              <span className="font-semibold">Warranty Information</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
              <span className="font-semibold">Account Help</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">build</span>
              <span className="font-semibold">Product Setup Guides</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}