import { useState } from "react";
import { Link } from "react-router";

type ButtonProps = {
  hasAmountnt?: boolean;
  text?: string;
  className?: string;
  toPath?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'filter';
  onClick?: () => void;
};

const Button = ({ hasAmountnt, text, className, toPath, variant = 'default', onClick }: ButtonProps) => {
  const [count, setCount] = useState<number>(1);

  const handleCountAdd = () => {
    setCount(count + 1);
  };

  const handleCount = () => {
    setCount(count - 1);
  };
  return (
    <div className='flex justify-center mb-4'>
      {hasAmountnt && (
        <div className={`flex items-center justify-between max-w-[123px] ${className} button-${variant}`}>
          <button
            disabled={count == 0}
            onClick={handleCount}
            className=" h-full w-[100%/3] bg-transparent cursor-pointer">-</button>
          <span className='w-[100%/3]'>{count}</span>
          <button
            onClick={handleCountAdd}
            className="h-full bg-transparent w-[100%/3] cursor-pointer">+</button>
        </div>
      )}
      {text && !toPath &&(
        <button onClick={onClick} className={`${className} button-${variant}`}>{text}</button>
      )}
      {text && toPath && (
        <Link
          to={toPath}
          className={`${className} button-${variant}`}>
          {text}
        </Link>
      )}
     
    </div>
  );
};

export default Button;
