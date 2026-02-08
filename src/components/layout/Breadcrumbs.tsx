import Link from 'next/link';
import { Breadcrumb } from '@/types';

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest font-semibold overflow-x-auto whitespace-nowrap">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          )}
        </div>
      ))}
    </nav>
  );
}