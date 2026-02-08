'use client';

import { useState } from 'react';
import { Product } from '@/types';

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images || [product.image];

  return (
    <div className="space-y-4 sticky top-24">
      <div className="aspect-square w-full rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url('${images[selectedImage]}')` }}
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                selectedImage === index
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'border border-gray-200 dark:border-gray-800 opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}