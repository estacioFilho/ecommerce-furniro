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
      <motion.div
        className="lg:h-[300px] w-[443px]  absolute z-20 bottom-0 rounded-t-[10px] p-4 px-4 bg-primary flex justify-cente items-center"
        initial={{
          opacity: 0,
          x: 1200
        }}
        animate={{
          opacity: 1,
          x: 950
        }}
        transition={{
          duration: 1
        }}
      >
        <motion.p
          className="text-[1rem] w-[100%]  flex flex-wrap "
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
      </motion.div>
    </section>
  )
}

export default Hero