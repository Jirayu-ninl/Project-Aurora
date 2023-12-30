'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { State, UI } from '@global/store'
import { aNavChildren } from '@global/config/defineAnimationConfig'

import { IceJiLogo } from '@components/logo/IceJi'
import * as Icon from '@aurora/assets/icons'
import { Panel } from './components/mobile'

const NavMobile = ({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}) => {
  const _dark = UI((state) => state.dark)
  const _setDark = UI((state) => state.setDark)
  const _showNav = UI((state) => state.showNav)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const _page = State((state) => state.page)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  const [showPanel, setShowPanel] = useState(false)
  const [panelState, setPanelState] = useState('')

  return (
    <>
      <nav className='pointer-events-none fixed z-30 flex h-dvh w-screen items-end'>
        <div className='Anim h-20 w-full bg-quaternary-2 px-16 pt-10 dark:bg-primary-0'>
          <motion.div
            initial={aNavChildren.initial}
            exit={aNavChildren.exit}
            animate={aNavChildren.animate}
            transition={aNavChildren.transition(0)}
            className='flex h-6 w-full justify-between'
          >
            <div
              className='pointer-events-auto rotate-90 cursor-pointer stroke-black'
              onClick={() => {
                setPanelState('navigation')
                setShowPanel(panelState === 'navigation' ? !showPanel : true)
                _setNavShowCanvas(false)
              }}
            >
              <Icon.Arrow />
            </div>
            <div
              className='pointer-events-auto cursor-pointer'
              onClick={() => {
                _setNavShowCanvas(!_navShowCanvas)
                setShowPanel(false)
              }}
            >
              {_navShowCanvas ? <Icon.Close /> : <Icon.Home />}
            </div>
            <div
              className='pointer-events-auto cursor-pointer'
              onClick={() => {
                setPanelState('app')
                setShowPanel(panelState === 'app' ? !showPanel : true)
                _setNavShowCanvas(false)
              }}
            >
              <Icon.Menu />
            </div>
          </motion.div>
        </div>
      </nav>
      <div className='pointer-events-none fixed bottom-20 z-50 h-[9.375rem] w-screen bg-gradient-to-t from-white to-white/0 dark:from-[#101010] dark:to-[#101010]/0' />
      <div className='pointer-events-none fixed bottom-14 z-40 h-[1.5625rem] w-screen rounded-b-3xl bg-white shadow-lg shadow-black/50 dark:bg-[#101010]' />
      <div
        className='NSB m-container absolute'
        onClick={() => setShowPanel(false)}
      >
        {/* <div>{children}</div> */}
        {children}
      </div>
      {_showNav && (
        <>
          <div
            className='Anim fixed right-6 top-12 z-90 flex h-16 w-16 items-center rounded-md bg-quaternary-2 p-2 dark:bg-primary-0'
            onClick={() => {
              _setNavShowCanvas(false)
              _setModalAppInfo(true)
              setShowPanel(false)
            }}
          >
            <IceJiLogo dark={!_dark} />
          </div>
        </>
      )}

      {_page !== 'NOT FOUND' && (
        <div className='m-state-page pointer-events-none fixed z-60 flex w-screen'>
          <p className='mx-auto rounded-md bg-black/10 px-3 py-1 text-xs backdrop-blur-lg dark:bg-white/10'>
            {_page}
          </p>
        </div>
      )}
      <div className='fixed bottom-20 right-6 z-60'>
        <Panel
          session={session}
          showPanel={showPanel}
          panelState={panelState}
          _dark={_dark}
          _setDark={_setDark}
          setShowPanel={setShowPanel}
        />
      </div>
    </>
  )
}

export { NavMobile }
