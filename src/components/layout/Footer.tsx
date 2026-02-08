import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-8 md:py-16 transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="bg-primary text-white p-1 rounded-lg">
              <span className="material-symbols-outlined text-xl">camera</span>
            </div>
            <span className="text-lg font-black text-header-dark dark:text-white uppercase tracking-tighter">
              Lens & Light
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-6 hidden md:block">
            The premier destination for professional and enthusiast photographers since 2010.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">movie</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
            >
              <span className="material-symbols-outlined text-lg">camera_alt</span>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h6 className="font-bold text-header-dark dark:text-white mb-6 uppercase tracking-wider text-xs">
            Shop Gear
          </h6>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            {FOOTER_LINKS.shopGear.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-header-dark dark:text-white mb-4 md:mb-6 uppercase tracking-wider text-xs">
            Support
          </h6>
          <ul className="space-y-2 md:space-y-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            {FOOTER_LINKS.support.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="hidden md:block">
              <Link href="/returns" className="hover:text-primary transition-colors duration-200">
                Returns & Refunds
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/stores" className="hover:text-primary transition-colors duration-200">
                Store Locator
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-header-dark dark:text-white mb-4 md:mb-6 uppercase tracking-wider text-xs">
            Contact Us
          </h6>
          <ul className="space-y-2 md:space-y-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-primary">phone</span>
              1-800-GEAR-NOW
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm text-primary">mail</span>
              support@lenslight.com
            </li>
            <li className="hidden md:flex items-start gap-3">
              <span className="material-symbols-outlined text-sm text-primary">location_on</span>
              <span className="leading-tight">
                88 Camera Row, Studio District<br />
                New York, NY 10001
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
        <p>© 2026 Lens & Light. All Rights Reserved.</p>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs">
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}