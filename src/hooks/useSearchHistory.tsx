import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetSearchHistory } from "../domain/usecases/GetSearchHistory";
import { SearchHistoryRepository } from "@repositories/SearchHistoryRepository";

export const useSearchHistory = () => {
  const queryClient = useQueryClient();

  const { data: searchHistory, isLoading, error } = useQuery({
    queryKey: ["searchHistory"],
    queryFn: async () => {
      const useCase = new GetSearchHistory();
      return await useCase.execute();
    },
  });

  const addSearchTermMutation = useMutation({
    mutationFn: async (term: string) => {
      await SearchHistoryRepository.addSearchTerm(term);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["searchHistory"] });
    },
  });

  const clearSearchHistoryMutation = useMutation({
    mutationFn: async () => {
      await SearchHistoryRepository.clearSearchHistory();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["searchHistory"] });
    },
  });

  return { searchHistory, isLoading, error, addSearchTerm: addSearchTermMutation.mutate, clearSearchHistory: clearSearchHistoryMutation.mutate };
};