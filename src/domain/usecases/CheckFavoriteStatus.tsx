import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

/**
 * CheckFavoriteStatus UseCase'ini ekle
 */
export class CheckFavoriteStatus {
  /**
   * Checks if a product is favorited
   * @param productId The ID of the product to check
   * @returns A promise that resolves to the favorite status
   */
  static async execute(productId: number): Promise<boolean> {
    try {
      return await FavoritedProductsStorage.isFavorited(productId);
    } catch (error) {
      console.error('Error in CheckFavoriteStatus:', error);
      return false;
    }
  }
}
