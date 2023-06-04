import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import { User } from '@global/store'

import SubPanel from './panel.subPanel'
import * as Icon from '../../assets'

const UserPanel = ({
  _dark,
  _setDark,
  audioPlaying,
  audioToggle,
}: {
  _dark: boolean
  _setDark: (d: boolean) => void
  audioPlaying: boolean
  audioToggle: () => void
}) => {
  const router = useRouter()

  const _notifications = User((state) => state.notifications)
  const _setNotification = User((state) => state.setNotifications)
  const _cart = User((state) => state.cart)

  const [section, setSection] = useState(0)

  const Sections = [
    { title: 'cart', blocks: [] },
    { title: 'notification', blocks: [] },
    {
      title: 'settings',
    },
  ]

  return (
    <>
      <div className='flex space-x-1 py-2'>
        {Sections.map((v, i) => (
          <div
            key={i}
            onClick={() => setSection(i)}
            className={clsx(
              'Anim w-full rounded-md border border-black/20 px-2 py-1 text-center text-xs font-bold dark:border-white/20',
              section === i &&
                'bg-quaternary-2 text-white dark:bg-primary-0 dark:text-black',
            )}
          >
            {v.title}
          </div>
        ))}
      </div>
      <div className='overflow-scroll px-px py-2'>
        {section === 0 && (
          <SubPanel
            items={_cart}
            title='Cart'
            buttonText='Open cart'
            buttonCallback={() => router.push('/shop/cart')}
          />
        )}
        {section === 1 && (
          <SubPanel
            items={_notifications}
            title='Notifications'
            buttonText='Clear all'
            buttonCallback={() => _setNotification([])}
          />
        )}

        {section === 2 && (
          <div className='h-full overflow-y-scroll'>
            <div
              onClick={() => _setDark(!_dark)}
              className='mb-2 flex justify-between rounded-md bg-black/5 px-4 py-2 dark:bg-white/5'
            >
              <p className='h-full align-middle'>Dark mode</p>
              <div className='fill-dark w-6 p-1 dark:fill-white'>
                <Icon.Dark />
              </div>
            </div>
            <div
              onClick={() => audioToggle()}
              className={clsx(
                'flex justify-between rounded-md bg-black/5 px-4 py-2 dark:bg-white/5',
                audioPlaying &&
                  'border-l-2 border-quaternary-2 dark:border-primary-0',
              )}
            >
              <p className='h-full align-middle'>Audio</p>
              <div className='fill-dark w-6 p-1 dark:fill-white'>
                {audioPlaying ? <Icon.SoundOn /> : <Icon.SoundOff />}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default UserPanel
