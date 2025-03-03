import { VisitedProductHistoryRepository } from '@repositories/VisitedProductHistoryRepository';

export class GetVisitedProductHistory {
    async execute(): Promise<string[]> {
      return await VisitedProductHistoryRepository.getVisitedProducts();
    }
}
