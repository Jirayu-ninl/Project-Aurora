import Image from 'next/image'

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
  const avatarImg: string | undefined =
    user?.metadata?.profile?.image?.avatar?.url ?? undefined

  return (
    <>
      <div className='ml-4 mr-2 el:mr-3'>
        <h5 className='text-right text-sm font-bold el:text-base'>
          {displayUser}
        </h5>
        <p className='-mt-1 text-right text-2xs lowercase opacity-80 el:text-xs'>
          {user.role === 'SUPER_ADMIN' ? 'SUPER ADMIN' : user.role}
        </p>
      </div>
      <div className='relative h-7 w-7 el:h-9 el:w-9'>
        <Image
          src={avatarImg ? avatarImg : user.image}
          alt='Profile'
          fill
          objectFit='cover'
          className='h-full w-full overflow-hidden rounded-full'
        />
        <div className='absolute bottom-0 right-0 z-10 h-2 w-2 rounded-full border border-white bg-green-500 el:h-3 el:w-3 el:border-2' />
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
