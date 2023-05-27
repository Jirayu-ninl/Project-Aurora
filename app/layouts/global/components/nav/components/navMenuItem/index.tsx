import Link from 'next/link'
import clsx from 'clsx'
import type { tNavRoute } from '@app/config/routes'

function NavMenuItem({
  menuItem,
  index,
  navActiveState,
  setNavActiveState,
}: {
  menuItem: tNavRoute
  index: number
  navActiveState: { id: number; scrollProgress: number }
  setNavActiveState: any
}) {
  return (
    <Link
      href={menuItem.path}
      className={clsx(
        'mr-12',
        navActiveState.id !== index && 'Anim AnimOpacity-20',
      )}
      onClick={() => setNavActiveState(index)}
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
          <div
            className='Anim-2 absolute h-0.5 bg-primary-0'
            style={{ width: navActiveState.scrollProgress + '%' }}
          />
          <div className='h-0.5 w-full bg-white opacity-20' />
        </div>
      )}
    </Link>
  )
}

export default NavMenuItem
