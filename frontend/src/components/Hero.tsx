import imgBanner from '../assets/banner.png'
import { motion } from "motion/react"

const Hero = () => {
  const text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'
  const letters: string[] = text.split('')
  console.log(letters)
  return (
    <section className="relative">
      <img
        className="w-full object-cover"
        src={imgBanner}
        alt="living area image"
      />
      <div
        className='w-full lg:max-w-[40%] max-w-[89%] h-[20vw]  absolute z-20 bottom-0 right-0 rounded-t-[10px] p-4 px-4 bg-primary flex items-center'>
        <motion.p
          className="text-sm w-[100%]  flex flex-wrap "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: `0.25em` },
                visible: { opacity: 1, y: `0em` },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  )
}

export default Hero