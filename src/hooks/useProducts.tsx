import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "../data/sources/remote/productApi";
import { Product } from "../data/models/Product";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: ProductApi.fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};
