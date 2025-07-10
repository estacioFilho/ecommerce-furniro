import { useState } from 'react';

type dataImagesProps = {
  dataImages: string[];
}

const EffectsGallery = ({dataImages}: dataImagesProps) => {
  const [featuredImage, setFeaturedImage] = useState<string>(dataImages[0]);
  return (
    <div className='flex items-start gap-8 mt-[1rem]'>
      <ul className='flex flex-col gap-8'>
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
      <img src={featuredImage} alt="Featured" className='bg-primary rounded-[10px] max-w-[450px]' />
    </div>
  )
}

export default EffectsGallery;
