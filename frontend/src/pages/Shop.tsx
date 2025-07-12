import ProductList from '../components/ProductList';
import ShopHero from '@/components/ShopHero';

const PageShop = () => {
  

  return (
    <div>
      <ShopHero />   
      <ProductList showFilterAndOrder showPagination />
    </div>
  );
};

export default PageShop;