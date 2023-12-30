import type { Dispatch } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut } from 'next-auth/react'
import { app as appConfig } from '@global/config/defineConfig'
import Items from '../listPopupDropdown/items'
import { Graph, LogOut } from '@aurora/assets/icons'

import { User } from '@global/store'

const UserPanel = ({
  session,
  setShowPanel,
}: {
  session: any
  setShowPanel: Dispatch<boolean>
}) => {
  const _notifications = User((state) => state.notifications)
  const _setNotification = User((state) => state.setNotifications)

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

  const displayUser = session && getDisplayUser(user.name)
  const avatarImg: string | undefined =
    user?.metadata?.profile?.image?.avatar?.name ?? undefined

  return (
    <>
      <div className='flex h-full flex-col'>
        {!session ? (
          <>
            <div className='m-auto'>
              <h6 className='text-center'>You are not log-in</h6>
              <button
                className='mt-2 w-full rounded-md border border-black/20 py-1 text-sm dark:border-white/20'
                onClick={() => signIn()}
              >
                LOG IN
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='relative mb-4 flex w-full cursor-pointer items-center'>
              <div className='relative h-10 w-10'>
                <Image
                  src={
                    avatarImg
                      ? `${appConfig.s3.endpoint}/icejiverse-profiles/${avatarImg}`
                      : user.image
                  }
                  alt='Profile'
                  fill
                  objectFit='cover'
                  className='h-full w-full overflow-hidden rounded-full'
                />
                <div className='absolute bottom-0 right-0 z-10 h-3 w-3 rounded-full border-2 border-white bg-green-500' />
                {_notifications.length !== 0 && (
                  <span className='NotiBadge-primary-sm mr-1 mt-1'>
                    {_notifications.length}
                  </span>
                )}
              </div>
              <Link
                href='/app/profile'
                className='ml-4 grow'
                onClick={() => setShowPanel(false)}
              >
                {displayUser && (
                  <h5 className='text-xl font-bold'>{displayUser}</h5>
                )}
                <p className='-mt-1 text-xs lowercase opacity-80'>
                  {user.role === 'SUPER_ADMIN' ? 'SUPER ADMIN' : user.role}
                </p>
              </Link>
              <div className='flex h-8 space-x-1 fill-black dark:fill-white'>
                <Link
                  href='/app/dashboard'
                  className='h-8 w-8 rounded-md border border-black/20 p-2 dark:border-white/20'
                  onClick={() => setShowPanel(false)}
                >
                  <Graph />
                </Link>
                <div
                  className='h-8 w-8 rounded-md border border-black/20 p-2 dark:border-white/20'
                  onClick={() => signOut()}
                >
                  <LogOut />
                </div>
              </div>
            </div>
            {_notifications.length === 0 ? (
              <div className='flex h-24 items-center justify-center'>
                <p className='text-center text-xs font-light opacity-60'>
                  notification is empty
                </p>
              </div>
            ) : (
              <>
                <div className='NSB grow overflow-scroll'>
                  <Items list={_notifications} />
                </div>
                <p
                  className='cursor-pointer py-2 text-center text-xs font-light opacity-60'
                  onClick={() => _setNotification([])}
                >
                  clear all
                </p>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default UserPanel
