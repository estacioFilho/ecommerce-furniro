import ListItens from "./ListMenu"
import iconAccount from '../assets/icon-account.svg';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icons-heart.svg';
import iconSearch from '../assets/icons-search.svg';

export const itensMenu: string[] = ['home', 'shop', 'about', 'contact']
const itensIcons: string[] = [iconAccount, iconSearch, iconHeart, iconCart]

const Nav = () => {
  return (
    <nav className='flex items-center w-full justify-between'>
      <ListItens 
      gapItem={4}  
      list={{
        listItem:  itensMenu 
      }
      } />
      <ListItens 
      gapItem={4}
      list={{
        isImage:true,
        listItem:  itensIcons 
      }
      } />
    </nav>
  )
}

export default Nav