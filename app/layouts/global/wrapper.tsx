'use client'

import { useEffect, useRef } from 'react'
import { GlobalStyles } from '@aurora/default/theme'
import { getGPUTier } from 'detect-gpu'
import { User, UI } from '@app/store'

// IJN Components
// import Cursor from './components/cursor'
// import { NavBar, NavCanvas } from './nav'
// import Footer from './footer'
import AppInfo from './components/appInfo'
import IJNconsole from './misc/IJNconsole'
import useAudio from './hooks/useAudio'

const AudioUrl = '/audio/WebSound-01.mp3'

type tWrapper = {
  children: React.ReactNode
  showNav?: React.ReactNode
  showFooter?: React.ReactNode
}

const Wrapper = ({ children }: tWrapper) => {
  const _setNotification = User((state) => state.setNotification)
  const _NotificationItems = User((state) => state.notificationItems)
  const _setCart = User((state) => state.setCart)
  const _CartItems = User((state) => state.cartItems)
  const _setGpuTier = UI((state) => state.setGpuTier)

  useEffect(() => {
    async function initGPUdata() {
      const gpuTier = await getGPUTier()
      _setGpuTier(gpuTier)
      console.log({ status: 'set GPU complete', GPUdata: gpuTier })
    }
    initGPUdata()
  }, [_setGpuTier])

  useEffect(() => {
    _setNotification(
      typeof _NotificationItems === 'boolean' ? 0 : _NotificationItems.length,
    )
    _setCart(typeof _CartItems === 'boolean' ? 0 : _CartItems.length)
  }, [_setNotification, _NotificationItems, _setCart, _CartItems])

  const Darkmode = true
  // const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    console.log(IJNconsole)
  }, [])

  const [audio] = useAudio()
  const BGaudio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audio ? BGaudio.current?.play() : BGaudio.current?.pause()
  }, [audio])

  return (
    <>
      <AppInfo />
      {GlobalStyles(Darkmode)}
      {/* {showNav && (
                <>
                    <NavBar
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                        useAudio={useAudio}
                    />
                    <NavCanvas toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                </>
            )} */}
      {children}
      {/* {showFooter && (
                <Footer
                    toggleAbout={_appInfo}
                    setToggleAbout={_setAppInfo}
                    toggleMenu={toggleMenu}
                />
            )} */}
      {/* <Cursor /> */}
      <audio ref={BGaudio} loop id='LayoutIdAudio'>
        <source src={AudioUrl} type='audio/mpeg' />
      </audio>
    </>
  )
}

export default Wrapper
