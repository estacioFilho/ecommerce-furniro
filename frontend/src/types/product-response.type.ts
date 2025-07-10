import type Product from './product.type';

export interface ProductResponse {
  message: string;
  data: {
    total: number;
    page: number;
    pageTotal: number;
    limit: number;
    data: Product[];
  };
}