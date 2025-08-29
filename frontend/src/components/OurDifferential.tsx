import trophy from '../assets/trophy.png'
import garantee from '../assets/guarantee.png'
import shipping from '../assets/shipping.png'
import support from '../assets/customer-support.png'

type Differential = {
  stamps: string,
  title: string,
  paragraph: string
}

const differentials: Differential[] = [
  {
    stamps: trophy,
    title: 'Warranty Protection',
    paragraph: 'Crafted from top materials'
  },
  {
    stamps: garantee,
    title: 'High Quality',
    paragraph: 'Over 2 years'
  },
  {
    stamps: shipping,
    title: 'Free Shipping',
    paragraph: 'Order over 150 $'
  },
  {
    stamps: support,
    title: '24 / 7 Support',
    paragraph: 'Dedicated support'
  },

]

const OurDifferential = () => {
  return (
    <section className='bg-primary'>
      <ul className='px-[3rem] py-[4rem] flex flex-col gap-6 lg:flex-row lg:gap-4 items-center justify-between'>
        {
          differentials.map((diff, index) => {
            return (
              <li key={index} className='flex flex-col lg:flex-row lg:gap-2 items-center gap-4 w-[100%/4]'>
                <img className='text-gray-title' src={diff.stamps} alt="" />
                <div>
                  <h3 className='text-2xl font-semibold text-gray-title'>{diff.title}</h3>
                  <p className='text-[20px] text-gray-text'>{diff.paragraph}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default OurDifferential