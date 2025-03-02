import { ProductApi } from '@sources/remote/productApi';
import { Product } from '@models/Product';

export interface SearchProductsByQueryResult {
  products: Product[];
  noResults: boolean;
  error: boolean;
}

export class SearchProductsByQuery {
  static async execute(query: string): Promise<SearchProductsByQueryResult> {
    if (!query.trim()) {
      return {
        products: [],
        noResults: true,
        error: false
      };
    }
    
    try {
      const results = await ProductApi.searchProducts(query);

      if (results && results.products.length > 0) {
        return {
          products: results.products,
          noResults: false,
          error: false
        };
      } else {
        return {
          products: [],
          noResults: true,
          error: false
        };
      }
    } catch (error) {
      console.error('Error in SearchProductsByQuery:', error);
      return {
        products: [],
        noResults: true,
        error: true
      };
    }
  }
}
