import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import { getProductById } from '@/lib/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: product.category, href: `/catalog?category=${product.category.toLowerCase()}` },
    { label: product.name },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <Breadcrumbs items={breadcrumbs} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <ProductGallery product={product} />
        </div>
        <div className="lg:col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}