import { Review } from "@models/Review";
import { Tag } from "@models/Tag";

export interface ProductCardProps {
    item: {
      id: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
      tags: Tag[];
      sku: string;
      weight?: number;
      dimensions: {
        width: number;
        height: number;
        depth: number;
      };
      warrantyInformation: string;
      shippingInformation: string;
      availabilityStatus: string;
      reviews: Review[];
    };
};