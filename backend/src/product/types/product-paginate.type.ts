import { ProductEntity } from "../entities/product.entity";
import ProductFilterParams from "./product-filter-params.type";

export default interface ProductPaginate extends ProductFilterParams {
  total: number;
  pageTotal: number;
  data: ProductEntity[];

}
