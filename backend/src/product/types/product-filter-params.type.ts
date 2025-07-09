
export default interface ProductFilterParams {
  page: number;
  limit: number;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  isNew?: boolean;
  discount?: boolean;
}
