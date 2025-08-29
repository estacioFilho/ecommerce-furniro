import { Link } from 'react-router';
import banner from '../assets/shop-banner.png'
import { MdKeyboardArrowRight } from "react-icons/md";


const ShopHero = () => {
  return (
    <section className='relative'>
      <div
        className='absolute w-full h-full flex flex-col gap-4 items-center justify-center  text-[16px]'>
        <h2 className='text-sM font-medium '>Shop</h2>
        <div className='flex items-center gap-2'>
          <Link to='/' className='font-medium' >Homer</Link>
          <MdKeyboardArrowRight className='text-[20px]' />
          <Link to='/shop' >Shop</Link>
        </div>
      </div>
      <img
        className='object-cover w-full'
        src={banner} alt="Section banner shop" />
    </section>
  )
}

export default ShopHero