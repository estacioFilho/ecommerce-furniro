interface PaginationProps {
  page: number;
  pageTotal: number | undefined;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ page, pageTotal, onPageChange }: PaginationProps) => {
  return (
    <div className='flex items-center justify-center gap-4 lg:max-w-[1000px] my-8 mx-auto'>
      <ul className='flex flex-wrap items-center  gap-4'>
        {[...Array(pageTotal)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <li key={pageNum}>
              <button
                onClick={() => onPageChange(pageNum)}
                className={`${page === pageNum ? 'bg-secondary text-light' : 'bg-primary text-gray-title'} text-[20px] rounded-[10px] w-[60px] h-[60px]`}
              >
                {pageNum}
              </button>
            </li>
          );
        })}
        
      </ul>
      <button
        onClick={() => onPageChange(Math.min(page + 1, pageTotal?? 1))}
        className='bg-primary text-gray-title text-[20px] rounded-[10px] w-[98px] h-[60px]'
      >
        Next
      </button>
    </div>
  );
};

