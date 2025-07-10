import { Link } from "react-router"

import { MdKeyboardArrowRight } from "react-icons/md"
import { RxDividerVertical } from "react-icons/rx";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";




import Rating from "@/components/Rating";
import Variants from "@/components/Variants";
import Button from "@/components/Button";
import DescriptionAndInfo from "@/components/DescriptionAndInfo";
import SectionTitle from "@/components/SectionTitle";
import ProductList from "@/components/ProductList";
import EffectsGallery from "@/components/EffectsGallery";

import sofa01 from '../assets/sofa.png'
import sofa02 from '../assets/sofa02.png'
import sofa03 from '../assets/sofa03.png'



const sizeOptions: string[] = ['L', 'XL', 'XXL'];
const colorOptions: string[] = ['FF0000', '00FF00', '0000FF'];

const decription: string = 'This product is crafted from high-quality materials, designed to offer both style and durability for everyday use.'
const information: string = 'Material: 100% cotton.Care instructions: Machine wash cold, tumble dry low. Dimensions: 30 x 20 x 10 cm.'

const gallery: string [] = [sofa01, sofa03, sofa02]



const SingleProduct = () => {


  return (
    <div className='flex flex-col items-center mb-8'>
      <div className='flex items-center gap-2 bg-primary w-full px-[1rem] lg:px-[5rem] py-[2rem]  text-[1rem] mb-5'>
        <Link to='/' className='text-gray-text' >Homer</Link>
        <MdKeyboardArrowRight className='text-[20px]' />
        <Link className='text-gray-text' to='/shop' >Shop</Link>
        <RxDividerVertical className='text-2xl text-gray-text' />
        <h3>productName</h3>
      </div>
      <div  className='flex justify-between w-full max-w-[1240px] mx-auto'>
        <EffectsGallery dataImages={gallery} />
        <div className='flex flex-col gap-2'>
          <h2 className='text-[42px] text-gray-title'>Name Product</h2>
          <h3 className='text-xl text-gray-text'>RP 250.000</h3>
          <div className='flex items-center gap-2 text-[18px] font-medium text-gray-text'>
            <Rating numberRating={5} />
            <RxDividerVertical />
            <p>{ } Customer Review</p>
          </div>
          <p className='text-[13px] text-gray-title max-w-[424px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a reiciendis quia eveniet commodi facere aut adipisci modi amet.</p>
          <p className='text-[14px] text-gray-text'>Size</p>
          <Variants size={sizeOptions} />
          <p className='text-[14px] text-gray-text'>Colors</p>
          <Variants color={colorOptions} />
          <div className='flex items-center gap-2 justify-between '>
            <Button variant='secondary' hasAmountnt={true} className='w-[123px] ' />
            <Button variant='default' text='Add To Cart' toPath='/cart' />
            <Button variant='default' text='+ Compare' toPath='/compare' />
          </div>
          <div className="text-gray-text text-[1rem] flex flex-col gap-2  py-[1rem] my-[1rem] border-t-[2px] border-gray-bg">
            <p>SKU: SS01</p>
            <p>Category: Sofa</p>
            <ul className='flex items-center gap-2'>
              <li>Tags: </li>
              <li>Sofa,</li>
              <li>Chair,</li>
              <li>Home,</li>
              <li>Shop</li>
            </ul>
            <ul className='flex items-center gap-2'>
              <li>Shere: </li>
              <li><PiInstagramLogoFill className='text-[20px] text-gray-title' /></li>
              <li> <FaFacebook className='text-[20px] text-gray-title' /></li>
              <li><BsLinkedin className='text-[20px] text-gray-title' /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full border-t-[2px] border-gray-bg'>
        <DescriptionAndInfo description={decription} info={information} />
      </div>
      <SectionTitle text='Related Products' />
      <ProductList limit={4} />
      <Button
        text='Show More'
        variant='primary'
        toPath='/shop'
      />
    </div>
  )
}

export default SingleProduct