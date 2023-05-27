/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useRef } from 'react'
import useOnClickOutside from '@aurora/libs/hooks/useOnClickOutside'
import { motion } from 'framer-motion'
import { State, UI } from '@app/store'
import { NavDropdownState } from '@app/store/ui'
import { navRoutes } from '@app/config/routes'
// import UserBlock from './components/user'
// import { useSession, signOut } from 'next-auth/react'
import NotificationBlock from './components/notification'
import CartBlock from './components/cart'
import NavMenuItem from './components/navMenuItem'
import IceJiLogo from '@app/assets/logo/IceJi'
import * as Icon from './assets'

export default function IJNNav({
  useAudio,
  _dark,
  _navShowCanvas,
  _setNavShowCanvas,
}: {
  useAudio: any
  _dark: boolean
  _navShowCanvas: boolean
  _setNavShowCanvas: (show: boolean) => void
}) {
  const _setCursor = UI((state) => state.setCursor)
  const _setDark = UI((state) => state.setDark)
  const _setNavDropdown = UI((state) => state.setNavDropdown)
  const _navDropdown = UI((state) => state.navDropdown)
  const _page = State((state) => state.page)

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => _setNavDropdown(NavDropdownState.NONE))

  const [audioPlaying, toggleAudio] = useAudio()
  const audioToggle = () => {
    toggleAudio()
    _setCursor(false)
  }

  const [navActiveState, setNavActiveState] = useState({
    id: 0,
    scrollProgress: 20,
  })

  // const { data: session } = useSession()

  return (
    <nav className='fixed left-0 top-0 z-80 w-screen px-5 py-4' ref={NavRef}>
      <div className='flex h-16 rounded-md shadow-xl backdrop-blur-md'>
        <div className='flex h-full w-[468px] items-center bg-black/[0.07] dark:bg-white/[0.07]'>
          <motion.div
            className='flex h-full w-16 cursor-pointer items-center rounded-l-md bg-primary-0 p-3'
            onMouseEnter={() => {
              _setCursor('logo')
            }}
            onMouseLeave={() => {
              _setCursor(false)
            }}
            onClick={() => _setNavShowCanvas(false)}
          >
            <Link href='/home'>
              <IceJiLogo />
            </Link>
          </motion.div>
          <h6 className='hidden px-5 font-medium md:block'>{_page}</h6>
        </div>
        <div className='flex grow items-center justify-between rounded-r-md border border-black/[0.07] px-6 dark:border-white/[0.07]'>
          <ul className='flex'>
            {navRoutes.map((v, i) => (
              <NavMenuItem
                key={i}
                index={i}
                menuItem={v}
                navActiveState={navActiveState}
                setNavActiveState={setNavActiveState}
              />
            ))}
          </ul>
          <div className='flex h-full items-center'>
            <div className='mr-4 hidden h-4 space-x-6 fill-black dark:fill-white md:flex'>
              <CartBlock
                _setNavDropdown={_setNavDropdown}
                _navDropdown={_navDropdown}
                NavDropdownState={NavDropdownState}
              />
              <NotificationBlock
                _setNavDropdown={_setNavDropdown}
                _navDropdown={_navDropdown}
                NavDropdownState={NavDropdownState}
              />
              <Icon.SeparatorLine />
            </div>
            <motion.div
              className='flex h-4 space-x-4 fill-black dark:fill-white'
              onMouseEnter={() => _setCursor('logo')}
              onMouseLeave={() => _setCursor(false)}
              onClick={() => {
                _setCursor(false)
              }}
            >
              <div className='cursor-pointer' onClick={audioToggle}>
                {audioPlaying ? <Icon.SoundOn /> : <Icon.SoundOff />}
              </div>
              {/* {!session && (
                <Link
                  href='/app/portal'
                  onClick={() => _setNavShowCanvas(false)}
                >
                  <Icon.User />
                </Link>
              )} */}
              <div
                className='cursor-pointer'
                onClick={() => {
                  _setDark(!_dark)
                  _setCursor(false)
                  _setNavDropdown(NavDropdownState.NONE)
                }}
              >
                <Icon.Dark />
              </div>
              <div
                className='cursor-pointer'
                onClick={() => {
                  _setNavShowCanvas(!_navShowCanvas)
                  _setCursor(false)
                  _setNavDropdown(NavDropdownState.NONE)
                }}
              >
                {_navShowCanvas ? <Icon.Close /> : <Icon.Menu />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  )
}
