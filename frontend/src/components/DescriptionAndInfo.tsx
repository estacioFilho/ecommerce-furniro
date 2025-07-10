import { useState } from 'react';

type DescriptionAndInfoProps = {
  description: string;
  info: string;
};

const DescriptionAndInfo = ({ description, info }: DescriptionAndInfoProps) => {
  const [activeTab, setActiveTab] = useState<'description' | 'info'>('description');

  return (
    
      <div className='flex flex-col items-center py-[1rem] text-[1rem] text-gray-text max-w-[1024px] mx-auto'>
        <div className="flex items-center gap-8 mb-8 text-2xl [&>button]:cursor-pointer">
          <button
            onClick={() => setActiveTab('description')}
            className={activeTab === 'description' ? 'font-medium text-gray-title ' : ' '}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={activeTab === 'info' ? 'font-medium  text-gray-title' : ''}
          >
            Additional Information
          </button>
        </div>

        {activeTab === 'description' && <p>{description}</p>}
        {activeTab === 'info' && <p>{info}</p>}
      </div>
  );
};

export default DescriptionAndInfo;