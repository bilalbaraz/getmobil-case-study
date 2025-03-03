import { GetPopularSearches } from '@usecases/GetPopularSearches';

export const usePopularSearches = () => {

  return {
    popularSearches: GetPopularSearches.execute(),
  };
};
