import { Link } from "react-router"
import Nav from "./Nav"
import NavMobile from "./NavMobile"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[1rem] lg:px-[3rem] py-[1rem]">
      <Link to='/' className="flex items-center lg:gap-3 gap-2 w-[30%]">
        <img className='lg:w-[50px] w-[40px]' src="/logo.svg" alt="" />
        <h1 className="text-sM font-bold ">Furniro</h1>
      </Link>
      <div className='hidden lg:flex w-[70%] justify-between'>
        <Nav />
      </div>
      <div className='lg:hidden flex '>
        <NavMobile />
      </div>
    </header>
  )
}

export default Header