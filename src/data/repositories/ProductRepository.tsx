import { Product } from "data/models/Product";
import { ProductApi } from "../sources/remote/productApi";

export class ProductRepository {
    async getProducts(): Promise<Product[]> {
        return Promise.resolve([]);
    }
}