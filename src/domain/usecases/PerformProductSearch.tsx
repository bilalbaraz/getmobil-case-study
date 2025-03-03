import { SearchProductsByQuery } from '@usecases/SearchProductsByQuery';
import { Product } from '@models/Product';
import { SearchHistoryStorage } from '@sources/local/searchHistoryStorage';

export interface SearchState {
  loading: boolean;
  products: Product[];
  noResults: boolean;
}

export interface SearchStateUpdater {
  setLoading: (loading: boolean) => void;
  setProducts: (products: Product[]) => void;
  setNoResults: (noResults: boolean) => void;
  setPaginationInfo?: (info: PaginationInfo) => void;
}

export interface PaginationInfo {
  skip: number;
  limit: number;
  hasMore: boolean;
}

export class PerformProductSearch {
  static async execute(
    query: string,
    stateUpdater: SearchStateUpdater
  ) {

    const { setLoading, setProducts, setNoResults } = stateUpdater;

    setLoading(true);
    setNoResults(false);

    try {
      await SearchHistoryStorage.addSearchTerm(query);

      const result = await SearchProductsByQuery.execute(query);

      if (result.error) {
        setNoResults(true);
        setProducts([]);
      } else if (result.noResults) {
        setNoResults(true);
        setProducts([]);
      } else {
        setProducts(result.products);
        setNoResults(false);
      }
    } catch (error) {
      console.error('Error in PerformProductSearch:', error);
      setNoResults(true);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  static async executeWithPagination(
    query: string,
    paginationInfo: PaginationInfo,
    stateUpdater: SearchStateUpdater,
    isLoadingMore: boolean = false
  ) {

    const { setLoading, setProducts, setNoResults, setPaginationInfo } = stateUpdater;

    if (!isLoadingMore) {
      setLoading(true);
      setNoResults(false);
    }

    try {
      await SearchHistoryStorage.addSearchTerm(query);

      const { skip, limit } = paginationInfo;
      const result = await SearchProductsByQuery.executeWithPagination(query, limit, skip);

      if (result.error) {
        if (!isLoadingMore) {
          setNoResults(true);
          setProducts([]);
        }
      } else if (result.noResults) {
        if (!isLoadingMore) {
          setNoResults(true);
          setProducts([]);
        }
      } else {
        if (isLoadingMore) {
          setProducts(prevProducts => [...prevProducts, ...result.products]);
        } else {
          setProducts(result.products);
        }
        setNoResults(false);

        if (setPaginationInfo) {
          const hasMore = result.products.length === limit;
          setPaginationInfo({
            skip: skip + result.products.length,
            limit,
            hasMore
          });
        }
      }
    } catch (error) {
      console.error('Error in PerformProductSearch with pagination:', error);
      if (!isLoadingMore) {
        setNoResults(true);
        setProducts([]);
      }
    } finally {
      if (!isLoadingMore) {
        setLoading(false);
      }
    }
  }
}
