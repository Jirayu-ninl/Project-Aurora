'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const CoverImage = ({
  Title,
  Img,
  Tags,
  lang = 'en',
  ColorBg = '#000000',
}: {
  Title: string
  Img: string
  Tags?: string[]
  lang?: string
  ColorBg?: string
}) => {
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
      className='relative flex h-3/5 items-end justify-center overflow-hidden'
      style={{ backgroundColor: ColorBg }}
    >
      <motion.div
        className='m-container absolute w-screen'
        style={{ y: springY }}
      >
        <Image
          src={Img}
          alt={Title}
          fill
          objectFit='cover'
          quality={80}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </motion.div>
      <div className='Anim absolute top-0 h-80 w-screen bg-gradient-to-b from-backgroundLight-1/20 to-backgroundLight-1/0 dark:from-background-1/20 dark:to-background-1/0'></div>
      <div className='Anim absolute h-80 w-screen bg-gradient-to-t from-backgroundLight-1 to-backgroundLight-1/0 dark:from-background-1 dark:to-background-1/0'></div>
    </div>
  )
}

export { CoverImage }
