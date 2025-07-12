import type { ProductResponse } from "./product-response.type";

export default interface PaginationProps {
  page: number;
  pageTotal: number;
  data: ProductResponse;
  onPageChange: (newPage: number) => void;
}