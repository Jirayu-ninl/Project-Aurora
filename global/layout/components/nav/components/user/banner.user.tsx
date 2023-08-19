import Image from 'next/image'
import { eNavDropdownState } from '@global/store/ui'
import * as Icon from '../../assets'

const UserBanner = ({
  session,
  notificationCount,
}: {
  session: any
  notificationCount: number
}) => {
  const user = session && session.user
  const getDisplayUser = (n: string) => {
    let result
    const name = n.split(' ')
    if (!name[1]) {
      result = name[0].length < 8 ? name[0] : name[0].slice(0, 8) + '..'
    } else {
      if (name[0].length < 8) {
        result = name[0] + '.' + name[1].slice(0, 1)
      } else {
        result = name[0]
      }
    }
    return result
  }

  const displayUser = getDisplayUser(user.name)

  return (
    <>
      <div className='ml-4 mr-3'>
        <h5 className='text-right text-xs font-bold sm:text-base'>
          {displayUser}
        </h5>
        <p className='-mt-1 text-right text-2xs lowercase opacity-80 sm:text-xs'>
          {user.role === 'SUPER_ADMIN' ? 'SUPER ADMIN' : user.role}
        </p>
      </div>
      <div className='relative h-9 w-9'>
        <Image
          src={user.image}
          alt='Profile'
          fill
          objectFit='cover'
          className='h-full w-full overflow-hidden rounded-full'
        />
        <div className='absolute bottom-0 right-0 z-10 h-3 w-3 rounded-full border-2 border-white bg-green-500' />
        {notificationCount !== 0 && (
          <span className='NotiBadge-primary-sm mr-1 mt-1'>
            {notificationCount}
          </span>
        )}
      </div>
    </>
  )
}

export { UserBanner }
