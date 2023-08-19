// 'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { eNavDropdownState } from '@global/store/ui'
import { Icon } from '@aurora/assets'
import { aNavChildren } from '@global/config/defineAnimationConfig'
import { DropdownPopup } from './dropdownPopup'
import { Banner } from './banner'

const Block = ({
  _setNavDropdown,
  _navDropdown,
  session,
}: {
  _setNavDropdown: (dropdown: eNavDropdownState) => void
  _navDropdown: eNavDropdownState
  session: any
}) => {
  const notifications: any[] | [] = [
    {
      title: 'IceJiVerse 1.0',
      link: '/',
      createdAt: new Date(1692447559000),
      description: 'Make it born, make it IceJiVerse',
      time: '18 Aug, 2023',
    },
  ]
  const notificationCount: number = notifications.length

  return (
    <>
      <motion.span
        className='relative flex h-full cursor-pointer items-center'
        initial={aNavChildren.initial}
        exit={aNavChildren.exit}
        animate={aNavChildren.animate}
        transition={aNavChildren.transition(0.8)}
      >
        {!session ? (
          <>
            <Link className='h-[18px]' href='/app/portal'>
              <Icon.User />
            </Link>
          </>
        ) : (
          <>
            <Banner
              _setNavDropdown={_setNavDropdown}
              _navDropdown={_navDropdown}
              session={session}
              notificationCount={notificationCount}
            />
          </>
        )}

        <AnimatePresence>
          {_navDropdown === eNavDropdownState.USER && (
            <DropdownPopup
              key='NAV_User'
              session={session}
              notifications={notifications}
              notificationCount={notificationCount}
              _setNavDropdown={_setNavDropdown}
            />
          )}
        </AnimatePresence>
      </motion.span>
    </>
  )
}

export default Block
