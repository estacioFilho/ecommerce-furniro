'use client'
import { useState } from 'react';
import FilterAndOrder from '../components/FilterAndOrder';
import ProductList from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import ShopHero from '@/components/ShopHero';

const PageShop = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [order, setOrder] = useState('default');
  
  return (
    <div>
      <ShopHero />
      <FilterAndOrder order={order} onOrderChange={setOrder} limit={limit} onLimitChange={setLimit} />
      <ProductList page={page} limit={limit} />
      <Pagination page={page} pageTotal={3} onPageChange={setPage} />
    </div>
  );
};

export default PageShop;
