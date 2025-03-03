import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';
import { ProductApi } from '@sources/remote/productApi';
import { Product } from '@models/Product';

export class GetFavoriteProducts {
  static async execute(): Promise<Product[]> {
    try {
      const favoriteIds = await FavoritedProductsStorage.getFavorites();

      if (favoriteIds.length === 0) {
        return [];
      }

      const productPromises = favoriteIds.map(id => ProductApi.fetchProductById(id));
      const products = await Promise.all(productPromises);

      const validProducts = products.filter(product => product !== null) as Product[];
      return validProducts;
    } catch (error) {
      console.error('Error in GetFavoriteProducts:', error);
      throw error;
    }
  }
}
