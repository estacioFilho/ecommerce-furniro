
import Card from "./Card";
import type { ProductResponse } from "@/types/product-response.type";
import { useFetch } from "@/hooks/useFetch";
import type { Filters } from "@/types/filters.type";
import FilterAndOrder from "./FilterAndOrder";
import { Pagination } from "./Pagination";
import { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

interface ProductListProps {
  filters?: Filters;
  showFilterAndOrder?: boolean;
  showPagination?: boolean;

}

const ProductList = ({ filters = {}, showFilterAndOrder, showPagination }: ProductListProps) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(filters.limit ?? 16);
  const [order, setOrder] = useState('default');

  const [activeFilters, setActiveFilters] = useState<Filters>(filters ?? {});

  

  const queryParams = new URLSearchParams();

Object.entries(activeFilters).forEach(([key, value]) => {
  if (
    value !== undefined &&
    value !== null &&
    value !== false
  ) {
    queryParams.set(key, String(value));
  }
});

if (showPagination) {
  queryParams.set('page', String(page));
}

if (limit) {
  queryParams.set('limit', String(limit));
}

if (order !== 'default') {
  queryParams.set('order', order);
}

console.log(queryParams.toString());

  console.log(queryParams.toString())
  const url = `${apiUrl}/products?${queryParams.toString()}`;

  const { data, loading, error } = useFetch<ProductResponse>(url);

  const totalProducts: number = data?.data.total ?? 0

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div>
        {showFilterAndOrder && (
          <div>
            <FilterAndOrder
              order={order}
              onOrderChange={setOrder}
              limit={Math.min(limit, totalProducts)}
              onLimitChange={setLimit}
              total={totalProducts}
              onApplyFilters={setActiveFilters}
            />

          </div>
        )}

        <ul className='flex flex-wrap gap-4 items-center justify-center mb-[1rem] lg:px-[5rem] py-[1rem]'>
          {data?.data.data?.map((productItem) => (
            <Card key={productItem.id} product={productItem} />
          ))}
        </ul>

        {showPagination && (
          <Pagination
            page={page}
            pageTotal={data?.data.pageTotal ?? 1}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
