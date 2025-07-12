import { Link } from 'react-router'
import { itensMenu } from './Nav'

const listHelps: string[] = ['Payment Options', 'Returns', 'Privacy Policies']

const Footer = () => {
  return (
    <footer className=' px-[1rem] lg:px-[3rem] pt-[2rem] pb-[1rem]  '>
      <div className='flex flex-col lg:flex-row gap-4 justify-between border-b-[1px] pb-[2.5rem] border-gray-300'>
        <div className='w-[30%] flex flex-col gap-8'>
          <h2 className='text-2xl font-bold text-gray-title'>Furniro.</h2>
          <p className='text-[16px] text-gray-text '>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className='flex lg:justify-around w-[100%]'>
          <ul className='text-[16px] font-medium w- flex flex-col gap-6'>
            <li className='font-normal text-gray-text'>Links</li>
            {
              itensMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className='capitalize' to={item}>{item}</Link>
                  </li>
                )
              })
            }
          </ul>
          <ul className='text-[16px] font-medium flex flex-col gap-6'>
            <li className='font-normal text-gray-text'>Help</li>
            {
              listHelps.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className='capitalize' to={item}>{item}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='font-[16px] text-gray-text flex flex-col gap-6'>
          <h3 className='text-[16px] font-normal text-gray-text'>Newsletter</h3>
          <div className='flex gap-3'>
            <input
              className='bg-transparent  border-b-[1px] border-gray-title min-w-[200px] placeholder:text-[14px]'
              type="text"
              placeholder='Enter Your Email Address' />
            <button className='bg-transparent  border-b-[1px] text-gray-title text-[14px] border-gray-title max-w-[200px]'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <p className='text-gray-title pt-[1rem] text-[1rem]'>2023 furino. All rights reverved</p>
    </footer>
  )
}

export default Footer