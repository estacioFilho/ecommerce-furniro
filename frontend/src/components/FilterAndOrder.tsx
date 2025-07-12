'use client'
import iconGrid from '../assets/icon-grid.png'
import iconViewList from '../assets/icon-view-list.png'
import { RxDividerVertical } from "react-icons/rx";
import ProductFilters from './ProductFilter';
import type { Filters } from '@/types/filters.type';

interface FilterAndOrderProps {
  order: string;
  onOrderChange: (value: string) => void;
  limit: number;
  onLimitChange: (value: number) => void;
  total: number;
  onApplyFilters: (filters: Filters) => void;
}

const FilterAndOrder = ({
  order,
  onOrderChange,
  limit,
  onLimitChange,
  total,
  onApplyFilters
}: FilterAndOrderProps) => {
  return (
    <div className='bg-primary w-full flex items-center px-[1rem] lg:px-[5rem] py-[1rem] justify-between text-[20px] mb-5'>

      <div className=' flex lg:flex-row items-center gap-4 flex-col'>
        <div className='flex items-center gap-4'>
        <ProductFilters onApply={onApplyFilters} />
          <button>
            <img src={iconGrid} alt='Icon grid' />
          </button>
          <button>
            <img src={iconViewList} alt='Icon view list' />
          </button>
          <RxDividerVertical className='text-3xl' />
        </div>
          <p>Showing {limit}–{total} results</p>
      </div>
      <div className='flex items-center flex-col lg:flex-row  gap-4'>
        <label className='flex items-center gap-4'>
          <span>Show</span>
          <input
            type="number"
            value={limit}
            min={1}
            max={total}
            onChange={e => onLimitChange(Number(e.target.value))}
            onFocus={e => e.target.select()}
            className='max-w-[55px] h-[55px] bg-light text-center focus:outline-none focus:border focus:border-dark'
          />
        </label>
        <label className='flex items-center gap-4'>
          <span>Sort by</span>
          <select
            value={order}
            onChange={e => onOrderChange(e.target.value)}
            className='bg-light h-[55px] min-w-[40px] max-w-[188px] pl-4 text-gray-text appearance-none focus:outline-none'
          >
            <option value="default">Default</option>
            <option value="asc">Cheaper</option>
            <option value="desc">More expensive</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FilterAndOrder;
