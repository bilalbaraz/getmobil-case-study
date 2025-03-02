import { Product } from '@models/Product';
import { SearchProductsByQuery } from './SearchProductsByQuery';

export interface SearchState {
  products: Product[];
  loading: boolean;
  noResults: boolean;
}

export interface SearchStateUpdater {
  setProducts: (products: Product[]) => void;
  setLoading: (loading: boolean) => void;
  setNoResults: (noResults: boolean) => void;
}

export class PerformProductSearch {
  static async execute(query: string, stateUpdater: SearchStateUpdater): Promise<void> {
    const { setLoading, setProducts, setNoResults } = stateUpdater;
    
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      
      const result = await SearchProductsByQuery.execute(query);
      
      setProducts(result.products);
      setNoResults(result.noResults);
    } catch (error) {
      console.error('Error in PerformProductSearch:', error);
      setNoResults(true);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }
}
