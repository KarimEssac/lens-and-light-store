import { Product } from '@/types';
import { APIProduct } from '@/types/api';
import { api } from './api';

const transformAPIProduct = (apiProduct: APIProduct): Product => {
  return {
    id: apiProduct.id.toString(),
    name: apiProduct.name,
    brand: apiProduct.brand,
    price: parseFloat(apiProduct.price),
    originalPrice: apiProduct.original_price ? parseFloat(apiProduct.original_price) : undefined,
    rating: parseFloat(apiProduct.rating),
    reviewCount: apiProduct.review_count,
    image: apiProduct.image,
    category: apiProduct.category.name,
    categoryId: apiProduct.category_id,
    description: apiProduct.description,
    inStock: apiProduct.in_stock,
    quantity: apiProduct.quantity,
    sku: apiProduct.sku,
    badge: apiProduct.badge || undefined,
    images: apiProduct.images,
    specifications: apiProduct.specifications,
    features: apiProduct.features,
  };
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const apiProducts = await api.getProducts();
    return apiProducts.map(transformAPIProduct);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  try {
    const apiProduct = await api.getProduct(id);
    return transformAPIProduct(apiProduct);
  } catch (error) {
    console.error('Error fetching product:', error);
    return undefined;
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const apiProducts = await api.getProducts({ category });
    return apiProducts.map(transformAPIProduct);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const apiProducts = await api.getProducts();
    return apiProducts.slice(0, 4).map(transformAPIProduct);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const apiProducts = await api.getProducts({ search: query });
    return apiProducts.map(transformAPIProduct);
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};