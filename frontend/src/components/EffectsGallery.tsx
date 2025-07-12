import { useState } from 'react';

type dataImagesProps = {
  dataImages: string[];
}

const EffectsGallery = ({ dataImages }: dataImagesProps) => {
  const [featuredImage, setFeaturedImage] = useState<string>(dataImages[0]);
  return (
    <div className='flex flex-col lg:flex-row lg:items-start lg:px-0 items-center px-2 gap-8 mt-[1rem]'>
      <ul className='flex gap-8 order-2 lg:flex-col lg:order-1 '>
        {dataImages?.map((image, index) => (
          <li
            key={index}
            className={`bg-primary max-w-[80px] max-h-[80px] mx-auto my-auto rounded-[10px] 
              ${image === featuredImage ? 'ring-2 ring-secondary' : ''}`}>
            <button onClick={() => setFeaturedImage(image)} className='w-full'>
              <img src={image} alt="Gallery thumbnail" className='object-cover w-full h-full rounded-[10px]' />
            </button>
          </li>
        ))}
      </ul>
      <div className='w-[90%] max-w-[465px] order-1 lg:order-1'>
        <img src={featuredImage} alt="Featured" className='bg-primary rounded-[10px] object-cover w-full h-[100%]' />

      </div>
    </div>
  )
}

export default EffectsGallery;
