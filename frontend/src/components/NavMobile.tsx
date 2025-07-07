import ListItens from "./ListMenu"
import { itensMenu } from './Nav'
import iconAccount from '../assets/icon-account.svg';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icons-heart.svg';
import iconSearch from '../assets/icons-search.svg';

import { AiOutlineMenu } from "react-icons/ai";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const NavMobile = () => {
  return (
    <nav className='flex items-center gap-4'>
      <ListItens
        gapItem={2}
        list={{
          isImage: true,
          listItem: [iconHeart, iconCart]
        }} />

      <Sheet>
        <SheetTrigger>
          <AiOutlineMenu className='text-[24px]' />
        </SheetTrigger>
        <SheetContent className="bg-primary text-gray-title px-4 pt-10 nth-[2]:pt-4" >
          <ListItens
            gapItem={3}
            colDirection='flex-col'
            list={{
              listItem: itensMenu
            }} />
          <ListItens

            list={{
              isImage: true,
              listItem: [iconSearch, iconAccount]
            }}
          />
        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default NavMobile