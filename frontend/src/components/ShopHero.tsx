import { Link } from 'react-router';
import banner from '../assets/shop-banner.png'
import { MdKeyboardArrowRight } from "react-icons/md";


const ShopHero = () => {
  return (
    <section className='relative'>
      <div
        className='absolute w-full h-full flex items-center justify-center gap-2 text-[16px]'>
        <Link to='/' className='font-medium' >Homer</Link>
        <MdKeyboardArrowRight className='text-[20px]' />
        <Link to='/shop' >Shop</Link>
      </div>
      <img
        className='object-cover w-full'
        src={banner} alt="Section banner shop" />
    </section>
  )
}

export default ShopHero