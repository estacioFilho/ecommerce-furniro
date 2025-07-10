import type Product from "@/types/product.type"
import iconShare from '../assets/icon-share.png'
import iconCompare from '../assets/icon-compare.png'
import iconHeart from '../assets/icon-heart.png'

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const price: number = Number(product.price)

  return (
    <li className='max-w-[285px] max-h-[446px] py-4 relative'>
      <div className='bg-dark-bg  flex flex-col justify-center items-center gap-4 absolute z-50 w-full h-full opacity-0 hover:opacity-100 duration-300'>
          <button className='bg-light text-secondary py-[0.8rem] px-[3rem] text-[1rem] font-semibold'>See Details</button>
          <ul className='flex item-center gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li>p]:text-[1rem] [&>li>p]:text-light [&>li>p]:font-semibold'>
            <li>
              <img src={iconShare} alt="The icone share" />
              <p>Share</p>
            </li>
            <li>
              <img src={iconCompare} alt="The icone compare" />
              <p>Compare</p>
            </li>
            <li>
              <img src={iconHeart} alt="The icone heart" />
              <p>Like</p>
            </li>
          </ul>
      </div>
      <div>
        <div className='relative'>
          {(Number(product.discount) > 0 && !product.isNew) && (
            <div className='w-[48px] h-[48px] text-[1rem] flex items-center justify-center rounded-full bg-green-accents text-light absolute right-3 top-4'>
              <p>-{product.discount}%</p>
            </div>
          )}

          {(product.isNew && Number(product.discount) <= 0) && (
            <div className='w-[48px] h-[48px] text-[1rem] flex items-center justify-center rounded-full bg-red-accents text-light absolute right-3 top-4'>
              <p>New</p>
            </div>
          )}
          <img className='object-cover' src={product.images[0]} alt={product.name} />
        </div>
        <div className='bg-gray-bg p-[1rem] flex flex-col gap-4'>
          <h3 className='text-2xl text-gray-title font-semibold'>{product.name}</h3>
          <p className='text-[1rem] text-gray-text'>{product.subtitle}</p>
          <div className='flex item-center justify-between '>
            <h3 className='text-[20px] font-semibold'>Rp {price}</h3>
            <p className='text-[1rem] text-gray-text line-through'>Rp {price * price / 100 + price}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card