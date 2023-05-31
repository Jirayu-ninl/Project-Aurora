import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA({ animConf }) {
  const { parent, children } = animConf.stagger_yUp

  return (
    <motion.div
      variants={parent(0.2)}
      initial='hidden'
      animate='show'
      className='flex h-full w-full flex-col items-center justify-center'
    >
      <motion.h3
        variants={children}
        className='text-base font-semibold uppercase text-primary-0 lg:text-3xl xxl:text-4xl'
      >
        Anything else?
      </motion.h3>
      <motion.div
        variants={children}
        className='flex flex-col items-center justify-center'
      >
        <Link
          href='about/skills'
          className='text-outline Anim-2 AnimOpacity-40 AnimScale-sm text-5xl font-bold uppercase lg:text-8xl xxl:text-10xl'
        >
          My skills?
        </Link>
        <Link
          href='/project'
          className='text-outline Anim-2 AnimOpacity-40 AnimScale-sm text-5xl font-bold uppercase lg:text-8xl xxl:text-10xl'
        >
          projects
        </Link>
      </motion.div>
    </motion.div>
  )
}
