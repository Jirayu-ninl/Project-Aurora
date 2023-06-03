import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

import { State, User } from '@global/store'
import NavMenuItem from '../navMenuItem'
import Items from '../listPopupDropdown/items'
import * as Icon from '../../assets'

function Panel({
  showPanel,
  setShowPanel,
  panelState,
  _dark,
  _setDark,
  audioPlaying,
  audioToggle,
}: {
  showPanel: boolean
  setShowPanel: Dispatch<SetStateAction<boolean>>
  panelState: string
  _dark: boolean
  _setDark: (d: boolean) => void
  audioPlaying: boolean
  audioToggle: () => void
}) {
  return (
    <AnimatePresence>
      {showPanel && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ ease: [0.43, 0.13, 0.23, 0.96], duration: 0.2 }}
          className='Anim h-80 w-64 overflow-hidden rounded-lg bg-black/10 backdrop-blur-md dark:bg-white/10'
        >
          <div className='flex justify-between bg-quaternary-2 px-4 py-2 font-black uppercase text-white dark:bg-primary-0 dark:text-black'>
            <h6>{panelState}</h6>
            <p onClick={() => setShowPanel(false)}>x</p>
          </div>
          <div className='p-3'>
            {panelState === 'user' ? (
              <UserPanel
                _dark={_dark}
                _setDark={_setDark}
                audioPlaying={audioPlaying}
                audioToggle={audioToggle}
              />
            ) : (
              <NavigationPanel />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

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

  const SubPanel = ({
    items,
    title,
    buttonCallback,
    buttonText,
  }: {
    items: any[]
    title: string
    buttonCallback: () => void
    buttonText: string
  }) => (
    <>
      {items.length === 0 ? (
        <div className='flex h-24 items-center justify-center'>
          <p className='text-center text-xs font-light opacity-60'>
            {title} is empty
          </p>
        </div>
      ) : (
        <>
          <Items list={items} />
          <p
            className='cursor-pointer pt-2 text-center text-xs font-light opacity-60'
            onClick={() => buttonCallback()
            }
          >
            {buttonText}
          </p>
        </>
      )}
    </>
  )

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

const NavigationPanel = () => {
  const _navRoute = State((state) => state.navRoute)
  const _navRouteActiveState = State((state) => state.navRouteActiveState)

  return (
    <motion.ul>
      {_navRoute.map((v, i) => (
        <NavMenuItem
          key={i}
          index={i}
          menuItem={v}
          _navRouteActiveState={_navRouteActiveState}
        />
      ))}
    </motion.ul>
  )
}

export default Panel
