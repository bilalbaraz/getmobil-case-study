import { SearchHistoryStorage } from "../sources/local/searchHistoryStorage";

export class SearchHistoryRepository {
    static async getSearchHistory(): Promise<string[]> {
        return await SearchHistoryStorage.getSearchHistory();
    }
    
    static async addSearchTerm(term: string): Promise<void> {
        await SearchHistoryStorage.addSearchTerm(term);
    }

    static async clearSearchHistory(): Promise<void> {
        await SearchHistoryStorage.clearSearchHistory();
    }
}