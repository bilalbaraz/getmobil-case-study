import { ProductApi } from '@sources/remote/productApi';
import { ProductCardProps } from '@props/ProductCardProps';

export class GetRelatedProducts {
  static async execute(category: string, currentProductId: number, limit: number = 10): Promise<ProductCardProps['item'][]> {
    try {
      const response = await ProductApi.searchProducts(category);
      const products = response.products || [];
      
      const filtered = products.filter((product: any) => product.id !== currentProductId);
      return filtered.slice(0, limit);
    } catch (error) {
      console.error('Error loading related products:', error);
      return [];
    }
  }
}
