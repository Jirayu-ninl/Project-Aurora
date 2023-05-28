'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import useOnClickOutside from '@aurora/libs/hooks/useOnClickOutside'
import { UI } from '@app/store'
import { app } from '@app/config/defineConfig'
import MainLogo from '@app/assets/logo/IceJi'
import RealMotionLogo from '@app/assets/logo/RealMotion'
import IceJiTriangleLogo from '@app/assets/logo/IceJiTriangle'
import ArtScapeLogo from '@app/assets/logo/ArtScape'

export default function AppInfo() {
  const _modalAppInfo = UI((state) => state.modalAppInfo)
  const _setModalAppInfo = UI((state) => state.setModalAppInfo)

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
            className='fixed z-90 flex h-screen w-screen  items-center justify-center  bg-white/10 backdrop-blur-md'
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
              className='flex h-[182px] w-[339px] overflow-hidden rounded-lg bg-[#171717] p-4 drop-shadow-xl md:h-[500px] md:w-[750px] '
            >
              <div className='flex h-full flex-grow flex-col items-start justify-between p-2 md:p-4'>
                <div className='flex h-[57px] w-full items-center'>
                  <div className='mr-2 h-full w-[57px] rounded-lg bg-primary-0 p-2.5'>
                    <MainLogo darkmode={false} />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold'>TheIceJi Aurora</h2>
                    <p className='text-xs font-light'>
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
                      href='/changelog'
                      className='cursor-pointer text-2xs font-light opacity-80 hover:opacity-100 md:text-1xs'
                      onClick={() => _setModalAppInfo(false)}
                    >
                      changelog
                    </Link>
                  </p>
                </div>
                <div className='hidden h-6 space-x-2 md:flex'>
                  <RealMotionLogo darkmode={true} />
                  <Link href='https://theiceji.com/' className='h-full w-full'>
                    <IceJiTriangleLogo darkmode={true} />
                  </Link>
                  <Link href='https://artscape.day/' className='h-full w-full'>
                    <ArtScapeLogo darkmode={true} />
                  </Link>
                </div>
              </div>
              <div className='h-full w-[415px] overflow-hidden rounded-lg'>
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
                  className='duration-300 hover:scale-110 hover:duration-150'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
