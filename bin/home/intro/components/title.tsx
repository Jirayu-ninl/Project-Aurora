'use client'
import { motion } from 'framer-motion'
import { UI } from '@global/store'
import { aHomeTitle } from '@global/config/defineAnimationConfig'
import clsx from 'clsx'

function Title() {
  const _setCursor = UI((state) => state.setCursor)
  const _dark = UI((state) => state.dark)
  const TittleText = ['T', 'h', 'e', 'I', 'c', 'e', 'J', 'i']
  return (
    <div className='absolute bottom-[65%] left-1/2 flex -translate-x-1/2 flex-col items-center xl:bottom-0'>
      <motion.h3
        initial={aHomeTitle(2).initial}
        animate={aHomeTitle(2).animate}
        transition={aHomeTitle(2).transition(0)}
        className='text-xs font-semibold uppercase text-quaternary-2 dark:text-primary-0 md:text-xl lg:text-2xl xl:text-3xl '
      >
        Just called
      </motion.h3>
      <div
        className={clsx(
          'page-home-mainTEXT pointer-events-auto flex cursor-pointer',
          _dark ? 'textHoverStroke-dark' : 'textHoverStroke',
        )}
        onMouseEnter={() => {
          _setCursor('logo')
        }}
        onMouseLeave={() => {
          _setCursor(false)
        }}
      >
        {TittleText.map((v, i) => (
          <motion.h1
            initial={aHomeTitle(i).initial}
            animate={aHomeTitle(i).animate}
            transition={aHomeTitle(i).transition(i / 10)}
            key={i}
          >
            {v}
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Title
