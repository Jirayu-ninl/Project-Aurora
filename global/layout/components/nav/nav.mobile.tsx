'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { useAudio } from '@aurora/libs/hooks/audio'

import { State, UI } from '@global/store'
import { aNavChildren } from '@global/config/defineAnimationConfig'

import IceJiLogo from '@resources/common/logo/IceJi'
import * as Icon from './assets'
import { Panel } from './components/mobile'

function NavMobile({ children }: { children: React.ReactNode }) {
  const _dark = UI((state) => state.dark)
  const _setDark = UI((state) => state.setDark)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)
  const _page = State((state) => state.page)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

  const [audioPlaying, toggleAudio] = useAudio()
  const audioToggle = () => {
    toggleAudio()
  }

  const [showPanel, setShowPanel] = useState(false)
  const [panelState, setPanelState] = useState('user')

  return (
    <>
      <nav className='h-svh absolute flex w-screen items-end'>
        <div className='Anim h-24 w-full bg-quaternary-2 px-16 pt-14 dark:bg-primary-0'>
          <motion.div
            initial={aNavChildren.initial}
            exit={aNavChildren.exit}
            animate={aNavChildren.animate}
            transition={aNavChildren.transition(0)}
            className='flex h-6 w-full justify-between'
          >
            <div
              className='rotate-90 cursor-pointer stroke-black'
              onClick={() => {
                setPanelState('navigation')
                setShowPanel(panelState === 'navigation' ? !showPanel : true)
                _setNavShowCanvas(false)
              }}
            >
              <Icon.Arrow />
            </div>
            <div
              className='cursor-pointer'
              onClick={() => {
                _setNavShowCanvas(!_navShowCanvas)
                setShowPanel(false)
              }}
            >
              {_navShowCanvas ? <Icon.Close /> : <Icon.Menu />}
            </div>
            <div
              className='cursor-pointer'
              onClick={() => {
                setPanelState('user')
                setShowPanel(panelState === 'user' ? !showPanel : true)
                _setNavShowCanvas(false)
              }}
            >
              <Icon.User />
            </div>
          </motion.div>
        </div>
      </nav>
      <div className='NSB m-container absolute z-50 overflow-y-scroll rounded-b-3xl bg-white shadow-lg shadow-black/50 dark:bg-[#101010]'>
        {children}
      </div>
      <div
        className='Anim absolute right-6 top-6 z-90 flex h-16 w-16 items-center rounded-md bg-quaternary-2 p-2 dark:bg-primary-0'
        onClick={() => {
          _setNavShowCanvas(false)
          _setModalAppInfo(true)
        }}
      >
        <IceJiLogo dark={!_dark} />
      </div>
      <div className='m-state-page pointer-events-none fixed z-60 flex w-screen'>
        <p className='mx-auto rounded-md bg-black/10 px-3 py-1 text-xs backdrop-blur-lg dark:bg-white/10'>
          {_page}
        </p>
      </div>
      <div className='fixed bottom-20 right-6 z-60'>
        <Panel
          showPanel={showPanel}
          panelState={panelState}
          _dark={_dark}
          _setDark={_setDark}
          setShowPanel={setShowPanel}
          audioPlaying={audioPlaying}
          audioToggle={audioToggle}
        />
      </div>
    </>
  )
}

export default NavMobile
