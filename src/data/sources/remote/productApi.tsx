import { API_CONFIG } from "@config/api";
import axiosInstance from '@services/axiosInstance';

export class ProductApi {
  static async fetchProducts(): Promise<any> {
    const response = await axiosInstance.get(API_CONFIG.base_url + API_CONFIG.endpoints.products);

    return response.data;
  }
}