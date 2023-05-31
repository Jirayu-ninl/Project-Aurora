import type { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import type { tNavCanvasRoute } from '@global/config/routes'
import { aNavChildren } from '@global/config/defineAnimationConfig'

function NavMenuItem({
  menuItem,
  index,
  navActiveState,
  setNavActiveState,
}: {
  menuItem: tNavCanvasRoute
  index: number
  navActiveState: { id: number; scrollProgress: number }
  setNavActiveState: Dispatch<
    SetStateAction<{ id: number; scrollProgress: number }>
  >
}) {
  return (
    <motion.div
      initial={aNavChildren.initial}
      exit={aNavChildren.exit}
      animate={aNavChildren.animate}
      transition={aNavChildren.transition(index / 10)}
      className={clsx(
        'mr-6 flex xxl:mr-10 el:mr-12',
        navActiveState.id !== index && 'Anim AnimOpacity-20',
      )}
    >
      <Link
        href={menuItem.path}
        onClick={() => setNavActiveState({ id: index, scrollProgress: 0 })}
      >
        <div className='flex items-center'>
          <p
            className={clsx(
              'text-2xs font-black',
              navActiveState.id === index && 'Anim text-primary-0',
            )}
          >
            {menuItem.number}
          </p>
          <p className='pl-1 text-2xs font-bold xxl:text-sm el:pl-3'>
            {menuItem.title}
          </p>
        </div>
        {navActiveState.id === index && (
          <div className='relative mt-1 el:mt-2'>
            <motion.div
              className='Anim-2 absolute h-0.5 bg-primary-0'
              // style={{ width: navActiveState.scrollProgress + '%' }}
              initial={{ width: '0%' }}
              animate={{ width: navActiveState.scrollProgress + '%' }}
              transition={{ delay: 1, duration: 1 }}
            />
            <div className='h-0.5 w-full bg-white opacity-20' />
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export default NavMenuItem
