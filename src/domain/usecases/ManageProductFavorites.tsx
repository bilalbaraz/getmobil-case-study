import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

export class ManageProductFavorites {
  static async checkIfFavorited(productId: number): Promise<boolean> {
    return await FavoritedProductsStorage.isFavorited(productId);
  }

  static async toggleFavorite(productId: number, currentStatus: boolean): Promise<boolean> {
    try {
      if (currentStatus) {
        await FavoritedProductsStorage.removeFromFavorites(productId);
      } else {
        await FavoritedProductsStorage.addToFavorites(productId);
      }
      return !currentStatus;
    } catch (error) {
      console.error('Error toggling favorite:', error);
      return currentStatus;
    }
  }
}
