import { Link } from "react-router";

type ListItensProps = {
  colDirection?: string;
  gapItem?: number;
  list: {
    isImage?: boolean;
    listItem: string[];
  };
};

const ListItens = ({ colDirection, gapItem, list }: ListItensProps) => {

  return (
<ul className={` flex ${colDirection? 'flex-col': '' } ${gapItem === 2 ? 'gap-4' : gapItem === 3 ? 'gap-8' : 'gap-16'}`}>
{list.listItem.map((item, index) => (
        <li 
          className='capitalize text-[1rem] font-medium' 
          key={index}
        >
          <Link to={item === 'home' ? '/' : `/${item}`}>
            {list.isImage ? <img className='w-[20px] lg:w-[28px]' src={item} alt={`Item ${index}`} /> : item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItens;
