import { PopularSearchStorage } from '@sources/local/popularSearchStorage';

export class PopularSearchRepository {
    static getPopularSearches(): string[] {
        return PopularSearchStorage.getPopularSearches();
    }
}
