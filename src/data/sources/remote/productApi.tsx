import { API_CONFIG } from "@config/api";
import axiosInstance from '@services/axiosInstance';
import { ProductCardProps } from "@props/ProductCardProps";

export class ProductApi {
  static async fetchProducts(limit: number = 0, skip: number = 0): Promise<any> {
    const params: Record<string, any> = {};
    params.limit = limit;
    params.skip = skip;
    const response = await axiosInstance.get(API_CONFIG.base_url + API_CONFIG.endpoints.products, {params});

    return response.data;
  }

  static async fetchProductById(productId: number): Promise<ProductCardProps['item'] | null> {
    try {
      const response = await axiosInstance.get(`${API_CONFIG.base_url}${API_CONFIG.endpoints.products}/${productId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      return null;
    }
  }

  static async searchProducts(query: string, limit: number = 20, skip: number = 0): Promise<any> {
    try {
      const params: Record<string, any> = {
        q: query,
        limit,
        skip
      };
      const response = await axiosInstance.get(
        `${API_CONFIG.base_url}${API_CONFIG.endpoints.products}/search`,
        { params }
      );
      return response.data;
    } catch (error) {
      console.error(`Error searching products with query "${query}":`, error);
      return { products: [], total: 0, skip, limit };
    }
  }
}