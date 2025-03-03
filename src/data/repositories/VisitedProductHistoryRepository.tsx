import { Product } from '@models/Product';
import { VisitedProductHistoryStorage } from '@sources/local/visitedProductHistoryStorage';

export class VisitedProductHistoryRepository {
    static async getVisitedProducts(): Promise<string[]> {
        return await VisitedProductHistoryStorage.getVisitedProducts();
    }

    static async addProduct(product: Product): Promise<void> {
        await VisitedProductHistoryStorage.addProduct(product);
    }
}
