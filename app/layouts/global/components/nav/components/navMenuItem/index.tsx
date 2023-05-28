import type { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import type { tNavRoute } from '@app/config/routes'
import { aNavChildren } from '@app/config/defineAnimationConfig'

function NavMenuItem({
  menuItem,
  index,
  navActiveState,
  setNavActiveState,
}: {
  menuItem: tNavRoute
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
        'mr-12 flex',
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
          <p className='pl-3 text-sm font-bold'>{menuItem.title}</p>
        </div>
        {navActiveState.id === index && (
          <div className='relative mt-2'>
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
