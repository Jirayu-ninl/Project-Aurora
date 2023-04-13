import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const Header = ({ Title, Img, Tags, lang = 'en', ColorBg = '#000000' }) => {
  const { scrollY } = useScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  const animList = {
    initial: { x: 100 },
    animate: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        delay: 0,
        staggerChildren: 0.2,
      },
    },
  }

  const animItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { type: 'tween' },
  }

  return (
    <div
      className='relative flex h-[50vh] items-end justify-center overflow-hidden'
      style={{ backgroundColor: ColorBg }}
    >
      <div className='container z-10 w-screen px-4 xxl:w-[1440px]'>
        <motion.div
          variants={animList}
          initial='initial'
          animate='animate'
          className='uppercase'
        >
          {Tags.map((v: string, i: number) => (
            <motion.button
              className='Btn-white-40 Anim AnimTranslate-4 mt-2 mr-2 uppercase hover:bg-primary-0 hover:text-black'
              key={i}
              variants={animItem}
            >
              {v}
            </motion.button>
          ))}
        </motion.div>
        <motion.h1
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='mt-1 mb-6 text-6xl font-bold md:mt-0 md:text-7xl xxl:text-8xl'
        >
          {Title}
        </motion.h1>
      </div>
      <motion.div className='absolute h-screen w-screen' style={{ y: springY }}>
        <Image
          src={Img}
          alt={Title}
          layout='fill'
          objectFit='cover'
          quality={100}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </motion.div>
      <div className='absolute h-80 w-screen bg-gradient-to-t from-background-1 to-background-1/0'></div>
    </div>
  )
}

export default Header
