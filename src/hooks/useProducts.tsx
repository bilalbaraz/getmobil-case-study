import { useQuery } from '@tanstack/react-query';
import { Product } from '@models/Product';
import { ProductRepository } from '@repositories/ProductRepository';

export const useProducts = (limit: number = 0, skip: number = 0) => {
  return useQuery<Product[], Error>({
    queryKey: ['products', limit, skip],
    queryFn: () => ProductRepository.getProducts(limit, skip),
    staleTime: 1000 * 60 * 5,
  });
};
