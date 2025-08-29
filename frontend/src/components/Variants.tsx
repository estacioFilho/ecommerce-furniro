import { useState } from "react";

type Variant = {
  size?: string[];
  color?: string[];
};

const Variants = ({ size = [], color = [] }: Variant) => {
  const [activeSize, setActiveSize] = useState<string>('');
  const [activeColor, setActiveColor] = useState<string>('');

  return (
    <ul className='flex items-center gap-2'>
      {
        size?.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setActiveSize(item)}
                className={`bg-primary border-none  text-black w-[30px] h-[30px] rounded-[5px] text-[13px] ${item === activeSize ? 'bg-secondary text-light' : ''}`}>{item}</button>
            </li>
          )
        })
      }
      {color.map((item, index) => (
        <li key={`color-${index}`}>
          <button
            onClick={() => setActiveColor(item)}
            className={`border-none w-[30px] h-[30px] rounded-full
              ${item === activeColor ? 'ring-2 ring-dark' : ''}`}
            style={{ backgroundColor: `${item}` }}
          ></button>
        </li>
      ))}
    </ul>
  )
}

export default Variants