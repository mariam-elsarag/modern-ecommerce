export interface Product {
  id: number;
  cover: string;
  images?: string[];
  sizes?: "xs" | "s" | "m" | "l" | "xl" | "xxl"[];
  title: string;
  description?: string;
  price: number;
  rate: number;
  isFavorite: null | boolean;
  colors?: string[];
  brand?: string;
  categories?: string[];
  stock?: number;
  isFeatured?: boolean;
  isBestSelling?: boolean;
  createdAt: Date;
  quantity?: number;
}
