import iconfilter from '../assets/icon-filter.png'
import iconGrid from '../assets/icon-grid.png'
import iconViewList from '../assets/icon-view-list.png'
import { RxDividerVertical } from "react-icons/rx";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import { useState } from 'react';

const FilterAndOrder = () => {
  const [order, setOrder] = useState('defaut');
  return (
    <div
      className='bg-primary w-full flex items-center px-[1rem] lg:px-[5rem] py-[1rem] justify-between text-[20px] mb-5'>
      <div className='flex items-center gap-4'>
        <Sheet>
          <SheetTrigger className='flex items-center gap-2'>
            <img src={iconfilter} alt='Icon filter' />
            <p>Filter</p>
          </SheetTrigger>
          <SheetContent side='left' className='bg-light'>
            <p>Filters...</p>
            <button>Apply</button>
          </SheetContent>
        </Sheet>
        <button>
          <img src={iconGrid} alt='Icon grid' />
        </button>
        <button>
          <img src={iconViewList} alt='Icon view list' />
        </button>
        <RxDividerVertical className='text-3xl' />
        <p>Showing 1–16 of 32 results</p>
      </div>

      <div className='flex items-center gap-4 '>
        <label htmlFor='pageNumber' className='flex items-center gap-4'>
          <span>Show</span>
          <input type="text" placeholder='16' id='pageNumber' className='max-w-[55px] h-[55px] bg-light text-center focus:outline-none focus:border focus:border-dark placeholder:text-center' />
        </label>
        <label htmlFor='shortBy' className='flex items-center gap-4'>
          <span>Short by</span>
          <select
            value={order}
            className='bg-light h-[55px] max-w-[188px] pl-4 text-gray-text appearance-none focus:outline-none focus:ring-2'
          >
            <option value="asc" >Default</option>
            <option value="asc">Mais barato</option>
            <option value="desc">Mais caro</option>
          </select>

        </label>
      </div>
    </div>
  )
}

export default FilterAndOrder