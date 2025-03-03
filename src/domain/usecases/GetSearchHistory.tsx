import { SearchHistoryRepository } from '@repositories/SearchHistoryRepository';

export class GetSearchHistory {
    async execute(): Promise<string[]> {
      return await SearchHistoryRepository.getSearchHistory();
    }
}
