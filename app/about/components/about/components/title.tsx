import { motion } from 'framer-motion'
import clsx from 'clsx'
import { PageAboutAnimation as animConf } from '@global/config/defineAnimationConfig'
import { IconDev, IconImage, IconPresent } from '../../../assets'
import { UI } from '@global/store'

export default function Header({
  children,
  title = '',
  subTitle = '',
  icon = false,
  className,
}: {
  children?: React.ReactNode
  title?: string
  subTitle?: string
  icon?: boolean
  className?: string
}) {
  const { parent: animP, children: animC } = animConf.stagger_yUp_O
  const _dark = UI((state) => state.dark)

  return (
    <motion.div
      variants={animP(0.3)}
      initial='hidden'
      animate='show'
      className={clsx(
        'm-container pointer-events-none absolute flex w-full flex-col justify-center pl-4 sm:pl-8 md:pl-20',
        className && className,
      )}
    >
      <motion.h2
        variants={animC}
        className='text-3xl font-semibold uppercase text-quaternary-2 dark:text-primary-0 md:text-5xl xxl:text-7xl'
      >
        {subTitle}
      </motion.h2>
      <motion.h1
        variants={animC}
        className={clsx(
          'mt-0 text-7xl font-semibold uppercase md:-mt-4 md:text-9xl xxl:-mt-12 xxl:text-[13rem]',
          _dark ? 'text-outline-dark' : 'text-outline',
        )}
      >
        {title}
      </motion.h1>
      {children && (
        <motion.div
          variants={animC}
          className='relative left-28 w-3/5 rounded-md bg-white/10 pb-6 pt-5 backdrop-blur-md lg:left-48 lg:w-1/2 lg:pb-12 lg:pt-10 xxl:left-40'
        >
          <div className='-ml-20 lg:-ml-36'>{children}</div>
        </motion.div>
      )}
      {icon && (
        <motion.div variants={animC} className='flex space-x-10'>
          <IconDev className='Anim AnimOpacity-40' />
          <IconImage className='Anim AnimOpacity-40' />
          <IconPresent className='Anim AnimOpacity-40' />
        </motion.div>
      )}
    </motion.div>
  )
}
