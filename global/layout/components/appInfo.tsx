'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import useOnClickOutside from '@aurora/libs/hooks/useOnClickOutside'
import { UI } from '@global/store'
import { app } from '@global/config/defineConfig'
import MainLogo from '@resources/common/logo/IceJi'
import RealMotionLogo from '@resources/common/logo/RealMotion'
import IceJiTriangleLogo from '@resources/common/logo/IceJiTriangle'
import ArtScapeLogo from '@resources/common/logo/ArtScape'

export default function AppInfo() {
  const _modalAppInfo = UI((state) => state.modalAppInfo)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)
  const _dark = UI((state) => state.dark)

  const OutsideRef = useRef(null)
  useOnClickOutside(OutsideRef, () => _setModalAppInfo(false))

  const transitionConfig = (d: number) => ({
    duration: d,
    ease: [0.6, 0.05, 0.01, 0.9],
  })
  return (
    <>
      <AnimatePresence>
        {_modalAppInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{
              opacity: _modalAppInfo ? 1 : 0,
            }}
            transition={transitionConfig(0.3)}
            className='fixed z-90 flex h-screen w-screen  items-center justify-center bg-black/10 backdrop-blur-md dark:bg-white/10'
          >
            <motion.div
              ref={OutsideRef}
              initial={{ y: '80%', opacity: 0 }}
              exit={{ y: '80%', opacity: 0 }}
              animate={{
                y: _modalAppInfo ? 0 : '80%',
                opacity: _modalAppInfo ? 1 : 0,
              }}
              transition={transitionConfig(0.8)}
              className='flex h-[182px] w-[339px] overflow-hidden rounded-lg bg-white p-2 drop-shadow-xl dark:bg-[#171717] md:h-[500px] md:w-[750px] md:p-4 '
            >
              <div className='flex h-full flex-grow flex-col items-start justify-between p-1 md:p-4'>
                <div className='flex h-9 w-full items-center md:h-[57px]'>
                  <div className='mr-2 h-full w-[38px] rounded-lg bg-primary-0 p-1 md:w-[57px] md:p-2.5'>
                    <MainLogo dark={false} />
                  </div>
                  <div>
                    <h2 className='text-xs font-semibold md:text-xl'>
                      TheIceJi Aurora
                    </h2>
                    <p className='text-2xs font-light md:text-xs'>
                      Ver {app.VERSION} | {app.UPDATE_DATE}
                    </p>
                  </div>
                </div>
                <div className='text-2xs font-light md:text-base'>
                  <p className='font-medium'>Engine:</p>
                  <p className='opacity-60'>
                    Aurora Framework {app.Dependencies.Aurora}
                    <br />
                    React {app.Dependencies.React} | NextJs{' '}
                    {app.Dependencies.NextJs}
                    <br />
                    Copyright&#169;TheIceJI.com <br />
                    All rights reserved
                    <br />
                    <Link
                      href='https://changelog.docs.theiceji.com/'
                      className='cursor-pointer text-2xs font-light opacity-80 hover:opacity-100 md:text-1xs'
                      onClick={() => _setModalAppInfo(false)}
                    >
                      changelog
                    </Link>
                  </p>
                </div>
                <div className='flex h-3 w-[90px] space-x-2 md:h-6 md:w-[180px]'>
                  <Link href='https://realmotion.co/' className='h-full w-full'>
                    <RealMotionLogo darkmode={_dark} />
                  </Link>
                  <Link href='https://theiceji.com/' className='h-full w-full'>
                    <IceJiTriangleLogo darkmode={_dark} />
                  </Link>
                  <Link href='https://artscape.day/' className='h-full w-full'>
                    <ArtScapeLogo darkmode={_dark} />
                  </Link>
                </div>
              </div>
              <div className='h-full w-[150px] overflow-hidden rounded-lg md:w-[415px]'>
                <Image
                  src='/gui/appInfo.jpg'
                  alt='TheIceJi Splash Screen'
                  width={1500}
                  height={3000}
                  placeholder='blur'
                  blurDataURL={
                    'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                  }
                  style={{ objectFit: 'cover' }}
                  className='h-full duration-300 hover:scale-110 hover:duration-150'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
