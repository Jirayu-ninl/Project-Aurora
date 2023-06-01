import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'
import type { tNavCanvasRoute } from '@global/config/routes'
import { aNavChildren } from '@global/config/defineAnimationConfig'

function NavMenuItem({
  menuItem,
  index,
  _navRouteActiveState,
}: {
  menuItem: tNavCanvasRoute
  index: number
  _navRouteActiveState: { id: number; scrollProgress: number }
}) {
  return (
    <motion.div
      initial={aNavChildren.initial}
      exit={aNavChildren.exit}
      animate={aNavChildren.animate}
      transition={aNavChildren.transition(index / 10)}
      className={clsx(
        'mr-6 flex xxl:mr-10 el:mr-12',
        _navRouteActiveState.id !== index && 'Anim AnimOpacity-20',
      )}
    >
      <Link
        href={menuItem.path}
        className='AnimUnderline-FirstChild navMenuItem'
      >
        <div className='flex items-center'>
          <p
            className={clsx(
              'text-2xs font-black',
              _navRouteActiveState.id === index &&
                'Anim text-quaternary-2 dark:text-primary-0',
            )}
          >
            {menuItem.number}
          </p>
          <p className='pl-1 text-2xs font-bold xxl:text-sm el:pl-3'>
            {menuItem.title}
          </p>
        </div>
        {(_navRouteActiveState.id === index ||
          _navRouteActiveState.id === 99) && (
          <div className='relative mt-1 el:mt-2'>
            <motion.div
              className='Anim-2 absolute ml-[10px] h-0.5 bg-quaternary-2 dark:bg-primary-0'
              // style={{ width: navActiveState.scrollProgress + '%' }}
              initial={{ width: '0%' }}
              animate={{ width: _navRouteActiveState.scrollProgress + '%' }}
              transition={{ delay: 1, duration: 1 }}
            />
            <div className='ml-[10px] h-0.5 w-[calc(100%-20px)] bg-white opacity-20' />
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export default NavMenuItem
