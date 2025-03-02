import { API_CONFIG } from "@config/api";
import axiosInstance from '@services/axiosInstance';

export class ProductApi {
  static async fetchProducts(limit: number = 0, skip: number = 0): Promise<any> {
    const params: Record<string, any> = {};
    params.limit = limit;
    params.skip = skip;
    const response = await axiosInstance.get(API_CONFIG.base_url + API_CONFIG.endpoints.products, {params});

    return response.data;
  }
}