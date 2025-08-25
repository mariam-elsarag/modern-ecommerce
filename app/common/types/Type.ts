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

export type ReviewType = {
  productId: number;
  fullName: string | null;
  avatar: string | null;
  rate: number;
  review: string;
  createdAt?: Date;
};
