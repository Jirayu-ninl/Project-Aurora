'use client'
import { useEffect, useRef } from 'react'
import { GlobalStyles } from '@aurora/default/theme'
import { getGPUTier } from 'detect-gpu'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { UI } from '@app/store'

// IJN Components
import Cursor from './components/cursor'
import { NavBar /*, NavCanvas */ } from './components/nav'
import Footer from './components/footer'
import AppInfo from './components/appInfo'
import IJNconsole from './misc/IJNconsole'
import useAudio from './hooks/useAudio'

const AudioUrl = '/audio/WebSound-01.mp3'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const _setGpuTier = UI((state) => state.setGpuTier)
  const _setDark = UI((state) => state.setDark)
  const _dark = UI((state) => state.dark)
  const _showNav = UI((state) => state.showNav)
  const _showFooter = UI((state) => state.showFooter)
  const _navShowCanvas = UI((state) => state.navShowCanvas)
  const _setNavShowCanvas = UI((state) => state.setNavShowCanvas)

  useEffect(() => {
    async function initGPUdata() {
      const gpuTier = await getGPUTier()
      _setGpuTier(gpuTier)
      console.log({ status: 'set GPU complete', GPUdata: gpuTier })
    }
    initGPUdata()
  }, [_setGpuTier])

  useEffect(() => {
    console.log(IJNconsole)
  }, [])

  useEffect(() => {
    console.log(IJNconsole)
    function InitState() {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        _setDark(true)
      } else {
        _setDark(false)
      }
    }
    InitState()
  }, [_setDark])

  useEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  const [audio] = useAudio()
  const BGaudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio ? BGaudio.current?.play() : BGaudio.current?.pause()
  }, [audio])

  return (
    <>
      <AppInfo />
      {GlobalStyles(_dark)}
      {_showNav && (
        <>
          <NavBar
            useAudio={useAudio}
            _navShowCanvas={_navShowCanvas}
            _setNavShowCanvas={_setNavShowCanvas}
            _dark={_dark}
          />
          {/* <NavCanvas toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} /> */}
        </>
      )}
      {children}
      {_showFooter && <Footer />}
      <Cursor />
      <audio ref={BGaudio} loop id='LayoutIdAudio'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

export default Wrapper
