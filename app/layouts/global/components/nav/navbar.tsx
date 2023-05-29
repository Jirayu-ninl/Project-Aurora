'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { useSession, signOut } from 'next-auth/react'

import useOnClickOutside from '@aurora/libs/hooks/useOnClickOutside'
import useAudio from '@aurora/libs/hooks/useAudio'

import { State, UI } from '@app/store'
import { NavDropdownState } from '@app/store/ui'
import { aNav, aNavChildren } from '@app/config/defineAnimationConfig'
import { navCanvasRoutes } from '@app/config/routes'
import IceJiLogo from '@app/assets/logo/IceJi'

// import UserBlock from './components/user'
import NotificationBlock from './components/notification'
import CartBlock from './components/cart'
import NavMenuItem from './components/navMenuItem'
import * as Icon from './assets'

export default function IJNNav() {
  const _setCursor = UI((state) => state.setCursor)
  const _dark = UI((state) => state.dark)
  const _setDark = UI((state) => state.setDark)
  const _showNav = UI((state) => state.showNav)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const _navDropdown = UI((state) => state.navDropdown)
  const _setNavDropdown = UI((state) => state.setNavDropdown)
  const _navRoute = State((state) => state.navRoute)
  const _page = State((state) => state.page)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

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
    <>
      <AnimatePresence>
        {_showNav && (
          <motion.nav
            initial={aNav(_showNav).initial}
            exit={aNav(_showNav).exit}
            animate={aNav(_showNav).animate}
            transition={aNav(_showNav).transition(0)}
            className='fixed left-0 top-0 z-80 w-screen px-5 py-4'
            ref={NavRef}
          >
            <div className='bg-back/[0.05] flex h-12 rounded-md shadow-md backdrop-blur-md dark:shadow-xl xxl:h-16'>
              <div className='flex h-full w-12 items-center rounded-l-md bg-black/[0.07] dark:bg-white/[0.07] md:w-1/2 xl:w-[320px] el:w-[468px]'>
                <div
                  className='flex h-full w-16 cursor-pointer items-center rounded-l-md bg-primary-0 p-2 lg:p-3'
                  onMouseEnter={() => {
                    _setCursor('logo')
                  }}
                  onMouseLeave={() => {
                    _setCursor(false)
                  }}
                  onClick={() => {
                    _setNavShowCanvas(false)
                    _setModalAppInfo(true)
                  }}
                >
                  <IceJiLogo />
                </div>
                <h6 className='hidden px-5 font-medium md:block'>{_page}</h6>
              </div>
              <div className='flex grow items-center justify-end rounded-r-md border border-black/[0.07] px-6 dark:border-white/[0.07] xl:justify-between'>
                <motion.ul className='hidden xl:flex'>
                  {_navRoute.map((v, i) => (
                    <NavMenuItem
                      key={i}
                      index={i}
                      menuItem={v}
                      navActiveState={navActiveState}
                      setNavActiveState={setNavActiveState}
                    />
                  ))}
                </motion.ul>
                <div className='flex h-full items-center'>
                  <div className='mr-4 flex h-4 space-x-6 fill-black dark:fill-white'>
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
                    <motion.div
                      className='cursor-pointer'
                      onClick={audioToggle}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(0.9)}
                    >
                      {audioPlaying ? <Icon.SoundOn /> : <Icon.SoundOff />}
                    </motion.div>
                    {/* {!session && (
                <Link
                  href='/app/portal'
                  onClick={() => _setNavShowCanvas(false)}
                >
                  <Icon.User />
                </Link>
              )} */}
                    <motion.div
                      className='cursor-pointer'
                      onClick={() => {
                        _setDark(!_dark)
                        _setCursor(false)
                        _setNavDropdown(NavDropdownState.NONE)
                      }}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(1)}
                    >
                      <Icon.Dark />
                    </motion.div>
                    <motion.div
                      className='cursor-pointer'
                      onClick={() => {
                        _setNavShowCanvas(!_navShowCanvas)
                        _setCursor(false)
                        _setNavDropdown(NavDropdownState.NONE)
                      }}
                      initial={aNavChildren.initial}
                      exit={aNavChildren.exit}
                      animate={aNavChildren.animate}
                      transition={aNavChildren.transition(1.1)}
                    >
                      {_navShowCanvas ? <Icon.Close /> : <Icon.Menu />}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
