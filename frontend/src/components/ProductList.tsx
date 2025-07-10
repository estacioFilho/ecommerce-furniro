import { useFetch } from "@/hooks/useFetch"
import Card from './Card';
import type { ProductResponse } from '@/types/product-response.type';

const ProductList = () => {
  const { data, loading, error } = useFetch<ProductResponse>('http://localhost:3000/products')

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  if (!data?.data.data) return <p>Carregando...</p>;
  return (
    <ul className='flex flex-wrap gap-4 items-center justify-center'>
      {
        data.data.data.map((productItem) =>{
          return(
         <Card key={productItem.id} product={productItem} />
          )
        })
      }
    </ul>
  )
}

export default ProductList