export interface APIProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
  original_price: string | null;
  rating: string;
  review_count: number;
  image: string;
  category_id: number;
  description: string;
  in_stock: boolean;
  quantity: number;
  sku: string;
  badge: string | null;
  images: string[];
  specifications: { label: string; value: string }[];
  features: string[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface APICategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  count: string;
}

export interface APIPromoCode {
  id: number;
  code: string;
  discount: string;
  type: 'percentage' | 'fixed';
  description: string;
  min_purchase: string | null;
  active: boolean;
}

export interface APIError {
  message: string;
  errors?: Record<string, string[]>;
}