'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

import { useOnClickOutside } from '@aurora/libs/hooks/events'
import { useAudio } from '@aurora/libs/hooks/audio'

import { State, UI } from '@global/store'
import { eNavDropdownState } from '@global/store/ui.store'
import { aNav, aNavChildren } from '@global/config/defineAnimationConfig'
import { IceJiLogo } from '@components/logo/IceJi'

import UserBlock from './components/user'
import CartBlock from './components/cart'
import NavMenuItem from './components/navMenuItem'
import { Icon } from '@aurora/assets'

const NavBar = ({ session }: any) => {
  const _setCursor = UI((state) => state.setCursor)
  const _dark = UI((state) => state.dark)
  const _setDark = UI((state) => state.setDark)
  const _showNav = UI((state) => state.showNav)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const _navDropdown = UI((state) => state.navDropdown)
  const _setNavDropdown = UI((state) => state.setNavDropdown)
  const _navRoute = State((state) => state.navRoute)
  const _navRouteActiveState = State((state) => state.navRouteActiveState)
  const _backRoute = State((state) => state.backRoute)
  const _page = State((state) => state.page)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  const NavRef = useRef(null)
  useOnClickOutside(NavRef, () => _setNavDropdown(eNavDropdownState.NONE))

  const [audioPlaying, toggleAudio] = useAudio()
  const audioToggle = () => {
    toggleAudio()
    _setCursor(false)
  }

  return (
    <>
      <AnimatePresence>
        {_showNav && (
          <motion.nav
            initial={aNav(_showNav).initial}
            exit={aNav(_showNav).exit}
            animate={aNav(_showNav).animate}
            transition={aNav(_showNav).transition(0)}
            className='fixed left-0 top-0 z-[400] hidden w-screen px-5 py-4 sm:block'
            ref={NavRef}
          >
            <div className='bg-back/[0.05] flex h-12 rounded-md shadow-md backdrop-blur-md el:h-16 dark:shadow-xl'>
              <div className='flex h-full w-12 items-center rounded-l-md bg-black/[0.07] md:w-1/2 xl:w-[320px] el:w-[468px] dark:bg-white/[0.07]'>
                <div
                  className='Anim flex h-full w-16 cursor-pointer items-center rounded-l-md bg-quaternary-2 p-2 lg:p-2 el:p-3 dark:bg-primary-0'
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
                  <IceJiLogo dark={!_dark} />
                </div>
                <h6 className='hidden px-5 font-medium md:block'>{_page}</h6>
              </div>
              <div className='relative flex grow items-center justify-end rounded-r-md border border-black/[0.07] px-6 xl:justify-between dark:border-white/[0.07]'>
                <Link
                  className='Anim absolute -left-2 hidden h-5 w-5 cursor-pointer rounded-full bg-black stroke-white p-1.5 hover:bg-quaternary-3 xl:block dark:bg-white dark:stroke-black dark:hover:bg-primary-0'
                  href={_backRoute}
                >
                  <Icon.ArrowMinimal />
                </Link>
                <motion.ul className='hidden xl:ml-2 xl:flex'>
                  {_navRoute.map((v, i) => (
                    <NavMenuItem
                      key={i}
                      index={i}
                      menuItem={v}
                      _navRouteActiveState={_navRouteActiveState}
                    />
                  ))}
                </motion.ul>
                <div className='ml-auto flex h-full items-center justify-end '>
                  <div className='mr-4 flex h-4 space-x-6 fill-black dark:fill-white'>
                    <CartBlock
                      _setNavDropdown={_setNavDropdown}
                      _navDropdown={_navDropdown}
                    />
                    {/* <NotificationBlock
                      _setNavDropdown={_setNavDropdown}
                      _navDropdown={_navDropdown}
                      NavDropdownState={NavDropdownState}
                    /> */}
                    <UserBlock
                      _setNavDropdown={_setNavDropdown}
                      _navDropdown={_navDropdown}
                      session={session}
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
                    <motion.div
                      className='cursor-pointer'
                      onClick={() => {
                        _setDark(!_dark)
                        _setCursor(false)
                        _setNavDropdown(eNavDropdownState.NONE)
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
                        _setNavDropdown(eNavDropdownState.NONE)
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

export { NavBar }
