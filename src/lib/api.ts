import { APIProduct, APICategory, APIPromoCode, APIError } from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://lens-and-light-backend-production.up.railway.app/api';

class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        const error: APIError = await response.json();
        throw new Error(error.message || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred');
    }
  }

  async getCsrfCookie(): Promise<void> {
    await fetch(`${this.baseURL.replace('/api', '')}/sanctum/csrf-cookie`, {
      credentials: 'include',
    });
  }

  async getProducts(params?: { category?: string; search?: string }): Promise<APIProduct[]> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.search) searchParams.append('search', params.search);
    
    const query = searchParams.toString();
    return this.request<APIProduct[]>(`/products${query ? `?${query}` : ''}`);
  }

  async getProduct(id: string): Promise<APIProduct> {
    return this.request<APIProduct>(`/products/${id}`);
  }

  async getCategories(): Promise<APICategory[]> {
    return this.request<APICategory[]>('/categories');
  }

  async validatePromoCode(code: string, subtotal: number): Promise<APIPromoCode> {
    return this.request<APIPromoCode>('/promo-codes/validate', {
      method: 'POST',
      body: JSON.stringify({ code, subtotal }),
    });
  }
}

export const api = new APIClient(API_URL);