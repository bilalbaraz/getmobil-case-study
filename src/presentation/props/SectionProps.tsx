import { Product } from '@models/Product';

export interface SectionProps {
  title: string;
  data: Product[];
  isLoading: boolean;
  error: Error | null;
}
