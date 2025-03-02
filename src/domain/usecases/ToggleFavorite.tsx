import { FavoritedProductsStorage } from '@sources/local/favoritedProductsStorage';

/**
 * ToggleFavorite UseCase'ini ekle
 */
export class ToggleFavorite {
  /**
   * Toggles the favorite status of a product
   * @param productId The ID of the product to toggle
   * @returns A promise that resolves to the new favorite status
   */
  static async execute(productId: number): Promise<boolean> {
    try {
      const isFavorited = await FavoritedProductsStorage.isFavorited(productId);
      
      if (isFavorited) {
        await FavoritedProductsStorage.removeFromFavorites(productId);
        return false;
      } else {
        await FavoritedProductsStorage.addToFavorites(productId);
        return true;
      }
    } catch (error) {
      console.error('Error in ToggleFavorite:', error);
      throw error;
    }
  }
}
