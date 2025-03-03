import { Product } from '@models/Product';
import { ProductApi } from '@sources/remote/productApi';

export class ProductRepository {
    static async getProducts(limit: number = 10, skip: number = 0): Promise<Product[]> {
        const response = await ProductApi.fetchProducts(limit, skip);

        return response.products;
    }
}
