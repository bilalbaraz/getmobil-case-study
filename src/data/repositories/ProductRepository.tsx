import { Product } from "../models/Product";
import { ProductApi } from "../sources/remote/productApi";

export class ProductRepository {
    async getProducts(): Promise<Product[]> {
        return await ProductApi.fetchProducts();
    }
}