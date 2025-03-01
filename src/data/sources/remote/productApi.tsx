import { API_CONFIG } from "../../../config/api";
import { Product } from "../../models/Product";
import axiosInstance from '../../../services/axiosInstance';

export class ProductApi {
  static async fetchProducts(): Promise<Product[]> {
    const response = await axiosInstance.get(API_CONFIG.base_url + API_CONFIG.endpoints.products);

    return response.data;
  }
}