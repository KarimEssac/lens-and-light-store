import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

export default function CategorySection() {
  return (
    <section className="px-6 py-12">
      <div className="mb-8">
        <h3 className="text-3xl font-black text-header-dark dark:text-white mb-3">
          Shop by Category
        </h3>
        <p className="text-gray-500">Explore our complete range of professional photography gear</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/catalog?category=${category.id}`}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="aspect-square relative overflow-hidden">
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-xl font-black mb-1">{category.name}</h4>
              <p className="text-sm text-gray-300">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}