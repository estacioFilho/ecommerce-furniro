'use client'
import { useFetch } from "@/hooks/useFetch";
import Card from './Card';
import type { ProductResponse } from '@/types/product-response.type';

interface ProductListProps {
  page?: number;
  limit?: number;
}

const ProductList = ({ page, limit }: ProductListProps) => {
  const { data, loading, error } = useFetch<ProductResponse>(
    `http://localhost:3000/products?page=${page}&limit=${limit}`
  );

  if (loading) return <p>Loalding...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className='flex flex-wrap gap-4 items-center justify-center mb-[1rem] lg:px-[5rem] py-[1rem]'>
      {data?.data.data.map(productItem => (
        <Card key={productItem.id} product={productItem} />
      ))}
    </ul>
  );
};

export default ProductList;
