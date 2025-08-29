import { Link, useParams } from "react-router";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
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

import type Product from "@/types/product.type";

type ApiResponse<T> = {
  data: T;
  message?: string;
};

const apiUrl = import.meta.env.VITE_API_URL;

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();

  const { data: product, loading, error } = useFetch<ApiResponse<Product>>(
    `${apiUrl}/products/${id}`
  );



  const [averageReviews, setAverageReviews] = useState<number>(0);

  useEffect(() => {
    if (product?.data.reviews?.length) {
      const avg =
        product.data.reviews.reduce((sum, v) => sum + Number(v), 0) /
        product.data.reviews.length;
      setAverageReviews(avg);
    } else {
      setAverageReviews(0);
    }
  }, [product]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return <p>Error: Product not found</p>;


  return (
    <div className='flex flex-col items-center mb-8'>
      <div className='flex items-center gap-2 bg-primary w-full px-[1rem] lg:px-[5rem] py-[2rem]  text-[1rem] mb-5'>
        <Link to='/' className='text-gray-text' >Home</Link>
        <MdKeyboardArrowRight className='text-[20px]' />
        <Link className='text-gray-text' to='/shop' >Shop</Link>
        <RxDividerVertical className='text-2xl text-gray-text' />
        <h3>{product?.data.name}</h3>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 px-2 justify-between w-full max-w-[1240px] mx-auto'>
        <EffectsGallery dataImages={product?.data.images} />
        <div className='flex flex-col gap-2 w-full max-w-[606px]'>
          <h2 className='text-sM text-gray-title'>{product?.data.name}</h2>
          <h3 className='text-xl text-gray-text'>Rp {product?.data.priceWithDiscount}</h3>

          <div className='flex w-full items-center gap-2 text-[18px] font-medium text-gray-text'>
            <Rating numberRating={averageReviews} />
            <RxDividerVertical />
            <p>{product?.data.reviews.length} Customer Review</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[13px] text-gray-title max-w-[424px] text-justify'>{product?.data.smallDescription}</p>
            <p className='text-[14px] text-gray-text'>Size</p>
            <Variants size={product?.data.size} />
            <p className='text-[14px] text-gray-text'>Colors</p>
            <Variants color={product?.data.colors} />

          </div>
          <div className='flex flex-col lg:flex-row lg:gap-3 gap-10 lg:items-center '>
            <Button variant='secondary' hasAmountnt={true} className='w-[123px]' />
            <Button variant='default' text='Add To Cart' toPath='/cart' />
            <Button variant='default' text='+ Compare' toPath='/compare' />
          </div>
          <div className="text-gray-text text-[1rem] flex flex-col gap-2  py-[1rem] my-[1rem] border-t-[2px] border-gray-bg">
            <p>SKU: {product?.data.sku}</p>
            <p>Category: {product?.data.category?.name}</p>
            <ul className='flex items-center gap-2'>
              <li>Tags: </li>
              {product?.data.tags.map((tag, index) => (<li key={index}>{tag}</li>))}
            </ul>
            <ul className='flex items-center gap-2'>
              <li>Share: </li>
              <li>
                <Link to={product?.data.shareLink?.[0]}>
                  <PiInstagramLogoFill className='text-[20px] text-gray-title' />
                </Link>
              </li>
              <li>
                <Link to={product?.data.shareLink?.[1]}>
                  <FaFacebook className='text-[20px] text-gray-title' />
                </Link>
              </li>
              <li>
                <Link to={product?.data.shareLink?.[2]}>
                  <BsLinkedin className='text-[20px] text-gray-title' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[2px] border-gray-bg px-2">
        <DescriptionAndInfo description={product?.data.description} info={product?.data.smallDescription} />
      </div>

      <SectionTitle text="Related Products" />
      <ProductList
        filters={
          { limit: 4 }
        } />
      <Button text="Show More" variant="primary" toPath="/shop" />
    </div>
  );
};

export default SingleProduct;
