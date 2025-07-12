'use client'
import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader, SheetDescription } from '@/components/ui/sheet';
import iconfilter from '../assets/icon-filter.png';
import Button from './Button';

interface FiltersProps {
  onApply: (filters: {
    discount?: boolean;
    isNew?: boolean;
    priceMin?: number;
    priceMax?: number;
  }) => void;
}

const ProductFilters = ({ onApply }: FiltersProps) => {
  const [discount, setDiscount] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [priceMin, setPriceMin] = useState<number | ''>('');
  const [priceMax, setPriceMax] = useState<number | ''>('');

  const handleApply = () => {
    onApply({
      discount,
      isNew,
      priceMin: priceMin !== '' ? priceMin : undefined,
      priceMax: priceMax !== '' ? priceMax : undefined,
    });
  };
  return (
    <Sheet >
      <SheetTrigger className='flex items-center gap-2'>
        <img src={iconfilter} alt='Icon filter' />
        <p>Filter</p>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='bg-light flex flex-col gap-5 p-4 pt-[3rem]'>
        <SheetHeader className='border-b-1 border-gray-200'>
          <SheetTitle className='text-[30px] font-medium'>
            Filters
          </SheetTitle>
          <SheetDescription className='text-[1rem] font-light'>
          Mark your filters
          </SheetDescription>
        </SheetHeader>
        <label className='flex items-center gap-2'>
          <input
            type="checkbox"
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)}
          />
          <span className='text-[1.2rem]'>Discounted products</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type="checkbox"
            checked={isNew}
            onChange={(e) => setIsNew(e.target.checked)}
          />
          <span className='text-[1.2rem]'>New products</span>
        </label>

        <div className='flex gap-2'>
          <label className='flex flex-col'>
            <span className='text-[1.2rem]'>Minimum value</span>
            <input
              type="number"
              min={0}
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value === '' ? '' : Number(e.target.value))}
              onFocus={e => e.target.select()}
              className='border h-[40px] w-[50%] text-[1rem] pl-2'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[1.2rem]'>Maximum value</span>
            <input
              type="number"
              min={0}
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value === '' ? '' : Number(e.target.value))}
              onFocus={e => e.target.select()}
              className='border h-[40px] w-[50%] text-[1rem] pl-2'
            />
          </label>
        </div>
        <Button variant='filter' className='cursor-pointer' text='Apply' onClick={handleApply} />
      </SheetContent>
    </Sheet>

  )
}

export default ProductFilters;
