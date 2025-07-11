import type Category from "./category.type";

export default interface Product {
  id: number;
  name: string;
  price: number;
  priceWithDiscount: number; 
  discount: number;
  smallDescription: string;
  description: string;
  subtitle: string;
  sku: string;
  isNew: boolean;
  images: string[];
  reviews: number[];              
  size: string[];
  colors: string[];
  tags: string[];
  shareLink: string[];
  isDisabled: boolean;
  category: Category;
}
