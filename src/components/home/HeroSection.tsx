'use client'
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="px-0 md:px-6 py-0 md:py-6">
      <div className="relative md:rounded-xl overflow-hidden bg-header-dark h-[560px] flex items-center group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(38, 50, 56, 0.9) 0%, rgba(38, 50, 56, 0.4) 50%, rgba(38, 50, 56, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuU7ovYqCKCFnhn1QSSjpKQGZlvZoj0Grx55YCUgxeb6yEDGWUIZg4_3o1RLOUK94PHhyM8hR3v0szZFFPg9zWivwqTDuV1XVisFxsWFC1mgE13gLraoz2l3siDDF7TMHCpn6NF251uaIz1dQgZ9j9Qfk1R5zPhZk20iaMhZxBQznMlDI5i7vI5v56BQG28MIo-DJDH7FrDCUF2NZFnRj1Kol2mvzAqGYbHFl9Ec1GBnJgegtTdFdiYEQiknrGB1UVVq81st7egQM')`,
          }}
        />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-2xl text-white">
          <span className="inline-block px-3 py-1 bg-primary text-xs font-bold tracking-widest uppercase rounded mb-6 animate-fade-in-up">
            New Arrival
          </span>
          <h2 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tighter animate-fade-in-up animation-delay-100">
            Master the Light.
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 font-medium leading-relaxed animate-fade-in-up animation-delay-200">
            Experience unparalleled clarity and speed with the new Flagship Alpha Z1. Built for
            visionaries who demand perfection.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="/product/1"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Shop Alpha Z1</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}