import { Product } from "data/models/Product";

export class ProductApi {
  static async fetchProducts(): Promise<Product[]> {
    return Promise.resolve([]);
  }
}