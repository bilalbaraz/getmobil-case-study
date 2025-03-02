import { Product } from '@models/Product';

/**
 * Searches for products in a list based on a query string
 */
export class SearchProducts {
  /**
   * Searches for products in a list based on a query string
   * @param products List of products to search in
   * @param query Search query string
   * @returns Filtered list of products that match the query
   */
  static execute(products: Product[], query: string): Product[] {
    if (query.trim() === '') {
      return products;
    }
    
    const normalizedQuery = query.toLowerCase().trim();
    
    return products.filter(product => 
      product.title.toLowerCase().includes(normalizedQuery) || 
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    );
  }
}
