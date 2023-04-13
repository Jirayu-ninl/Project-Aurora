/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from '@libs/hooks'
import { motion } from 'framer-motion'
import { State, User, UI } from '@store'
import UserBlock from './user'
import { useSession, signOut } from 'next-auth/react'
import NotificationBlock from './notification'
import CartBlock from './cart'
import {
  MenuIcon,
  CloseIcon,
  UserIcon,
  SoundOn,
  SoundOff,
  SeparatorLine,
} from '../assets'

export default function IJNNav({
  setToggleMenu,
  toggleMenu,
  useAudio,
}: {
  setToggleMenu: any
  toggleMenu: boolean
  useAudio: any
}) {
  const _setCursor = UI((state) => state.setCursor)
  const _page = State((state) => state.page)
  const _Notification = User((state) => state.notification)
  const _Cart = User((state) => state.cart)

  const [PopupState, setPopupState] = useState({
    notification: false,
    cart: false,
    userPanel: false,
  })

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => setNavPopupState('all'))

  const setNavPopupState = (current: string) => {
    switch (current) {
      case 'notification':
        setPopupState({
          notification: !PopupState.notification,
          cart: false,
          userPanel: false,
        })
        break
      case 'cart':
        setPopupState({
          notification: false,
          cart: !PopupState.cart,
          userPanel: false,
        })
        break
      case 'userPanel':
        setPopupState({
          notification: false,
          cart: false,
          userPanel: !PopupState.userPanel,
        })
        break
      case 'all':
        setPopupState({
          notification: false,
          cart: false,
          userPanel: false,
        })
        break
      default:
        break
    }
  }

  const [audioPlaying, toggleAudio] = useAudio()
  const audioToggle = () => {
    toggleAudio()
    _setCursor(false)
  }

  const { data: session } = useSession()

  return (
    <nav className='fixed top-0 left-0 z-80 w-screen py-4 px-5' ref={NavRef}>
      <div className='rounded-md bg-black/40 shadow-xl backdrop-blur-md'>
        <div className='flex h-16 items-center justify-between px-6'>
          <div className='flex h-full items-center'>
            <motion.div
              className='flex h-full cursor-pointer items-center py-3 pr-6'
              onMouseEnter={() => {
                _setCursor('logo')
              }}
              onMouseLeave={() => {
                _setCursor(false)
              }}
              onClick={() => setToggleMenu(false)}
            >
              <Link href='/home' passHref legacyBehavior>
                <img
                  className='h-full'
                  src='/logo_white.svg'
                  alt='TheIceJI logo'
                />
              </Link>
            </motion.div>
            <svg
              className='hidden md:block'
              xmlns='http://www.w3.org/2000/svg'
              width='2'
              height='23'
              viewBox='0 0 2 23'
            >
              <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
            </svg>
            <h6 className='hidden px-5 md:block'>{_page}</h6>
          </div>
          <div className='flex h-full items-center'>
            {toggleMenu && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='absolute top-20 left-6 flex space-x-7 fill-white md:hidden'
              >
                <CartBlock
                  OpenCart={PopupState.cart}
                  setNavPopupState={setNavPopupState}
                  _Cart={_Cart}
                />
                <NotificationBlock
                  OpenNotification={PopupState.notification}
                  setNavPopupState={setNavPopupState}
                  _Notification={_Notification}
                />
              </motion.div>
            )}
            <div className='hidden space-x-7 fill-white md:flex'>
              <CartBlock
                OpenCart={PopupState.cart}
                setNavPopupState={setNavPopupState}
                _Cart={_Cart}
              />
              <NotificationBlock
                OpenNotification={PopupState.notification}
                setNavPopupState={setNavPopupState}
                _Notification={_Notification}
              />
            </div>
            <div className='hidden md:block md:px-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='2'
                height='23'
                viewBox='0 0 2 23'
              >
                <rect width='2' height='23' rx='1' fill='#fff' opacity='0.2' />
              </svg>
            </div>
            {session && (
              <>
                <UserBlock
                  signOut={signOut}
                  user={session.user}
                  setNavPopupState={setNavPopupState}
                  OpenPanel={PopupState.userPanel}
                />
                <SeparatorLine />
              </>
            )}
            <motion.div
              className='flex space-x-4 fill-white'
              onMouseEnter={() => _setCursor('logo')}
              onMouseLeave={() => _setCursor(false)}
              onClick={() => {
                _setCursor(false)
              }}
            >
              <a className='cursor-pointer' onClick={audioToggle}>
                {audioPlaying ? <SoundOn /> : <SoundOff />}
              </a>
              {!session && (
                <Link href='/app/portal' onClick={() => setToggleMenu(false)}>
                  <UserIcon />
                </Link>
              )}
              <div
                className='cursor-pointer'
                onClick={() => {
                  setToggleMenu(!toggleMenu)
                  _setCursor(false)
                  setNavPopupState('all')
                }}
              >
                {toggleMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
}
