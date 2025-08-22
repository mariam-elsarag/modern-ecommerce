export interface Product {
  id: number;
  image: string;
  title: string;
  description?: string;
  price: number;
  rate: number;
  isFavorite: null | boolean;
  colors?: string[];
  brand?: string;
  category?: string;
  stock?: number;
  isFeatured?: boolean;
  isBestSelling?: boolean;
  createdAt: Date;
}
