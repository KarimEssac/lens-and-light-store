'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <section className="px-6 py-12 mt-12">
      <div className="bg-header-dark rounded-2xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] -mr-20 -mt-10 text-white">
            camera
          </span>
        </div>

        <div className="lg:w-1/2 relative z-10">
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Join the Pro Community
          </h3>
          <p className="text-gray-400 text-lg">
            Get exclusive deals, early access to new launches, and expert photography tips delivered
            weekly.
          </p>
        </div>

        <div className="lg:w-1/2 w-full relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all outline-none"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-bold">
            Unsubscribe at any time. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
}