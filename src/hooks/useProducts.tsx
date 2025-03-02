import { useQuery } from "@tanstack/react-query";
import { Product } from "@models/Product";
import { ProductRepository } from "@repositories/ProductRepository";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: ProductRepository.getProducts,
    staleTime: 1000 * 60 * 5,
  });
};
