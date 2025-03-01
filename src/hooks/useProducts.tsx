import { useQuery } from "@tanstack/react-query";
import { ProductApi } from "@sources/remote/productApi";
import { Product } from "@models/Product";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: ProductApi.fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};
