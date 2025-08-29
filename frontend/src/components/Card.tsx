import type Product from "@/types/product.type"
import iconShare from '../assets/icon-share.png'
import iconCompare from '../assets/icon-compare.png'
import iconHeart from '../assets/icon-heart.png'
import { Link } from "react-router";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {

  return (
    <li className='group max-w-[285px] min-h-[446px] relative'>
      <div className='bg-dark-bg flex flex-col justify-center items-center gap-4 absolute z-50 w-full h-full opacity-0 group-hover:opacity-100 duration-300'>
        <Link
          to={`/single-product/${product.id}`}
          className='bg-light cursor-pointer text-secondary py-[0.8rem] px-[3rem] text-[1rem] font-semibold'>
          See Details
        </Link>
        <ul className='flex items-center gap-4 [&>li]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li>p]:text-[1rem] [&>li>p]:text-light [&>li>p]:font-semibold'>
          <li>
            <img src={iconShare} alt="Icon share" />
            <p>Share</p>
          </li>
          <li>
            <img src={iconCompare} alt="Icon compare" />
            <p>Compare</p>
          </li>
          <li>
            <img src={iconHeart} alt="Icon heart" />
            <p>Like</p>
          </li>
        </ul>
      </div>
      <div className='flex flex-col w-[285px] h-[446px] '>
        <div className='relative w-full h-full '>
          {
            product.discount > 0 ? (
              <div className='w-[48px] h-[48px] text-[1rem] flex items-center justify-center rounded-full bg-green-accents text-light absolute right-3 top-4'>
                <p>-{product.discount * 100}%</p>
              </div>
            ) : product.isNew ? (
              <div className='w-[48px] h-[48px] text-[1rem] flex items-center justify-center rounded-full bg-red-accents text-light absolute right-3 top-4'>
                <p>New</p>
              </div>
            ) : null
          }
          <div className='w-full h-full'>
            <img
              className='w-full h-full object-cover rounded'
              src={product.images[0]}
              alt={product.name}
            />
          </div>
        </div>

        <div className='bg-gray-bg p-[1rem] flex flex-col gap-4 flex-grow'>
          <h3 className='text-2xl text-gray-title font-semibold'>{product.name}</h3>
          <p className='text-[1rem] text-gray-text'>{product.subtitle}</p>
          <div className='flex items-center justify-between'>
            <h3 className='text-[20px] font-semibold'>Rp {product.priceWithDiscount}</h3>
            {product.discount > 0 && (
              <p className='text-[1rem] text-gray-text line-through'>Rp {product.price}</p>
            )}          </div>
        </div>
      </div>
    </li>

  )
}

export default Card