export interface Filters {
  page?: number;
  limit?: number;
  order?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  isNew?: boolean;
  discount?: boolean;
}

