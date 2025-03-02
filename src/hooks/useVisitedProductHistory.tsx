import { Product } from "@models/Product";
import { VisitedProductHistoryRepository } from "@repositories/VisitedProductHistoryRepository";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetVisitedProductHistory } from "@usecases/GetVisitedProductHistory";

export const useVisitedProductHistory = () => {
  const queryClient = useQueryClient();

  const { data: visitedProductHistory, isLoading, error } = useQuery({
    queryKey: ["visitedProductHistory"],
    queryFn: async () => {
      const useCase = new GetVisitedProductHistory();
      return await useCase.execute();
    },
  });

  const addVisitedProduct = useMutation({
    mutationFn: async (product: Product) => {
      await VisitedProductHistoryRepository.addProduct(product);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitedProductHistory"] });
    },
  });

  return {
    visitedProductHistory,
    isLoading,
    error,
    addVisitedProduct: addVisitedProduct.mutate
  };
};