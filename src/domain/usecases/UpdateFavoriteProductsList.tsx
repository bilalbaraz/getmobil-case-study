import { Product } from '@models/Product';

/**
 * Updates a list of favorite products after a product is removed from favorites
 */
export class UpdateFavoriteProductsList {
  /**
   * Updates a list of favorite products after a product is removed from favorites
   * @param products Current list of favorite products
   * @param productId ID of the product that was removed from favorites
   * @returns Updated list of favorite products
   */
  static execute(products: Product[], productId: number): Product[] {
    return products.filter(product => product.id !== productId);
  }
}
