import { motion } from 'framer-motion'
import { UI } from '@store'

import HomeCard from './homeCard'

const transition = (delay: number) => ({
  delay: delay,
})

export default function Home() {
  const Init: any = { visibility: 'hidden', y: 100 }
  const Animated: any = { visibility: 'visible', y: 0 }

  return (
    <>
      <div className='flex flex-col items-end overflow-hidden pr-2 sm:pr-6 lg:pr-8'>
        <motion.h6
          initial={Init}
          animate={Animated}
          transition={transition(0)}
          className='-mb-1 text-base font-semibold text-primary-0 md:-mb-3 lg:text-2xl'
        >
          HELLO, I AM
        </motion.h6>
        <AnimatedTitle />
        <motion.div
          initial={Init}
          animate={Animated}
          transition={transition(1.5)}
          className='pointer-events-auto mt-4 mb-12 flex space-x-4 md:mt-8 xl:-mb-8'
        >
          <HomeCard Title='MUSIC' Href='#' imgSrc='card-music-bg.png' />
          <HomeCard Title='CODING' Href='#' imgSrc='card-code-bg.png' />
          <HomeCard Title='FILM' Href='#' imgSrc='card-editing-bg.png' />
        </motion.div>
      </div>
    </>
  )
}

const AnimatedTitle = () => {
  const _setCursor = UI((state) => state.setCursor)

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnim = {
    initial: { opacity: 0, y: 400 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0,
      },
    },
  }

  const TitleArr: string[] = ['T', 'h', 'e', 'I', 'c', 'e', 'J', 'I']

  return (
    <>
      <motion.div
        initial='initial'
        animate='animate'
        variants={banner}
        className='page-home-mainTEXT pointer-events-auto -mr-2 flex cursor-default overflow-hidden'
      >
        {[...TitleArr].map((letter, i) => (
          <motion.h1
            variants={letterAnim}
            key={i}
            onMouseOver={() => _setCursor('logo')}
            onMouseLeave={() => _setCursor(false)}
          >
            {letter}
          </motion.h1>
        ))}
      </motion.div>
    </>
  )
}
