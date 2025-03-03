import { PopularSearchRepository } from '@repositories/PopularSearchRepository';

export class GetPopularSearches {
    static execute(): string[] {
      return PopularSearchRepository.getPopularSearches();
    }
}
