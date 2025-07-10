import type Category from "./category.type";

export default interface Product {
  id: number;
  name: string;
  price: string;              
  smallDescription: string;
  description: string;
  subtitle: string;
  sku: string;
  discount: string;           
  isNew: boolean;
  images: string[];
  reviews: string[];
  size: string;
  colors: string[];
  tags: string[];
  shareLink: string[];
  isDisabled: boolean;
  category: Category;
}