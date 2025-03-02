import { Product } from "@models/Product";
import { ProductApi } from "@sources/remote/productApi";

export class ProductRepository {
    static async getProducts(): Promise<Product[]> {
        const response = await ProductApi.fetchProducts();

        return response.products;
    }
}